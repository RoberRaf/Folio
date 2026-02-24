import type { Page } from '@/../product/sections/book-designer/types'

interface PageThumbnailStripProps {
  pages: Page[]
  selectedPageId: string
  onSelectPage: (pageId: string) => void
  onReorderPage: (pageId: string, direction: 'up' | 'down') => void
  onAddPage: () => void
  onRemovePage: (pageId: string) => void
}

export function PageThumbnailStrip({
  pages,
  selectedPageId,
  onSelectPage,
  onReorderPage,
  onAddPage,
}: PageThumbnailStripProps) {
  return (
    <aside className="flex flex-row lg:flex-col w-full lg:w-48 h-28 lg:h-auto flex-shrink-0 bg-white dark:bg-stone-950 border-b lg:border-b-0 lg:border-r border-stone-200 dark:border-stone-800 overflow-x-auto lg:overflow-x-hidden overflow-y-hidden lg:overflow-y-auto">

      {/* Strip header — desktop only */}
      <div className="hidden lg:flex items-center justify-between px-3 py-2.5 border-b border-stone-200 dark:border-stone-800 flex-shrink-0">
        <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-stone-400 dark:text-stone-500">
          Pages
        </span>
        <span className="text-[10px] font-mono text-stone-400 dark:text-stone-600">
          {pages.length}
        </span>
      </div>

      {/* Thumbnail list */}
      <div className="flex flex-row lg:flex-col gap-2 p-2 lg:flex-1 lg:overflow-y-auto">
        {pages.map((page, index) => (
          <div
            key={page.id}
            onClick={() => onSelectPage(page.id)}
            className={[
              'relative group flex-shrink-0 w-16 lg:w-auto cursor-pointer rounded-lg overflow-hidden transition-all duration-150',
              page.id === selectedPageId
                ? 'ring-2 ring-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.3)]'
                : 'ring-1 ring-stone-300 dark:ring-stone-700 hover:ring-stone-400 dark:hover:ring-stone-500',
            ].join(' ')}
          >
            {/* Thumbnail image area */}
            <div className="aspect-[3/4] bg-stone-200 dark:bg-stone-800">
              {page.photo ? (
                <img
                  src={page.photo.url}
                  alt={`Page ${page.pageNumber}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-stone-400 dark:text-stone-600"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Page number */}
            <div className="absolute bottom-1 left-1 px-1 py-0.5 rounded bg-black/70 backdrop-blur-sm">
              <span className="text-white text-[9px] font-mono leading-none">{page.pageNumber}</span>
            </div>

            {/* Cover badge */}
            {page.pageNumber === 1 && (
              <div className="absolute top-1 left-1 px-1 py-0.5 rounded-sm bg-rose-500">
                <span className="text-white text-[8px] font-semibold uppercase tracking-wide leading-none">Cover</span>
              </div>
            )}

            {/* Reorder controls — desktop hover */}
            <div className="hidden lg:flex absolute right-0.5 top-0.5 flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
              <button
                onClick={(e) => { e.stopPropagation(); onReorderPage(page.id, 'up') }}
                disabled={index === 0}
                className="w-5 h-5 flex items-center justify-center rounded bg-black/75 backdrop-blur-sm text-white hover:bg-rose-600 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onReorderPage(page.id, 'down') }}
                disabled={index === pages.length - 1}
                className="w-5 h-5 flex items-center justify-center rounded bg-black/75 backdrop-blur-sm text-white hover:bg-rose-600 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add page — desktop */}
      <div className="hidden lg:block p-2 flex-shrink-0 border-t border-stone-200 dark:border-stone-800">
        <button
          onClick={onAddPage}
          className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg border border-dashed border-stone-300 dark:border-stone-700 text-stone-400 dark:text-stone-500 hover:border-rose-500 hover:text-rose-400 dark:hover:border-rose-500 dark:hover:text-rose-400 transition-all duration-150 text-xs font-medium"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add page
        </button>
      </div>
    </aside>
  )
}

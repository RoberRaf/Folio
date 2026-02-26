import React from 'react'
import type { BookDesignerProps } from './types'
import { ImageLibrary } from './ImageLibrary'
import { PagePreview } from './PagePreview'
import { PageThumbnailStrip } from './PageThumbnailStrip'

export function BookDesigner({
  book,
  photos,
  suggestedCoverImages,
  selectedPageId,
  onPlacePhoto,
  onRemovePhoto,
  onUploadPhotos,
  onAddPage,
  onRemovePage,
  onReorderPage,
  onChangeTheme,
  onSelectPage,
  onPreviewBook,
}: BookDesignerProps) {
  const selectedPage = book.pages.find(p => p.id === selectedPageId) ?? book.pages[0]
  const filledCount = book.pages.filter(p => p.photo !== null).length
  const totalPages = book.pages.length
  const progress = totalPages > 0 ? Math.round((filledCount / totalPages) * 100) : 0

  function handleDragStart(e: React.DragEvent, photoId: string) {
    e.dataTransfer.setData('text/plain', photoId)
    e.dataTransfer.effectAllowed = 'copy'
  }

  return (
    <div className="h-screen flex flex-col bg-stone-100 dark:bg-stone-950 overflow-hidden">
      <header className="flex-shrink-0 flex items-center gap-3 px-4 sm:px-5 py-3 bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-6 h-6 rounded-md bg-rose-500 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-sm text-stone-400 dark:text-stone-500 hidden sm:block" style={{ fontFamily: "'Playfair Display', serif" }}>Folio</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-stone-200 dark:bg-stone-800" />
        <div className="flex-1 min-w-0">
          <h1 className="text-base font-semibold text-stone-900 dark:text-white truncate" style={{ fontFamily: "'Playfair Display', serif" }}>{book.title}</h1>
        </div>
        <div className="hidden md:flex items-center gap-2.5 flex-shrink-0" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${filledCount} of ${totalPages} pages filled`}>
          <div className="w-24 h-1 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
            <div className="h-full bg-rose-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-xs font-mono text-stone-400 dark:text-stone-500 tabular-nums">{filledCount}/{totalPages}</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-xs font-medium text-stone-500 dark:text-stone-400 capitalize">{book.status}</span>
        </div>
        <button onClick={onPreviewBook} className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500 hover:bg-rose-400 active:bg-rose-600 active:scale-[0.97] text-white text-sm font-semibold transition-all duration-150 hover:shadow-[0_4px_20px_rgba(244,63,94,0.4)] hover:-translate-y-px">
          <span className="hidden sm:inline">Preview Book</span>
          <span className="sm:hidden">Preview</span>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </header>
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <PageThumbnailStrip
          pages={book.pages}
          selectedPageId={selectedPage?.id ?? ''}
          onSelectPage={onSelectPage}
          onReorderPage={onReorderPage}
          onAddPage={onAddPage}
          onRemovePage={onRemovePage}
        />
        {selectedPage && (
          <PagePreview
            page={selectedPage}
            book={book}
            onDrop={(photoId) => onPlacePhoto(selectedPage.id, photoId)}
            onRemovePhoto={onRemovePhoto}
            onChangeTheme={onChangeTheme}
          />
        )}
        <ImageLibrary
          photos={photos}
          suggestedCoverImages={suggestedCoverImages}
          onPhotoClick={(photoId) => onPlacePhoto(selectedPage?.id ?? '', photoId)}
          onSuggestedClick={(suggestedId) => onPlacePhoto(selectedPage?.id ?? '', suggestedId)}
          onDragStart={handleDragStart}
          onUploadPhotos={onUploadPhotos}
        />
      </div>
    </div>
  )
}

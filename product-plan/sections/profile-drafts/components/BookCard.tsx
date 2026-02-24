import type { Book } from '../types'

interface BookCardProps {
  book: Book
  onEdit: () => void
  onRemove: () => void
}

function StatusBadge({ status }: { status: Book['status'] }) {
  if (status === 'ordered') {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 ring-1 ring-rose-200/60 dark:ring-rose-800/40">
        <span className="w-1 h-1 rounded-full bg-rose-400 dark:bg-rose-500" />
        Ordered
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400 ring-1 ring-stone-200/60 dark:ring-stone-700/40">
      <span className="w-1 h-1 rounded-full bg-amber-400" />
      Draft
    </span>
  )
}

function CoverPlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-stone-100 to-stone-50 dark:from-stone-800 dark:to-stone-850 p-4">
      <svg
        className="w-8 h-8 text-stone-300 dark:text-stone-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
      <span
        className="text-[11px] text-stone-400 dark:text-stone-600 font-medium text-center line-clamp-2 leading-snug"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </span>
    </div>
  )
}

export function BookCard({ book, onEdit, onRemove }: BookCardProps) {
  return (
    <div className="group flex flex-col">
      {/* Thumbnail */}
      <div
        className="relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer shadow-sm ring-1 ring-stone-200/80 dark:ring-stone-700/60 transition-all duration-200 hover:shadow-lg hover:shadow-stone-200/60 dark:hover:shadow-stone-900/60 hover:-translate-y-0.5"
        onClick={onEdit}
      >
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        ) : (
          <CoverPlaceholder title={book.title} />
        )}

        {/* Bottom gradient for depth on real covers */}
        {book.coverUrl && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        )}

        {/* Remove button — always visible on mobile, hover-only on md+ */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          aria-label="Remove book"
          className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center bg-white/95 dark:bg-stone-900/90 shadow-sm text-stone-500 dark:text-stone-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-150 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white hover:scale-110 hover:shadow-md"
        >
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Book info */}
      <div className="mt-2.5 px-0.5 space-y-1.5">
        <p className="text-sm font-semibold text-stone-800 dark:text-stone-200 line-clamp-1 leading-snug">
          {book.title}
        </p>
        <div className="flex items-center justify-between gap-1">
          <StatusBadge status={book.status} />
          {book.pageCount > 0 && (
            <span className="text-[11px] text-stone-400 dark:text-stone-500 shrink-0 tabular-nums">
              {book.pageCount}p
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

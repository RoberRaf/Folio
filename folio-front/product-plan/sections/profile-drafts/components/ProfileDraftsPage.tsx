import { useState } from 'react'
import type { ProfileDraftsProps } from '../types'
import { BookCard } from './BookCard'
import { ConfirmDialog } from './ConfirmDialog'

function EmptyState({ onCreateBook }: { onCreateBook?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      {/* Decorative book stack icon */}
      <div className="relative mb-6">
        <div className="absolute -left-3 -top-1 w-12 h-16 rounded-lg bg-pink-100 dark:bg-pink-950/40 rotate-[-8deg] shadow-sm" />
        <div className="absolute -right-2 -top-0.5 w-12 h-16 rounded-lg bg-stone-100 dark:bg-stone-800 rotate-[6deg] shadow-sm" />
        <div className="relative w-14 h-18 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200/60 dark:border-rose-800/40 flex items-center justify-center shadow-md">
          <svg
            className="w-6 h-6 text-rose-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </div>
      </div>

      <h3
        className="text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        No books yet
      </h3>
      <p className="text-sm text-stone-500 dark:text-stone-400 max-w-xs leading-relaxed mb-7">
        Create your first photo book and turn your memories into something you can hold.
      </p>
      <button
        onClick={onCreateBook}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 active:scale-95 text-white text-sm font-semibold shadow-sm hover:shadow-rose-500/30 hover:shadow-lg transition-all"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
        Create your first book
      </button>
    </div>
  )
}

// ─── Avatar with fallback initials ───────────────────────────────────────────
function UserAvatar({ name, avatarUrl }: { name: string; avatarUrl: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="relative shrink-0">
      <img
        src={avatarUrl}
        alt={name}
        className="w-16 h-16 rounded-full object-cover ring-2 ring-rose-200 dark:ring-rose-900/60 shadow-sm"
        onError={(e) => {
          const target = e.currentTarget
          target.style.display = 'none'
          const fallback = target.nextElementSibling as HTMLElement | null
          if (fallback) fallback.style.display = 'flex'
        }}
      />
      <div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 ring-2 ring-rose-200 dark:ring-rose-900/60 shadow-sm items-center justify-center text-white text-lg font-bold hidden"
        style={{ fontFamily: "'Playfair Display', serif" }}
        aria-hidden
      >
        {initials}
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export function ProfileDraftsPage({
  user,
  books,
  onEditBook,
  onRemoveBook,
  onCreateBook,
}: ProfileDraftsProps) {
  const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null)
  const pendingBook = books.find((b) => b.id === pendingRemoveId)

  const handleConfirmRemove = () => {
    if (pendingRemoveId) {
      onRemoveBook?.(pendingRemoveId)
      setPendingRemoveId(null)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">

      {/* ── Profile header ───────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-7 sm:py-8">
          <div className="flex items-center gap-5">
            <UserAvatar name={user.name} avatarUrl={user.avatarUrl} />
            <div className="min-w-0">
              <h1
                className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50 leading-tight truncate"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {user.name}
              </h1>
              <p className="text-sm text-stone-400 dark:text-stone-500 mt-0.5 truncate">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Books section ────────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        {books.length > 0 && (
          <div className="flex items-baseline gap-2 mb-6">
            <h2
              className="text-lg font-semibold text-stone-800 dark:text-stone-200"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              My Books
            </h2>
            <span className="text-sm text-stone-400 dark:text-stone-500 tabular-nums">
              {books.length}
            </span>
          </div>
        )}

        {books.length === 0 ? (
          <EmptyState onCreateBook={onCreateBook} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onEdit={() => onEditBook?.(book.id)}
                onRemove={() => setPendingRemoveId(book.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Confirm dialog ───────────────────────────────────────────────── */}
      {pendingRemoveId && pendingBook && (
        <ConfirmDialog
          title="Remove this book?"
          description={`"${pendingBook.title}" will be permanently removed. This can't be undone.`}
          confirmLabel="Remove"
          onConfirm={handleConfirmRemove}
          onCancel={() => setPendingRemoveId(null)}
        />
      )}
    </div>
  )
}

import { useState } from 'react'
import type { Book, Page } from '../types'

const COVER_THEMES = [
  { id: 'classic-white', label: 'Classic', color: '#fafaf9' },
  { id: 'midnight', label: 'Midnight', color: '#1c1917' },
  { id: 'linen', label: 'Linen', color: '#fef3c7' },
  { id: 'blush', label: 'Blush', color: '#ffe4e6' },
  { id: 'sage', label: 'Sage', color: '#d1fae5' },
]

interface PagePreviewProps {
  page: Page
  book: Book
  onDrop: (photoId: string) => void
  onRemovePhoto: (pageId: string) => void
  onChangeTheme?: (theme: string) => void
}

export function PagePreview({ page, book, onDrop, onRemovePhoto, onChangeTheme }: PagePreviewProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [showThemePicker, setShowThemePicker] = useState(false)

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
    setIsDragOver(true)
  }

  function handleDragLeave(e: React.DragEvent) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false)
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsDragOver(false)
    const photoId = e.dataTransfer.getData('text/plain')
    if (photoId) onDrop(photoId)
  }

  const currentTheme = COVER_THEMES.find(t => t.id === book.theme) ?? COVER_THEMES[0]

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative bg-stone-100 dark:bg-stone-950 overflow-hidden">

      {/* Ambient glow — dark mode only */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-600/0 dark:bg-rose-600/8 blur-[100px] pointer-events-none rounded-full" />

      {/* Page number indicator */}
      <div className="absolute top-4 left-4">
        <span className="text-xs font-mono text-stone-400 dark:text-stone-500 tracking-widest uppercase">
          Page {page.pageNumber}
          {page.pageNumber === 1 && (
            <span className="ml-2 text-rose-400">· Cover</span>
          )}
        </span>
      </div>

      {/* Theme picker — top right */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setShowThemePicker(v => !v)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-stone-900/80 backdrop-blur border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors text-xs font-medium shadow-sm"
        >
          <span
            className="w-3 h-3 rounded-full border border-stone-300 flex-shrink-0"
            style={{ backgroundColor: currentTheme.color }}
          />
          Theme
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showThemePicker && (
          <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl p-2 space-y-0.5">
            {COVER_THEMES.map(theme => (
              <button
                key={theme.id}
                onClick={() => { onChangeTheme?.(theme.id); setShowThemePicker(false) }}
                className={[
                  'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors text-sm',
                  book.theme === theme.id
                    ? 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white'
                    : 'text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800/60',
                ].join(' ')}
              >
                <span
                  className="w-5 h-5 rounded-full border border-stone-300 dark:border-stone-600 flex-shrink-0"
                  style={{ backgroundColor: theme.color }}
                />
                {theme.label}
                {book.theme === theme.id && (
                  <svg className="w-3.5 h-3.5 ml-auto text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* The book page */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={[
          'relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] rounded-2xl overflow-hidden',
          'shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.7)]',
          'transition-all duration-200',
          isDragOver ? 'ring-2 ring-rose-400 shadow-[0_24px_80px_rgba(244,63,94,0.3)] scale-[1.01]' : '',
        ].join(' ')}
        style={{ backgroundColor: currentTheme.color }}
      >
        {page.photo ? (
          <>
            <img
              src={page.photo.url}
              alt={page.photo.name}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            {/* Spine shadow */}
            <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />

            {/* Drag-over replace overlay */}
            {isDragOver && (
              <div className="absolute inset-0 bg-rose-500/20 backdrop-blur-sm flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-white">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm font-semibold">Replace photo</span>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Empty drop zone */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
            <div
              className={[
                'absolute inset-3 rounded-xl border-2 border-dashed transition-colors',
                isDragOver ? 'border-rose-400' : 'border-stone-300/60',
              ].join(' ')}
            />
            <div className={`relative flex flex-col items-center gap-4 transition-transform ${isDragOver ? 'scale-105' : ''}`}>
              <div className={[
                'w-16 h-16 rounded-2xl flex items-center justify-center transition-colors',
                isDragOver ? 'bg-rose-500/15 border border-rose-400/40' : 'bg-stone-100 border border-stone-200',
              ].join(' ')}>
                <svg
                  className={`w-7 h-7 transition-colors ${isDragOver ? 'text-rose-400' : 'text-stone-400'}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <p className={`text-sm font-medium transition-colors ${isDragOver ? 'text-rose-500' : 'text-stone-500'}`}>
                  {isDragOver ? 'Drop to place' : 'No photo yet'}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  Drag or click a photo from the library
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Remove photo action */}
      {page.photo && (
        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => onRemovePhoto(page.id)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 dark:bg-stone-900/80 backdrop-blur border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 hover:text-rose-500 hover:border-rose-300 dark:hover:text-rose-400 dark:hover:border-rose-500/40 transition-all duration-150 text-xs font-medium shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remove photo
          </button>
        </div>
      )}
    </div>
  )
}

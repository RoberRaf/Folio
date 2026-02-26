import React, { useCallback, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip-enhanced';
import type {
    Page as BookPage,
    BookPreviewProps,
    Photo,
} from './types';

/* ═══════════════════════════════════════════════════════════════
   Page Components — each MUST use React.forwardRef so that
   react-pageflip-enhanced can clone-ref them into its renderer
   ═══════════════════════════════════════════════════════════════ */

const FrontCover = React.forwardRef<
  HTMLDivElement,
  { title: string; photo: Photo | null }
>(({ title, photo }, ref) => (
  <div ref={ref}>
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 select-none cursor-grab active:cursor-grabbing">
      {/* Decorative corner accents */}
      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-rose-300/20" />
      <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-rose-300/20" />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-rose-300/20" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-rose-300/20" />

      {/* Cover photo */}
      {photo ? (
        <div className="absolute inset-[6%] bottom-[24%] overflow-hidden rounded-sm">
          <img
            src={photo.url}
            alt={photo.name}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-stone-900/5" />
        </div>
      ) : (
        <div className="absolute inset-[6%] bottom-[24%] bg-stone-800/30 rounded-sm flex items-center justify-center">
          <svg
            className="w-12 h-12 text-stone-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Title block */}
      <div className="absolute bottom-[6%] left-0 right-0 text-center px-[8%]">
        <div className="mx-auto w-8 h-px bg-rose-400/40 mb-2.5" />
        <h2
          className="text-sm sm:text-base md:text-lg font-semibold text-white/85 tracking-wider leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>
      </div>
    </div>
  </div>
))
FrontCover.displayName = 'FrontCover'

const PhotoPage = React.forwardRef<
  HTMLDivElement,
  { page: BookPage; isLeft: boolean }
>(({ page, isLeft }, ref) => (
  <div ref={ref}>
    <div className="w-full h-full relative overflow-hidden bg-white select-none cursor-grab active:cursor-grabbing">
      {page.photo ? (
        <>
          {/* Photo */}
          <div className="absolute inset-[5%] overflow-hidden">
            <img
              src={page.photo.url}
              alt={page.photo.name}
              className="w-full h-full object-cover rounded-[1px]"
              draggable={false}
            />
          </div>

          {/* Caption */}
          <div
            className={`absolute bottom-[2.5%] ${isLeft ? 'left-[5%]' : 'right-[5%]'}`}
          >
            <span
              className="text-[9px] text-stone-400/80 tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {page.photo.name}
            </span>
          </div>
        </>
      ) : (
        /* Empty page */
        <div className="w-full h-full flex items-center justify-center bg-stone-50/80">
          <div className="text-center opacity-40">
            <div className="w-10 h-10 mx-auto mb-2 rounded-full border border-dashed border-stone-300 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-stone-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <span className="text-[10px] text-stone-400">No photo</span>
          </div>
        </div>
      )}

      {/* Page number */}
      <div
        className={`absolute bottom-[2.5%] ${isLeft ? 'right-[5%]' : 'left-[5%]'}`}
      >
        <span
          className="text-[9px] text-stone-300 tabular-nums"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {page.pageNumber}
        </span>
      </div>

      {/* Spine shadow */}
      {isLeft ? (
        <div className="absolute top-0 right-0 bottom-0 w-[3px] bg-gradient-to-l from-black/[0.06] to-transparent pointer-events-none" />
      ) : (
        <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-r from-black/[0.06] to-transparent pointer-events-none" />
      )}
    </div>
  </div>
))
PhotoPage.displayName = 'PhotoPage'

const BackCover = React.forwardRef<HTMLDivElement, { title: string }>(
  ({ title }, ref) => (
    <div ref={ref}>
      <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-stone-900 to-stone-950 select-none cursor-grab active:cursor-grabbing">
        {/* Corner accents */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-rose-300/15" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-rose-300/15" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-rose-300/15" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-rose-300/15" />

        {/* Centered branding */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <div className="w-7 h-7 rounded-md bg-rose-500/20 flex items-center justify-center mb-3">
            <svg
              className="w-3.5 h-3.5 text-rose-400/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p
            className="text-xs text-stone-500 tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </p>
          <div className="mt-2.5 w-8 h-px bg-rose-400/25" />
          <p className="mt-2.5 text-[9px] text-stone-600 tracking-widest uppercase">
            Made with Folio
          </p>
        </div>
      </div>
    </div>
  )
)
BackCover.displayName = 'BackCover'

/* ═══════════════════════════════════════════════════════════════
   Main Book Preview Component
   ═══════════════════════════════════════════════════════════════ */

export function BookPreview({
  book,
  onOrderBook,
  onBackToDesigner,
  onSaveDraft,
}: BookPreviewProps) {
  const flipBookRef = useRef<any>(null)
  const currentPageRef = useRef(0)
  const [, forceRender] = useState(0)

  // Total rendered children: front cover + N pages + back cover
  const totalChildren = book.pages.length + 2

  const handleFlip = useCallback((e: any) => {
    currentPageRef.current = e.data
    forceRender(n => n + 1)
  }, [])

  const flipPrev = useCallback(() => {
    flipBookRef.current?.pageFlip()?.flipPrev()
  }, [])

  const flipNext = useCallback(() => {
    flipBookRef.current?.pageFlip()?.flipNext()
  }, [])

  const currentPage = currentPageRef.current
  const pageLabel =
    currentPage === 0
      ? 'Cover'
      : currentPage >= totalChildren - 1 || currentPage >= totalChildren - 2
        ? 'Back Cover'
        : `Pages ${currentPage}–${currentPage + 1} of ${book.pages.length}`

  const isFirst = currentPage === 0
  const isLast = currentPage >= totalChildren - 2

  return (
    <div className="h-screen flex flex-col bg-stone-100 dark:bg-stone-950 overflow-hidden">
      {/* ── Toolbar ── */}
      <header className="flex-shrink-0 flex items-center justify-between px-3 sm:px-5 h-14 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border-b border-stone-200/80 dark:border-stone-800/80 z-10">
        {/* Left — Back */}
        <button
          onClick={onBackToDesigner}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="hidden sm:inline">Back to Designer</span>
          <span className="sm:hidden">Back</span>
        </button>

        {/* Center — Title */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 text-sm sm:text-base font-semibold text-stone-800 dark:text-stone-200 truncate max-w-[180px] sm:max-w-[280px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {book.title}
        </h1>

        {/* Right — Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onSaveDraft}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-sm"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            Save Draft
          </button>

          <button
            onClick={onOrderBook}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500 hover:bg-rose-400 active:bg-rose-600 text-white text-sm font-semibold transition-all duration-150 hover:shadow-lg hover:shadow-rose-500/25 active:scale-[0.97]"
          >
            <span className="hidden sm:inline">Order This Book</span>
            <span className="sm:hidden">Order</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Book Area ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-4 sm:py-6 relative min-h-0">
        {/* Atmospheric background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-200/60 via-stone-100 to-stone-100 dark:from-stone-800/20 dark:via-stone-950 dark:to-stone-950 pointer-events-none" />

        {/* Book + navigation container */}
        <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6 max-h-full">
          {/* Book with shadow */}
          <div className="relative">
            {/* Floor shadow */}
            <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-6 sm:h-8 bg-black/8 dark:bg-black/25 blur-xl rounded-full" />

            <HTMLFlipBook
              ref={flipBookRef}
              width={350}
              height={500}
              minWidth={150}
              maxWidth={400}
              minHeight={220}
              maxHeight={560}
              showCover={true}
              flippingTime={800}
              drawShadow={true}
              maxShadowOpacity={0.18}
              mobileScrollSupport={true}
              usePortrait={false}
              startPage={0}
              useMouseEvents={true}
              clickEventForward={true}
              swipeDistance={30}
              renderOnlyPageLengthChange={true}
              onFlip={handleFlip}
              className=""
              style={{}}
            >
              {/* Front Cover */}
              <FrontCover title={book.title} photo={book.coverPhoto} />

              {/* Interior Pages */}
              {book.pages.map((page, index) => (
                <PhotoPage
                  key={page.id}
                  page={page}
                  isLeft={index % 2 === 0}
                />
              ))}

              {/* Back Cover */}
              <BackCover title={book.title} />
            </HTMLFlipBook>
          </div>

          {/* Navigation controls */}
          <nav className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={flipPrev}
              disabled={isFirst}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-stone-700 dark:hover:text-stone-200 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150 active:scale-95"
              aria-label="Previous page"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <span
              className="text-xs text-stone-500 dark:text-stone-400 font-medium tracking-wide min-w-[110px] text-center tabular-nums"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {pageLabel}
            </span>

            <button
              onClick={flipNext}
              disabled={isLast}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 hover:text-stone-700 dark:hover:text-stone-200 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-150 active:scale-95"
              aria-label="Next page"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile-only Save Draft button */}
      <div className="sm:hidden flex-shrink-0 px-4 pb-4 relative z-10">
        <button
          onClick={onSaveDraft}
          className="w-full py-2.5 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 border border-stone-200 dark:border-stone-700 text-sm transition-colors"
        >
          Save Draft
        </button>
      </div>
    </div>
  )
}

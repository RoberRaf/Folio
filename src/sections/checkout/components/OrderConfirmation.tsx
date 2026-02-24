import type { Book, OrderConfirmation as ConfirmationType } from '@/../product/sections/checkout/types'
import { useEffect, useState } from 'react'

interface OrderConfirmationProps {
  confirmation: ConfirmationType
  book: Book
  onViewMyBooks?: () => void
}

export function OrderConfirmation({ confirmation, book, onViewMyBooks }: OrderConfirmationProps) {
  const [showCheck, setShowCheck] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [confettiPieces, setConfettiPieces] = useState<
    Array<{ id: number; left: string; delay: string; color: string; size: number; rotation: number }>
  >([])

  useEffect(() => {
    // Generate confetti pieces
    const colors = [
      'bg-rose-400', 'bg-pink-400', 'bg-rose-300', 'bg-pink-300',
      'bg-rose-500', 'bg-stone-300', 'bg-rose-200', 'bg-pink-200',
    ]
    const pieces = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 1.2}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 4,
      rotation: Math.random() * 360,
    }))
    setConfettiPieces(pieces)

    // Stagger animations
    const t1 = setTimeout(() => setShowCheck(true), 300)
    const t2 = setTimeout(() => setShowContent(true), 800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="flex-1 flex items-center justify-center bg-stone-50 dark:bg-stone-900 px-4 py-12 relative overflow-hidden min-h-[600px]">
      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confettiPieces.map((piece) => (
          <div
            key={piece.id}
            className={`absolute top-0 ${piece.color} rounded-sm opacity-0`}
            style={{
              left: piece.left,
              width: piece.size,
              height: piece.size * 1.5,
              transform: `rotate(${piece.rotation}deg)`,
              animation: `confetti-fall 3s ease-in ${piece.delay} forwards`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(calc(100vh + 20px)) rotate(720deg); opacity: 0; }
        }
        @keyframes check-pop {
          0% { transform: scale(0) rotate(-45deg); opacity: 0; }
          60% { transform: scale(1.15) rotate(0deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes fade-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <div className="relative z-10 text-center max-w-sm mx-auto">
        {/* Check circle */}
        <div
          className="mx-auto mb-8 w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 dark:from-rose-500 dark:to-pink-600 flex items-center justify-center shadow-xl shadow-rose-500/30 dark:shadow-rose-900/40"
          style={{
            animation: showCheck ? 'check-pop 0.6s ease-out forwards' : 'none',
            opacity: showCheck ? 1 : 0,
          }}
        >
          <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Content */}
        <div
          style={{
            animation: showContent ? 'fade-up 0.5s ease-out forwards' : 'none',
            opacity: showContent ? 1 : 0,
          }}
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-sm mb-8">
            {confirmation.message}
          </p>

          {/* Order details card */}
          <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-5 text-left mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-16 rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800 shadow-sm ring-1 ring-stone-900/5 dark:ring-white/5 shrink-0">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-serif font-semibold text-stone-900 dark:text-stone-50 truncate">
                  {book.title}
                </p>
                <p className="text-xs text-stone-400 dark:text-stone-500">
                  {book.format} · {book.size}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-500 dark:text-stone-400">Order Number</span>
                <span className="font-mono text-xs font-medium text-stone-900 dark:text-stone-100 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                  {confirmation.orderId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 dark:text-stone-400">Estimated Delivery</span>
                <span className="font-medium text-stone-900 dark:text-stone-100">
                  {confirmation.estimatedDelivery}
                </span>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <button
            onClick={() => onViewMyBooks?.()}
            className="w-full py-3.5 rounded-full font-medium text-sm text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-500 transition-all duration-200 shadow-lg shadow-rose-500/25 dark:shadow-rose-900/40 hover:shadow-xl hover:shadow-rose-500/30"
          >
            View My Books
          </button>

          <p className="mt-4 text-xs text-stone-400 dark:text-stone-500">
            A confirmation email has been sent to your account
          </p>
        </div>
      </div>
    </div>
  )
}

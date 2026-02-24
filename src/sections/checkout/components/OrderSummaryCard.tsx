import type { Book, OrderSummary } from '@/../product/sections/checkout/types'

interface OrderSummaryCardProps {
  book: Book
  orderSummary: OrderSummary
  onQuantityChange?: (quantity: number) => void
}

export function OrderSummaryCard({ book, orderSummary, onQuantityChange }: OrderSummaryCardProps) {
  const subtotal = orderSummary.unitPrice * orderSummary.quantity

  return (
    <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 overflow-hidden">
      {/* Book info row */}
      <div className="flex gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Cover thumbnail */}
        <div className="shrink-0 w-20 sm:w-24 aspect-[2/3] rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800 shadow-md ring-1 ring-stone-900/5 dark:ring-white/5">
          <img
            src={book.coverUrl}
            alt={`Cover of ${book.title}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-50 truncate">
              {book.title}
            </h3>
            <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-500 dark:text-stone-400">
              <span>{book.format}</span>
              <span className="text-stone-300 dark:text-stone-600">·</span>
              <span>{book.size}</span>
              <span className="text-stone-300 dark:text-stone-600">·</span>
              <span>{book.pageCount} pages</span>
            </div>
          </div>

          {/* Quantity & unit price */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider font-medium">
                Qty
              </span>
              <div className="flex items-center border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => onQuantityChange?.(orderSummary.quantity - 1)}
                  disabled={orderSummary.quantity <= 1}
                  className="w-8 h-8 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Decrease quantity"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-stone-900 dark:text-stone-100 border-x border-stone-200 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-800/50">
                  {orderSummary.quantity}
                </span>
                <button
                  onClick={() => onQuantityChange?.(orderSummary.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M12 5v14m-7-7h14" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
              ${orderSummary.unitPrice.toFixed(2)} each
            </p>
          </div>
        </div>
      </div>

      {/* Price breakdown */}
      <div className="border-t border-dashed border-stone-200 dark:border-stone-800 px-4 sm:px-6 py-4 space-y-2">
        <PriceLine label="Subtotal" value={subtotal} />
        <PriceLine label="Shipping" value={orderSummary.shipping} />
        <PriceLine label="Tax" value={orderSummary.tax} />
        <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-baseline justify-between">
          <span className="text-sm font-semibold text-stone-900 dark:text-stone-50">Total</span>
          <span className="text-lg font-serif font-bold text-stone-900 dark:text-stone-50">
            ${(subtotal + orderSummary.shipping + orderSummary.tax).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

function PriceLine({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-baseline justify-between text-sm">
      <span className="text-stone-500 dark:text-stone-400">{label}</span>
      <span className="text-stone-700 dark:text-stone-300">${value.toFixed(2)}</span>
    </div>
  )
}

import { useState } from 'react'
import type { CheckoutProps, ShippingAddress } from '../types'
import { OrderConfirmation } from './OrderConfirmation'
import { OrderSummaryCard } from './OrderSummaryCard'
import { PaymentForm } from './PaymentForm'
import { ShippingAddressForm } from './ShippingAddressForm'

// Typography: Playfair Display (font-serif) for headings, DM Sans for body
// Colors: primary=rose, secondary=pink, neutral=stone

export function CheckoutPage({
  book,
  orderSummary,
  shippingAddress: defaultAddress,
  error,
  confirmation,
  onQuantityChange,
  onShippingAddressChange,
  onPlaceOrder,
  onViewMyBooks,
}: CheckoutProps) {
  const [quantity, setQuantity] = useState(orderSummary.quantity)
  const [address, setAddress] = useState<Partial<ShippingAddress>>(defaultAddress ?? {})
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleQuantityChange = (newQty: number) => {
    const clamped = Math.max(1, Math.min(99, newQty))
    setQuantity(clamped)
    onQuantityChange?.(clamped)
  }

  const handleAddressChange = (field: keyof ShippingAddress, value: string) => {
    const updated = { ...address, [field]: value }
    setAddress(updated)
    if (
      updated.fullName &&
      updated.streetAddress &&
      updated.city &&
      updated.state &&
      updated.postalCode &&
      updated.country
    ) {
      onShippingAddressChange?.(updated as ShippingAddress)
    }
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true)
    try {
      onPlaceOrder?.({ cardNumber, expiry, cvc })
      // Simulate success after a delay for the preview
      setTimeout(() => {
        setIsProcessing(false)
        setShowConfirmation(true)
      }, 1800)
    } catch {
      setIsProcessing(false)
    }
  }

  const isFormValid =
    address.fullName &&
    address.streetAddress &&
    address.city &&
    address.state &&
    address.postalCode &&
    address.country &&
    cardNumber.length >= 15 &&
    expiry.length >= 4 &&
    cvc.length >= 3

  // ─── Confirmation Screen ────────────────────────────────
  if (showConfirmation && confirmation) {
    return (
      <OrderConfirmation
        confirmation={confirmation}
        book={book}
        onViewMyBooks={onViewMyBooks}
      />
    )
  }

  // ─── Checkout Form ──────────────────────────────────────
  return (
    <div className="flex-1 bg-stone-50 dark:bg-stone-900 min-h-0">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-32">
        {/* Page header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 tracking-tight">
            Checkout
          </h1>
          <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
            Review your order and complete payment
          </p>
        </div>

        {/* Order summary */}
        <section className="mb-8">
          <SectionLabel number={1} label="Order Summary" />
          <OrderSummaryCard
            book={book}
            orderSummary={{ ...orderSummary, quantity }}
            onQuantityChange={handleQuantityChange}
          />
        </section>

        {/* Shipping address */}
        <section className="mb-8">
          <SectionLabel number={2} label="Shipping Address" />
          <ShippingAddressForm
            address={address}
            onChange={handleAddressChange}
          />
        </section>

        {/* Payment */}
        <section className="mb-8">
          <SectionLabel number={3} label="Payment" />
          {error && (
            <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 px-4 py-3">
              <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4m0 4h.01" />
              </svg>
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </div>
          )}
          <PaymentForm
            cardNumber={cardNumber}
            expiry={expiry}
            cvc={cvc}
            onCardNumberChange={setCardNumber}
            onExpiryChange={setExpiry}
            onCvcChange={setCvc}
          />
        </section>
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-stone-400 dark:text-stone-500 uppercase tracking-wider font-medium">
              Total
            </p>
            <p className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-50">
              ${(orderSummary.unitPrice * quantity + orderSummary.shipping + orderSummary.tax).toFixed(2)}
            </p>
          </div>
          <button
            onClick={handlePlaceOrder}
            disabled={!isFormValid || isProcessing}
            className="relative px-8 py-3.5 rounded-full font-medium text-sm text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-rose-500/25 dark:shadow-rose-900/40 hover:shadow-xl hover:shadow-rose-500/30"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Processing…
              </span>
            ) : (
              'Place Order'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

/** Small section label with step number */
function SectionLabel({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 text-xs font-bold">
        {number}
      </span>
      <h2 className="font-serif text-lg font-semibold text-stone-800 dark:text-stone-200 tracking-tight">
        {label}
      </h2>
    </div>
  )
}

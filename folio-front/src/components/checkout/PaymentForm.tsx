interface PaymentFormProps {
  cardNumber: string
  expiry: string
  cvc: string
  onCardNumberChange: (value: string) => void
  onExpiryChange: (value: string) => void
  onCvcChange: (value: string) => void
}

export function PaymentForm({
  cardNumber,
  expiry,
  cvc,
  onCardNumberChange,
  onExpiryChange,
  onCvcChange,
}: PaymentFormProps) {
  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 dark:focus:ring-rose-500 transition-shadow'

  const labelClass =
    'block text-xs font-medium text-stone-500 dark:text-stone-400 mb-1.5 uppercase tracking-wider'

  /** Format card number with spaces every 4 digits */
  const handleCardNumber = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 16)
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ')
    onCardNumberChange(formatted)
  }

  /** Format expiry as MM/YY */
  const handleExpiry = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 4)
    if (digits.length >= 3) {
      onExpiryChange(`${digits.slice(0, 2)}/${digits.slice(2)}`)
    } else {
      onExpiryChange(digits)
    }
  }

  /** Only allow digits for CVC */
  const handleCvc = (raw: string) => {
    onCvcChange(raw.replace(/\D/g, '').slice(0, 4))
  }

  /** Detect card brand from first digits */
  const cardBrand = (() => {
    const d = cardNumber.replace(/\s/g, '')
    if (d.startsWith('4')) return 'Visa'
    if (/^5[1-5]/.test(d) || /^2[2-7]/.test(d)) return 'Mastercard'
    if (/^3[47]/.test(d)) return 'Amex'
    if (/^6(?:011|5)/.test(d)) return 'Discover'
    return null
  })()

  return (
    <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-4 sm:p-6">
      <div className="space-y-4">
        {/* Card number */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className={labelClass.replace(' mb-1.5', '')}>Card Number</label>
            {cardBrand && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded-full">
                {cardBrand}
              </span>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={cardNumber}
              onChange={(e) => handleCardNumber(e.target.value)}
              placeholder="4242 4242 4242 4242"
              className={`${inputClass} pl-11`}
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 dark:text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </div>
        </div>

        {/* Expiry / CVC row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Expiry</label>
            <input
              type="text"
              inputMode="numeric"
              value={expiry}
              onChange={(e) => handleExpiry(e.target.value)}
              placeholder="MM/YY"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>CVC</label>
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                value={cvc}
                onChange={(e) => handleCvc(e.target.value)}
                placeholder="123"
                className={`${inputClass} pr-10`}
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 dark:text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Security note */}
        <div className="flex items-center gap-2 pt-1">
          <svg className="w-3.5 h-3.5 text-stone-300 dark:text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p className="text-[11px] text-stone-400 dark:text-stone-500">
            Your payment info is encrypted and secure
          </p>
        </div>
      </div>
    </div>
  )
}

import type { ShippingAddress } from './types'

interface ShippingAddressFormProps {
  address: Partial<ShippingAddress>
  onChange: (field: keyof ShippingAddress, value: string) => void
}

export function ShippingAddressForm({ address, onChange }: ShippingAddressFormProps) {
  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 dark:focus:ring-rose-500 transition-shadow'

  const labelClass =
    'block text-xs font-medium text-stone-500 dark:text-stone-400 mb-1.5 uppercase tracking-wider'

  return (
    <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-4 sm:p-6">
      <div className="space-y-4">
        {/* Full name */}
        <div>
          <label className={labelClass}>Full Name</label>
          <input
            type="text"
            value={address.fullName ?? ''}
            onChange={(e) => onChange('fullName', e.target.value)}
            placeholder="Margaux Bellamy"
            className={inputClass}
          />
        </div>

        {/* Street address */}
        <div>
          <label className={labelClass}>Street Address</label>
          <input
            type="text"
            value={address.streetAddress ?? ''}
            onChange={(e) => onChange('streetAddress', e.target.value)}
            placeholder="742 Lavender Lane"
            className={inputClass}
          />
        </div>

        {/* City / State row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>City</label>
            <input
              type="text"
              value={address.city ?? ''}
              onChange={(e) => onChange('city', e.target.value)}
              placeholder="Asheville"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>State / Province</label>
            <input
              type="text"
              value={address.state ?? ''}
              onChange={(e) => onChange('state', e.target.value)}
              placeholder="NC"
              className={inputClass}
            />
          </div>
        </div>

        {/* Postal / Country row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Postal Code</label>
            <input
              type="text"
              value={address.postalCode ?? ''}
              onChange={(e) => onChange('postalCode', e.target.value)}
              placeholder="28801"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Country</label>
            <input
              type="text"
              value={address.country ?? ''}
              onChange={(e) => onChange('country', e.target.value)}
              placeholder="United States"
              className={inputClass}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

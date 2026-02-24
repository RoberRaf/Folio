import data from '@/../product/sections/checkout/data.json'
import { CheckoutPage } from './components/CheckoutPage'

export default function CheckoutPreview() {
  return (
    <CheckoutPage
      book={data.book}
      orderSummary={data.orderSummary}
      shippingAddress={data.shippingAddress}
      confirmation={data.confirmation as never}
      onQuantityChange={(qty) => console.log('Quantity changed:', qty)}
      onShippingAddressChange={(addr) => console.log('Address updated:', addr)}
      onPlaceOrder={(payment) => console.log('Place order:', payment)}
      onViewMyBooks={() => console.log('Navigate to My Books')}
    />
  )
}

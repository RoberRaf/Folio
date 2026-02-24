# Checkout

## Overview
Single-page order flow: order summary, shipping address, payment, and place order. After successful payment, a celebratory confirmation screen with confetti animation replaces the form.

## Shell
This section uses the application shell (shell: true).

## Components

| Component | Description |
|-----------|-------------|
| `CheckoutPage` | Main checkout form with sections and sticky order button |
| `OrderSummaryCard` | Book info, quantity selector, and price breakdown |
| `ShippingAddressForm` | Standard address form with labeled inputs |
| `PaymentForm` | Card number, expiry, CVC with brand detection |
| `OrderConfirmation` | Success screen with check animation, confetti, order details |

## Props Interface

```typescript
interface CheckoutProps {
  book: Book
  orderSummary: OrderSummary
  shippingAddress?: ShippingAddress
  error?: string
  confirmation?: OrderConfirmation
  onQuantityChange?: (quantity: number) => void
  onShippingAddressChange?: (address: ShippingAddress) => void
  onPlaceOrder?: (payment: { cardNumber: string; expiry: string; cvc: string }) => void
  onViewMyBooks?: () => void
}
```

## User Flows

1. User reviews order summary: cover thumbnail, title, page count, format, price
2. Adjust quantity with +/- controls
3. Fill shipping address form
4. Enter card number (auto-detects brand), expiry, CVC
5. "Place Order" button in sticky bottom bar
6. On success → confirmation screen with confetti, order number, delivery date
7. Payment error → inline alert above card fields
8. "View My Books" CTA on confirmation → navigates to Profile

## Tests

### Visual
- [ ] Order summary shows book cover, title, format details
- [ ] Price breakdown shows subtotal, shipping, tax, total
- [ ] Section labels have numbered badges (1, 2, 3)
- [ ] Card brand badge appears when card number matches known brand
- [ ] Confirmation screen shows check animation and confetti
- [ ] Sticky bottom bar shows total and Place Order button

### Interaction
- [ ] Quantity +/- updates quantity and recalculates prices
- [ ] Quantity minimum is 1
- [ ] Card number auto-formats with spaces every 4 digits
- [ ] Expiry auto-formats as MM/YY
- [ ] CVC accepts only digits
- [ ] Place Order disabled until all fields valid
- [ ] Place Order shows loading spinner while processing
- [ ] Payment error displays inline without clearing form
- [ ] "View My Books" calls onViewMyBooks

### Responsive
- [ ] Single-column layout scrolls naturally on all sizes
- [ ] Sticky bottom bar spans full width on mobile

# Milestone 7: Checkout

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-5 complete (all prior sections)

---

## About This Handoff

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Product requirements and user flow specifications
- Design system tokens (colors, typography)
- Sample data showing the shape of data components expect
- Test specs focused on user-facing behavior

**Your job:**
- Integrate these components into your application
- Wire up callback props to your routing and business logic
- Replace sample data with real data from your backend
- Implement loading, error, and empty states

The components are props-based — they accept data and fire callbacks. How you architect the backend, data layer, and business logic is up to you.

---

## Goal

Implement Checkout — a single-page order flow with order summary, shipping, payment, and a celebratory confirmation screen.

## Overview

Checkout provides the complete purchasing experience. Users review their order (book details, quantity, pricing), enter a shipping address, provide payment information, and place their order. After successful payment, a celebratory confirmation screen with confetti animation replaces the checkout form. This page renders within the app shell.

**Key Functionality:**
- Order summary with book details and quantity adjustment
- Price breakdown (subtotal, shipping, tax, total)
- Shipping address form with standard fields
- Payment form with card number auto-formatting and brand detection
- "Place Order" button in sticky bottom bar
- Post-purchase confirmation with confetti, order number, delivery estimate
- Inline payment error handling

## Components Provided

Copy from `product-plan/sections/checkout/components/`:

- `CheckoutPage` — Main checkout form with sections and sticky order button
- `OrderSummaryCard` — Book info, quantity selector, price breakdown
- `ShippingAddressForm` — Standard address form with labeled inputs
- `PaymentForm` — Card number, expiry, CVC with brand detection
- `OrderConfirmation` — Success screen with check animation, confetti, order details

## Props Reference

**Data props:**

```typescript
interface CheckoutBook {
  id: string
  title: string
  coverUrl: string | null
  pageCount: number
  format: string
  size: string
}

interface OrderSummary {
  unitPrice: number
  quantity: number
  subtotal: number
  shipping: number
  tax: number
  total: number
}

interface ShippingAddress {
  fullName: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

interface OrderConfirmation {
  orderId: string
  orderDate: string
  estimatedDelivery: string
  total: number
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onQuantityChange` | User adjusts quantity (+/- buttons) |
| `onShippingAddressChange` | User updates shipping form fields |
| `onPlaceOrder` | User clicks "Place Order" (with payment data) |
| `onViewMyBooks` | User clicks "View My Books" on confirmation |

## Expected User Flows

### Flow 1: Complete Purchase

1. User reviews order summary (cover, title, format, price)
2. User adjusts quantity if needed
3. User fills in shipping address
4. User enters card number, expiry, CVC
5. User clicks "Place Order"
6. **Outcome:** Confirmation screen with confetti, order #, delivery date

### Flow 2: Payment Error

1. User fills all fields and clicks "Place Order"
2. Payment is declined
3. Inline error message appears above card fields
4. Form data preserved
5. **Outcome:** User corrects card info and retries

### Flow 3: Return to Profile

1. User is on confirmation screen
2. User clicks "View My Books"
3. **Outcome:** Navigation to Profile & Drafts

## Empty States

- **No shipping address:** Form renders with empty, editable fields
- **Pre-filled address:** Fields populated and editable

## Testing

See `product-plan/sections/checkout/tests.md` for comprehensive test specs.

## Files to Reference

- `product-plan/sections/checkout/README.md` — Feature overview
- `product-plan/sections/checkout/tests.md` — UI behavior test specs
- `product-plan/sections/checkout/components/` — React components
- `product-plan/sections/checkout/types.ts` — TypeScript interfaces
- `product-plan/sections/checkout/sample-data.json` — Test data

## Done When

- [ ] Checkout page renders within app shell
- [ ] Order summary shows book cover, title, format, pricing
- [ ] Quantity +/- works (minimum 1)
- [ ] Prices recalculate with quantity changes
- [ ] Shipping address form with validation
- [ ] Card number auto-formats (spaces every 4 digits)
- [ ] Expiry auto-formats as MM/YY
- [ ] Card brand detection from number prefix
- [ ] "Place Order" disabled until all fields valid
- [ ] Loading spinner during processing
- [ ] Confirmation screen with confetti and order details
- [ ] Payment error shows inline message, preserves form data
- [ ] "View My Books" navigates to Profile
- [ ] Sticky bottom bar with total and submit button
- [ ] Responsive and dark mode support

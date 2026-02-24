# Test Specs: Checkout

These test specs are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Checkout is a single-page order flow with order summary, shipping address, payment, and a celebratory confirmation screen after successful payment. Tests cover form validation, payment processing, and the confirmation experience.

---

## User Flow Tests

### Flow 1: Complete a Purchase

**Scenario:** User places an order successfully.

#### Success Path

**Setup:**
- Book data with title, cover, format details
- Order summary with pricing
- All form callbacks provided

**Steps:**
1. User sees order summary with book cover, title, format, and pricing
2. User reviews quantity (default 1)
3. User fills in shipping address (name, address line 1, city, state, zip, country)
4. User enters card number "4242 4242 4242 4242"
5. User enters expiry "12/27"
6. User enters CVC "123"
7. User clicks "Place Order" button

**Expected Results:**
- [ ] `onPlaceOrder` called with payment details
- [ ] "Place Order" button shows loading spinner
- [ ] Button disabled during processing
- [ ] Confirmation screen appears with check animation
- [ ] Confetti animation plays
- [ ] Order number displayed
- [ ] Estimated delivery date shown
- [ ] "View My Books" CTA visible

#### Failure Path: Payment Declined

**Steps:**
1. User fills all fields and clicks "Place Order"
2. Payment is declined

**Expected Results:**
- [ ] Error message appears inline above card fields
- [ ] Error text: "Payment declined. Please try a different card."
- [ ] Form data is preserved (not cleared)
- [ ] Submit button returns to enabled state
- [ ] User can retry with different card info

#### Failure Path: Missing Required Fields

**Steps:**
1. User leaves shipping address fields empty
2. User clicks "Place Order"

**Expected Results:**
- [ ] Form validation prevents submission
- [ ] Empty required fields show error indicators
- [ ] "Place Order" button remains disabled until all fields valid

---

### Flow 2: Adjust Quantity

**Scenario:** User changes the order quantity.

**Steps:**
1. User sees quantity control with current value "1"
2. User clicks "+" to increase to 2
3. Prices recalculate

**Expected Results:**
- [ ] `onQuantityChange` called with new quantity (2)
- [ ] Subtotal updates to reflect quantity × unit price
- [ ] Total recalculates (subtotal + shipping + tax)

**Edge case:**
- [ ] Quantity minimum is 1 — "-" button disabled at 1
- [ ] Clicking "-" at quantity 1 does nothing

---

### Flow 3: View Confirmation and Return

**Scenario:** After successful order, user navigates to their books.

**Steps:**
1. User is on confirmation screen
2. User clicks "View My Books"

**Expected Results:**
- [ ] `onViewMyBooks` callback called
- [ ] User navigates to Profile & Drafts

---

## Empty State Tests

### No Shipping Address Provided

**Setup:** `shippingAddress` is undefined

**Expected Results:**
- [ ] Shipping form renders with empty fields
- [ ] All fields are editable
- [ ] No pre-filled data

### Pre-filled Shipping Address

**Setup:** `shippingAddress` provided with data

**Expected Results:**
- [ ] Fields pre-filled with provided address data
- [ ] Fields remain editable

---

## Component Interaction Tests

### CheckoutPage

**Renders correctly:**
- [ ] Three sections visible: Order Summary, Shipping, Payment
- [ ] Section labels have numbered badges (1, 2, 3)
- [ ] Sticky bottom bar shows total and "Place Order" button

### OrderSummaryCard

**Renders correctly:**
- [ ] Book cover thumbnail image
- [ ] Book title and format details (page count, size)
- [ ] Quantity selector with +/- buttons
- [ ] Price breakdown: subtotal, shipping, tax, total
- [ ] Total is bold/prominent

**User interactions:**
- [ ] "+" calls `onQuantityChange(currentQty + 1)`
- [ ] "-" calls `onQuantityChange(currentQty - 1)` (min 1)
- [ ] "-" disabled when quantity is 1

### ShippingAddressForm

**Renders correctly:**
- [ ] Fields: full name, address line 1, address line 2 (optional), city, state/province, postal code, country
- [ ] Fields have labels and placeholders

**User interactions:**
- [ ] Typing in fields calls `onShippingAddressChange` with updated address
- [ ] Required fields indicated with visual marker

### PaymentForm

**Renders correctly:**
- [ ] Card number field with card brand icon
- [ ] Expiry field (MM/YY format)
- [ ] CVC field

**User interactions:**
- [ ] Card number auto-formats with spaces every 4 digits (e.g., "4242 4242 4242 4242")
- [ ] Expiry auto-formats as MM/YY
- [ ] CVC accepts only digits (3-4 characters)
- [ ] Card brand badge updates based on card number prefix (Visa for 4xxx, MC for 5xxx)

### OrderConfirmation

**Renders correctly:**
- [ ] Large check icon or animation
- [ ] Confetti animation plays
- [ ] "Order Confirmed!" or similar heading
- [ ] Order number displayed
- [ ] Estimated delivery date
- [ ] Order summary recap
- [ ] "View My Books" CTA button

---

## Edge Cases

- [ ] Very long book title in order summary — truncates gracefully
- [ ] Book with no cover image — shows placeholder
- [ ] Maximum quantity limit (if any) — handled gracefully
- [ ] Network error during order placement — shows retry-friendly error
- [ ] User refreshes on confirmation page — handles gracefully
- [ ] Tab/card number input with paste — formats correctly
- [ ] Non-numeric characters in CVC field — rejected

---

## Responsive Tests

- [ ] Single-column layout on all screen sizes
- [ ] Sticky bottom bar spans full width on mobile
- [ ] Form fields are full-width on mobile
- [ ] Confirmation screen centers on all sizes
- [ ] Confetti animation works on mobile

---

## Accessibility Checks

- [ ] All form fields have visible labels
- [ ] Required fields marked with aria-required
- [ ] Error messages associated with fields via aria-describedby
- [ ] Card number auto-formatting doesn't break screen reader experience
- [ ] "Place Order" button has clear accessible name
- [ ] Confirmation screen announced to screen readers
- [ ] Focus moves to confirmation heading after successful order
- [ ] Confetti is decorative (aria-hidden)

---

## Sample Test Data

```typescript
const mockCheckoutBook = {
  id: "book-1",
  title: "Summer Vacation 2025",
  coverUrl: "/covers/summer.jpg",
  pageCount: 12,
  format: "Hardcover",
  size: '8" × 8"'
};

const mockOrderSummary = {
  unitPrice: 39.99,
  quantity: 1,
  subtotal: 39.99,
  shipping: 5.99,
  tax: 3.68,
  total: 49.66
};

const mockShippingAddress = {
  fullName: "Jane Doe",
  addressLine1: "123 Main St",
  addressLine2: "Apt 4B",
  city: "Portland",
  state: "OR",
  postalCode: "97201",
  country: "US"
};

const mockConfirmation = {
  orderId: "FOL-20250712-001",
  orderDate: "2025-07-12",
  estimatedDelivery: "2025-07-22",
  total: 49.66
};

const mockPaymentError = "Payment declined. Please try a different card.";
```

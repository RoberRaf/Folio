# Checkout

## Overview

The Checkout section is a single-page order flow where the user reviews their designed book, enters a shipping address, provides payment details, and places the order. After successful payment, a celebratory confirmation screen is displayed with the order number and estimated delivery date.

## User Flows

- User arrives at checkout from the Book Preview with a selected book
- User reviews the order summary: book cover thumbnail, book title, page count, size/format, quantity selector, and price breakdown
- User fills in shipping address fields
- User enters payment details: card number, expiry date, and CVC
- User taps "Place Order" to submit
- On success, a confirmation screen appears with a check animation, order number, estimated delivery date, and a "View My Books" button
- On payment error, an inline error message is shown above the payment fields

## Design Decisions

- Single scrollable page with numbered sections (1. Order Summary, 2. Shipping Address, 3. Payment)
- Sticky bottom bar with total price and "Place Order" button always visible
- Order summary shows a book cover thumbnail prominently
- Quantity selector is compact: minus/value/plus controls inline
- Card number field auto-detects card brand (Visa, Mastercard, Amex, Discover) and shows it as a badge
- Payment form formats card number with spaces and expiry as MM/YY automatically
- Success confirmation has CSS confetti animation, animated check circle, and order details card
- "Place Order" button is disabled until all form fields are valid

## Data Shapes

**Entities:** Book (checkout view), OrderSummary, ShippingAddress, OrderConfirmation

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `CheckoutPage` — Complete checkout flow with order summary, shipping, payment, and confirmation
- `OrderSummaryCard` — Book info, quantity selector, and price breakdown
- `ShippingAddressForm` — Labeled address input fields
- `PaymentForm` — Card number, expiry, CVC with auto-formatting and card brand detection
- `OrderConfirmation` — Success screen with confetti animation and order details

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onQuantityChange` | User adjusts the quantity |
| `onShippingAddressChange` | Shipping address fields are all filled |
| `onPlaceOrder` | User clicks "Place Order" |
| `onViewMyBooks` | User clicks "View My Books" on the confirmation screen |

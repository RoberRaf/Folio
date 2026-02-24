# Checkout Specification

## Overview
The Checkout section is a single-page order flow where the user reviews their designed book, enters a shipping address, provides payment details, and places the order. After successful payment, a celebratory confirmation screen is displayed with the order number and estimated delivery date.

## User Flows
- User arrives at checkout from the Book Preview with a selected book
- User reviews the order summary: book cover thumbnail, book title, page count, size/format, quantity selector, and price breakdown (subtotal, shipping, tax, total)
- User fills in shipping address fields: full name, street address, city, state/province, postal code, and country
- User enters payment details: card number, expiry date, and CVC
- User taps "Place Order" to submit
- On success, a confirmation screen appears with a check animation, order number, estimated delivery date, and a "View My Books" button that navigates to Profile & Drafts
- On payment error, an inline error message is shown above the payment fields

## UI Requirements
- Single scrollable page layout with distinct sections: Order Summary, Shipping Address, Payment, and a sticky "Place Order" button at the bottom
- Book cover thumbnail displayed prominently at the top of the order summary
- Quantity selector allows adjusting the number of copies (default: 1)
- Price breakdown shows subtotal, shipping fee, tax, and total
- Shipping address is a standard form with labeled input fields and inline validation
- Payment section shows card number, expiry, and CVC fields with inline validation
- "Place Order" button is prominent and shows a loading state while processing
- Success confirmation screen replaces the form with a celebratory animation (confetti/checkmark), order number, estimated delivery date, and a primary "View My Books" CTA button
- Payment error displays an inline alert above the card fields without clearing the form

## Configuration
- shell: true

/** The photo book being ordered */
export interface Book {
  id: string;
  title: string;
  coverUrl: string;
  pageCount: number;
  format: string;
  size: string;
}

/** Price breakdown for the order */
export interface OrderSummary {
  quantity: number;
  unitPrice: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  currency: string;
}

/** Delivery address for the order */
export interface ShippingAddress {
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

/** Credit/debit card details */
export interface PaymentMethod {
  cardBrand: string;
  lastFour: string;
  expiryMonth: number;
  expiryYear: number;
}

export type OrderStatus = "pending" | "confirmed" | "processing" | "shipped" | "delivered";

/** Order confirmation details shown after successful payment */
export interface OrderConfirmation {
  orderId: string;
  status: OrderStatus;
  estimatedDelivery: string;
  message: string;
}

/** Props for the Checkout screen design */
export interface CheckoutProps {
  /** The book being purchased */
  book: Book;

  /** Pricing breakdown */
  orderSummary: OrderSummary;

  /** Pre-filled shipping address (if available) */
  shippingAddress?: ShippingAddress;

  /** Error message to display inline (e.g. card declined) */
  error?: string;

  /** Confirmation details shown after successful order */
  confirmation?: OrderConfirmation;

  /** Called when the user updates the quantity */
  onQuantityChange?: (quantity: number) => void;

  /** Called when the user submits shipping address fields */
  onShippingAddressChange?: (address: ShippingAddress) => void;

  /** Called when the user taps "Place Order" */
  onPlaceOrder?: (payment: { cardNumber: string; expiry: string; cvc: string }) => void;

  /** Called when the user taps "View My Books" on the confirmation screen */
  onViewMyBooks?: () => void;
}

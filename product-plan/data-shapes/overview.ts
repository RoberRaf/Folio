// =============================================================================
// UI Data Shapes — Combined Reference
//
// These types define the data that UI components expect to receive as props.
// They are a frontend contract, not a database schema. How you model, store,
// and fetch this data is an implementation decision.
// =============================================================================

// -----------------------------------------------------------------------------
// From: sections/landing
// -----------------------------------------------------------------------------

export interface HeroData {
  headline: string
  subheadline: string
  ctaLabel: string
  ctaHref: string
  imagePlaceholder: boolean
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  imagePlaceholder: boolean
}

export interface SocialLink {
  platform: string
  href: string
}

export interface FooterData {
  email: string
  socialLinks: SocialLink[]
  copyright: string
}

// -----------------------------------------------------------------------------
// From: sections/authentication
// -----------------------------------------------------------------------------

export type AuthMode = 'signIn' | 'signUp';

export type AuthErrorCode =
  | 'invalid_credentials'
  | 'email_taken'
  | 'weak_password'
  | 'google_cancelled'
  | 'network_error';

export interface AuthError {
  code: AuthErrorCode;
  message: string;
}

// -----------------------------------------------------------------------------
// From: sections/book-designer
// -----------------------------------------------------------------------------

export interface Photo {
  id: string;
  userId: string;
  url: string;
  name: string;
  status: 'uploading' | 'ready';
  uploadProgress: number; // 0–100
}

export interface Page {
  id: string;
  bookId: string;
  pageNumber: number;
  photo: Photo | null;
}

export interface Book {
  id: string;
  userId: string;
  title: string;
  theme: string;
  status: 'draft' | 'ordered';
  pages: Page[];
}

export interface SuggestedImage {
  id: string;
  url: string;
  label: string;
}

// -----------------------------------------------------------------------------
// From: sections/book-preview
// -----------------------------------------------------------------------------

export interface PreviewPhoto {
  id: string;
  url: string;
  name: string;
}

export interface PreviewPage {
  id: string;
  bookId: string;
  pageNumber: number;
  photo: PreviewPhoto | null;
}

export interface PreviewBook {
  id: string;
  userId: string;
  title: string;
  theme: string;
  status: 'draft' | 'ordered';
  coverPhoto: PreviewPhoto | null;
  pages: PreviewPage[];
}

// -----------------------------------------------------------------------------
// From: sections/profile-drafts
// -----------------------------------------------------------------------------

export type BookStatus = "draft" | "ordered";

export interface ProfileUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface DraftBook {
  id: string;
  title: string;
  status: BookStatus;
  /** URL for the book cover thumbnail. Null if no cover has been set yet. */
  coverUrl: string | null;
  pageCount: number;
  lastEditedAt: string;
  /** ISO date string. Present only when status is "ordered". */
  orderedAt?: string;
}

// -----------------------------------------------------------------------------
// From: sections/checkout
// -----------------------------------------------------------------------------

export interface CheckoutBook {
  id: string;
  title: string;
  coverUrl: string;
  pageCount: number;
  format: string;
  size: string;
}

export interface OrderSummary {
  quantity: number;
  unitPrice: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  currency: string;
}

export interface ShippingAddress {
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface PaymentMethod {
  cardBrand: string;
  lastFour: string;
  expiryMonth: number;
  expiryYear: number;
}

export type OrderStatus = "pending" | "confirmed" | "processing" | "shipped" | "delivered";

export interface OrderConfirmation {
  orderId: string;
  status: OrderStatus;
  estimatedDelivery: string;
  message: string;
}

import { useNavigate, useLocation } from 'react-router-dom'
import { CheckoutPage as CheckoutPageComponent } from '@/components/checkout'
import type { Book, OrderSummary } from '@/components/checkout'
import type { PreviewBook } from '@/components/book-preview'
import type { OrderConfirmation } from '@/components/checkout/types'
import sampleData from '../../product-plan/sections/checkout/sample-data.json'

const SAMPLE_BOOK = sampleData.book as Book
const SAMPLE_ORDER_SUMMARY = sampleData.orderSummary as OrderSummary
const SAMPLE_CONFIRMATION = sampleData.confirmation as OrderConfirmation

function toCheckoutBook(previewBook: PreviewBook): Book {
  return {
    id: previewBook.id,
    title: previewBook.title,
    coverUrl: previewBook.coverPhoto?.url ?? '',
    pageCount: previewBook.pages.length,
    format: 'Hardcover',
    size: '8×10 in',
  }
}

function buildOrderSummary(unitPrice = 49.99): OrderSummary {
  const subtotal = unitPrice
  const shipping = 5.99
  const tax = Math.round(subtotal * 0.089 * 100) / 100
  return {
    quantity: 1,
    unitPrice,
    subtotal,
    shipping,
    tax,
    total: subtotal + shipping + tax,
    currency: 'USD',
  }
}

export function CheckoutPage() {
  const navigate = useNavigate()
  const location = useLocation()

  const previewBook: PreviewBook | undefined = location.state?.book
  const book: Book = previewBook ? toCheckoutBook(previewBook) : SAMPLE_BOOK
  const orderSummary: OrderSummary = previewBook ? buildOrderSummary() : SAMPLE_ORDER_SUMMARY

  return (
    <CheckoutPageComponent
      book={book}
      orderSummary={orderSummary}
      confirmation={SAMPLE_CONFIRMATION}
      onViewMyBooks={() => navigate('/profile')}
    />
  )
}

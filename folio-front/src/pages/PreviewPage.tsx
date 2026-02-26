import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BookPreview } from '@/components/book-preview'
import type { PreviewBook } from '@/components/book-preview'
import sampleData from '../../product-plan/sections/book-preview/sample-data.json'

const SAMPLE_BOOK = sampleData.book as PreviewBook

export function PreviewPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSaving, setIsSaving] = useState(false)

  const book: PreviewBook = location.state?.book ?? SAMPLE_BOOK

  function handleOrderBook() {
    navigate('/checkout', { state: { book } })
  }

  function handleBackToDesigner() {
    navigate('/designer')
  }

  async function handleSaveDraft() {
    if (isSaving) return
    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    navigate('/profile')
  }

  return (
    <BookPreview
      book={book}
      onOrderBook={handleOrderBook}
      onBackToDesigner={handleBackToDesigner}
      onSaveDraft={handleSaveDraft}
    />
  )
}

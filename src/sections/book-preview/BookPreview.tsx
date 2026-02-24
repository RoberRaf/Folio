import data from '@/../product/sections/book-preview/data.json'
import type { PreviewBook } from '@/../product/sections/book-preview/types'
import { BookPreview } from './components/BookPreview'

export default function BookPreviewPreview() {
  const book: PreviewBook = {
    id: data.book.id,
    userId: data.book.userId,
    title: data.book.title,
    theme: data.book.theme,
    status: data.book.status as PreviewBook['status'],
    coverPhoto: data.book.coverPhoto,
    pages: data.book.pages.map(p => ({
      id: p.id,
      bookId: p.bookId,
      pageNumber: p.pageNumber,
      photo: p.photo as PreviewBook['pages'][0]['photo'],
    })),
  }

  return (
    <BookPreview
      book={book}
      onOrderBook={() => console.log('Order this book')}
      onBackToDesigner={() => console.log('Back to designer')}
      onSaveDraft={() => console.log('Save draft')}
    />
  )
}

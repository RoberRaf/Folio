import { useState } from 'react'
import data from '@/../product/sections/book-designer/data.json'
import type { Book, Page } from '@/../product/sections/book-designer/types'
import { BookDesigner } from './components/BookDesigner'

export default function BookDesignerPreview() {
  const initialPages: Page[] = data.pages.map(p => ({
    id: p.id,
    bookId: p.bookId,
    pageNumber: p.pageNumber,
    photo: p.photo as Page['photo'],
  }))

  const initialBook: Book = {
    id: data.book.id,
    userId: data.book.userId,
    title: data.book.title,
    theme: data.book.theme,
    status: data.book.status as Book['status'],
    pages: initialPages,
  }

  const [book, setBook] = useState<Book>(initialBook)
  const [selectedPageId, setSelectedPageId] = useState(data.pages[0].id)

  function handlePlacePhoto(pageId: string, photoId: string) {
    const photo =
      data.photos.find(p => p.id === photoId) ??
      data.suggestedCoverImages.find(s => s.id === photoId)
    if (!photo) return

    setBook(prev => ({
      ...prev,
      pages: prev.pages.map(page =>
        page.id === pageId
          ? {
              ...page,
              photo: {
                id: photoId,
                userId: 'user-001',
                url: photo.url,
                name: 'label' in photo ? photo.label : (photo as { name: string }).name,
                status: 'ready' as const,
                uploadProgress: 100,
              },
            }
          : page
      ),
    }))
    console.log('Place photo:', photoId, 'on page:', pageId)
  }

  function handleRemovePhoto(pageId: string) {
    setBook(prev => ({
      ...prev,
      pages: prev.pages.map(page =>
        page.id === pageId ? { ...page, photo: null } : page
      ),
    }))
    console.log('Remove photo from page:', pageId)
  }

  function handleAddPage() {
    const newPage: Page = {
      id: `page-${Date.now()}`,
      bookId: book.id,
      pageNumber: book.pages.length + 1,
      photo: null,
    }
    setBook(prev => ({ ...prev, pages: [...prev.pages, newPage] }))
    console.log('Add page')
  }

  function handleRemovePage(pageId: string) {
    setBook(prev => {
      const remaining = prev.pages
        .filter(p => p.id !== pageId)
        .map((p, i) => ({ ...p, pageNumber: i + 1 }))
      return { ...prev, pages: remaining }
    })
    if (selectedPageId === pageId) {
      setSelectedPageId(book.pages[0]?.id ?? '')
    }
    console.log('Remove page:', pageId)
  }

  function handleReorderPage(pageId: string, direction: 'up' | 'down') {
    setBook(prev => {
      const pages = [...prev.pages]
      const idx = pages.findIndex(p => p.id === pageId)
      const swapIdx = direction === 'up' ? idx - 1 : idx + 1
      if (swapIdx < 0 || swapIdx >= pages.length) return prev
      ;[pages[idx], pages[swapIdx]] = [pages[swapIdx], pages[idx]]
      return {
        ...prev,
        pages: pages.map((p, i) => ({ ...p, pageNumber: i + 1 })),
      }
    })
    console.log('Reorder page:', pageId, direction)
  }

  return (
    <BookDesigner
      book={book}
      photos={data.photos as Parameters<typeof BookDesigner>[0]['photos']}
      suggestedCoverImages={data.suggestedCoverImages}
      selectedPageId={selectedPageId}
      onPlacePhoto={handlePlacePhoto}
      onRemovePhoto={handleRemovePhoto}
      onUploadPhotos={(files) => console.log('Upload photos:', files.map(f => f.name))}
      onAddPage={handleAddPage}
      onRemovePage={handleRemovePage}
      onReorderPage={handleReorderPage}
      onChangeTheme={(theme) => {
        setBook(prev => ({ ...prev, theme }))
        console.log('Change theme:', theme)
      }}
      onSelectPage={setSelectedPageId}
      onPreviewBook={() => console.log('Navigate to Book Preview')}
    />
  )
}

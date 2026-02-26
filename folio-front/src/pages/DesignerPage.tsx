import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookDesigner } from '@/components/book-designer'
import type { Book, Photo, SuggestedImage } from '@/components/book-designer'
import type { PreviewBook } from '@/components/book-preview'

// ---------------------------------------------------------------------------
// Sample data (mirrors product-plan/sections/book-designer/sample-data.json)
// ---------------------------------------------------------------------------

const INITIAL_PHOTOS: Photo[] = [
  { id: 'photo-001', userId: 'user-001', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', name: 'alfama-street.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-002', userId: 'user-001', url: 'https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?w=400', name: 'tram-28.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-003', userId: 'user-001', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', name: 'lisbon-rooftops.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-004', userId: 'user-001', url: 'https://images.unsplash.com/photo-1512850183-6d7990f42385?w=400', name: 'pasteis-de-nata.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-005', userId: 'user-001', url: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400', name: 'belem-tower.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-006', userId: 'user-001', url: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400', name: 'miradouro-view.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-007', userId: 'user-001', url: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=400', name: 'sunset-tagus.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-008', userId: 'user-001', url: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=400', name: 'azulejo-tiles.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-009', userId: 'user-001', url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400', name: 'fado-night.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-010', userId: 'user-001', url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400', name: 'jerónimos-cloister.jpg', status: 'ready', uploadProgress: 100 },
  { id: 'photo-011', userId: 'user-001', url: '', name: 'market-morning.jpg', status: 'uploading', uploadProgress: 62 },
  { id: 'photo-012', userId: 'user-001', url: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400', name: 'castle-walls.jpg', status: 'ready', uploadProgress: 100 },
]

const INITIAL_BOOK: Book = {
  id: 'book-001',
  userId: 'user-001',
  title: 'Summer in Lisbon',
  theme: 'classic-white',
  status: 'draft',
  pages: [
    { id: 'page-001', bookId: 'book-001', pageNumber: 1, photo: INITIAL_PHOTOS[2] }, // lisbon-rooftops
    { id: 'page-002', bookId: 'book-001', pageNumber: 2, photo: INITIAL_PHOTOS[0] }, // alfama-street
    { id: 'page-003', bookId: 'book-001', pageNumber: 3, photo: INITIAL_PHOTOS[1] }, // tram-28
    { id: 'page-004', bookId: 'book-001', pageNumber: 4, photo: null },
    { id: 'page-005', bookId: 'book-001', pageNumber: 5, photo: INITIAL_PHOTOS[4] }, // belem-tower
    { id: 'page-006', bookId: 'book-001', pageNumber: 6, photo: null },
    { id: 'page-007', bookId: 'book-001', pageNumber: 7, photo: INITIAL_PHOTOS[6] }, // sunset-tagus
    { id: 'page-008', bookId: 'book-001', pageNumber: 8, photo: null },
  ],
}

const SUGGESTED_IMAGES: SuggestedImage[] = [
  { id: 'suggested-001', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400', label: 'Golden Horizon' },
  { id: 'suggested-002', url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400', label: 'Open Roads' },
  { id: 'suggested-003', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400', label: 'Coastal Light' },
  { id: 'suggested-004', url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400', label: 'Afternoon Calm' },
  { id: 'suggested-005', url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400', label: 'Wildflower Fields' },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function DesignerPage() {
  const navigate = useNavigate()
  const [book, setBook] = useState<Book>(INITIAL_BOOK)
  const [photos, setPhotos] = useState<Photo[]>(INITIAL_PHOTOS)
  const [selectedPageId, setSelectedPageId] = useState<string>(INITIAL_BOOK.pages[0].id)

  function handleSelectPage(pageId: string) {
    setSelectedPageId(pageId)
  }

  function handlePlacePhoto(pageId: string, photoId: string) {
    // Resolve photo from user library or suggested images
    const userPhoto = photos.find(p => p.id === photoId && p.status === 'ready')
    const suggestedImage = SUGGESTED_IMAGES.find(s => s.id === photoId)

    let photoToPlace: Photo | null = null
    if (userPhoto) {
      photoToPlace = userPhoto
    } else if (suggestedImage) {
      photoToPlace = {
        id: suggestedImage.id,
        userId: 'user-001',
        url: suggestedImage.url,
        name: suggestedImage.label,
        status: 'ready',
        uploadProgress: 100,
      }
    }

    if (!photoToPlace) return

    const photo = photoToPlace
    setBook(prev => ({
      ...prev,
      pages: prev.pages.map(p => p.id === pageId ? { ...p, photo } : p),
    }))
  }

  function handleRemovePhoto(pageId: string) {
    setBook(prev => ({
      ...prev,
      pages: prev.pages.map(p => p.id === pageId ? { ...p, photo: null } : p),
    }))
  }

  function handleAddPage() {
    setBook(prev => ({
      ...prev,
      pages: [
        ...prev.pages,
        {
          id: `page-${Date.now()}`,
          bookId: prev.id,
          pageNumber: prev.pages.length + 1,
          photo: null,
        },
      ],
    }))
  }

  function handleRemovePage(pageId: string) {
    setBook(prev => {
      const filtered = prev.pages.filter(p => p.id !== pageId)
      return {
        ...prev,
        pages: filtered.map((p, i) => ({ ...p, pageNumber: i + 1 })),
      }
    })
    setSelectedPageId(prev => {
      if (prev !== pageId) return prev
      const remaining = book.pages.filter(p => p.id !== pageId)
      return remaining[0]?.id ?? ''
    })
  }

  function handleReorderPage(pageId: string, direction: 'up' | 'down') {
    setBook(prev => {
      const pages = [...prev.pages]
      const index = pages.findIndex(p => p.id === pageId)
      if (direction === 'up' && index > 0) {
        [pages[index - 1], pages[index]] = [pages[index], pages[index - 1]]
      } else if (direction === 'down' && index < pages.length - 1) {
        [pages[index], pages[index + 1]] = [pages[index + 1], pages[index]]
      }
      return { ...prev, pages: pages.map((p, i) => ({ ...p, pageNumber: i + 1 })) }
    })
  }

  function handleChangeTheme(theme: string) {
    setBook(prev => ({ ...prev, theme }))
  }

  function handleUploadPhotos(files: File[]) {
    const newPhotos: Photo[] = files.map((file, i) => ({
      id: `upload-${Date.now()}-${i}`,
      userId: 'user-001',
      url: URL.createObjectURL(file),
      name: file.name,
      status: 'uploading',
      uploadProgress: 0,
    }))

    setPhotos(prev => [...prev, ...newPhotos])

    // Simulate upload progress for each file
    newPhotos.forEach(photo => {
      let progress = 0
      const interval = setInterval(() => {
        progress = Math.min(100, progress + Math.random() * 20 + 5)
        const isDone = progress >= 100
        setPhotos(prev =>
          prev.map(p =>
            p.id === photo.id
              ? { ...p, uploadProgress: Math.round(progress), status: isDone ? 'ready' : 'uploading' }
              : p
          )
        )
        if (isDone) clearInterval(interval)
      }, 200)
    })
  }

  function handlePreviewBook() {
    const previewBook: PreviewBook = {
      id: book.id,
      userId: book.userId,
      title: book.title,
      theme: book.theme,
      status: book.status,
      coverPhoto: book.pages[0]?.photo
        ? { id: book.pages[0].photo.id, url: book.pages[0].photo.url, name: book.pages[0].photo.name }
        : null,
      pages: book.pages.map(p => ({
        id: p.id,
        bookId: p.bookId,
        pageNumber: p.pageNumber,
        photo: p.photo ? { id: p.photo.id, url: p.photo.url, name: p.photo.name } : null,
      })),
    }
    navigate('/preview', { state: { book: previewBook } })
  }

  return (
    <BookDesigner
      book={book}
      photos={photos}
      suggestedCoverImages={SUGGESTED_IMAGES}
      selectedPageId={selectedPageId}
      onSelectPage={handleSelectPage}
      onPlacePhoto={handlePlacePhoto}
      onRemovePhoto={handleRemovePhoto}
      onAddPage={handleAddPage}
      onRemovePage={handleRemovePage}
      onReorderPage={handleReorderPage}
      onChangeTheme={handleChangeTheme}
      onUploadPhotos={handleUploadPhotos}
      onPreviewBook={handlePreviewBook}
    />
  )
}

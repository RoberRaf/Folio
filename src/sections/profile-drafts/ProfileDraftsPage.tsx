import { useState } from 'react'
import data from '@/../product/sections/profile-drafts/data.json'
import type { Book } from '@/../product/sections/profile-drafts/types'
import { ProfileDraftsPage } from './components/ProfileDraftsPage'

export default function ProfileDraftsPreview() {
  const [books, setBooks] = useState<Book[]>(
    data.books.map((b) => ({
      ...b,
      status: b.status as Book['status'],
      coverUrl: b.coverUrl ?? null,
    }))
  )

  return (
    <ProfileDraftsPage
      user={data.user}
      books={books}
      onEditBook={(id) => console.log('Edit book:', id)}
      onRemoveBook={(id) => {
        setBooks((prev) => prev.filter((b) => b.id !== id))
        console.log('Remove book:', id)
      }}
      onCreateBook={() => console.log('Create new book')}
    />
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProfileDraftsPage } from '@/components/profile-drafts'
import type { User, Book } from '@/components/profile-drafts'
import sampleData from '../../product-plan/sections/profile-drafts/sample-data.json'

const MOCK_USER: User = {
  id: 'user-001',
  name: 'Mark Smith',
  email: 'mark@example.com',
  avatarUrl: 'https://i.pravatar.cc/150?u=mark-smith',
}

const INITIAL_BOOKS = sampleData.books as Book[]

export function ProfilePage() {
  const navigate = useNavigate()
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS)

  return (
    <ProfileDraftsPage
      user={MOCK_USER}
      books={books}
      onEditBook={() => navigate('/designer')}
      onRemoveBook={(id) => setBooks(prev => prev.filter(b => b.id !== id))}
      onCreateBook={() => navigate('/designer')}
    />
  )
}

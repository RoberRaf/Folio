export type BookStatus = "draft" | "ordered";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Book {
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

export interface ProfileDraftsProps {
  user: User;
  books: Book[];
  /** Called when the user clicks a book thumbnail to open it in the Book Designer. */
  onEditBook: (bookId: string) => void;
  /** Called when the user confirms deletion of a book via the confirmation dialog. */
  onRemoveBook: (bookId: string) => void;
  /** Called when the user clicks the "Create your first book" CTA in the empty state. */
  onCreateBook: () => void;
}

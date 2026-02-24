export interface Photo {
  id: string;
  url: string;
  name: string;
}

export interface Page {
  id: string;
  bookId: string;
  pageNumber: number;
  photo: Photo | null;
}

export interface PreviewBook {
  id: string;
  userId: string;
  title: string;
  theme: string;
  status: 'draft' | 'ordered';
  coverPhoto: Photo | null;
  pages: Page[];
}

export interface BookPreviewProps {
  /** The book being previewed, including cover info and all pages */
  book: PreviewBook;

  /** Navigate to the Checkout section to place an order */
  onOrderBook?: () => void;

  /** Return to the Book Designer to make changes */
  onBackToDesigner?: () => void;

  /** Save the current book as a draft and navigate away */
  onSaveDraft?: () => void;
}

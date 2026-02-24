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

export interface BookDesignerProps {
  // Data
  book: Book;
  photos: Photo[];
  suggestedCoverImages: SuggestedImage[];
  selectedPageId: string;

  // Callbacks
  onPlacePhoto: (pageId: string, photoId: string) => void;
  onRemovePhoto: (pageId: string) => void;
  onUploadPhotos: (files: File[]) => void;
  onAddPage: () => void;
  onRemovePage: (pageId: string) => void;
  onReorderPage: (pageId: string, direction: 'up' | 'down') => void;
  onChangeTheme: (theme: string) => void;
  onSelectPage: (pageId: string) => void;
  onPreviewBook: () => void;
}

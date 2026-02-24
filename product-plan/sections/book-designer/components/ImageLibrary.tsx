import { useRef, useState } from 'react'
import type { Photo, SuggestedImage } from '../types'

interface ImageLibraryProps {
  photos: Photo[]
  suggestedCoverImages: SuggestedImage[]
  onPhotoClick: (photoId: string) => void
  onSuggestedClick: (suggestedId: string) => void
  onDragStart: (e: React.DragEvent, photoId: string) => void
  onUploadPhotos?: (files: File[]) => void
}

export function ImageLibrary({
  photos,
  suggestedCoverImages,
  onPhotoClick,
  onSuggestedClick,
  onDragStart,
  onUploadPhotos,
}: ImageLibraryProps) {
  const [activeTab, setActiveTab] = useState<'my-photos' | 'suggested'>('my-photos')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const isUploading = photos.some(p => p.status === 'uploading')

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (files && files.length > 0) {
      onUploadPhotos?.(Array.from(files))
      e.target.value = ''
    }
  }

  return (
    <aside className="flex flex-col w-full lg:w-72 xl:w-80 flex-shrink-0 bg-white dark:bg-stone-950 border-t lg:border-t-0 lg:border-l border-stone-200 dark:border-stone-800">

      {/* Tab bar */}
      <div className="flex items-center border-b border-stone-200 dark:border-stone-800 flex-shrink-0">
        {(['my-photos', 'suggested'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={[
              'flex-1 py-3 text-xs font-medium tracking-wide transition-all duration-150',
              activeTab === tab
                ? 'text-stone-900 dark:text-white border-b-2 border-rose-500'
                : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 border-b-2 border-transparent',
            ].join(' ')}
          >
            {tab === 'my-photos' ? 'My Photos' : 'Suggested'}
          </button>
        ))}
      </div>

      {/* Panel body */}
      <div className={`flex-1 flex flex-col overflow-hidden ${isUploading && activeTab === 'my-photos' ? 'pointer-events-none select-none' : ''}`}>

        {activeTab === 'my-photos' && (
          <>
            {/* Upload row */}
            <div className="px-3 py-2.5 border-b border-stone-200 dark:border-stone-800 flex-shrink-0 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-stone-400 dark:text-stone-500">
                {photos.length} photos
              </span>
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500 hover:bg-rose-400 active:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
                Upload
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Uploading banner */}
            {isUploading && (
              <div className="flex items-center gap-2 px-4 py-2.5 bg-rose-50 dark:bg-rose-500/10 border-b border-rose-100 dark:border-rose-500/20 flex-shrink-0">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-rose-400 border-t-transparent animate-spin flex-shrink-0" />
                <span className="text-xs text-rose-600 dark:text-rose-400">Uploading photos…</span>
              </div>
            )}

            {/* Photo grid */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-3 gap-1 p-2">
                {photos.map(photo => (
                  <div
                    key={photo.id}
                    draggable={photo.status === 'ready'}
                    onDragStart={photo.status === 'ready' ? (e) => onDragStart(e, photo.id) : undefined}
                    onClick={photo.status === 'ready' ? () => onPhotoClick(photo.id) : undefined}
                    className={[
                      'relative aspect-square rounded-md overflow-hidden group',
                      'bg-stone-200 dark:bg-stone-800',
                      photo.status === 'ready'
                        ? 'cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-rose-400 transition-all duration-100'
                        : 'cursor-not-allowed opacity-75',
                    ].join(' ')}
                  >
                    {photo.status === 'ready' && photo.url ? (
                      <>
                        <img
                          src={photo.url}
                          alt={photo.name}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-rose-500/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : photo.status === 'uploading' ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-2">
                        <div className="w-5 h-5 rounded-full border-2 border-rose-400 border-t-transparent animate-spin" />
                        <div className="w-full">
                          <div className="h-0.5 rounded-full bg-stone-300 dark:bg-stone-700 overflow-hidden">
                            <div
                              className="h-full bg-rose-400 rounded-full transition-all duration-500"
                              style={{ width: `${photo.uploadProgress}%` }}
                            />
                          </div>
                          <span className="text-[9px] text-stone-400 font-mono mt-0.5 block text-center">
                            {photo.uploadProgress}%
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}

                {photos.length === 0 && (
                  <div className="col-span-3 flex flex-col items-center gap-3 py-10 text-center">
                    <svg className="w-8 h-8 text-stone-300 dark:text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs text-stone-400">No photos yet</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {activeTab === 'suggested' && (
          <>
            <div className="px-3 py-2.5 border-b border-stone-200 dark:border-stone-800 flex-shrink-0">
              <p className="text-[10px] font-mono tracking-[0.16em] uppercase text-stone-400 dark:text-stone-500">
                Curated for your cover
              </p>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-2 gap-2 p-3">
                {suggestedCoverImages.map(img => (
                  <div
                    key={img.id}
                    draggable
                    onDragStart={(e) => onDragStart(e, img.id)}
                    onClick={() => onSuggestedClick(img.id)}
                    className="relative group cursor-grab active:cursor-grabbing rounded-lg overflow-hidden hover:ring-2 hover:ring-rose-400 transition-all duration-100"
                  >
                    <div className="aspect-[3/4]">
                      <img
                        src={img.url}
                        alt={img.label}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-2">
                      <span className="text-white text-[10px] font-medium leading-none">{img.label}</span>
                    </div>
                    <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/10 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}

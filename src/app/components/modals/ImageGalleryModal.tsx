// app/components/modals/ImageGalleryModal.tsx
'use client';

import React, { useState, useCallback } from 'react';

interface ImageGalleryModalProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
}

export default function ImageGalleryModal({ 
  images, 
  initialIndex, 
  isOpen, 
  onClose, 
  propertyTitle 
}: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  // Reset index when modal opens with new initialIndex
  React.useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  }, [images.length]);

  // Handle keyboard navigation
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToPrevious, goToNext, onClose]);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: false }));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:text-orange-500 transition-colors p-2 bg-black/50 rounded-full"
        aria-label="Close gallery"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 md:left-4 z-10 text-white hover:text-orange-500 transition-colors p-2 md:p-3 bg-black/50 rounded-full"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 md:right-4 z-10 text-white hover:text-orange-500 transition-colors p-2 md:p-3 bg-black/50 rounded-full"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Image Counter */}
      <div className="absolute top-4 left-4 z-10 text-white text-sm md:text-base bg-black/50 px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Property Title */}
      <div className="absolute top-16 md:top-4 left-1/2 transform -translate-x-1/2 z-10 text-white text-sm md:text-base font-medium max-w-md text-center truncate bg-black/50 px-4 py-2 rounded-full">
        {propertyTitle}
      </div>

      {/* Main Image Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center px-12 md:px-20 py-24 md:py-32"
        onClick={(e) => e.stopPropagation()}
      >
        {!loadedImages[currentIndex] && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-lg">Loading image...</div>
          </div>
        )}
        <img
          src={images[currentIndex]}
          alt={`${propertyTitle} - Image ${currentIndex + 1}`}
          className={`max-w-full max-h-full w-auto h-auto object-contain transition-opacity duration-300 ${
            loadedImages[currentIndex] ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            maxHeight: 'calc(100vh - 200px)',
            maxWidth: 'calc(100vw - 100px)'
          }}
          onLoad={() => handleImageLoad(currentIndex)}
          onError={() => handleImageError(currentIndex)}
        />
      </div>

      {/* Thumbnail Strip (Desktop) */}
      {images.length > 1 && (
        <div className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 max-w-[90vw]">
          <div className="flex gap-2 bg-black/70 p-2 rounded-lg overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden border-2 transition-all ${
                  index === currentIndex ? 'border-orange-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x300/e5e7eb/6b7280?text=Image';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Thumbnail Dots (Mobile) */}
      {images.length > 1 && images.length <= 10 && (
        <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-orange-500 w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
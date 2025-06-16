'use client';

import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Photo {
  id: number;
  image_url: string;
  title: string;
  description: string | null;
  category: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

interface PhotoPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: Photo | null;
  photos: Photo[];
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function PhotoPreview({ isOpen, onClose, currentPhoto, photos, onNavigate }: PhotoPreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsLoading(true);
  }, [currentPhoto?.id]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="relative h-full w-full flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
          >
            <X size={24} />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Image
                src={currentPhoto.image_url}
                alt={currentPhoto.title}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh]"
                onLoadingComplete={() => setIsLoading(false)}
                priority
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </motion.div>
          </div>

          {/* Photo info */}
          <div className="absolute bottom-4 left-4 right-4 text-white text-center">
            <h3 className="text-lg font-semibold">{currentPhoto.title}</h3>
            {currentPhoto.description && (
              <p className="text-sm text-gray-300 mt-1">{currentPhoto.description}</p>
            )}
            {currentPhoto.category && (
              <p className="text-sm text-gray-300 mt-1">{currentPhoto.category}</p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 
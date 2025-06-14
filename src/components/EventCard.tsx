"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import GalleryModal from "./GalleryModal";

type EventCardProps = {
  title: string;
  image: string;
  description: string;
  Gallery?: string[];
};

export const EventCard: React.FC<EventCardProps> = ({
  title,
  image,
  description,
  Gallery = [],
}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleGalleryClick = () => {
    setIsGalleryOpen(true);
    setCurrentImageIndex(0);
  };

  const handleCloseGallery = () => {
    setIsGalleryOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < Gallery.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
      >
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Optional Gallery Button */}
          {Gallery && Gallery.length > 0 && (
            <div className="mt-4">
              <button
                onClick={handleGalleryClick}
                className="text-sm text-sky-600 hover:underline font-medium transition-colors"
              >
                View Gallery ({Gallery.length} photos) →
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        images={Gallery}
        currentIndex={currentImageIndex}
        onClose={handleCloseGallery}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        title={title}
      />
    </>
  );
};

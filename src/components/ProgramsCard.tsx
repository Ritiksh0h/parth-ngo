"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import GalleryModal from "./GalleryModal";

type ServiceCardProps = {
  category: string;
  categoryColor: string;
  gradientFrom: string;
  gradientTo: string;
  title: string;
  description: string;
  actionText: string;
  image?: string;
  href?: string; // For navigation to subpages
  Gallery?: string[]; // For gallery functionality
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  category,
  categoryColor,
  gradientFrom,
  gradientTo,
  title,
  description,
  actionText,
  image,
  href,
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

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      <div
        className={`h-48 bg-gradient-to-r ${gradientFrom} ${gradientTo} relative`}
      >
        {image && (
          <Image
            src={image || "/placeholder.svg"}
            alt={category}
            fill
            className="absolute inset-0 object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
        <div
          className={`absolute top-4 left-4 ${categoryColor} px-3 py-1 rounded-full text-sm font-medium`}
        >
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
        <p className="text-sm mb-4 text-gray-800">{description}</p>
        <div className="flex items-center text-sm text-blue-800">
          <span>{actionText}</span>
          <ChevronRightIcon className="w-4 h-4 ml-1" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* If href is provided, wrap in Link. If Gallery is provided, handle gallery click */}
      {href ? (
        <Link href={href}>{cardContent}</Link>
      ) : Gallery && Gallery.length > 0 ? (
        <div onClick={handleGalleryClick}>{cardContent}</div>
      ) : (
        cardContent
      )}

      {/* Gallery Modal */}
      {Gallery && Gallery.length > 0 && (
        <GalleryModal
          isOpen={isGalleryOpen}
          images={Gallery}
          currentIndex={currentImageIndex}
          onClose={handleCloseGallery}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
          title={title}
        />
      )}
    </>
  );
};

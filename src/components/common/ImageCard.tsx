"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function ImageCard({ src, alt, title, description }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="w-100 h-100"
    >
      <div 
        className="position-relative w-100 rounded overflow-hidden shadow-sm"
        style={{ aspectRatio: '1/1' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-fit-cover"
        />
      </div>
      <div>
        <h3 className="text-truncate">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

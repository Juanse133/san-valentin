import React, { useState } from "react";
import "./Gallery.css";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const images: GalleryImage[] = [
    { id: 1, src: `${process.env.PUBLIC_URL}/img/foto1.JPG`, alt: "Nosotros" },
    { id: 2, src: `${process.env.PUBLIC_URL}/img/foto2.JPG`, alt: "Nosotros" },
    { id: 3, src: `${process.env.PUBLIC_URL}/img/foto3.JPG`, alt: "Nosotros" },
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-img"
            onClick={() => setSelectedImage(image.id)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img
              src={images.find((img) => img.id === selectedImage)?.src}
              alt="Ampliado"
            />
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

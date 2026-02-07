import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";

/* ================= AUTO IMPORT IMAGES ================= */
const images = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

const galleryImages = Object.values(images).map((img) => img.default);

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [slideshow, setSlideshow] = useState(false);

  const containerRef = useRef(null);

  /* ================= SLIDESHOW ================= */
  useEffect(() => {
    if (!slideshow || lightbox === null) return;

    const interval = setInterval(() => {
      setLightbox((prev) => (prev + 1) % galleryImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slideshow, lightbox]);

  /* ================= KEYBOARD ================= */
  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return;

      if (e.key === "ArrowRight")
        setLightbox((prev) => (prev + 1) % galleryImages.length);

      if (e.key === "ArrowLeft")
        setLightbox(
          (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
        );

      if (e.key === "Escape") setLightbox(null);

      if (e.key === " ") setSlideshow((s) => !s);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  /* ================= SWIPE ================= */
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const handleTouchEnd = (e) => {
    if (lightbox === null) return;

    const diff = touchStart - e.changedTouches[0].clientX;

    if (diff > 50)
      setLightbox((prev) => (prev + 1) % galleryImages.length);

    if (diff < -50)
      setLightbox(
        (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
      );
  };

  /* ================= ZOOM ================= */
  const handleWheel = (e) => {
    e.preventDefault();
    setZoom((z) => Math.min(3, Math.max(1, z - e.deltaY * 0.001)));
  };

  /* ================= PARALLAX ================= */
  const handleMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    if (containerRef.current)
      containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <>
      <Helmet>
        <title>School Gallery | Ambition Academy</title>
        <meta name="description" content="Explore photo gallery of Ambition Academy showcasing events, activities, achievements, and school life." />
      </Helmet>
      <div className="w-full px-4 md:px-10 lg:px-14 py-14">

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Gallery
        </h1>

        {/* ================= MASONRY ================= */}
        <div
          ref={containerRef}
          onMouseMove={handleMove}
          className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4 transition-transform duration-300"
        >
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md cursor-pointer group"
              onClick={() => {
                setLightbox(i);
                setZoom(1);
              }}
            >
              <img
                src={src}
                loading={i < 6 ? "eager" : "lazy"}
                alt="gallery"
                className="w-full h-auto object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                style={{
                  filter: i > 6 ? "blur(6px)" : "none",
                  transition: "filter .4s ease",
                }}
                onLoad={(e) => (e.target.style.filter = "blur(0px)")}
              />
            </div>
          ))}
        </div>

        {/* ================= LIGHTBOX ================= */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-9999"
            onClick={() => setLightbox(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={galleryImages[lightbox]}
              onWheel={handleWheel}
              style={{ transform: `scale(${zoom})` }}
              className="max-w-[95%] max-h-[90%] object-contain rounded-lg shadow-2xl transition-transform duration-200"
              alt="preview"
            />

            {/* CLOSE */}
            <button
              className="absolute top-6 right-6 text-white text-4xl font-bold cursor-pointer z-10000"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
            >
              ✕
            </button>

            {/* PREV */}
            <button
              className="absolute left-6 text-white text-4xl cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(
                  (lightbox - 1 + galleryImages.length) % galleryImages.length
                );
              }}
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              className="absolute right-6 text-white text-4xl cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((lightbox + 1) % galleryImages.length);
              }}
            >
              ›
            </button>

            {/* SLIDESHOW BUTTON */}
            <button
              className="absolute bottom-6 text-white bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setSlideshow((s) => !s);
              }}
            >
              {slideshow ? "Pause Slideshow" : "Start Slideshow"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

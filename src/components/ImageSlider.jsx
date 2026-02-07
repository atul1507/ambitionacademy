import { useEffect, useState } from "react";

/* AUTO IMPORT IMAGES */
const images = import.meta.glob("../assets/slider/*.{jpg,jpeg,png,webp}", {
  eager: true,
});
const slides = Object.values(images).map((img) => img.default);

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  /* Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* Swipe */
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const onTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) setIndex((prev) => (prev + 1) % slides.length);
    if (diff < -50)
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full mt-12 flex flex-col items-center">

      {/* SLIDER */}
      <div
        className="relative w-full max-w-6xl h-55 md:h-105 flex items-center justify-center overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((img, i) => {
          const position = (i - index + slides.length) % slides.length;

          let transform = "";
          let z = "z-0";
          let opacity = "opacity-0";
          let scale = "scale-75";

          if (position === 0) {
            transform = "translate-x-0";
            z = "z-30";
            opacity = "opacity-100";
            scale = "scale-100";
          } else if (position === 1) {
            transform = "translate-x-[40%]";
            z = "z-20";
            opacity = "opacity-90";
            scale = "scale-95";
          } else if (position === 2) {
            transform = "translate-x-[75%]";
            z = "z-10";
            opacity = "opacity-60";
            scale = "scale-90";
          } else if (position === slides.length - 1) {
            transform = "-translate-x-[40%]";
            z = "z-20";
            opacity = "opacity-90";
            scale = "scale-95";
          } else if (position === slides.length - 2) {
            transform = "-translate-x-[75%]";
            z = "z-10";
            opacity = "opacity-60";
            scale = "scale-90";
          }

          return (
            <img
              key={i}
              src={img}
              loading="lazy"
              alt="slide"
              className={`absolute w-[78%] md:w-[60%] h-full object-cover rounded-xl shadow-xl transition-all duration-700 ease-in-out ${transform} ${z} ${opacity} ${scale}`}
            />
          );
        })}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="px-5 py-2 bg-black/70 text-white rounded-lg hover:bg-black cursor-pointer"
        >
          ◀ Prev
        </button>

        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="px-5 py-2 bg-black/70 text-white rounded-lg hover:bg-black cursor-pointer"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}

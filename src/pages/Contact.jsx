import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef(null);

  /* Scroll reveal with stagger */
  useEffect(() => {
    const items = document.querySelectorAll(".reveal-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, i * 120);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Ambition Academy</title>
        <meta name="description" content="Contact Ambition Academy, Varanasi. Get phone number, email, address, and location map for school enquiries." />
      </Helmet>
      <section className="w-full px-4 md:px-10 lg:px-14 py-14">
        <div className="max-w-6xl mx-auto">

          {/* ===== Heading ===== */}
          <div className="flex items-center gap-4 mb-10 reveal-item">
            <div className="flex-1 h-0.5 bg-gray-400" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">
              CONTACT AMBITION ACADEMY
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          {/* ===== GRID ===== */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* ================= CONTACT CARD ================= */}
            <div className="reveal-item relative group rounded-2xl p-6 md:p-10 bg-[#F3E7B3]/80 backdrop-blur-md shadow-xl border border-white/40 overflow-hidden transition duration-500 hover:scale-[1.02]">

              {/* Glass shimmer */}
              <div className="absolute inset-0 shimmer pointer-events-none" />

              <h2 className="text-lg md:text-xl font-bold text-center mb-6">
                Ambition Academy
              </h2>

              <div className="space-y-5 text-sm md:text-base">

                {/* Address */}
                <div className="flex gap-3">
                  <MapPin className="text-red-600 animate-pulse mt-1" />
                  <p>
                    <strong>Address :</strong><br />
                    Narpatpur, Dubkiya, Chaubeypur,<br />
                    Varanasi, Uttar Pradesh – 221104
                  </p>
                </div>

                {/* Phone */}
                <div className="flex gap-3 items-center">
                  <Phone className="text-green-600 animate-bounce" />
                  <p>
                    <strong>Phone :</strong>{" "}
                    <a
                      href="tel:05426444505"
                      className="text-blue-700 hover:underline cursor-pointer"
                    >
                      05426444505
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail className="text-yellow-700 animate-pulse mt-1" />
                  <p>
                    <strong>Email :</strong><br />
                    <a
                      href="mailto:info@ambitionacademy.in"
                      className="text-blue-700 hover:underline cursor-pointer"
                    >
                      info@ambitionacademy.in
                    </a>
                    <br />
                    <a
                      href="mailto:contact@ambitionacademy.in"
                      className="text-blue-700 hover:underline cursor-pointer"
                    >
                      contact@ambitionacademy.in
                    </a>
                  </p>
                </div>

                {/* Website */}
                <div className="flex gap-3 items-center">
                  <Globe className="text-indigo-600 animate-spin-slow" />
                  <p>
                    <strong>Website :</strong>{" "}
                    <a
                      href="https://www.ambitionacademy.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline cursor-pointer"
                    >
                      www.ambitionacademy.in
                    </a>
                  </p>
                </div>

              </div>

              {/* ===== SOCIAL MEDIA ===== */}
              <div className="flex justify-center gap-6 mt-8">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/ambitionacademy.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn bg-blue-600 hover:bg-blue-700"
                >
                  <Facebook size={18} />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn bg-pink-600 hover:bg-pink-700"
                >
                  <Instagram size={18} />
                </a>

                {/* X (Twitter) */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn bg-black hover:bg-gray-900"
                >
                  <Twitter size={18} />
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn bg-red-600 hover:bg-red-700"
                >
                  <Youtube size={18} />
                </a>

              </div>

            </div>

            {/* ================= GOOGLE MAP ================= */}
            <div className="reveal-item relative rounded-2xl overflow-hidden bg-[#F3E7B3]/80 backdrop-blur-md shadow-xl border border-white/40 group">

              {/* Clickable Map */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ambition+Academy+Narpatpur+Varanasi"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <iframe
                  title="School Location"
                  src="https://www.google.com/maps?q=Ambition+Academy+Narpatpur+Varanasi&output=embed"
                  className="w-full h-full min-h-90 border-0 pointer-events-none"
                  loading="lazy"
                ></iframe>
              </a>

              {/* Map Glow Hover */}
              <div className="absolute inset-0 bg-yellow-300/0 group-hover:bg-yellow-300/10 transition duration-500 pointer-events-none" />

              {/* View Large Map Button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ambition+Academy+Varanasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black/70 text-white rounded-lg hover:bg-black transition cursor-pointer"
                >
                  View Large Map
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* ===== Floating WhatsApp ===== */}
        <a
          href="https://wa.me/919838616826"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
        >
          💬
        </a>

        {/* ===== Sticky Call Button (Mobile) ===== */}
        <a
          href="tel:05426444505"
          className="fixed bottom-6 left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg md:hidden"
        >
          Call Now
        </a>
      </section>
    </>
  );
}

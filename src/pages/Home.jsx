import hero from "../assets/school.jpg";
import ImageSlider from "../components/ImageSlider";
import { Clock, User, Building2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";


/* ================= DATA ================= */

const announcements = [
  { text: "Result for session 2024-2025 are declared. Available in download section." },
  { text: "Ambition Academy is now affiliated to senior secondary." },
  { text: "To fill Online Form, visit Admission tab or Click Here", link: "/admission" },
];

const downloads = [
  { text: "Class 1st to 8th result for session 2024-2025", link: "/files/1st-8th-Result-2024-2025.pdf" },
  { text: "Class 9th & 11th result for session 2024-2025", link: "/files/9th-11th-Result-2024-2025.pdf" },
  { text: "Fee Structure 2025-2026", link: "/files/FEESTRUCTURE.pdf" },
  { text: "Academic Calender 2025-2026", link: "/files/ACADEMICCALENDER.pdf" },
];

const quickLinks = [
  { text: "Affiliated to CBSE New Delhi." },
  { text: "Admission open for classes- Nursery to 9th & 11th(Maths, Bio, Comm).", link: "/admission" },
  { text: "To submit onlline form, visit Admission Tab.", link: "/admission" },
  { text: "For any query, contact on +91 9838616826", link: "/contact" },
];

const quotes = [
  "Intelligence plus character that is the goal of true education - Martin Luther King Jr.",
  "Arise,awake and donot stop until the goal is reached - Swami Vivekananda.",
  // "Learning never exhausts the mind.",
  // "Small steps today lead to big success tomorrow.",
];

/* ================= COMPONENTS ================= */

function ScrollingBox({ title, data }) {
  return (
    <>
      <div className="bg-yellow-100 border border-yellow-300 rounded-lg shadow-sm min-h-55 md:h-full flex flex-col">
        <div className="p-3 border-b font-bold text-lg bg-yellow-200">{title}</div>

        <div className="flex-1 overflow-hidden relative">
          <div className="absolute inset-0 marquee-up px-4 py-3 text-sm text-gray-700 space-y-2">
            {data.map((item, i) => (
              <div key={i}>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={item.link?.endsWith(".pdf") ? true : undefined}
                    className="hover:underline cursor-pointer"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TickerStrip({ children, className = "", style = {} }) {
  return (
    <div
      className={`w-full py-2 marquee-wrapper ticker-fade ${className}`}
      style={style}
    >
      <div className="marquee-track relative z-0">
        <div className="font-medium text-sm md:text-base whitespace-nowrap">
          {children}
        </div>
        <div className="font-medium text-sm md:text-base whitespace-nowrap">
          {children}
        </div>
      </div>
    </div>
  );
}


/* ================= MAIN PAGE ================= */

function Home() {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);

  /* Scroll reveal for BOTH sections */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Ambition Academy</title>

        <meta
          name="description"
          content="Ambition Academy is a CBSE affiliated school in Varanasi focused on academic excellence, discipline, and holistic development from Nursery to Grade 12."
        />

      </Helmet>
      <div className="w-full">
        <div className="w-full px-6 md:px-10 lg:px-14 py-6">

          {/* HERO */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,4.6fr)_minmax(0,1fr)] gap-6">
            <div className="order-1 md:order-2">
              <img src={hero} alt="School" className="w-full rounded-lg shadow-md" />
            </div>

            <div className="order-2 md:order-1">
              <ScrollingBox title="Announcement" data={announcements} />
            </div>

            <div className="order-3">
              <ScrollingBox title="Download" data={downloads} />
            </div>
          </div>

          {/* TICKERS */}
          <TickerStrip
            className="mt-6"
            style={{
              backgroundColor: "#d32f2f",
              "--fade-color": "#d32f2f"
            }}
          >
            {quickLinks.map((item, i) => (
              <span key={i} className="mx-8 text-[#F3E7B3]">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {item.text}
                </a>{" "}
                •
              </span>
            ))}
          </TickerStrip>

          <TickerStrip
            style={{
              backgroundColor: "#F3E7B3",
              "--fade-color": "#F3E7B3"
            }}
          >

            {quotes.map((q, i) => (
              <span key={i} className="mx-8 text-black">
                {q} •
              </span>
            ))}
          </TickerStrip>

          {/* IMAGE SLIDER */}
          <ImageSlider />

          {/* SCHOOL HOURS */}
          <section ref={sectionRef} className="reveal py-14">
            <div className="w-full bg-[#F3E7B3]/70 rounded-2xl p-6 md:p-10 shadow-lg">

              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                School Hours
              </h2>

              <div className="grid md:grid-cols-3 gap-6 items-stretch">

                <div className="card-glow gradient-border rounded-xl p-6 bg-[#F3E7B3]/80 text-gray-900">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-red-600" size={26} />
                    <h3 className="font-semibold text-lg">School Timing</h3>
                  </div>
                  <p className="text-sm">Mon-Sat: 8:30 – 3:40</p>
                  <p className="text-sm mt-2">Morning: 7:25 – 1:00</p>
                </div>

                <div className="card-glow gradient-border rounded-xl p-6 bg-[#F3E7B3]/80 text-gray-900">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="text-yellow-700" size={26} />
                    <h3 className="font-semibold text-lg">Principal</h3>
                  </div>
                  <p className="text-sm">9:15 – 10:00 a.m.</p>
                  <p className="text-sm mt-2">Morning: 8:15 – 9:00</p>
                </div>

                <div className="card-glow gradient-border rounded-xl p-6 bg-[#F3E7B3]/80 text-gray-900">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="text-blue-600" size={26} />
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                  </div>
                  <p className="text-sm">8:30 – 1:05 & 1:45 – 4:00</p>
                  <p className="text-sm mt-2">Morning: 7:30 – 1:00</p>
                  <p className="text-sm mt-2">Vacation: 9:00 – 12:00</p>
                </div>


              </div>
            </div>
          </section>

          {/* ABOUT SCHOOL */}
          <section ref={aboutRef} className="reveal w-full py-14">
            <div className="w-full rounded-2xl backdrop-blur-md bg-[#F3E7B3]/70 border border-[#F3E7B3]/60 shadow-lg p-6 md:p-10">

              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                About Ambition Academy, Varanasi
              </h2>

              <p className="text-gray-900 leading-relaxed text-justify text-sm md:text-base">
                The Ambition Academy School is a CBSE affiliated School, managed by the
                Girja Devi Nyas Trust, which focuses on the needs of less privileged
                sections of society. The trust started this school at Dubukia, Varanasi
                in 2016. This is the flagship school of the Girja Devi Nyas Trust.
                <br /><br />
                Our school provides all-round development and not just textbook learning.
                The medium of instruction is English and the school runs from Nursery to Grade 12th.
              </p>

            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default Home;

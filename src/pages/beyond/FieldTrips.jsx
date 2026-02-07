import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

function FieldTrips() {
  const sectionRef = useRef(null);

  /* Scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Field Trips & Educational Tours | Ambition Academy</title>
        <meta name="description" content="Educational trips and excursions at Ambition Academy enhance practical learning, curiosity, and real-world knowledge." />
      </Helmet>
      <section
        ref={sectionRef}
        className="reveal w-full px-4 md:px-10 lg:px-14 py-12"
      >
        <div className="max-w-5xl mx-auto bg-[#F3E7B3]/80 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 border border-[#e6d899]">

          {/* ===== Heading with divider ===== */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-0.5 bg-gray-400" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">
              FIELD TRIPS
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          {/* ===== Content ===== */}
          <div className="space-y-4 text-sm md:text-base text-gray-900 leading-relaxed">

            <p>
              In order to make learning more application-based and to clarify the
              concept of <b>“What it is”</b> and <b>“How it works”</b>, the school
              conducts regular field trips relevant to the topics taught in the
              classroom. These visits help students connect theoretical knowledge
              with real-world experience and bridge the gap between academic
              learning and practical understanding.
            </p>

            <p>
              Field trips, educational visits and excursions form an important part
              of our school curriculum. Outdoor learning activities are carefully
              planned in accordance with the syllabus being covered in class, giving
              students valuable hands-on learning and exposure.
            </p>

            <p>
              Students are taken to a variety of places such as museums, historical
              monuments, science centers, farms, industries, nature parks and
              educational institutions. These visits encourage curiosity,
              observation, and interactive learning beyond the classroom.
            </p>

            <p>
              Field trips also help in developing social skills, teamwork,
              responsibility and independence among students. They learn to observe,
              ask questions, explore new environments and understand the importance
              of discipline and cooperation during group activities.
            </p>

            <p>
              Safety and supervision are given top priority during all excursions.
              Qualified staff members accompany students and proper guidelines are
              followed to ensure a safe and enjoyable learning experience for every
              child.
            </p>

            <p>
              Overall, field trips make education more engaging, meaningful and
              memorable by providing experiential learning opportunities that
              nurture curiosity, creativity and confidence in students.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}

export default FieldTrips;

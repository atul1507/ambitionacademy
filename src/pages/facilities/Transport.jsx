import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function Transport() {
  const sectionRef = useRef(null);

  /* Scroll Reveal */
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
        <title>School Transport | Ambition Academy</title>
        <meta name="description" content="Safe and reliable school transport facility of Ambition Academy covering nearby areas with GPS and safety measures." />
      </Helmet>
      <section
        ref={sectionRef}
        className="reveal w-full px-4 md:px-10 lg:px-14 py-12"
      >
        <div className="max-w-5xl mx-auto bg-[#F3E7B3]/80 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 border border-[#e6d899]">

          {/* ===== Heading ===== */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-0.5 bg-gray-400" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">
              TRANSPORT
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          <div className="space-y-6 text-sm md:text-base text-gray-900 leading-relaxed">

            {/* Intro */}
            <p>
              Conveyance is provided to students across different areas of the city
              at reasonable charges. A separate Transport Committee, constituted
              as per Government rules, ensures smooth functioning and safety of
              the transportation system. The school has appointed experienced,
              licensed drivers and trained lady attendants to ensure the safety
              and comfort of students during travel.
            </p>

            {/* Safety */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Safety Measures</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Experienced and licensed drivers</li>
                <li>Lady attendants present in buses for student safety</li>
                <li>Regular vehicle maintenance and safety checks</li>
                <li>Speed control and disciplined driving practices</li>
                <li>Emergency contact and first-aid facilities available</li>
              </ul>
            </div>

            {/* Coverage */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Transport Coverage</h2>
              <p>
                The school transport network covers major routes and nearby
                localities to ensure students can travel conveniently. Routes are
                planned carefully considering student safety and travel time.
                Transport routes may be updated based on student requirements and
                availability.
              </p>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Transport Facilities</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Comfortable and well-maintained buses</li>
                <li>Regular cleanliness and hygiene maintained</li>
                <li>Proper seating arrangement for students</li>
                <li>Safe boarding and drop points</li>
                <li>Monitored pick-up and drop system</li>
              </ul>
            </div>

            {/* Discipline */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Transport Discipline</h2>
              <p>
                Students are expected to maintain discipline and follow transport
                rules while travelling. Respect for fellow students, staff and
                adherence to safety instructions are mandatory. Any misconduct may
                result in suspension of transport facility.
              </p>
            </div>

            {/* Parent Info */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Information for Parents</h2>
              <p>
                Parents are requested to ensure that students reach their assigned
                bus stops on time. Changes in transport routes, timings or pick-up
                points will be communicated through official school channels.
                Transport charges and route details are available at the school
                office.
              </p>
            </div>

            {/* Objective */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Our Objective</h2>
              <p>
                The school transport system is designed to provide a safe,
                reliable and comfortable journey for students. We continuously
                strive to improve our transport services to ensure peace of mind
                for parents and a secure travel experience for students.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

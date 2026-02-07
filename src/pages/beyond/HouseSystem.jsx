import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

function HouseSystem() {
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
        <title>House System | Ambition Academy</title>
        <meta name="description" content="Ambition Academy house system encourages leadership, teamwork, discipline, and healthy competition among students." />
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
              INTER HOUSES
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          {/* ===== Content ===== */}
          <div className="space-y-4 text-sm md:text-base text-gray-900 leading-relaxed">

            <p>
              The Teachers and the Students are divided into four houses across the
              School to inculcate a sense of loyalty, team spirit and healthy
              competition.
            </p>

            <p>
              The students are divided into four houses namely <b>House of Grace
                (Green)</b>, <b>House of Peace (Blue)</b>, <b>House of Hope
                  (Yellow)</b>, <b>House of Faith (Orange)</b> – Allegiance.
            </p>

            <p>
              Each house has a House Incharge, House teachers, assisted by House
              Captains and Prefects.
            </p>

            <p>Every Student is allotted a House.</p>

            <p>
              Several Competitions are conducted on an Inter House basis. Students
              prepare and practice their skills before participating in Inter House
              Competitions.
            </p>

            <p>
              A specific colour for the House Uniform will be worn every Thursday
              and Friday.
            </p>

            <p>
              List of all Inter House activities are notified in the calendar.
            </p>

            <p>
              Students are required to attend all activity demonstration sessions.
            </p>

            <p>
              <b>
                All Round Excellence Trophy is awarded to the House aggregating the
                highest points in all co-scholastic activities during the session.
              </b>
            </p>

          </div>
        </div>
      </section>
    </>
  );
}

export default HouseSystem;

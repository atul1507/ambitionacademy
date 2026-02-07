import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

function AssembliesAndActivities() {
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
        <title>Activities | Ambition Academy</title>
        <meta name="description" content="Morning assemblies, co-curricular and extra-curricular activities at Ambition Academy build confidence, discipline, and personality." />
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
              ACTIVITIES
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          <div className="space-y-6 text-sm md:text-base text-gray-900 leading-relaxed">

            {/* Assemblies */}
            <div>
              <h2 className="font-bold text-lg mb-2 text-gray-900">
                Assemblies and Activities
              </h2>
              <p>
                School assembly teaches us life skills in both direct and indirect
                ways. Regular assemblies nurture qualities such as patience,
                organization, coordination, listening skills, confidence and
                effective body language. On particular days, assemblies are followed
                by Mass P.T and Yoga sessions, helping maintain proper
                mind-body coordination and discipline.
              </p>
            </div>

            {/* Greater Education Programme */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                Greater Education Programme
              </h2>
              <p>
                The minds of children see no impossibility. To stretch their
                imagination and curiosity, the school conducts various educational
                programmes that encourage creative thinking, exploration and
                intellectual growth.
              </p>
            </div>

            {/* Leadership */}
            <div>
              <h2 className="font-bold text-lg mb-2">Leadership</h2>
              <p>
                Ambition Academy identifies and nurtures student talent by providing
                opportunities for leadership. Students are guided to grow into
                confident individuals capable of taking responsibility, making
                decisions and contributing positively to society.
              </p>
            </div>

            {/* Sports */}
            <div>
              <h2 className="font-bold text-lg mb-2">Sports and Games</h2>
              <p>
                The Pre-school enjoys a dedicated safe and secure play area equipped
                with slides, swings, see-saw, doll house, outdoor kids’ gym and
                quality educational toys. Physical activity promotes fitness,
                teamwork and overall personality development.
              </p>
            </div>

            {/* Outdoor Activities */}
            <div>
              <h2 className="font-bold text-lg mb-2">Outdoor Activities</h2>
              <p>
                Field trips, visits and excursions are a regular feature of our
                school curriculum. Outdoor learning activities are planned according
                to classroom learning to provide practical experience and enhance
                understanding through hands-on learning.
              </p>
            </div>

            {/* Music */}
            <div>
              <h2 className="font-bold text-lg mb-2">Music</h2>
              <p>
                Music education at Ambition Academy introduces students to artistic,
                cultural and scientific foundations of music, helping develop rhythm,
                creativity and emotional expression.
              </p>
            </div>

            {/* Dance */}
            <div>
              <h2 className="font-bold text-lg mb-2">Dance</h2>
              <p>
                Our dance programme introduces students to movement, expression and
                creativity. It encourages imagination, confidence and enjoyment
                through artistic performance.
              </p>
            </div>

            {/* Drama */}
            <div>
              <h2 className="font-bold text-lg mb-2">Drama</h2>
              <p>
                Drama is an important learning tool at Ambition Academy. It helps
                develop self-confidence, communication skills and creativity through
                expression, role-play and stage participation.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default AssembliesAndActivities;

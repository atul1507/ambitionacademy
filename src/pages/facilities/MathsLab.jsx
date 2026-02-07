import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function MathsLab() {
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
        <title>Mathematics Lab | Ambition Academy</title>
        <meta name="description" content="Interactive mathematics lab at Ambition Academy makes learning maths practical, fun, and concept-based." />
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
              MATH LAB
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          <div className="space-y-6 text-sm md:text-base text-gray-900 leading-relaxed">

            {/* Intro */}
            <p>
              In recent years, many students have developed a fear of Mathematics.
              To overcome this and build a strong conceptual foundation, our school
              has established a well-equipped Mathematics Laboratory. The lab helps
              students learn and explore mathematical concepts through hands-on
              activities using various materials, models and experiments.
            </p>

            <p>
              The Mathematics Lab encourages students to verify mathematical facts
              and theorems through practical exploration. Activities are conducted
              by teachers along with students to stimulate curiosity, develop
              logical thinking and promote a positive attitude towards Mathematics.
            </p>

            {/* Hands-on Learning */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Hands-on Learning Approach</h2>
              <p>
                Students actively participate in experiments and model-based
                learning which helps them visualize abstract mathematical ideas.
                This method strengthens understanding and improves problem-solving
                abilities.
              </p>
            </div>

            {/* Activities */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Mathematics Lab Activities</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Understanding geometry using models and shapes</li>
                <li>Algebra and number system exploration</li>
                <li>Measurement and data handling experiments</li>
                <li>Mathematical puzzles and logical reasoning tasks</li>
                <li>Interactive problem-solving and group activities</li>
              </ul>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Lab Facilities</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mathematical models and charts</li>
                <li>Geometry kits and measurement tools</li>
                <li>Activity-based learning materials</li>
                <li>Visual and practical demonstration tools</li>
                <li>Guided teacher-assisted experiments</li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Benefits for Students</h2>
              <p>
                The Mathematics Lab helps students develop logical thinking,
                analytical skills and confidence in solving problems. It transforms
                Mathematics from a theoretical subject into an engaging and
                enjoyable learning experience, reducing fear and building strong
                conceptual clarity.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

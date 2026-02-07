import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function Library() {
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
        <title>School Library | Ambition Academy</title>
        <meta name="description" content="Well-equipped library at Ambition Academy promoting reading habits, research learning, and knowledge enrichment." />
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
              LIBRARY
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          <div className="space-y-6 text-sm md:text-base text-gray-900 leading-relaxed">

            {/* Intro */}
            <p>
              Ambition Academy has a well-equipped and spacious library with a
              seating capacity of 100 students. It houses more than 2,000 books and
              subscribes to a wide range of magazines and newspapers. Students are
              introduced to library usage and facilities during their initial term
              and are encouraged to utilize it for both recreational reading and
              academic research.
            </p>

            <p>
              The library contains a large collection of reference books covering
              dictionaries, encyclopedias, yearbooks, atlases, classics, science,
              environmental studies, astronomy, mythology, literature, medicine,
              linguistics and many more disciplines. Students enjoy access to both
              academic and leisure reading materials ranging from epics to modern
              bestsellers.
            </p>

            {/* Digital Library
          <div>
          <h2 className="font-semibold text-lg mb-2">Digital Learning Resources</h2>
            <p>
            The library is gradually integrating digital resources including
            e-books, educational journals and research materials to support
            modern learning. Students are guided on how to responsibly use
            online information and research databases.
            </p>
            </div> */}

            {/* Reading Culture */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Reading Culture</h2>
              <p>
                Regular reading sessions, book exhibitions and storytelling
                activities are organized to cultivate reading habits among students.
                The library promotes curiosity, imagination and lifelong learning.
              </p>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Library Facilities</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Quiet and comfortable reading environment</li>
                <li>Reference and subject-wise book sections</li>
                <li>Newspapers and magazines corner</li>
                <li>Student reading and research support</li>
                <li>Digital and academic resource access (planned expansion)</li>
              </ul>
            </div>

            {/* Rules */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Library Rules</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maintain silence and discipline inside the library</li>
                <li>Handle books and materials carefully</li>
                <li>Return issued books within the due date</li>
                <li>Loss or damage of books must be reported immediately</li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Benefits for Students</h2>
              <p>
                The library strengthens knowledge, improves vocabulary, develops
                concentration and enhances analytical thinking. It plays a vital
                role in shaping independent learners and encouraging academic
                excellence.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

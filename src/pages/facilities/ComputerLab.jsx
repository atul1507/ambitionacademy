import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function ComputerLab() {
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
        <title>Computer Lab | Ambition Academy</title>
        <meta name="description" content="Modern computer lab at Ambition Academy with latest technology, digital learning, and computer education." />
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
              COMPUTER LAB
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          <div className="space-y-6 text-sm md:text-base text-gray-900 leading-relaxed">

            {/* Intro */}
            <p>
              The school has well-equipped Computer Laboratories with 30 computers
              in each lab accessible to students. The labs are designed with modern
              hardware and software infrastructure to meet the academic and
              practical learning needs of students and teachers. A dedicated
              broadband Internet connection enables students to explore the digital
              world, conduct research and prepare presentations and projects.
            </p>

            <p>
              The department has qualified and committed teachers who guide
              students at different academic levels — Primary and Secondary. The
              faculty continuously ensures that students gain practical exposure to
              modern computer tools and technologies and develop skills required
              for the future.
            </p>

            {/* Digital Learning */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Digital Learning Environment</h2>
              <p>
                The Computer Lab promotes interactive and activity-based learning.
                Students are trained in computer fundamentals, programming,
                multimedia usage, and digital tools. Emphasis is given to practical
                implementation so that students become confident users of
                technology.
              </p>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Computer Education Curriculum</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Basics of Computers and Operating Systems</li>
                <li>Word Processing, Spreadsheets and Presentations</li>
                <li>Internet usage and online research skills</li>
                <li>Programming fundamentals and logical thinking</li>
                <li>Project-based learning and digital creativity</li>
              </ul>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Lab Facilities</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>30 computers in each laboratory</li>
                <li>High-speed broadband Internet connectivity</li>
                <li>Updated software and operating systems</li>
                <li>Multimedia and presentation tools</li>
                <li>Projector-enabled teaching and demonstrations</li>
              </ul>
            </div>

            {/* Activities */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Learning Activities</h2>
              <p>
                Students regularly work on practical assignments, digital
                presentations, research projects and collaborative activities.
                These activities improve problem-solving, creativity and analytical
                thinking skills.
              </p>
            </div>

            {/* Safety */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Safe and Responsible Usage</h2>
              <p>
                Students are guided on safe and responsible use of computers and
                the Internet. Awareness about cyber safety, ethical use of
                technology and digital discipline is an integral part of computer
                education at the school.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="font-semibold text-lg mb-2">Benefits for Students</h2>
              <p>
                The Computer Lab prepares students for a technology-driven world by
                avoiding digital fear, building confidence and enhancing technical
                skills. It nurtures logical reasoning, innovation and independent
                learning, enabling students to compete effectively at national and
                global levels.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

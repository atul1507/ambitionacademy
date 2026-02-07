import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function PrincipalMessage() {
  const sectionRef = useRef(null);

  /* Scroll Reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Principal's Message | Ambition Academy</title>
        <meta name="description" content="Principal's message from Ambition Academy highlighting child-centric learning, research-based education, and student development." />
      </Helmet>
      <div className="w-full px-4 md:px-10 lg:px-16 py-10">

        {/* CARD */}
        <section
          ref={sectionRef}
          className="reveal max-w-6xl mx-auto rounded-2xl backdrop-blur-md bg-[#F3E7B3]/70 border border-[#F3E7B3]/60 shadow-lg p-6 md:p-10"
        >
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Principal's Message
          </h1>

          {/* Content */}
          <div className="space-y-5 text-gray-900 leading-relaxed text-justify text-sm md:text-base">

            <p>
              <span className="font-bold">
                At Ambition Academy School,
              </span>{" "}
              our approach to learning is child centric, encouraging activity-based
              learning and inculcating a scientific temper and a spirit of free
              enquiry. Children these days are much more sensitive; they possess
              very high self-esteem and believe in independent thinking. Therefore,
              we ensure that the approach to motivating and getting the best out of
              the children is based on the positive reinforcement of good work and
              good behavior.
            </p>

            <p>
              Our educational philosophy is centered on praise, encouragement,
              enthusiasm, and affection, rather than criticism, fear, and
              punishment.
            </p>

            <p>
              The school is also devoted to prepare our students for life, groom
              them to face the challenges of tomorrow, and encourage them to be
              socially relevant. We encourage each child to develop in their
              special field of interest so as to best showcase their particular
              type of talent.
            </p>

            <p>
              Children are encouraged to explore and revel in the joy of learning.
              Rote learning is discouraged and Research Based learning is the norm,
              where each pupil is guided through an individualized work plan in
              consonance with his/her potential, thereby providing a complete
              learning experience.
            </p>

          </div>
        </section>

      </div>
    </>
  );
}

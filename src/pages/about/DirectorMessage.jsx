import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function DirectorMessage() {
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
        <title>Director's Message | Ambition Academy</title>
        <meta name="description" content="Read the Director's message of Ambition Academy, Varanasi and learn about the vision, mission, and values guiding our students towards excellence." />
      </Helmet>
      <div className="w-full px-4 md:px-10 lg:px-16 py-10">

        {/* ===== MAIN CONTAINER ===== */}
        <section
          ref={sectionRef}
          className="reveal w-full max-w-6xl mx-auto rounded-2xl backdrop-blur-md bg-[#F3E7B3]/80 border border-[#F3E7B3]/60 shadow-lg p-6 md:p-10"
        >
          {/* ===== HEADING ===== */}
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Director's Message
          </h1>

          {/* ===== MESSAGE CONTENT ===== */}
          <div className="max-w-5xl mx-auto text-gray-900 leading-relaxed text-sm md:text-base space-y-5 text-justify">

            <p className="font-bold text-base md:text-lg">Dear Prospective Student,</p>

            <p>
              I am pleased that you are considering Ambition Academy among your
              school choices. This is an important and exciting time in your
              life. Are you ready to be inspired? Are you willing to work hard
              and to grow? Are you eager and uninhibited to question and find
              joy as you learn? If so, then Ambition Academy is the place to be.
            </p>

            <p>
              The curriculum is ever evolving and has a progressive outlook with
              an intellectual rigour, where a sound foundation of critical
              thinking and articulating is laid in an environment that encourages
              curiosity and discovery and all this as you have fun.
            </p>

            <p>
              The extra-curricular activities are varied, enriching and exciting,
              where you will learn new skills and make life-long friends and
              associations. You will see yourself increasingly getting involved
              in visual and performing arts, in debates and sports; as you get
              enthused you will realise your full potential and learn to
              appreciate teamwork.
            </p>

            <p>
              In senior classes, you'll have opportunities to take on leadership
              roles, where you'll learn to accept and handle responsibility,
              manage and advise others and make fair and effective decisions.
              You'll help conceive and plan events, assist in labs and libraries,
              represent your peers; in effect you shall, from a child move
              towards being a young responsible adult, be a vanguard, an exemplar.
            </p>

            <p>
              The Ambition Academy teacher shall be the epitome of all that is
              good; who is passionate, caring and non-partisan as they seek out
              the very best within every child.
            </p>

            <p>
              The Ambition Academy parent shall be an important part of our
              community. Their involvement, help and support in enriching lives
              at homes and on campus will be immeasurable. They will be involved
              with projects or volunteer their time and effort in any other
              manner.
            </p>

            <p>
              It would be my pleasure to welcome you and your family to the
              Ambition Academy community. If questions arise as you go through
              prospectus, please call or e-mail us.
            </p>

            {/* ===== SIGNATURE ===== */}
            <p className="mt-6 font-semibold">
              Best wishes,<br />
              The Director<br />
              Ambition Academy<br />
              Varanasi, U.P., India
            </p>

          </div>
        </section>

      </div>
    </>
  );
}

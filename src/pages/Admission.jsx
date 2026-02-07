import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function Admission() {
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

  /* 🔗 Replace with your real Google Form link */
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLScWUEv4UYyuiCYzlSqM5K_vMHA_wNUCfLFO-nyX3PfvffT8vQ/viewform";

  return (
    <>
      <Helmet>
        <title>Admissions | Ambition Academy</title>
        <meta name="description" content="Apply for admission at Ambition Academy, Varanasi. Learn about admission process, eligibility, and online application form." />
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
              ADMISSION
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          <div className="space-y-6 text-sm md:text-base text-gray-900 leading-relaxed">

            {/* Entry */}
            <div>
              <h2 className="font-bold text-lg mb-2 text-gray-900">
                Entry to Ambition Academy
              </h2>
              <p>
                Our school’s mission is to recruit and develop exceptional students
                who, apart from being strong academically, bring positive attitude,
                talent and interest in areas such as sports, music and cultural
                activities.
              </p>
            </div>

            {/* Procedure */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                Admission Procedure
              </h2>

              {/* Online */}
              <p className="font-semibold mt-2">For Online:</p>

              <a
                href={formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
              >
                Fill Online Form
              </a>

              <p className="mt-3 text-sm">
                * Online forms are provisionally accepted. Hardcopy with required
                documents must be submitted when school reopens.
              </p>

              {/* Offline */}
              <p className="font-semibold mt-5">For Offline:</p>

              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Fill the registration form available from the School Office.
                </li>
                <li>
                  Submit the duly filled form to the Admission Department before
                  the due date along with attested photocopy of previous class
                  mark sheet.
                </li>
              </ol>

              <p className="mt-3">
                If a candidate has not received the previous class mark sheet,
                he/she may submit a provisional mark sheet issued by the previous
                school. Failure to submit the registration form before the due
                date will result in rejection of admission. A list of selected
                candidates will be published.
              </p>
            </div>

            {/* Documents */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                Documents Required for Admission
              </h2>

              <ul className="list-disc pl-6 space-y-1">
                <li>Copy of Birth Certificate</li>
                <li>Attested photocopy of previous class mark sheet</li>
                <li>Two passport size photographs</li>
                <li>School Leaving Certificate (if applicable)</li>
              </ul>

              <p className="mt-4">
                Selected candidates must complete admission formalities and deposit
                fees within the given time. Failure to do so will cancel admission.
                If vacancies arise, a second list may be published.
              </p>

              <p className="mt-3 font-medium">
                The Principal’s decision regarding placement of a student will be final.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

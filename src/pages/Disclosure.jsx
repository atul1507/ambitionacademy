import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

export default function Disclosure() {
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

  /* PDF link helper (OPEN ONLY, NO DOWNLOAD) */
  const pdfLink = (file, label) => (
    <a
      href={`/files/${file}.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 font-semibold hover:underline"
    >
      [{label}]
    </a>
  );

  const Item = ({ children }) => (
    <li className="leading-relaxed text-gray-900">
      {children}
    </li>
  );

  return (
    <>
      <Helmet>
        <title>Mandatory Disclosure | Ambition Academy</title>
        <meta name="description" content="Mandatory public disclosure of Ambition Academy including CBSE details, infrastructure, staff, and academic information." />
      </Helmet>
      <section
        ref={sectionRef}
        className="reveal w-full px-4 md:px-10 lg:px-14 py-12"
      >
        <div className="max-w-5xl mx-auto bg-[#F3E7B3]/80 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 border border-[#e6d899]">

          {/* ===== Heading with divider ===== */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-0.5 bg-gray-400" />
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center whitespace-nowrap">
              MANDATORY PUBLIC DISCLOSURE
            </h1>
            <div className="flex-1 h-0.5 bg-gray-400" />
          </div>

          {/* ===== List ===== */}
          <ul className="space-y-4 text-sm md:text-base">

            <Item>
              MANDATORY DISCLOSURE. {pdfLink("Disclosure", "DISCLOSURE")}
            </Item>

            <Item>
              COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF
              AFFILIATION. {pdfLink("AFFILIATIONLETTER", "AFFILIATION LETTER")}
            </Item>

            <Item>
              COPIES OF TRUST. {pdfLink("TRUSTCERTIFICATE", "TRUST CERTIFICATE")}
            </Item>

            <Item>
              COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE
              STATE GOVT. {pdfLink("NOC", "NOC")}
            </Item>

            <Item>
              COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS
              RENEWAL IF APPLICABLE.{" "}
              {pdfLink("RECOGNITIONCERTIFICATE", "RECOGNITION CERTIFICATE")}
            </Item>

            <Item>
              COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL
              BUILDING CODE.{" "}
              {pdfLink("BUILDINGCERTIFICATE", "BUILDING CERTIFICATE")}
            </Item>

            <Item>
              COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT
              AUTHORITY. {pdfLink("FIRE-CERTIFICATE", "FIRE CERTIFICATE")}
            </Item>

            <Item>
              COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR
              AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION.{" "}
              {pdfLink("DEOCERTIFICATE", "DEO CERTIFICATE")}
            </Item>

            <Item>
              COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES.{" "}
              {pdfLink("WATERHEALTHCERTIFICATE", "WATER HEALTH CERTIFICATE")}
            </Item>

            <Item>
              FEE STRUCTURE OF THE SCHOOL. {pdfLink("FEESTRUCTURE", "FEE STRUCTURE")}
            </Item>

            <Item>
              ANNUAL ACADEMIC CALENDER.{" "}
              {pdfLink("ACADEMICCALENDER", "ACADEMIC CALENDER")}
            </Item>

            <Item>
              LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC).{" "}
              {pdfLink("LIST_OF_SMC", "SMC")}
            </Item>

            <Item>
              LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS.{" "}
              {pdfLink("LIST_OF_PTA", "PTA")}
            </Item>

            <Item>
              LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER
              APPLICABILITY. {pdfLink("THREEYEARRESULT", "THREE YEAR RESULT")}
            </Item>

          </ul>
        </div>
      </section>
    </>
  );
}

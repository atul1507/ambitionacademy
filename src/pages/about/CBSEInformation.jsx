import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";


export default function CBSEInformation() {
  const sectionRef = useRef(null);

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

  const annexureLink = (file) => {
    const path = `/files/${file}.pdf`;

    return (
      <a
        href={path}
        target="_blank"                 // open in new tab
        rel="noopener noreferrer"
        onClick={async (e) => {
          try {
            const res = await fetch(path, { method: "HEAD" });
            if (!res.ok) e.preventDefault();   // stop if file not exists
          } catch {
            e.preventDefault();                // stop if error / missing
          }
        }}
        className="text-blue-700 font-semibold hover:underline"
      >
        [ANNEXURE]
      </a>
    );
  };

  /* Main Row */
  const Row = ({ label, children }) => (
    <div className="grid grid-cols-1 md:grid-cols-[40%_60%] py-2 border-b border-[#e6d899]">
      <div className="font-semibold text-gray-900">{label}</div>
      <div className="text-gray-800">{children}</div>
    </div>
  );

  /* Sub Row (Indented) */
  const SubRow = ({ label, children }) => (
    <div className="grid grid-cols-1 md:grid-cols-[40%_60%] py-1">
      <div className="pl-6 text-gray-800">{label}</div>
      <div className="text-gray-800">{children}</div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>CBSE Information | Ambition Academy</title>
        <meta name="description" content="Official CBSE affiliation details, infrastructure, staff, facilities, and school information of Ambition Academy, Varanasi." />
      </Helmet>
      <section
        ref={sectionRef}
        className="reveal w-full py-12 px-4 md:px-6 lg:px-10"
      >
        <div className="max-w-4xl mx-auto bg-[#F3E7B3]/85 backdrop-blur-md rounded-xl shadow-md border border-[#e6d899] p-6 md:p-10">

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            CBSE Information
          </h1>

          {/* TABLE */}
          <div className="text-sm md:text-base space-y-1">

            {/* 1 */}
            <Row label="1. Name of the School with address">
              Ambition Academy,<br />
              206, Narpatpur Dubkiya Chaubeypur,<br />
              Varanasi - 221104
            </Row>
            <SubRow label="Email">
              <a href="mailto:info@ambitionacademy.in" className="text-blue-700 hover:underline">
                info@ambitionacademy.in
              </a>
            </SubRow>
            <SubRow label="Ph. No.">0542 - 6444505</SubRow>
            <SubRow label="Fax">--</SubRow>

            {/* 2 */}
            <Row label="2. Year of establishment">2016</Row>

            {/* 3 */}
            <Row label="3. Whether NOC from State/UT obtained?">Yes</Row>
            <SubRow label="NOC No.">1515-23</SubRow>
            <SubRow label="NOC Issuing Date">05/18/2017</SubRow>

            {/* 4 */}
            <Row label="4. Is the school recognized">CBSE</Row>

            {/* 5 */}
            <Row label="5. Status of Affiliation">Provisional</Row>
            <SubRow label="Affiliation No.">2132981</SubRow>
            <SubRow label="Affiliation with Board since">01/04/2018</SubRow>
            <SubRow label="Extension upto">31/03/2023</SubRow>

            {/* 6 */}
            <Row label="6. Name of Trust / Society">
              GIRIJA DEVI NYAS<br />
              India Trust Act 1882 — Valid upto 08/04/2047
            </Row>

            {/* 7 */}
            <Row label="7. School Managing Committee">
              {annexureLink("annexure1")}
            </Row>

            {/* 8 */}
            <Row label="8. Manager / Correspondent">
              Mr. Dinesh Narayan Pathak (Manager)<br />
              D59/231 CB 1-4 Nirala Nagar Lane no 06<br />
              Mahmoorganj, Varanasi UP 221010
            </Row>
            <SubRow label="Email">
              <a href="mailto:Director@ambitionacademy.in" className="text-blue-700 hover:underline">
                Director@ambitionacademy.in
              </a>
            </SubRow>
            <SubRow label="Ph. No.">9838616826</SubRow>

            {/* 9 */}
            <Row label="9. Area of School Campus">1.51 Acres / 6110 sq.m</Row>
            <SubRow label="Built up area">1565 sq.m</SubRow>
            <SubRow label="Playground area">4110 sq.m</SubRow>
            <SubRow label="Facilities">
              Indoor Games ✔ | Dance Room ✔ | Music Room ✔ | Medical ✔
            </SubRow>

            {/* 10 */}
            <Row label="10. Fee Structure">
              {annexureLink("Fee-chart")}
            </Row>

            {/* 11 */}
            <Row label="11. Transport Facility">Own Buses Available</Row>
            <SubRow label="Transport Charges">
              {annexureLink("Fee-chart")}
            </SubRow>

            {/* 12 */}
            <Row label="12. Teaching Staff">
              {annexureLink("annexure3")}
            </Row>

            {/* 13 */}
            <Row label="13. Salary Details">
              {annexureLink("annexure4")}
            </Row>

            {/* 14 */}
            <Row label="14. Salary Bank">
              Bank of India, Paharia, Varanasi
            </Row>

            {/* 15 */}
            <Row label="15. Library Facilities">1200 sq.ft</Row>
            <SubRow label="Periodicals">5</SubRow>
            <SubRow label="Dailies">4</SubRow>
            <SubRow label="Magazines">5</SubRow>

            {/* 16 */}
            <Row label="16. Grievance Officer">
              Mr. Namwar Upadhyay — 8004924693
            </Row>

            {/* 17 */}
            <Row label="17. Sexual Harassment Committee">
              {annexureLink("SEXUAL_HARRASMENT_COM")}
            </Row>

            {/* 18 */}
            <Row label="18. Section wise enrolment">
              {annexureLink("annexure6")}
            </Row>

            {/* 19–21 */}
            <Row label="19. Academic Session">April – March</Row>
            <Row label="20. Vacation Period">15 May – 24 June</Row>
            <Row label="21. Admission Period">February – August</Row>

          </div>
        </div>
      </section>
    </>
  );
}

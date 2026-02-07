import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";


/* Main Pages */
import Home from "./pages/Home";
import Disclosure from "./pages/Disclosure";
import Admission from "./pages/Admission";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

/* About Us */
import DirectorMessage from "./pages/about/DirectorMessage";
import PrincipalMessage from "./pages/about/PrincipalMessage";
import CBSEInformation from "./pages/about/CBSEInformation";

/* Beyond Academics */
import HouseSystem from "./pages/beyond/HouseSystem";
import FieldTrips from "./pages/beyond/FieldTrips";
import AssembliesAndActivies from "./pages/beyond/AssembliesAndActivities";

/* Facilities */
import Library from "./pages/facilities/Library";
import MathsLab from "./pages/facilities/MathsLab";
import ComputerLab from "./pages/facilities/ComputerLab";
import Transport from "./pages/facilities/Transport";

function App() {
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Ambition Academy</title>
        <meta
          name="description"
          content="Ambition Academy Varanasi is a CBSE affiliated school providing quality education, holistic development, modern facilities, and strong moral values from Nursery to Grade 12."
        />
        <meta
          name="keywords"
          content="Ambition Academy, Best School in Varanasi, CBSE School, School in Chaubeypur, Varanasi School, Nursery to 12 School"
        />
        <meta name="author" content="Ambition Academy" />

        {/* Mobile SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Theme color */}
        <meta name="theme-color" content="#F3E7B3" />

        {/* Open Graph (Facebook / WhatsApp preview) */}
        <meta property="og:title" content="Ambition Academy Varanasi" />
        <meta
          property="og:description"
          content="CBSE affiliated school in Varanasi providing quality education and holistic development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ambitionacademy.in" />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ambition Academy Varanasi" />
        <meta
          name="twitter:description"
          content="Best CBSE School in Varanasi providing quality education and modern facilities."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>
      <div className="min-h-screen flex flex-col">

        {/* Navbar (fixed) */}
        <Navbar />

        {/* Scroll helper */}
        <ScrollToTop />

        {/* MAIN CONTENT — takes remaining height */}
        <main className="flex-1 pt-16">
          <Routes>
            {/* Main */}
            <Route path="/" element={<Home />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            {/* About */}
            <Route path="/about/director-message" element={<DirectorMessage />} />
            <Route path="/about/principal-message" element={<PrincipalMessage />} />
            <Route path="/about/cbse-information" element={<CBSEInformation />} />

            {/* Beyond */}
            <Route path="/beyond/house-system" element={<HouseSystem />} />
            <Route path="/beyond/field-trips" element={<FieldTrips />} />
            <Route path="/beyond/assemblies-and-activities" element={<AssembliesAndActivies />} />

            {/* Facilities */}
            <Route path="/facilities/library" element={<Library />} />
            <Route path="/facilities/maths-lab" element={<MathsLab />} />
            <Route path="/facilities/computer-lab" element={<ComputerLab />} />
            <Route path="/facilities/transport" element={<Transport />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />

      </div>
    </>
  );
}



export default App;

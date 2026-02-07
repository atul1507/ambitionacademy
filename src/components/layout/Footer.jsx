import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">

            {/* ===== Main Footer ===== */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* School Info */}
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                            <img
                                src={logo}
                                alt="logo"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <h2 className="text-lg font-bold text-white">
                            Ambition Academy
                        </h2>
                    </div>
                    <p className="text-sm">
                        Where Learning Begins. We focus on academic excellence and overall
                        personality development of students.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-white">About Us</NavLink></li>
                        <li><NavLink to="/admission" className="hover:text-white">Admission</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-white">Contact Us</NavLink></li>
                    </ul>
                </div>

                {/* Important Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li><NavLink to="/disclosure" className="hover:text-white">Disclosure</NavLink></li>
                        <li><NavLink to="/beyond/house-system" className="hover:text-white">Beyond Academics</NavLink></li>
                        <li><NavLink to="/facilities/library" className="hover:text-white">Facilities</NavLink></li>
                        <li><NavLink to="/gallery" className="hover:text-white">Gallery</NavLink></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>📍 Narpatpur, Dubkiya, Chaubeypur, Varanasi, Uttar Pradesh - 221104</li>
                        <li>📞 05426444505</li>
                        <li>✉️ contact@ambitionacademy.in</li>
                    </ul>
                </div>

            </div>

            {/* ===== Bottom Bar ===== */}
            <div className="border-t border-gray-700 py-4 text-sm">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">

                    {/* Left */}
                    <div>
                        © {new Date().getFullYear()} Ambition Academy. All Rights Reserved.
                    </div>

                    {/* Right */}
                    <div>
                        Made by a student of Ambition Academy
                    </div>

                </div>
            </div>


        </footer>
    );
}

export default Footer;

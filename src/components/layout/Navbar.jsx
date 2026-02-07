import { useEffect, useState, useRef } from "react";
import logo from "../../assets/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";



export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const indicatorRef = useRef(null);
  const navRefs = useRef({});
  const activeKeyRef = useRef(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },

    {
      name: "About Us",
      sub: [
        { name: "Director's Message", path: "/about/director-message" },
        { name: "Principal's Message", path: "/about/principal-message" },
        { name: "CBSE Information", path: "/about/cbse-information" },
      ],
    },

    { name: "Disclosure", path: "/disclosure" },

    {
      name: "Beyond Academics",
      sub: [
        { name: "House System", path: "/beyond/house-system" },
        { name: "Field Trips", path: "/beyond/field-trips" },
        {
          name: "Assemblies & Activities",
          path: "/beyond/assemblies-and-activities",
        },
      ],
    },

    { name: "Admission", path: "/admission" },

    {
      name: "Facilities",
      sub: [
        { name: "Library", path: "/facilities/library" },
        { name: "Maths Lab", path: "/facilities/maths-lab" },
        { name: "Computer Lab", path: "/facilities/computer-lab" },
        { name: "School Transport", path: "/facilities/transport" },
      ],
    },

    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer open */
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  /* ESC close */
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const toggleSubMenu = (name) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  /* Move sliding indicator */
  const moveIndicator = (key) => {
    const el = navRefs.current[key];
    const indicator = indicatorRef.current;
    if (!el || !indicator) return;

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement.parentElement.getBoundingClientRect();

    indicator.style.width = rect.width + "px";
    indicator.style.transform = `translateX(${rect.left - parentRect.left}px)`;
    indicator.style.opacity = 1;
  };

  /* Detect active parent */
  useEffect(() => {
    let activeKey = null;

    navItems.forEach((item) => {
      if (item.path === location.pathname) activeKey = item.name;
      if (item.sub) {
        item.sub.forEach((sub) => {
          if (sub.path === location.pathname) activeKey = item.name;
        });
      }
    });

    activeKeyRef.current = activeKey;
    if (activeKey) moveIndicator(activeKey);
  }, [location]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-9999 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-md" : ""
          }`}
        style={{ backgroundColor: "#F3E7B3CC" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <NavLink to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-white shadow-sm">
                <img
                  src={logo}
                  alt="logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="leading-tight">
                <h1 className="font-bold text-gray-800">Ambition Academy</h1>
                <p className="text-xs text-gray-600">Where Learning Begins</p>
              </div>
            </NavLink>

            {/* ================= DESKTOP MENU ================= */}
            <ul
              className="hidden md:flex items-center gap-6 text-sm font-semibold relative"
              onMouseLeave={() => {
                if (activeKeyRef.current) moveIndicator(activeKeyRef.current);
              }}
            >
              {/* Sliding Indicator */}
              <span
                ref={indicatorRef}
                className="absolute bottom-0 h-0.5 bg-gray-800 transition-all duration-300"
              />

              {navItems.map((item) => {
                const isParentActive =
                  item.sub &&
                  item.sub.some((sub) => sub.path === location.pathname);

                return (
                  <li key={item.name} className="relative group">
                    {item.sub ? (
                      <span
                        ref={(el) => (navRefs.current[item.name] = el)}
                        onMouseEnter={() => moveIndicator(item.name)}
                        className={`cursor-pointer transition duration-300 ${isParentActive
                            ? "font-bold text-black"
                            : "text-gray-800"
                          }`}
                      >
                        {item.name}
                      </span>
                    ) : (
                      <NavLink
                        to={item.path}
                        ref={(el) => (navRefs.current[item.name] = el)}
                        onMouseEnter={() => moveIndicator(item.name)}
                        className={({ isActive }) =>
                          `transition duration-300 ${isActive
                            ? "font-bold text-black"
                            : "text-gray-800"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    )}

                    {/* Dropdown */}
                    {item.sub && (
                      <ul className="absolute left-0 top-full mt-2 w-52 bg-white shadow-lg rounded-md border opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                        {item.sub.map((sub) => (
                          <li key={sub.name}>
                            <NavLink
                              to={sub.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {sub.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* ================= HAMBURGER ================= */}
            <button
              className="md:hidden relative w-6 h-6"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 top-3" : "top-1"}`} />
              <span className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : "top-3"}`} />
              <span className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 top-3" : "top-5"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ================= DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-all duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-5 border-b flex justify-between">
          <h2 className="font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <ul className="p-4 space-y-2 text-gray-800 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <div
                className="flex justify-between items-center py-2"
                onClick={() => item.sub && toggleSubMenu(item.name)}
              >
                <div
                  className="w-full py-2 cursor-pointer"
                  onClick={() => {
                    if (item.sub) {
                      toggleSubMenu(item.name);
                    } else {
                      navigate(item.path);
                      setMenuOpen(false);
                    }
                  }}
                >
                  {item.name}
                </div>

                {item.sub && (
                  <span className="text-lg font-bold">
                    {openSubMenu === item.name ? "−" : "+"}
                  </span>
                )}
              </div>

              {item.sub && openSubMenu === item.name && (
                <ul className="pl-5 space-y-1 text-sm text-gray-600">
                  {item.sub.map((sub) => (
                    <li key={sub.name}>
                      <div
                        className="w-full py-1 cursor-pointer"
                        onClick={() => {
                          navigate(sub.path);
                          setMenuOpen(false);
                        }}
                      >
                        {sub.name}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

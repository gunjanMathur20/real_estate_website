// React hooks used for component state and side effects.
import React, { useEffect, useState } from "react";

// React Router components used for navigation and detecting the current route.
import { Link, useLocation } from "react-router-dom";

// User and search icons used in the navbar.
import { CiUser, CiSearch } from "react-icons/ci";

// Hamburger and close icons used for the mobile navigation menu.
import { HiMenu, HiX } from "react-icons/hi";

// Framer Motion components used for animations and conditional rendering.
import { AnimatePresence, motion } from "framer-motion";

// Login and registration modal components.
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Navbar() {
  // Controls whether the mobile navigation menu is open.
  const [open, setOpen] = useState(false);

  // Controls the visibility of the login modal.
  const [loginOpen, setLoginOpen] = useState(false);

  // Controls the visibility of the registration modal.
  const [registerOpen, setRegisterOpen] = useState(false);

  // Tracks whether the page has been scrolled.
  const [scrolled, setScrolled] = useState(false);

  // Provides access to the current URL path.
  const location = useLocation();

  // Checks whether the user is currently logged in using localStorage.
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  // ================= SCROLL EFFECT =================

  useEffect(() => {
    // Updates the navbar state when the user scrolls down the page.
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    // Set the initial scroll state when the component loads.
    handleScroll();

    // Listen for scroll events.
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu whenever the current route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // ================= NAV LINKS =================

  // Navigation links displayed in the desktop and mobile menus.
  const navLinks = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "PROJECTS",
      path: "/projects",
    },
    {
      name: "TESTIMONIALS",
      path: "/testimonials",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ];

  // Closes the mobile navigation menu.
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
          Main fixed navigation bar.
      ====================================================== */}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed left-0 top-0 z-50 w-full"
      >
        <motion.div
          animate={{
            paddingTop: scrolled ? 10 : 18,
            paddingLeft: scrolled ? 16 : 20,
            paddingRight: scrolled ? 16 : 20,
          }}
          transition={{ duration: 0.35 }}
          className="mx-auto w-full"
        >
          {/* ================= NAVBAR CONTAINER ================= */}

          <motion.div
            animate={{ borderRadius: scrolled ? 16 : 22 }}
            transition={{ duration: 0.35 }}
            className={`mx-auto flex max-w-7xl items-center justify-between border px-5 py-3 transition-colors duration-500 sm:px-6 ${scrolled ? "border-white/10 bg-[#111827]/95 shadow-2xl" : "border-white/15 bg-black/20"}`}
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-2"
            >
              {/* Logo Icon */}

              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20"
              >
                U
              </motion.div>

              {/* Brand Name */}

              <div className="leading-none">
                <div className="text-xl font-bold tracking-tight sm:text-2xl">
                  <span className="text-blue-500">Urban</span>
                  <span className="text-white">Nest</span>
                </div>

                <p className="mt-1 hidden text-[8px] font-medium uppercase tracking-[0.25em] text-white/50 sm:block">
                  Find your place
                </p>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
              {navLinks.map((link) => {
                // Determines whether the current navigation link is active.
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group relative py-3 text-[11px] font-semibold tracking-[0.12em] transition-colors duration-300 ${isActive ? "text-blue-400" : "text-white/75 hover:text-white"}`}
                  >
                    {link.name}

                    {/* Active / Hover Line */}

                    <span
                      className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-400 transition-all duration-300 ${isActive ? "w-5" : "w-0 group-hover:w-5"}`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* =================================================
                RIGHT SIDE ACTIONS
            ================================================= */}

            <div className="hidden items-center gap-2 md:flex">
              {/* Search */}

              <motion.button
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="group flex h-10 w-10 items-center justify-center rounded-full text-xl text-white/80 transition duration-300 hover:bg-white/10 hover:text-blue-400"
                aria-label="Search properties"
              >
                <CiSearch className="transition-transform duration-300 group-hover:scale-110" />
              </motion.button>

              {/* Divider */}

              <span className="mx-1 h-6 w-px bg-white/15" />

              {/* Login / Account */}

              {!loggedIn ? (
                <motion.button
                  type="button"
                  onClick={() => setLoginOpen(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:border-blue-400/50 hover:bg-white/5"
                >
                  <CiUser className="text-lg" />
                  <span>Sign In</span>
                </motion.button>
              ) : (
                // Logout button shown when the user is logged in.
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    localStorage.removeItem("loggedIn");
                    window.location.reload();
                  }}
                  className="rounded-full border border-white/20 px-4 py-2 text-[10px] font-semibold tracking-[0.12em] text-white transition duration-300 hover:border-blue-400 hover:bg-blue-500"
                >
                  LOGOUT
                </motion.button>
              )}

              {/* =================================================
                  EXPLORE PROPERTIES CTA
              ================================================= */}

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="ml-1"
              >
                <Link
                  to="/projects"
                  className="group flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-[10px] font-bold tracking-[0.08em] text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-600"
                >
                  <span>EXPLORE PROPERTIES</span>

                  {/* Arrow moves slightly to the right on hover. */}

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <motion.button
              type="button"
              whileTap={{ scale: 0.88 }}
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-3xl text-white transition duration-300 hover:bg-white/10 hover:text-blue-400 md:flex lg:hidden"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  // Close icon shown when the mobile menu is open.
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <HiX />
                  </motion.span>
                ) : (
                  // Menu icon shown when the mobile menu is closed.
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <HiMenu />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-2xl md:hidden"
              >
                <nav className="px-5 py-4">
                  {/* Mobile Links */}

                  {navLinks.map((link, index) => {
                    // Determines the active mobile navigation link.
                    const isActive = location.pathname === link.path;

                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: index * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          onClick={closeMenu}
                          className={`flex items-center justify-between border-b border-white/10 py-4 text-sm font-semibold tracking-wide transition ${isActive ? "text-blue-400" : "text-white/80 hover:text-blue-300"}`}
                        >
                          <span>{link.name}</span>

                          {/* Active indicator for the current page. */}

                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Mobile CTA */}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-5"
                  >
                    <Link
                      to="/projects"
                      onClick={closeMenu}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
                    >
                      <span>Explore Properties</span>
                      <span>→</span>
                    </Link>
                  </motion.div>

                  {/* Mobile Actions */}

                  <div className="flex items-center gap-3 pt-4">
                    {/* Search */}

                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.9 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white/80 transition hover:bg-white/10 hover:text-blue-400"
                      aria-label="Search"
                    >
                      <CiSearch />
                    </motion.button>

                    {/* Login */}

                    {!loggedIn ? (
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          setOpen(false);
                          setLoginOpen(true);
                        }}
                        className="flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-xs font-semibold text-white transition hover:border-blue-400/50 hover:bg-white/5"
                      >
                        <CiUser className="text-lg" />
                        Sign In
                      </motion.button>
                    ) : (
                      // Logout button for logged-in users on mobile.
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          localStorage.removeItem("loggedIn");
                          window.location.reload();
                        }}
                        className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-white transition hover:bg-blue-500"
                      >
                        LOGOUT
                      </motion.button>
                    )}
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>

      {/* =====================================================
          LOGIN / REGISTER MODALS
      ===================================================== */}

      <AnimatePresence>
        {/* Login modal is displayed when loginOpen is true. */}

        {loginOpen && (
          <Login
            onClose={() => setLoginOpen(false)}
            onRegisterOpen={() => {
              // Switch from the login modal to the registration modal.
              setLoginOpen(false);
              setRegisterOpen(true);
            }}
          />
        )}

        {/* Registration modal is displayed when registerOpen is true. */}

        {registerOpen && (
          <Register
            onClose={() => setRegisterOpen(false)}
            onLoginOpen={() => {
              // Switch from the registration modal back to the login modal.
              setRegisterOpen(false);
              setLoginOpen(true);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { CiUser, CiSearch } from "react-icons/ci";
// import { HiMenu, HiX } from "react-icons/hi";
// import { AnimatePresence } from "framer-motion";

// import Login from "../pages/Login";
// import Register from "../pages/Register";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [registerOpen, setRegisterOpen] = useState(false);

//   return (
//     <header className="w-full bg-black/85 backdrop-blur-xl text-white py-7 sticky top-0 left-0 z-50">
//       <div className="container mx-auto px-4 flex items-center justify-between md:px-6 lg:px-10">
//         {/* MOBILE LEFT MENU BUTTON */}
//         <div className="flex items-center gap-4 md:hidden">
//           <button className="text-2xl" onClick={() => setOpen(!open)}>
//             {open ? <HiX /> : <HiMenu />}
//           </button>
//         </div>

//         {/* DESKTOP  LOGO */}
//         <div className="flex items-center gap-2 text-3xl font-semibold">
//           <span className="text-blue-500">Urban</span>
//           <span className="text-white">Nest</span>
//         </div>

//         {/* DESKTOP NAV LINKS */}
//         <nav className="hidden md:flex items-center gap-10 font-semibold lg:flex">
//           <Link to="/" className="hover:text-gray-300">
//             HOME
//           </Link>
//           <Link to="/about" className="hover:text-gray-300">
//             ABOUT
//           </Link>
//           <Link to="/projects" className="hover:text-gray-300">
//             PROJECTS
//           </Link>
//           <Link to="/testimonials" className="hover:text-gray-300">
//             TESTIMONIALS
//           </Link>
//           <Link to="/contact" className="hover:text-gray-300">
//             CONTACT US
//           </Link>
//         </nav>

//         {/* DESKTOP RIGHT ICONS */}
//         <div className="hidden md:flex items-center gap-6 text-xl lg:flex">
//           {/* SEARCH ICON */}
//           <button >
//             <CiSearch className="hover:text-gray-300 cursor-pointer" />
//           </button>

//           {/* LOGIN */}
//           <button onClick={() => setLoginOpen(true)}>
//             <CiUser className="hover:text-gray-300 cursor-pointer" />
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       {open && (
//         <div className="md:hidden lg:hidden bg-[#2f2f2f] mt-4 pb-4">
//           <nav className="flex flex-col gap-4 px-6 text-sm font-semibold">
//             <Link
//               onClick={() => setOpen(false)}
//               to="/"
//               className="hover:text-gray-300"
//             >
//               HOME
//             </Link>

//             <Link
//               onClick={() => setOpen(false)}
//               to="/about"
//               className="hover:text-gray-300"
//             >
//               ABOUT
//             </Link>

//             <Link
//               onClick={() => setOpen(false)}
//               to="/projects"
//               className="hover:text-gray-300"
//             >
//               PROJECTS
//             </Link>

//             <Link
//               onClick={() => setOpen(false)}
//               to="/testimonials"
//               className="hover:text-gray-300"
//             >
//               TESTIMONIALS
//             </Link>

//             <Link
//               onClick={() => setOpen(false)}
//               to="/contact"
//               className="hover:text-gray-300"
//             >
//               CONTACT US
//             </Link>

//             {/* MOBILE ICONS */}
//             <div className="flex items-center gap-6 pt-2 text-lg pe-3 ps-3">
//               <Link to="/search">
//                 <CiSearch className="hover:text-gray-300" />
//               </Link>

//               <button onClick={() => setLoginOpen(true)}>
//                 <CiUser className="hover:text-gray-300" />
//               </button>
//             </div>
//           </nav>
//         </div>
//       )}

//       {/* LOGIN & REGISTER SLIDE PANELS */}
//       <AnimatePresence>
//         {loginOpen && (
//           <Login
//             onClose={() => setLoginOpen(false)}
//             onRegisterOpen={() => {
//               setLoginOpen(false);
//               setRegisterOpen(true);
//             }}
//           />
//         )}

//         {registerOpen && (
//           <Register
//             onClose={() => setRegisterOpen(false)}
//             onLoginOpen={() => {
//               setRegisterOpen(false);
//               setLoginOpen(true);
//             }}
//           />
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser, CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";

import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const loggedIn = localStorage.getItem("loggedIn") === "true";
  //

  return (
    <header className="w-full bg-black/85 backdrop-blur-xl text-white py-7 sticky  top-0 left-0 z-40">
      <div className="container mx-auto px-4 flex items-center justify-between md:px-6 lg:px-10">
        <div className="flex items-center gap-4 md:hidden">
          <button className="text-2xl" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div className="flex items-center gap-2 text-3xl font-semibold">
          <span className="text-blue-500">Urban</span>
          <span className="text-white">Nest</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 font-semibold lg:flex">
          <Link to="/" className="hover:text-gray-300">
            HOME
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            ABOUT
          </Link>
          <Link to="/projects" className="hover:text-gray-300">
            PROJECTS
          </Link>
          <Link to="/testimonials" className="hover:text-gray-300">
            TESTIMONIALS
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            CONTACT US
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-6 text-xl lg:flex">
          <button>
            <CiSearch className="hover:text-gray-300 cursor-pointer" />
          </button>

          {!loggedIn ? (
            <button onClick={() => setLoginOpen(true)}>
              <CiUser className="hover:text-gray-300 cursor-pointer" />
            </button>
          ) : (
            <button
              className="cursor-pointer"
              onClick={() => {
                localStorage.removeItem("loggedIn");
                window.location.reload();
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {open && (
        <div className="md:hidden lg:hidden bg-[#2f2f2f] mt-4 pb-4">
          <nav className="flex flex-col gap-4 px-6 text-sm font-semibold">
            <Link
              onClick={() => setOpen(false)}
              to="/"
              className="hover:text-gray-300"
            >
              HOME
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/about"
              className="hover:text-gray-300"
            >
              ABOUT
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/projects"
              className="hover:text-gray-300"
            >
              PROJECTS
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/testimonials"
              className="hover:text-gray-300"
            >
              TESTIMONIALS
            </Link>
            <Link
              onClick={() => setOpen(false)}
              to="/contact"
              className="hover:text-gray-300"
            >
              CONTACT US
            </Link>

            <div className="flex items-center gap-6 pt-2 text-lg pe-3 ps-3">
              <CiSearch className="hover:text-gray-300" />

              {!loggedIn ? (
                <button onClick={() => setLoginOpen(true)}>
                  <CiUser className="hover:text-gray-300" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    localStorage.removeItem("loggedIn");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          </nav>
        </div>
      )}

      <AnimatePresence>
        {loginOpen && (
          <Login
            onClose={() => setLoginOpen(false)}
            onRegisterOpen={() => {
              setLoginOpen(false);
              setRegisterOpen(true);
            }}
          />
        )}

        {registerOpen && (
          <Register
            onClose={() => setRegisterOpen(false)}
            onLoginOpen={() => {
              setRegisterOpen(false);
              setLoginOpen(true);
            }}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

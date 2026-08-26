import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import TestimonialPage from "./pages/TestimonialPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <Navbar />

      <AnimatedRoutes />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

/* =====================================================
   SCROLL TO TOP
===================================================== */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => { 
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

/* =====================================================
   ROUTES
===================================================== */

function AnimatedRoutes() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <main
      className={
        isHomePage ? "min-h-screen" : "min-h-screen pt-[0px] sm:pt-[0px]"
      }
    >
      <PageTransition key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/projects" element={<ProjectsPage />} />

          <Route path="/project/:id" element={<ProjectDetailsPage />} />

          <Route path="/testimonials" element={<TestimonialPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </PageTransition>
    </main>
  );
}











/*
How could you even think that I would forget you....?
Even when we didn’t talk for such a long time in between all i had was just a hope that maybe someday i would get to talk to you again
or maybe i wouldn’t even then i didn’t forget you...and i never gave anyone else your place in my life......

And now we haven’t talked for just some days and the only reason i haven’t been able to talk to you is because of my brother......

He told me that if i talk to you without telling him... he’ll call or message you.... and i know he’ll just abuse you....or ye m nhi chahti ki tujhe vo kuch bhi glt kahe.....
fight with you.... or fir sb bigad jyga...m kitna bhi fir thik krne ka try kr lu..vo thik nhi hoga...... in the end i’m the one who gets stuck in between everything......

And after all that you so easily said that I had forgotten you...
Even after i explained everything to you i still thought that at least you would try to understand me....

I thought that at least i had one person in my life with whom i had a genuinely deep connection...... i thought i had found a genuine friendship..... a genuine bond....
that kind of connection which wouldn’t be affected by these small things or little problems....
pr syd mene hi jyda soch liye....i know i'm overthink...pr mujhe sch m lga tha ki tujhe smjhaungi to tu km se km try krega smjhne ka..or ye sb ko dosti k bich nhi layga...

And what do you think....???? M khush hu bht ...bs vo 2-4 snap kya bna liye hste huye tujhe lgta h mujhe to frk hi nhi pdta ...syd isliye hi na tune kh diya ...m bhul gyi .. 
but That i have a whole crowd of people around me... so if i’m not talking to one person... it doesn’t matter to me....ye hi lgta h na teko....????

You have people to talk to...... you can message whoever you want.... talk to whoever you want.... you have your work to keep you busy.... and your time passes somehow....
or bta nhi kis kis aatu jhatu si ldkiyo ko tu dma dm msg krta rhta h ....

But i don’t have anyone to talk to.....
And i can’t keep telling you this every time ..... that i don’t have anyone i can talk to besides you....
ye baat tu ache se janta h .....pr fir bhi tune kh diya.. or agr tu sochta h ye ..to fir kya mtlb ...jo tu dost khta h meko...kya mtlb dosti ka...???

Maybe i can never properly explain how important you are to me.... or how much you matter to me.... i don’t think i’ll ever be able to explain what this friendship truly means to me..... 
or where it stands in my life..... and maybe you’ll never fully understand it either....m nhi janti ki .jitni ye sb chij mere liye matter krti h..tere liye bhi krti h yaa nhi...
please don’t take this the wrong way....

Not talking for a few days isn’t going to change anything from my side..... the place you have in my life.. ye dosti....ye bond..ye connection jo tere sath h ......
 none of that is going to change just because we couldn’t talk for a few days...  mere lye bhi ye sb aasan nhi h...

But maybe i’m not sure about things from your side.....
And maybe that’s okay too....
m tujhe jabardasti is friendship m ..apne sath rhne ko force kr rhi..or na hi kbhi aage krungi .....

m ye sb tujhse nhi khti..but agr nhi khti to..or jyda overthink krti....
or overthink krti to..maybe tujh pr doubt krti..or m krna nhi chahti iittu sa bhi tujh pr doubt ......

Because when i say i trust you...i mean it with my whole heart..... you probably don’t know how much friendship and relations mean to me...
You might think i’m stupid... nerdy... or whatever you want to think about me… but if i’ve told you that i trust you then i truly mean it.... 

*/

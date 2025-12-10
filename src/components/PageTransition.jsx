import { AnimatePresence, motion } from "framer-motion"; // Framer Motion for animations
import { useLocation } from "react-router-dom"; // To get current route location

// PageTransition component wraps around pages to animate route changes
export default function PageTransition({ children }) {
  const location = useLocation(); // Get current URL path to trigger animation on route change

  return (
    // AnimatePresence handles mounting and unmounting animations of child components
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname} // Key ensures animation runs on every route change
        initial={{ opacity: 0, y: 30 }} // Initial state when component enters
        animate={{ opacity: 1, y: 0 }} // Animate to this state
        exit={{ opacity: 0, y: -30 }} // Animate when component leaves
        transition={{ duration: 0.45, ease: "easeOut" }} // Duration and easing of the animation
      >
        {children} {/* Render the page content */}
      </motion.div>
    </AnimatePresence>
  );
}

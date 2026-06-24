import { motion } from "framer-motion";
import EmbersTransition from "./EmbersTransition";
import "../styles/PageTransition.css";

const FADE_DURATION = 0.25;
const EMBER_HOLD = 0.3;

const contentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: FADE_DURATION, delay: EMBER_HOLD, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: FADE_DURATION, ease: "easeIn" },
  },
};

const veilVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 0,
    transition: { duration: FADE_DURATION, delay: EMBER_HOLD, ease: "easeOut" },
  },
  exit: {
    opacity: 1,
    transition: { duration: FADE_DURATION, ease: "easeIn" },
  },
};

function PageTransition({ children }) {
  return (
    <motion.div
      className="page-transition"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="page-transition-content" variants={contentVariants}>
        {children}
      </motion.div>
      <motion.div className="page-transition-veil" variants={veilVariants}>
        <EmbersTransition />
      </motion.div>
    </motion.div>
  );
}

export default PageTransition;

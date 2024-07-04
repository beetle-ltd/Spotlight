import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Logo from "./logo";

const loadingContainer = {
  width: "100lvw",
  height: "100lvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000",
  overflow: "hidden",
};

const loadingCircle = {
  fill: "none",
  stroke: "#FEFD00",
  strokeWidth: "0.5rem",
  strokeLinecap: "round",
};

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 15000);
    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const circleVariants = {
    initial: { pathLength: 0, rotate: 0 },
    animate: {
      pathLength: 1,
      rotate: 360,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        rotate: { duration: 2, ease: "linear", repeat: Infinity },
      },
    },
  };

  const logoVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1, duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          style={loadingContainer}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            initial="initial"
            animate="animate"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              // @ts-ignore
              style={loadingCircle}
              variants={circleVariants}
            />
            <motion.g variants={logoVariants}>
              <Logo url="/" />
            </motion.g>
          </motion.svg>

          <motion.div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle, transparent 60%, #000 100%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Page;

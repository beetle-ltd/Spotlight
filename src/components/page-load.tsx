import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import Logo from "./logo";

const loadingContainer = {
  width: "100lvw",
  height: "100lvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000",
};

const loadingCircle = {
  fill: "#FEFD00",
  stroke: "#000000",
  strokeWidth: "0.5rem",
};

// const loadingPiece = {
//   fillOpacity: 1,
// };

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simulating a delay to showcase the loading screen
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          style={loadingContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
              variants={{
                initial: { scale: 0 },
                animate: { scale: 1, transition: { delay: 0.2 } },
              }}
              style={loadingCircle}
            />
            <Logo url="/" />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Page;

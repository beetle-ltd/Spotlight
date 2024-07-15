import apple from "@/assets/apple.svg";
import bloomApp from "@/assets/bloom.png";
import playStore from "@/assets/playstore.svg";
import { motion } from "framer-motion";

const Bloom = () => {
  return (
    <motion.div
      className="bg-black w-full xl:w-[90%] mx-auto rounded-tr-[20px] rounded-tl-[20px] py-8 md:h-[500px] mb-[.5px] xl:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col md:flex-row gap-x-5 justify-between items-center text-white w-[80%] mx-auto h-full">
        <motion.div
          className="flex flex-col gap-y-6 md:gap-y-10 max-w-[600px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            Got a business or brand?
          </h1>
          <p className="text-lg md:text-xl">
            Download the <span className="text-[#8C52FF]">Bloom</span> app and
            get your customized spotlight page immediately.
          </p>
          <div className="flex gap-4 md:gap-x-5">
            <DownloadButton text="Get on iPhone" icon={apple} />
            <DownloadButton text="Get on Android" icon={playStore} />
          </div>
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0 md:absolute md:-bottom-10 md:right-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <img
            src={bloomApp}
            alt="Bloom mobile app"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const DownloadButton = ({ icon, text }) => {
  return (
    <motion.button
      className="appearance-none bg-white rounded-lg text-black flex gap-x-2 items-center font-bold px-3 py-4 w-full sm:w-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={icon} alt={text} className="w-6 h-6" />
      <span className="text-sm xl:text-base">{text}</span>
    </motion.button>
  );
};

export default Bloom;

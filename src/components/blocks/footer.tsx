/* eslint-disable no-irregular-whitespace */
import { Container } from "@/App";
import SpotlightLogoWhite from "../../assets/spotlight-white.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = ({ isLanding }: { isLanding?: boolean }) => {
  return (
    <footer className="py-5 bg-black text-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0">
          <Link to={"/"}>
            <div className="flex items-center gap-x-3 order-1 md:order-1">
              {!isLanding && <span className="text-xs">Powered By</span>}
              <img
                src={SpotlightLogoWhite}
                alt="white variant of the spotlight logo"
                className="mb-1 h-5 md:h-6" // Adjust height as needed
              />
            </div>
          </Link>

          <div className="flex items-center gap-x-3 order-2 md:order-3">
            <a
              href=" https://www.instagram.com/use_spotlight?igsh=MWVlcHVsdTMxcmZiMg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-lg md:text-xl hover:text-gray-300 cursor-pointer" />
            </a>
            <a
              href="https://x.com/use_spotlight?t=WPqJIzA0vmnQNYjHtOZEig&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-lg md:text-xl hover:text-gray-300 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/company/usespotlight/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg md:text-xl hover:text-gray-300 cursor-pointer" />
            </a>
          </div>

          <div className="text-xs md:text-sm text-center order-3 md:order-2">
            Copyright © 2024 Beetle Ltd. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

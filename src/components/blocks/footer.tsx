import { Container } from "@/App";
import SpotlightLogoWhite from "../../assets/spotlight-white.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="py-5 bg-black text-white">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <span className="text-xs">Powered By</span>
            <img
              src={SpotlightLogoWhite}
              alt="white variant of the spotlight logo"
              className="mb-1"
            />
          </div>
          <div className="flex items-center gap-x-3">
            <FaInstagram />
            <FaLinkedin />
            <FaXTwitter />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

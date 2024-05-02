import { Link } from "react-router-dom";
import LogoImg from "../assets/logo_test.svg";

const Logo: React.FC = () => {
  return (
    <>
      <Link to={"/"}>
        <img src={LogoImg} alt="spotlight logo" className="w-28" />
      </Link>
    </>
  );
};

export default Logo;

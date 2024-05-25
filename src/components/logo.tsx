import { Link } from "react-router-dom";
import LogoImg from "../assets/logo_test.svg";

type TLogoProps = {
  url: string;
};
const Logo: React.FC<TLogoProps> = ({ url }) => {
  return (
    <>
      <Link to={url}>
        <img src={LogoImg} alt="spotlight logo" className="w-28 sm:w-30" />
      </Link>
    </>
  );
};

export default Logo;

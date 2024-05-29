import { Link } from "react-router-dom";
import LogoImg from "../assets/Horizontally stacked black text and yellow-black icon 2.svg";

type TLogoProps = {
  url: string;
};
const Logo: React.FC<TLogoProps> = ({ url }) => {
  return (
    <>
      <Link to={url}>
        <img src={LogoImg} alt="spotlight logo" className="w-28 sm:w-32" />
      </Link>
    </>
  );
};

export default Logo;

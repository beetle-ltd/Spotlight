import { Link } from "react-router-dom";

type TLogoProps = {
  url: string;
};
const Logo: React.FC<TLogoProps> = ({ url }) => {
  return (
    <>
      <Link to={url}>
        {/* <img src={LogoImg} alt="spotlight logo" className="w-28 sm:w-30" /> */}
        {/* {} */}
        <h1 className="text-base font-semibold">Spotlight.</h1>
      </Link>
    </>
  );
};

export default Logo;

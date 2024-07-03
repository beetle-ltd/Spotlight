import Logo from "@/components/logo.tsx";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className={
        "w-full h-lvh flex flex-col space-y-10 items-center justify-center"
      }
    >
      <Logo url={"#"} />
      <h1 className="text-2xl md:text-4xl">Welcome to Spotlight!</h1>
      <p>
        Explore Products on Spotlight{" "}
        <Link to={"/explore"} className={"text-blue-500"}>
          /explore
        </Link>
      </p>
    </div>
  );
};

export default LandingPage;

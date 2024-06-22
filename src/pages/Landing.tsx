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
      <h1>Welcome to Spotlight!</h1>
      <p>
        visit a store e.g{" "}
        <Link to={"/ttreasures"} className={"text-blue-500"}>
          /ttreasures
        </Link>
      </p>
    </div>
  );
};

export default LandingPage;

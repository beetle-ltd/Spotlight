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
        <Link to={"/hayes-clothing"} className={"text-blue-500"}>
          /hayes-clothing
        </Link>
      </p>
    </div>
  );
};

export default LandingPage;

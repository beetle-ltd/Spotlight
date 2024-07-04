import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NoPageFoundSvg from "../assets/empty_states/404.svg";

function Page404() {
  return (
    <div className="px-2 flex flex-col justify-center items-center h-dvh text-center gap-y-10">
      <div className="space-y-3">
        <h1 className="text-7xl sm:text-9xl font-bold m-0">404</h1>
        <p className="text-md sm:text-lg text-gray-500">
          You seem lost, click the button below to go back to the home page
        </p>
      </div>
      <Button size={"lg"} className="rounded-full z-50">
        <Link to="/">Go Home</Link>
      </Button>
      <div className="max-h-[500px] pt-5 -m-24">
        <img
          src={NoPageFoundSvg}
          alt="page_not_found"
          className="max-w-full max-h-full"
        />
      </div>
    </div>
  );
}

export default Page404;

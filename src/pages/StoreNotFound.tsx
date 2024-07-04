import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NoStoreSvg from "../assets/empty_states/store.svg";

function StoreNotFound() {
  return (
    <div className="px-2 flex flex-col justify-center items-center h-dvh text-center gap-y-7 sm:gap-y-10">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Oops! This store does not exist
        </h1>
        <p className="text-md sm:text-lg text-gray-500">
          Try inputting the store username correctly
        </p>
      </div>
      <Button size={"lg"} className="rounded-full">
        <Link to="/">Go Home</Link>
      </Button>
      <div className="max-h-[500px] pt-5">
        <img
          src={NoStoreSvg}
          alt="store_not_found"
          className="max-w-full max-h-full"
        />
      </div>
    </div>
  );
}

export default StoreNotFound;

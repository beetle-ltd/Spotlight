import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function StoreNotFound() {
  return (
    <div className="px-2 flex flex-col justify-center items-center h-dvh text-center gap-y-10">
      <h1 className="text-4xl font-bold m-0">
        Oops You're are searching the wrong store
      </h1>
      <p className="text-md sm:text-lg">
        {`This store does not exist try inputing the store username correctly`}
      </p>
      <Button size={"lg"}>
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}

export default StoreNotFound;

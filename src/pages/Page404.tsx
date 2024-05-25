import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh text-center gap-y-10">
      <h1 className="text-5xl font-bold m-0">Page 404</h1>
      <p className="text-lg">
        You seem to be lost click the link below to go back to the home page
      </p>
      <Button size={"lg"}>
        <Link to="/hayes-clothing">Go Home</Link>
      </Button>
    </div>
  );
}

export default Page404;

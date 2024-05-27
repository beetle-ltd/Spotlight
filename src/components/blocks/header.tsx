import { FaRegCompass } from "react-icons/fa";
import Logo from "../logo";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="w-full flex justify-between items-center py-5 sm:py-10">
      <Logo url="/" />
      <Link to={"/explore"}>
        <Button
          className="flex items-center justify-end gap-x-2"
          variant="ghost"
        >
          {/* <SearchBar /> */}
          <FaRegCompass size={24} className="cursor-pointer" />
          <p className="hidden sm:block text-xs sm:text-sm">Explore</p>
        </Button>
      </Link>
    </div>
  );
}

export default Header;

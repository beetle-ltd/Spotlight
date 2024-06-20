import { FaRegCompass } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ShopLogo from "../shop-logo";
import { SearchIcon } from "lucide-react";

type THeaderProps = {
  logoImg: string;
  name: string;
};

function Header({ logoImg, name }: THeaderProps) {
  return (
    <div className="w-full flex justify-between items-center py-5">
      <ShopLogo logoImg={logoImg} alt="Shop logo" size="sm" />

      {/* Search Bar */}
      <div
        id="search__bar"
        className="w-[60%] md:max-w-[800px] flex items-center gap-x-5 mx-auto border hover:border-gray-300 rounded-full border-gray-200 py-3 px-4"
      >
        <input
          type="search"
          name="search"
          id=""
          placeholder={`Search ${name} Stores`}
          className="appearance-none bg-transparent w-full h-full outline-none text-xs"
        />
        <SearchIcon className="text-gray-200 hover:text-gray-300 cursor-pointer" />
      </div>

      {/* Explore Button  */}
      <Link to={"/explore"}>
        <Button
          className="flex items-center gap-x-2 rounded-full px-5 "
          variant="default"
        >
          <FaRegCompass
            size={18}
            className="cursor-pointer hidden sm:block mb-[0.5px]"
          />
          <p className="block text-xs sm:text-sm">Explore</p>
        </Button>
      </Link>
    </div>
  );
}

export default Header;

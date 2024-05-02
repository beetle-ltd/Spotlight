import { FaRegCompass } from "react-icons/fa";
import Logo from "../logo";
import SearchBar from "../searchbar";

function Header() {
  return (
    <div className="w-full flex items-center py-5">
      <Logo />
      <div className="flex flex-1 items-center justify-end gap-x-6">
        <SearchBar />
        <FaRegCompass size={24} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;

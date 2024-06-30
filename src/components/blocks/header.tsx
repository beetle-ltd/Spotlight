import { Container } from "@/App";
import { useSearch } from "@/hooks/use-search";
import { debounce } from "lodash";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaRegCompass } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShopLogo from "../shop-logo";
import { Button } from "../ui/button";

type THeaderProps = {
  logoImg: string;
  name: string;
};

function Header({ logoImg, name }: THeaderProps) {
  const { setSearchTerm } = useSearch();
  const [inputVal, setInputVal] = useState<string>("");
  const [scrolled, setScrolled] = useState(true);

  // Create a debounced version of setSearchTerm
  const debouncedSetSearchTerm = debounce((value: string) => {
    setSearchTerm(value);
  }, 300);

  // Update the debounced search term whenever inputVal changes
  useEffect(() => {
    debouncedSetSearchTerm(inputVal);
    // Cleanup function to cancel the debounce on unmount
    return () => {
      debouncedSetSearchTerm.cancel();
    };
  }, [inputVal, debouncedSetSearchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  };

  return (
    <div
      className={`fixed left-0 bg-white w-full z-20 py-2 md:py-5  ${
        scrolled && "border-b border-gray-100"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <ShopLogo logoImg={logoImg} alt="Shop logo" size="sm" />

          {/* Search Bar */}
          <div
            id="search__bar"
            className="w-[60%] md:max-w-[800px] flex items-center gap-x-5 mx-auto border hover:border-gray-400 rounded-full border-gray-300 py-3 px-4"
          >
            <input
              type="search"
              name="search"
              id="search__input"
              value={inputVal}
              placeholder={`Search ${name} Stores`}
              className="appearance-none bg-transparent w-full h-full outline-none text-xs"
              onChange={handleSearchChange}
            />
            <SearchIcon className="text-gray-300 hover:text-gray-400 cursor-pointer" />
          </div>

          {/* Explore Button  */}
          <Link to={"/explore"}>
            <Button
              className="flex items-center gap-x-2 rounded-full p-3 sm:px-5 "
              variant="default"
            >
              <FaRegCompass
                size={18}
                className="cursor-pointer block mb-[0.5px]"
              />
              <p className="hidden sm:block text-xs sm:text-sm">Explore</p>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Header;

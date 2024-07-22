import { IoSearchOutline } from "react-icons/io5";
import spotlightMobile from "@/assets/spotlight_mobile.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem("searchTerm", searchText);
    navigate("/explore");
  };
  return (
    <div className="w-full h-auto xl:h-[90dvh] py-12 xl:py-32 flex justify-between">
      <div className="w-full max-w-[700px] flex flex-col gap-y-10 pt-20 xl:pt-40">
        <p className="text-6xl text-center xl:text-left xl:text-7xl font-bold leading-[70px] xl:leading-[80px] ">
          Your&nbsp;
          <span className="relative">
            perfect
            <svg
              width="192"
              height="20"
              viewBox="0 0 192 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-2 left-0"
            >
              <path
                d="M4 16.2018C40.6548 8.94344 128.772 -2.96031 188 7.49176"
                stroke="#FEFD00"
                stroke-width="6.53254"
                stroke-linecap="round"
              />
            </svg>
          </span>
          shopping{" "}
          <span className="relative">
            experience
            <svg
              width="54"
              height="39"
              viewBox="0 0 54 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-3 -right-7"
            >
              <path
                d="M1.53328 8.40954C1.99326 6.62156 2.10826 6.17457 4.02486 6.45394C5.94146 6.7333 6.13312 19.4913 5.94146 24.3338C5.68592 25.9169 4.67651 29.139 2.68324 29.3625C0.689976 29.586 0.0638867 27.2206 0 26.01C0.319433 20.8882 1.0733 10.1975 1.53328 8.40954Z"
                fill="#FEFD00"
              />
              <path
                d="M50.6497 25.1065C51.9787 23.6886 52.3109 23.3341 50.8803 22.1171C49.4497 20.9001 37.8303 28.5045 33.5826 31.5821C32.3126 32.7278 30.0286 35.4136 31.053 36.9913C32.0774 38.5689 34.5949 37.5863 35.7255 36.8977C40.1465 33.5581 49.3207 26.5244 50.6497 25.1065Z"
                fill="#FEFD00"
              />
              <path
                d="M23.5269 3.35238C24.5692 1.0846 24.8298 0.517654 27.2809 1.25639C29.732 1.99513 26.8611 18.8483 25.4238 25.194C24.7004 27.2312 22.5848 31.2831 19.9099 31.1923C17.2349 31.1016 16.9909 27.8628 17.2032 26.2548C18.8768 19.5656 22.4846 5.62016 23.5269 3.35238Z"
                fill="#FEFD00"
              />
            </svg>
          </span>
        </p>
        <p className="text-center xl:text-justify text-lg xl:text-2xl">
          Spotlight is all about finding and flexing the dopest brands that vibe
          with your style.
        </p>
        <div className="flex items-center gap-x-10 w-full">
          <input
            type="text"
            name="explore"
            id="explore"
            placeholder="What do you want?"
            className="px-5 py-5 appearance-none border border-[#E6E6E6] rounded-full w-[90%] outline-none shadow-sm"
            value={searchText}
            onChange={handleSearchChange}
          />
          <button
            className="apperance-none bg-black rounded-full flex items-center gap-x-3 px-7 py-5 text-white shadow-lg"
            onClick={handleSearch}
          >
            <IoSearchOutline color="#fff" size={20} />
            Search
          </button>
        </div>
      </div>
      <div>
        <img
          src={spotlightMobile}
          alt=""
          width={"650px"}
          className="hidden xl:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;

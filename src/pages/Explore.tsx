// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/App";
import Footer from "@/components/blocks/footer";
import ErrorOccured from "@/components/error";
import Gallery from "@/components/gallery";
import SpinnerLoader from "@/components/loaders/spinner-loader";
import Logo from "@/components/logo";
import { BASE_URL } from "@/constants/api-constants.ts";
import { useRecommendedProducts } from "@/hooks/api/use-recommended-products";
import { useAutoComplete } from "@/hooks/use-autocomplete";
import axios from "axios";
import { useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

export default function Explore() {
  const {
    textValue,
    bindInput,
    bindOptionsKey,
    bindOptionsStores,
    bindOptionKey,
    bindOptionStore,
    isBusy,
    suggestions,
    setSuggestions,
    selectedIndex,
    isProductError,
    isProductLoading,
    productsByKeyword,
  } = useAutoComplete({
    // onChange: (value) => console.log(value),
    delay: 1000,
    source: async (search) => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/v1/stores/explore?name=${search}`
        );
        const keywords = await res.data.data.keywords;
        const stores = await res.data.data.stores;
        return {
          keywords,
          stores,
        };
      } catch (e) {
        return [];
      }
    },
  });

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSuggestions({
          keywords: [],
          stores: [],
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSuggestions]);

  const {
    data: store,
    isError,
    isLoading,
    error,
    refetch,
  } = useRecommendedProducts();

  if (isError || isProductError) {
    return <ErrorOccured error={error} onRetry={refetch} />;
  }

  if (isLoading || isProductLoading) {
    return <SpinnerLoader delay={0} timeout={15000} />;
  }
  const products = store?.data?.data;

  return (
    <div>
      <Container>
        <div className="">
          <div className="block py-5">
            <Logo url={"/"} />
          </div>
        </div>
      </Container>
      <div className="flex flex-col items-center justify-center gap-y-10 md:gap-y-20   py-5 md:py-10 h-[250px] md:min-h-[350px] sm:bg-[url('/src/assets/explore-header.png')] bg-cover bg-transparent backdrop-filter backdrop-blur-md ">
        <h1 className="flex items-center text-center md:gap-x-2 text-2xl md:text-4xl font-semibold max-w-[300px] md:max-w-full">
          Find products and brands you love
          <FaHeart className="hidden md:block" />
        </h1>
        <div
          ref={containerRef}
          className="flex items-center relative border bg-white border-gray-300 p-3 sm:p-4 w-[90%] md:w-[50%] mx-auto rounded-full text-gray-500"
        >
          <div className="w-full">
            <div className="flex items-center gap-x-2 w-full">
              <LuSearch size={20} />
              <input
                placeholder="Search"
                className="flex-grow outline-none bg-transparent"
                {...bindInput}
              />
            </div>
            {textValue && (
              <div className="shadow-lg w-full bg-white scroll-smooth absolute left-0 top-12 sm:top-14 z-20 max-h-[260px] overflow-x-hidden overflow-y-auto rounded-md">
                {isBusy && (
                  <div className="w-4 h-4 border-2 border-dashed rounded-full border-gray-500 animate-spin mx-auto my-5"></div>
                )}
                {suggestions.keywords && (
                  <ul {...bindOptionsKey} id="keywordsList">
                    {suggestions.keywords.map((_, index) => (
                      <li
                        className={
                          `flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-y gap-x-2 ` +
                          (selectedIndex === index && "bg-gray-200")
                        }
                        key={index}
                        id={`keywordListItem-${index}`}
                        {...bindOptionKey}
                      >
                        <LuSearch size={20} />
                        {suggestions.keywords[index].name}
                      </li>
                    ))}
                  </ul>
                )}
                {suggestions.stores && (
                  <ul {...bindOptionsStores} id="storesList">
                    {suggestions.stores.map((_, index) => (
                      <li
                        className={
                          `flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 gap-x-2 ` +
                          (selectedIndex === index && "bg-gray-200")
                        }
                        key={index}
                        id={`storeListItem-${index}`}
                        {...bindOptionStore}
                      >
                        <img
                          src={suggestions.stores[index].logo}
                          alt={suggestions.stores[index].name}
                          className={"w-6 h-6 rounded-full"}
                        />
                        {suggestions.stores[index].name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full min-h-[700px]  mx-auto pb-10 ">
        <div className="mx-auto w-full md:w-[90%]">
          {productsByKeyword &&
          productsByKeyword.data &&
          productsByKeyword?.data.length > 0 ? (
            <Gallery products={productsByKeyword?.data} />
          ) : (
            <Gallery products={products} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

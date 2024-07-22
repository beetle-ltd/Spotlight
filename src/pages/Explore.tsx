// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/App";
import Footer from "@/components/blocks/footer";
import ErrorOccured from "@/components/error";
import Gallery from "@/components/gallery";
import SpinnerLoader from "@/components/loaders/spinner-loader";
import Logo from "@/components/logo";
import { BASE_URL } from "@/constants/api-constants.ts";
import { useInfiniteRecommendedProducts } from "@/hooks/api/use-recommended-products";
import { useAutoComplete } from "@/hooks/use-autocomplete";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { FaHeart } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { useInView } from "react-intersection-observer";

export default function Explore() {
  const { ref, inView } = useInView();
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
    data,
    error,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteRecommendedProducts({
    staleTime: 5000,
    refetchInterval: 10000,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isError || isProductError) {
    return <ErrorOccured error={error} onRetry={refetch} />;
  }

  if (isLoading || isProductLoading) {
    return <SpinnerLoader delay={0} timeout={15000} />;
  }

  // const products = data?.pages[0]?.data.data;
  const products = data?.pages.flatMap((page) => page?.data?.data) || [];

  return (
    <div>
      <Container>
        <div className="block py-5">
          <Logo url="/" />
        </div>
      </Container>

      <div className="relative z-50 py-5 md:py-10 h-[250px] md:min-h-[350px] bg-[url('/src/assets/explore-header.png')] bg-cover ">
        {/* White blurred overlay for mobile only */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm md:hidden z-10"></div>

        <div className="relative w-full z-20 flex flex-col items-center justify-center gap-y-10 md:gap-y-20 ">
          <h1 className="flex items-center text-center md:gap-x-2 text-2xl md:text-4xl font-semibold max-w-[300px] md:max-w-full">
            Find products and brands you love
            <FaHeart className="hidden md:block text-red-500" />
          </h1>
          <div
            ref={containerRef}
            className="relative w-[90%] md:w-[50%] mx-auto z-50"
          >
            <div className="flex items-center border bg-white border-gray-300 p-3 sm:p-4 rounded-full text-gray-500">
              <LuSearch size={20} className="flex-shrink-0" />
              <input
                placeholder="Search"
                className="flex-grow outline-none bg-transparent ml-2"
                {...bindInput}
              />
            </div>
            {textValue && (
              <div
                className="shadow-lg w-full bg-white scroll-smooth absolute left-0 top-full mt-2 max-h-[260px] overflow-x-hidden overflow-y-auto rounded-xl z-10"
                style={{
                  zIndex: 99,
                }}
              >
                {isBusy && (
                  <div className="z-50 w-4 h-4 border-2 border-dashed rounded-full border-gray-500 animate-spin mx-auto my-5"></div>
                )}
                {suggestions.keywords && (
                  <ul {...bindOptionsKey} id="keywordsList">
                    {suggestions.keywords.map((keyword, index) => (
                      <li
                        className={`z-50 flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 gap-x-2 ${
                          selectedIndex === index ? "bg-gray-200" : ""
                        }`}
                        key={index}
                        id={`keywordListItem-${index}`}
                        {...bindOptionKey}
                      >
                        <LuSearch size={20} />
                        {keyword.name}
                      </li>
                    ))}
                  </ul>
                )}
                {suggestions.stores && (
                  <ul {...bindOptionsStores} id="storesList">
                    {suggestions.stores.map((store, index) => (
                      <li
                        className={`z-50 flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 gap-x-2 ${
                          selectedIndex === index ? "bg-gray-200" : ""
                        }`}
                        key={index}
                        id={`storeListItem-${index}`}
                        {...bindOptionStore}
                      >
                        <img
                          src={store.logo}
                          alt={store.name}
                          className="w-6 h-6 rounded-full"
                        />
                        {store.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full min-h-[700px] mx-auto pb-10 relative bg-transparent">
        <div className="mx-auto w-full md:w-[90%]">
          <Gallery
            products={
              productsByKeyword?.data?.length > 0
                ? productsByKeyword.data
                : products
            }
          />
        </div>
      </div>

      {(isFetchingNextPage || hasNextPage) && (
        <div ref={ref} className="w-full h-20 flex items-center justify-center">
          {isFetchingNextPage ? "Loading more..." : ""}
        </div>
      )}

      <Footer />
    </div>
  );
}

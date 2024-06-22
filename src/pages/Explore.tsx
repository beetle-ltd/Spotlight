/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/App";
import Footer from "@/components/blocks/footer";
import Gallery from "@/components/gallery";
import SpinnerLoader from "@/components/loaders/spinner-loader";
import Logo from "@/components/logo";
import { toast } from "@/components/ui/use-toast.ts";
import { BASE_URL } from "@/constants/api-constants.ts";
import { useAutoComplete } from "@/hooks/use-autocomplete";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaHeart } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";

interface InputDataValue {
  visits?: number;
  cat?: string[];
}

interface InputData {
  [key: string]: InputDataValue;
}
export default function Explore() {
  const storeUsername = localStorage.getItem("store_name") || "";
  const storeData: any = localStorage.getItem("storeData") || {};
  const PRODUCTS_PERPAGE = 100;

  const {
    textValue,
    bindInput,
    bindOptionsKey,
    bindOptionsStores,
    bindOptionKey,
    bindOptionStore,
    isBusy,
    suggestions,
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

  function transformData(
    inputData: InputData
  ): Array<{ username: string; visits?: number; categories?: string[] }> {
    // Check if inputData is empty
    if (Object.keys(inputData).length === 0) {
      return []; // Return an empty array if inputData is empty
    }

    return Object.entries(inputData).map(([key, value]) => ({
      username: key,
      visits: value?.visits,
      categories: value?.cat,
    }));
  }
  const fetchRecommendedProducts = async () => {
    const RECOMMENDED_URL = `${BASE_URL}/api/v1/stores/links/product-recommendations`;
    try {
      const postData = transformData(storeData);
      const response = await axios.post(RECOMMENDED_URL, {
        data: postData,
        page: 1,
        perPage: PRODUCTS_PERPAGE,
      });
      if (response.status === 200) {
        return response.data;
      } else {
        // If the status is not 200, throw an error
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching recommended products:", error);
      // Return a default value or rethrow the error
      return { error: "Failed to fetch recommended products" };
      // Alternatively, you could rethrow the error:
      // throw error;
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchRecommendedProducts"],
    queryFn: fetchRecommendedProducts,
  });

  if (error || isProductError) {
    toast({
      description: error.message,
    });
  }

  if (isLoading || isProductLoading) {
    return <SpinnerLoader delay={0} timeout={15000} />;
  }
  const store = data.data;
  const products = store.data;

  return (
    <div>
      <Container>
        <div className="">
          <div className="block py-5">
            <Logo url={`/${storeUsername}`} />
          </div>
        </div>
      </Container>
      <div className="flex flex-col items-center justify-center gap-y-10 py-10 max-h-[300px] bg-[url('/src/assets/explore-header.png')] bg-cover md:bg-center">
        <h1 className="flex items-center text-center md:gap-x-2 text-2xl md:text-4xl font-semibold">
          Find products and brands you love
          <FaHeart className="hidden md:block" />
        </h1>
        <div className="flex items-center relative border bg-white border-gray-300 p-3 sm:p-4 w-[90%] md:w-[50%] mx-auto rounded-full text-gray-500">
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
              <div className="shadow-lg w-full bg-white scroll-smooth absolute left-0 top-12 sm:top-14 z-20 max-h-[260px] overflow-x-hidden overflow-y-auto">
                {isBusy && (
                  <div className="w-4 h-4 border-2 border-dashed rounded-full border-gray-500 animate-spin mx-auto my-5"></div>
                )}
                {suggestions.keywords && (
                  <ul {...bindOptionsKey} id="keywordsList">
                    {suggestions.keywords.map((_, index) => (
                      <li
                        className={
                          `flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 ` +
                          (selectedIndex === index && "bg-gray-200")
                        }
                        key={index}
                        id={`keywordListItem-${index}`}
                        {...bindOptionKey}
                      >
                        <div className="flex items-center space-x-2">
                          <div>
                            <LuSearch size={20} />
                          </div>
                          <p className="text-sm">
                            {suggestions.keywords[index].name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {suggestions.stores && (
                  <ul {...bindOptionsStores} id="storesList">
                    {suggestions.stores.map((_, index) => (
                      <li
                        className={
                          `flex items-center h-[40px] p-2 hover:bg-gray-200 cursor-pointer py-2 ` +
                          (selectedIndex === index && "bg-gray-200")
                        }
                        key={index}
                        id={`storeListItem-${index}`}
                        {...bindOptionStore}
                      >
                        <div className="flex items-center space-x-2">
                          <div>
                            <img
                              src={suggestions.stores[index].logo}
                              alt={suggestions.stores[index].name}
                              className={"w-6 h-6 rounded-full"}
                            />
                          </div>
                          <p className="text-sm">
                            {suggestions.stores[index].name}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          <p>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-none px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </p>
        </div>
      </div>
      <div className="w-full mt-10 mx-auto pb-10 ">
        <div className="mx-auto w-full md:w-[90%]">
          {productsByKeyword &&
          // @ts-ignore
          productsByKeyword.data &&
          // @ts-ignore
          productsByKeyword?.data.length > 0 ? (
            // @ts-ignore
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

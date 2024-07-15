import { IProduct } from "@/models/Products";
import Product from "./products/product";
import NoProdImg from "../assets/empty_states/product_img.svg";
import NoProdVid from "../assets/empty_states/product_vid.svg";

type Props = {
  products: IProduct[];
  getNoResultsMessage?: () => string;
};

function Gallery({ products, getNoResultsMessage }: Props) {
  let noResultsMessage = "";
  if (getNoResultsMessage) {
    noResultsMessage = getNoResultsMessage();
  }

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center h-auto gap-y-3 py-10">
        <div className="w-[200px] mx-auto">
          {noResultsMessage?.includes("video") ? (
            <img src={NoProdVid} alt="" className="max-h-full " />
          ) : (
            <img src={NoProdImg} alt="" className="max-h-full " />
          )}
        </div>

        <div className="space-y-5 text-center">
          <p className="text-xl font-semibold text-gray-700 mb-2">
            {getNoResultsMessage && noResultsMessage}
          </p>
          <p className="text-gray-500">
            Please try adjusting your filters or search term.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 sm:gap-1 gap-x-[2px] gap-y-[1px]">
      {products.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </div>
  );
}

export default Gallery;

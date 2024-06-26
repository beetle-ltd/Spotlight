import { IProduct } from "@/models/Products";
import Product from "./products/product";

type Props = {
  products: IProduct[];
  getNoResultsMessage?: () => string;
};

function Gallery({ products, getNoResultsMessage }: Props) {
  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg shadow-inner">
        <svg
          className="w-16 h-16 text-gray-400 mb-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p className="text-xl font-semibold text-gray-700 mb-2">
          {getNoResultsMessage && getNoResultsMessage()}
        </p>
        <p className="text-gray-500">
          Please try adjusting your filters or search term.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 sm:gap-1 gap-x-[2px] gap-y-[1px]">
      {products.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </div>
  );
}

export default Gallery;

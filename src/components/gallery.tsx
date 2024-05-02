import { IProducts } from "./blocks/product-gallery";

type Props = {
  products: IProducts[];
};

function Gallery({ products }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-1 gap-[2px]">
      {products.map((item) => (
        <div
          key={item.id}
          className={`aspect-ratio w-[100%] bg-gray-200 overflow-hidden ${
            item.type === "video" ? "row-span-2 h-full" : "row-span-1"
          }`}
          style={{ aspectRatio: item.type === "video" ? "2/1" : "1/1" }} // Set aspect ratio based on type
        >
          {/* Replace with your actual content */}
          <div className="w-full h-full bg-gray-400 animate-pulse">
            {" "}
            {/* Dummy content with pulse animation */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

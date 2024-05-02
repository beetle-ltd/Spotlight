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
          className={`aspect-ratio w-[100%] bg-gray-200 overflow-hidden cursor-pointer ${
            item.type === "video"
              ? "row-span-2 col-span-1 bg-red-600"
              : "row-span-1"
          }`}
          style={{ aspectRatio: item.type === "video" ? "1/2" : "2/2" }} // Set aspect ratio based on type
        >
          {/* Replace with your actual content */}
          {/* <div className="w-full h-full bg-gray-400 animate-pulse">
          </div> */}
          <img
            src={item.link}
            className="h-full w-full object-cover transition-all hover:scale-105 aspect-[3/4]"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;

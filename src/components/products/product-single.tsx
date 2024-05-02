import { IoPricetag } from "react-icons/io5";
import { IProducts } from "../blocks/product-gallery";
import { ProductIcon } from "./product";

const ProductSingle = ({
  item,
  handleClick,
}: {
  item: IProducts;
  handleClick: (val: boolean) => void;
}) => {
  return (
    <div
      key={item.id}
      className={`relative aspect-ratio w-[100%] bg-gray-200 overflow-hidden cursor-pointer ${
        item.type === "video" ? "row-span-2" : "row-span-1"
      }`}
      style={{ aspectRatio: item.type === "video" ? "1/2" : "2/2" }}
      onClick={() => handleClick(true)}
    >
      {/* Replace with your actual content */}
      {/* <div className="w-full h-full bg-gray-400 animate-pulse">
          </div> */}
      <div className="flex items-center justify-center text-white text-xl gap-x-3 absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
        <IoPricetag />
        <p> &#8358;{item?.price || 50}</p>
      </div>
      <div className="absolute top-2 right-4">
        <ProductIcon type={item.type} />
      </div>
      <img
        src={item.link}
        className="h-full w-full object-cover transition-all hover:scale-105 aspect-[3/4]"
      />
    </div>
  );
};

export default ProductSingle;

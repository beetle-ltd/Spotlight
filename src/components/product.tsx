import { IoPricetag, IoVideocam } from "react-icons/io5";
import { PiImagesFill } from "react-icons/pi";
import { IProducts, TProductType } from "./blocks/product-gallery";

type Props = {
  item: IProducts;
};

function Product({ item }: Props) {
  return (
    <div
      key={item.id}
      className={`relative aspect-ratio w-[100%] bg-gray-200 overflow-hidden cursor-pointer ${
        item.type === "video" ? "row-span-2" : "row-span-1"
      }`}
      style={{ aspectRatio: item.type === "video" ? "1/2" : "2/2" }}
    >
      {/* Replace with your actual content */}
      {/* <div className="w-full h-full bg-gray-400 animate-pulse">
          </div> */}
      <div className="flex items-center justify-center text-white text-xl gap-x-3 absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
        <IoPricetag />
        <p>$50</p>
      </div>
      <div className="absolute top-2 right-4">
        <ProductIcon type={item.type} />
      </div>
      <img
        src={item.link}
        className="h-full w-full object-cover aspect-[3/4]"
      />
    </div>
  );
}

function ProductIcon({ type }: { type: TProductType }) {
  return (
    <div className="text-white text-xl">
      {type === "image" ? <PiImagesFill /> : <IoVideocam />}
    </div>
  );
}

export default Product;

import { useState } from "react";
import { IoPricetag, IoShareSocialOutline, IoVideocam } from "react-icons/io5";
import { PiImagesFill } from "react-icons/pi";
import { VscWand } from "react-icons/vsc";
import { IProducts, TProductType } from "./blocks/product-gallery";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

type Props = {
  item: IProducts;
};

function Product({ item }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
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
            <p> &#8358;{item?.price || 50}</p>
          </div>
          <div className="absolute top-2 right-4">
            <ProductIcon type={item.type} />
          </div>
          <img
            src={item.link}
            className="h-full w-full object-cover aspect-[3/4]"
          />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="py-5">
          <div className="w-full max-h-[70%]">
            <img src={item.link} className="h-full w-full object-cover" />
          </div>
          <div className="container">
            <h1 className="text-3xl font-semibold">{item?.title}</h1>
            <p className="text-[#222] text-lg leading-7 pb-1">
              {item?.description}
            </p>
            <div className="flex gap-2 text-[#031734]">
              {item.categories &&
                item?.categories.map((c, idx) => <p key={idx}>#{c}</p>)}
            </div>
            <div className="flex items-center text-[#222] font-semibold text-xl gap-x-3 py-5">
              <IoPricetag />
              <p> &#8358;{item?.price || 50}</p>
            </div>
            <div className="flex items-center justify-between">
              <Button className="items-center gap-3" size={"lg"}>
                <VscWand size={18} />
                Get business card
              </Button>
              <Button variant={"ghost"}>
                <IoShareSocialOutline size={30} />
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
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

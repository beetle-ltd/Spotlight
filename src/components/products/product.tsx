import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import { IoVideocam } from "react-icons/io5";
import { PiImagesFill } from "react-icons/pi";
import { IProducts, TProductType } from "../blocks/product-gallery";
import { Dialog, DialogContent } from "../ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import ProductDetails from "./product-details";
import ProductSingle from "./product-single";

type Props = {
  item: IProducts;
};

function Product({ item }: Props) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <ProductSingle item={item} handleClick={(val) => setOpen(val)} />
        <DialogContent className="sm:max-w-[825px] sm:max-h-[700px] p-0 ">
          <ProductDetails item={item} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <ProductSingle item={item} handleClick={(val) => setOpen(val)} />
      </DrawerTrigger>
      <DrawerContent>
        <ProductDetails item={item} />
      </DrawerContent>
    </Drawer>
  );
}

export function ProductIcon({ type }: { type: TProductType }) {
  return (
    <div className="text-white text-xl">
      {type === "image" ? <PiImagesFill /> : <IoVideocam />}
    </div>
  );
}

export default Product;

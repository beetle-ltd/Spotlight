import { useMediaQuery } from "@/hooks/use-media-query";
import { IProduct } from "@/models/Products";
import { AttachmentType } from "@/models/enums";
import { useState } from "react";
import { IoVideocam } from "react-icons/io5";
import { PiImagesFill } from "react-icons/pi";
import { Dialog, DialogContent } from "../ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import ProductDetails from "./product-details";
import ProductSingle from "./product-single";

type Props = {
  item: IProduct;
};

function Product({ item }: Props) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen} className="border-0">
        <ProductSingle item={item} handleClick={(val) => setOpen(val)} />
        <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
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

export function ProductIcon({
  type,
  size,
}: {
  type: AttachmentType;
  size: number;
}) {
  if (type === AttachmentType.PICTURE && size <= 1) {
    return;
  }
  return (
    <div className="text-white text-xl">
      {type === AttachmentType.PICTURE ? <PiImagesFill /> : <IoVideocam />}
    </div>
  );
}

export default Product;

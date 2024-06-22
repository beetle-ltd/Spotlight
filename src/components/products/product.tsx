import { useMediaQuery } from "@/hooks/use-media-query";
import notify, {
  TEvent,
} from "@/services/notification-service/notification.service";
import { IProduct } from "@/models/Products";
import { AttachmentType } from "@/models/enums";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { PiImagesFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
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
  const currentPath = location.pathname;
  const { storeName } = useParams();

  useEffect(() => {
    const handleNotify = async () => {
      if (open) {
        await notify(TEvent.VIEWED, {
          storeUsername:
            currentPath === "/explore" ? item.store.username : storeName,
          productId: item.id,
          productName: item.name,
        });
      }
    };

    handleNotify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <ProductSingle item={item} handleClick={(val) => setOpen(val)} />
        <DialogContent className="sm:max-w-[1000px] p-0 overflow-hidden">
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
      {type === AttachmentType.PICTURE ? <PiImagesFill /> : <FaPlay />}
    </div>
  );
}

export default Product;

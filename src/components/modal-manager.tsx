import ProductDetails from "@/components/products/product-details";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import withProductData from "@/hoc/with-product-data";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useProductDetails } from "@/hooks/use-product-data";
import notify, {
  TEvent,
} from "@/lib/notification-service/notification.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ModalManager({ shouldOpen }: { shouldOpen: boolean }) {
  const [open, setOpen] = useState(false);
  const currentPath = location.pathname;
  const { storeName } = useParams();
  const { productData } = useProductDetails();

  useEffect(() => {
    if (shouldOpen) {
      setOpen(true);
    }
  }, [shouldOpen]);

  useEffect(() => {
    const handleNotify = async () => {
      if (open && productData) {
        await notify(TEvent.VIEWED, {
          storeUsername:
            currentPath === "/explore" ? productData.store.username : storeName,
          productId: productData.id,
          productName: productData.name,
        });
      }
    };

    handleNotify();
  }, [open, currentPath, productData, storeName]);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ProductDetailsDynamic = withProductData(ProductDetails);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
          <ProductDetailsDynamic />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <ProductDetailsDynamic />
      </DrawerContent>
    </Drawer>
  );
}

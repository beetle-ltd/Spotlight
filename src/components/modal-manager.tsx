import ProductDetails from "@/components/products/product-details";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import withProductData from "@/hoc/with-product-data";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ModalManager({ productId }: { productId: string }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    if (productId) {
      navigate("/explore", { replace: true });
    }
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ProductDetailsDynamic = withProductData(ProductDetails);
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleClose} className="border-0">
        <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
          <ProductDetailsDynamic />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onClose={handleClose}>
      <DrawerContent>
        <ProductDetailsDynamic />
      </DrawerContent>
    </Drawer>
  );
}

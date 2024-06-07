import ProductDetails from "@/components/products/product-details";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import withProductData from "@/hoc/with-product-data";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";

export default function ModalManager({ shouldOpen }: { shouldOpen: boolean }) {
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    if (shouldOpen) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    // if (shouldOpen) {
    //   navigate("/explore", { replace: true });
    // }
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ProductDetailsDynamic = withProductData(ProductDetails);
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
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

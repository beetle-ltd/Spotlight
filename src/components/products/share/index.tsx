import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share";
import { IProduct } from "@/models/Products";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useMemo, useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import DesktopShare from "./desktop-share";

type TShareProps = {
  shareUrl: string;
  storeName: string;
  item: IProduct;
};

const Share = ({ shareUrl, item, storeName }: TShareProps) => {
  const [popup, setPopup] = useState<boolean>(false);
  const isMobile = useMemo(
    () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    []
  );

  const { mobileShare, handleShare } = useShare(shareUrl, item, storeName);

  if (isMobile) {
    return (
      <div className="flex justify-center">
        <Button
          onClick={mobileShare}
          aria-label="Share this product"
          variant="outline"
          type="button"
          size={"lg"}
          className="w-full gap-x-3 items-center rounded-full p-0"
        >
          <IoShareSocialOutline size={18} className="hidden md:block" />
          Share
        </Button>
      </div>
    );
  }

  return (
    <Popover open={popup} onOpenChange={setPopup}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={"outline"}
          size={"lg"}
          className="gap-x-3 items-center rounded-full p-0"
        >
          <IoShareSocialOutline size={18} className="hidden md:block" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="rounded-2xl">
        <DesktopShare
          closePopUp={() => setPopup(false)}
          handleShare={handleShare}
          item={item}
          shareUrl={shareUrl}
          storeName={storeName}
        />
      </PopoverContent>
    </Popover>
  );
};

export default Share;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "@/models/Products";
import notify, {
  TEvent,
} from "@/services/notification-service/notification.service";
import { useCallback } from "react";

export type ShareMedium =
  | "Twitter"
  | "Facebook"
  | "Email"
  | "WhatsApp"
  | "Telegram"
  | "Instagram"
  | "Link"
  | "Mobile Share";

type TShareData = {
  title: string;
  text: string;
  url: string;
  files?: any;
};

export const useShare = (
  shareUrl: string,
  item: IProduct,
  storeName: string,
  imageUrl: string
) => {
  const handleShare = useCallback(
    async ({ name }: { name: ShareMedium }) => {
      await notify(TEvent.SHARED, {
        storeUsername: storeName,
        productId: item.id,
        productName: item.name,
        medium: name,
      });
    },
    [item, storeName]
  );

  const fallbackShare = useCallback(() => {
    window.open(shareUrl, "_blank");
    handleShare({ name: "Link" });
  }, [shareUrl, handleShare]);

  const mobileShare = useCallback(async () => {
    try {
      if (navigator.share) {
        // fetch the image
        const imgResponse = await fetch(imageUrl);
        const imgBlob = await imgResponse.blob();

        // Create a File object from the Blob
        const imgFile = new File([imgBlob], `${item.name}.jpg`, {
          type: imgBlob.type,
        });

        // Prepare the share data
        const shareData: TShareData = {
          title: `${storeName} on Spotlight`,
          text: `Checkout ${item.name} by ${storeName} on Spotlight. Spotlight helps you find the brands and products you love easily and fast.`,
          url: shareUrl,
        };

        // Check if sharing files is supported
        if (navigator.canShare && navigator.canShare({ files: [imgFile] })) {
          shareData.files = [imgFile];
          await navigator.share(shareData);
        }

        // Attempt to share
        await navigator.share(shareData);

        // send notification
        await handleShare({ name: "Mobile Share" });
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Sharing failed:", error);
      // Send error to your logging service
      fallbackShare();
    }
  }, [imageUrl, item.name, storeName, shareUrl, handleShare, fallbackShare]);

  return { handleShare, mobileShare, fallbackShare };
};

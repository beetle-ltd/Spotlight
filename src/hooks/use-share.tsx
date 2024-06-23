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
export const useShare = (
  shareUrl: string,
  item: IProduct,
  storeName: string
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

  const mobileShare = useCallback(async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: item.name,
          text: `Check out this product: ${item.name}`,
          url: shareUrl,
        });
        await handleShare({ name: "Mobile Share" });
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Sharing failed:", error);
      // Send error to your logging service
      fallbackShare();
    }
  }, [shareUrl, item, handleShare]);

  const fallbackShare = useCallback(() => {
    window.open(shareUrl, "_blank");
    handleShare({ name: "Link" });
  }, [shareUrl, handleShare]);

  return { handleShare, mobileShare, fallbackShare };
};

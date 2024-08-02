import { toast } from "@/components/ui/use-toast";
import { useState, useCallback } from "react";

export const useDownloadImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const downloadImage = useCallback(
    async (imageUrl: string, fileName: string) => {
      if (!imageUrl) {
        toast({
          description: "This store has no business card",
        });
        return;
      }
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error("Network response was not ok");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (err) {
        console.error("Error downloading image:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { downloadImage, loading, error };
};

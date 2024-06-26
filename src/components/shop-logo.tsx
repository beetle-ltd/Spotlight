import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, useState, useEffect } from "react";

const shopLogoVariants = cva(
  "rounded-full overflow-hidden flex items-center justify-center",
  {
    variants: {
      size: {
        default: "w-40 h-40",
        sm: "w-10 h-10",
        lg: "sm:w-52 sm:h-52 w-36 h-36 border-4 border-black",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ShopLogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shopLogoVariants> {
  logoImg: string;
  alt: string;
}

const ShopLogo: FC<ShopLogoProps> = ({
  className,
  size,
  logoImg,
  alt,
  ...props
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = logoImg;
    img.onload = () => setLoading(false);
  }, [logoImg]);

  return (
    <div className={cn(shopLogoVariants({ size, className }))} {...props}>
      {loading ? (
        <div className="w-full h-full rounded-full bg-gray-200 animate-pulse"></div>
      ) : (
        <img
          src={logoImg}
          alt={`${alt}-logo-image`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ShopLogo;

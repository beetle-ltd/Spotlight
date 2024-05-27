import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

const shopLogoVariants = cva(
  "border-2 border-white rounded-full  overflow-hidden bg-red-500 flex items-center justify-center",
  {
    variants: {
      size: {
        default: "w-40 h-40",
        sm: "w-10 h-10",
        lg: "w-64 h-64",
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
  return (
    <div className={cn(shopLogoVariants({ size, className }))} {...props}>
      <img
        src={logoImg}
        alt={`${alt}-logo-image`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ShopLogo;

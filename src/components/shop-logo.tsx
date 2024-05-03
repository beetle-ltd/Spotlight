import { VariantProps, cva } from "class-variance-authority";
import ShopLogoTest from "./../assets/shop_logo_test.svg";
import { FC } from "react";
import { cn } from "@/lib/utils";

const shopLogoVariants = cva(
  "border border-gray-800 rounded-full bg-yellow-300",
  {
    variants: {
      size: {
        default: "p-5",
        sm: "w-12 h-12 border-[.1px] border-gray-500",
        lg: "p-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ShopLogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shopLogoVariants> {}

const ShopLogo: FC<ShopLogoProps> = ({ className, size }) => {
  return (
    <div className={cn(shopLogoVariants({ className, size }))}>
      <img src={ShopLogoTest} alt="shop-logo-test" />
    </div>
  );
};

export default ShopLogo;

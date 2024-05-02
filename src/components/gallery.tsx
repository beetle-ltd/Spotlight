import { IProducts } from "./blocks/product-gallery";
import Product from "./products/product";

type Props = {
  products: IProducts[];
};

function Gallery({ products }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-1 gap-x-[2px] gap-y-[1px]">
      {products.map((item) => (
        <Product item={item} />
      ))}
    </div>
  );
}

export default Gallery;

import { IProduct } from "@/models/Products";
import Product from "./products/product";

type Props = {
  products: IProduct[];
};

function Gallery({ products }: Props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-1 gap-x-[2px] gap-y-[1px]">
      {products.map((product) => (
        <Product item={product} key={product.id} />
      ))}
    </div>
  );
}

export default Gallery;

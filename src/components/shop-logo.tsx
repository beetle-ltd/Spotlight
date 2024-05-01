import ShopLogoTest from "./../assets/shop_logo_test.svg";

function ShopLogo() {
  return (
    <div className="border border-gray-800 rounded-full bg-yellow-300 p-5">
      <img src={ShopLogoTest} alt="shop-logo-test" />
    </div>
  );
}

export default ShopLogo;

import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Explore = lazy(() => import("../pages/Explore"));
const Landing = lazy(() => import("../pages/Landing"));
const Page404 = lazy(() => import("../pages/Page404"));
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:storeName" element={<Home />} />
      <Route path="/:storeName/shared/:productId" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore/:productId" element={<Explore />} />
      <Route path={"/explore/shared/:linkId"} element={<Explore />} />
      <Route path="/*" element={<Page404 />} />
      <Route path="/404" element={<Page404 />} />
    </Routes>
  );
}

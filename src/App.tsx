import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Page404 from "./pages/Page404";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto sm:w-[70%] ">{children}</div>;
}
export default App;

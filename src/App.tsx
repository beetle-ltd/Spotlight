import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Page404 from "./pages/Page404";

const App: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;

import { Suspense } from "react";
import Router from "./routes";
import Page from "./components/page-load";

const App: React.FC = () => {
  return (
    <Suspense fallback={<Page />}>
      <Router />
    </Suspense>
  );
};

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-[90%] mx-auto">{children}</div>;
}
export default App;

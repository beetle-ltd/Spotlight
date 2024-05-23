import { Suspense } from "react";
import Router from "./routes";

const App: React.FC = () => {
  return (
    <div>
      <Suspense fallback="loading">
        <Router />
      </Suspense>
    </div>
  );
};

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto sm:w-[70%] ">{children}</div>;
}
export default App;

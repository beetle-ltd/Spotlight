import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import "./index.css";
import "./normalize.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <App />
        </TooltipProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

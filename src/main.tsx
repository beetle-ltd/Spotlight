import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { SearchProvider } from "./contexts/search-context.tsx";
import "./index.css";
import { queryClient } from "./lib/queryClient.ts";
import "./normalize.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <SearchProvider>
              <Toaster />
              <App />
            </SearchProvider>
          </TooltipProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

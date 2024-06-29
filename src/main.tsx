import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-snap";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { SearchProvider } from "./contexts/search-context.tsx";
import "./index.css";
import { queryClient } from "./lib/queryClient.ts";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root")!);

// Check if we're on the server-side (SSR) or during pre-rendering
if (typeof window === "undefined") {
  // Server-side rendering (SSR) or pre-rendering
  render(
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
          </QueryClientProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>,
    root
  );
} else {
  // Client-side hydration
  root.hydrate(
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
          </QueryClientProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}

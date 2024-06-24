import { ISearchContext, SearchContext } from "@/contexts/search-context";
import { useContext } from "react";

export const useSearch = (): ISearchContext => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

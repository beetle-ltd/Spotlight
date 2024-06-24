import { createContext, useState } from "react";

export interface ISearchContext {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchContext = createContext<ISearchContext | undefined>(
  undefined
);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

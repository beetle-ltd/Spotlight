/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMediaQuery } from "@/hooks/use-media-query";

import { Calendar } from "lucide-react";
import { forwardRef, useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

function SearchBar() {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleClick = (val: boolean) => {
    setOpen(val);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {isDesktop ? (
        <SearchBarDesktop handleClick={handleClick} />
      ) : (
        <SearchBarMobile handleClick={handleClick} />
      )}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>TimeTable</span>
            </CommandItem>
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Picture</span>
            </CommandItem>
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Caren</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

type TSearchBarProps = {
  handleClick: (val: boolean) => void;
};

const SearchBarMobile = forwardRef(
  ({ handleClick }: TSearchBarProps, ref: any) => {
    return (
      <Button
        ref={ref}
        variant={"ghost"}
        className="hover:bg-transparent p-0"
        onClick={() => handleClick(true)}
      >
        <LuSearch size={24} className="cursor-pointer" />
      </Button>
    );
  }
);

export const SearchBarDesktop = forwardRef(
  ({ handleClick }: TSearchBarProps, ref: any) => {
    return (
      <Button
        variant={"secondary"}
        className="items-center justify-between min-w-[30%] text-gray-400 text-sm"
        ref={ref}
        onClick={() => handleClick(true)}
      >
        <div className="flex items-center gap-x-3">
          <LuSearch size={18} className="cursor-pointer" />
          <p>Search...</p>
        </div>
        <p>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p>
      </Button>
    );
  }
);

export default SearchBar;

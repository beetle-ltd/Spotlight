import { Container } from "@/App";
import { items } from "@/components/blocks/product-gallery";
import Gallery from "@/components/gallery";
import Logo from "@/components/logo";
import { LuSearch } from "react-icons/lu";

export default function Explore() {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-y-10 items-center py-5">
          <div className="hidden sm:block">
            <Logo />
          </div>
          <div className="flex items-center bg-gray-100 p-2 sm:p-4 w-full rounded-md text-gray-500">
            <div className="flex flex-1 items-center gap-x-3">
              <LuSearch size={18} className="cursor-pointer" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-full appearance-none bg-transparent outline-none"
              />
            </div>
            <p>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </p>
          </div>
        </div>
      </Container>

      <div className="w-full sm:w-[70%] mt-10 mx-auto ">
        <Gallery products={items} />
      </div>
    </div>
  );
}

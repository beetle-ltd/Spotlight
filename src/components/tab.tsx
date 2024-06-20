import { TTab } from "./blocks/product-gallery";
import { Button } from "./ui/button";

type Props = {
  activeTab: string;
  handleTabClick: (tab: TTab) => void;
  tab: TTab;
  children: React.ReactNode;
};

const Tab = ({ activeTab, handleTabClick, children, tab }: Props) => {
  return (
    <Button
      variant="ghost"
      className={`px-7 mr-2 rounded-full font-medium text-xs  ${
        activeTab === tab ? "bg-gray-200 " : "text-gray-500"
      }`}
      style={{
        padding: "0 !important",
      }}
      onClick={() => handleTabClick(tab)}
    >
      {children}
    </Button>
  );
};

export default Tab;

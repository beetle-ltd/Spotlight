import { TTab } from "./blocks/product-gallery";

type Props = {
  activeTab: string;
  handleTabClick: (tab: TTab) => void;
  tab: TTab;
  children: React.ReactNode;
};

const Tab = ({ activeTab, handleTabClick, children, tab }: Props) => {
  return (
    <button
      className={`px-3 py-2 mr-2 font-medium ${
        activeTab === tab
          ? "border-b-gray-400 rounded-t-3xl border-b-2 text-black "
          : "text-gray-500"
      }`}
      onClick={() => handleTabClick(tab)}
    >
      {children}
    </button>
  );
};

export default Tab;

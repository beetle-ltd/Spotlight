import { IShareMedium } from "@/constants/data-constants";

const Medium = ({ medium }: { medium: IShareMedium }) => {
  return (
    <div className="flex flex-col items-center gap-y-1 cursor-pointer">
      <div className="w-10 h-10 border border-gray-700 grid place-items-center rounded-full">
        <img src={medium.icon} alt={medium.name} />
      </div>
      <p className="text-xs">{medium.name}</p>
    </div>
  );
};

export default Medium;

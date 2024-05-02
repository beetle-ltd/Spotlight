import { MdCancel } from "react-icons/md";
import { Button } from "../ui/button";
import { shareMediums } from "@/constants/data-constants";
import Medium from "./medium";

type TShareProps = {
  closePopUp: (val: boolean) => void;
};

const Share = ({ closePopUp }: TShareProps) => {
  return (
    <div>
      <div className="flex items-center justify-between pb-3">
        <p className="text-md">Share Post</p>
        <Button variant={"ghost"} size={"sm"} onClick={() => closePopUp(false)}>
          <MdCancel size={20} />
        </Button>
      </div>
      <div className="w-full flex flex-wrap gap-x-4 gap-y-3">
        {shareMediums.map((medium) => (
          <Medium medium={medium} />
        ))}
      </div>
    </div>
  );
};

export default Share;

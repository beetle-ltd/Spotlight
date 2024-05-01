import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useToast } from "./ui/use-toast";

export default function IconWithText({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const { toast } = useToast();

  function copyToClipboard(text: string) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          className="flex items-center text-[#555] gap-x-3 cursor-pointer"
          onClick={() => {
            copyToClipboard(text);
            toast({
              description: `Copied to clipboard`,
            });
          }}
        >
          {children}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Click to copy</p>
      </TooltipContent>
    </Tooltip>
  );
}

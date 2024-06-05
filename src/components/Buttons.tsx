import { Button } from "@headlessui/react";
import { toast } from "sonner";

interface Props {
  colorType: "success" | "info" | "error" | "warning";
}

const Buttons = ({ colorType }: Props) => {
  const handleClick = () => {
    switch (colorType) {
      case "success":
        toast.success("Testing Toast");
        break;
      case "info":
        toast.info("Testing Toast");
        break;
      case "error":
        toast.error("Testing Toast");
        break;
      case "warning":
        toast.warning("Testing Toast");
        break;
      default:
    }
  };

  return (
    // <button onClick={() => toast.success("Testing Toast")}>
    //   Testing Toast
    // </button>
    <Button
      className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
      onClick={handleClick}>
      Testing Button
    </Button>
  );
};

export default Buttons;

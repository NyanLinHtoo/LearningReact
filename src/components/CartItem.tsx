import { Button } from "@headlessui/react";

interface Props {
  cartItem: string[];
  onClear: () => void;
}

const CartItem = ({ cartItem, onClear }: Props) => {
  return (
    <>
      <div>CartItem</div>
      <ul className="list-disc list-inside">
        {cartItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Button
        className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        onClick={onClear}>
        Clear
      </Button>
    </>
  );
};

export default CartItem;

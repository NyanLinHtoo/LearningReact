import { Button } from "@headlessui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const Expandable = ({ children, maxChars }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = expanded ? children : children.substring(0, maxChars);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <p>{text}...</p>
      <Button onClick={toggleExpand}>{expanded ? "Less" : "More"}</Button>
    </div>
  );
};

export default Expandable;

import { ReactNode, useState } from "react";

type HoldingSectionProps = {
  name: string;
  children: ReactNode;
};

const HoldingSection = ({ name, children }: HoldingSectionProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <li className="mb-4">
      <div className="bg-white shadow overflow-hidden rounded-lg p-4">
        <h3
          onClick={() => setShowDescription((old) => !old)}
          className="hover:text-light-blue hover:cursor-pointer"
        >
          {name}
        </h3>
        {showDescription && children}
      </div>
    </li>
  );
};

export default HoldingSection;

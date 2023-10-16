// ComponentA.tsx

import { Link } from "react-router-dom";
import { useAppContext } from "./Context";

const ComponentA = () => {
  const { selectedItems, updateSelectedItems } = useAppContext();

  const handleCheck = (item: string) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((selected) => selected !== item)
      : [...selectedItems, item];

    updateSelectedItems(updatedItems);
  };

  // ...

  return (
    <div>
      <h2>Component A</h2>
      <ul>
        {["Item 1", "Item 2", "Item 3"].map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheck(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      <Link to="/componentB">Go to Component B</Link>
    </div>
  );
};

export default ComponentA;
// ...

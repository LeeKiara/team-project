// ComponentB.tsx

import { Link } from "react-router-dom";
import { useAppContext } from "./Context";

// ...

// function ComponentB() {
const ComponentB = () => {
  const { selectedItems } = useAppContext();

  return (
    <div>
      <h2>Component B</h2>
      <p>Selected Items: {selectedItems.join(", ")}</p>
      <Link to="/componentA">Go to Component A</Link>
    </div>
  );
};

export default ComponentB;

import { useState, useEffect } from "react";
import { useCartData } from "@/modules/cart/cartdata";

function MyComponent() {
  const { cartData } = useCartData();
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    // cartData가 로드되면 initialNumbers 배열을 설정
    if (cartData && cartData.length > 0) {
      const initialNumbers = cartData.map((item) =>
        parseInt(item.quantity, 10)
      );
      setNumbers(initialNumbers);
    }
  }, [cartData]);

  const handleQtyChange = (e, index) => {
    const itemQty = parseInt(e.target.value, 10);

    setNumbers((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      newNumbers[index] = itemQty;
      return newNumbers;
    });
  };

  const handleIncrement = (index) => {
    setNumbers((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      newNumbers[index] = newNumbers[index] + 1;
      return newNumbers;
    });
  };

  return (
    <div>
      {cartData.map((item, index) => (
        <div key={`item-${index}`}>
          <input
            type="text"
            placeholder="0"
            value={numbers[index]}
            onChange={(e) => handleQtyChange(e, index)}
          />
          <button onClick={() => handleIncrement(index)}>1 증가</button>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;

import { useCartData } from "@/modules/cart/cartdata";
import { useState } from "react";

function MyComponent() {
  // useCartData 훅을 사용하여 데이터를 가져옵니다
  const { cartData } = useCartData();

  // cartData에서 quantity 값을 추출하여 초기 numbers 배열을 설정합니다
  const initialNumbers = cartData.map((item) => parseInt(item.quantity, 10));

  // useState를 사용하여 초기 numbers 배열을 설정합니다
  const [numbers, setNumbers] = useState(initialNumbers);
  console.log("<<< MyComponent >>");
  console.log("cartData:", cartData);
  console.log("initialNumbers:", initialNumbers);

  const handleQtyChange = (e, index) => {
    const itemQty = parseInt(e.target.value, 10);

    setNumbers((prevNumbers) => {
      console.log("<<<  handleQtyChange setNumbers >>");

      const newNumbers = [...prevNumbers];
      newNumbers[index] = itemQty;
      return newNumbers;
    });
  };

  const handleIncrement = (index) => {
    setNumbers((prevNumbers) => {
      console.log("<<<  handleIncrement setNumbers >>");

      const newNumbers = [...prevNumbers];
      let tempQty = isNaN(newNumbers[index]) ? 0 : newNumbers[index];
      newNumbers[index] = tempQty + 1;
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

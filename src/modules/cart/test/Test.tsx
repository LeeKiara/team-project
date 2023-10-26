import { useEffect, useState } from "react";
import { TestForm } from "./styles";

const Test = () => {
  const cartlist = [
    { itemId: 1, itemName: "상품 1", price: 10000 },
    { itemId: 2, itemName: "상품 2", price: 15000 },
    { itemId: 3, itemName: "상품 3", price: 20000 },
  ];

  const [selectedItems, setSelectedItems] = useState([]); // 선택된 아이템들을 담는 배열
  const [totalPrice, setTotalPrice] = useState(0); // 선택된 아이템들의 가격 합계

  // 전체 체크박스 선택 상태를 관리
  const [selectAll, setSelectAll] = useState(false);

  // 전체 체크박스 선택/해제 함수
  const handleSelectAll = () => {
    setSelectAll(!selectAll);

    if (!selectAll) {
      setSelectedItems(cartlist.map((item) => item.itemId)); // 모든 아이템을 선택
    } else {
      setSelectedItems([]); // 선택 해제
    }
  };

  // 개별 체크박스 선택/해제 함수
  const handleCheckboxChange = (itemId) => {
    // alert("handleCheckboxChange");
    const updatedSelectedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((id) => id !== itemId)
      : [...selectedItems, itemId];

    setSelectedItems(updatedSelectedItems);
  };

  // 선택된 아이템들의 가격 합계 계산
  const calculateTotalPrice = () => {
    const totalPrice = selectedItems.reduce((total, itemId) => {
      const selectedItem = cartlist.find((item) => item.itemId === itemId);
      return total + selectedItem.price;
    }, 0);

    setTotalPrice(totalPrice);
  };

  // 선택된 아이템들이 변경될 때마다 가격 합계 계산
  useEffect(() => {
    calculateTotalPrice();
  }, [selectedItems]);

  return (
    <div>
      <div>
        <label>
          <input type="checkbox" onChange={handleSelectAll} checked={selectAll} /> 전체 선택
        </label>
      </div>
      <ul>
        {cartlist.map((item) => (
          <li key={item.itemId}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(item.itemId)}
                checked={selectedItems.includes(item.itemId)}
              />
              {item.itemName} - {item.price}원
            </label>
          </li>
        ))}
      </ul>
      <div>선택된 아이템들의 합계: {totalPrice}원</div>
    </div>
  );
};

export default Test;

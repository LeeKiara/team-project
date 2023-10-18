import { OrderItemData } from "../orderlistdata";

const CalcuTotalPayment = ({ cartBooks }: { cartBooks: OrderItemData[] }) => {
  let sumPriceStandard = 0;
  let sumPriceSales = 0;
  console.log(" >>>>>>>>>> CalcuTotalPayment 컴퍼넌트 <<<<<<<<<<<<<");

  cartBooks &&
    cartBooks.map((selectedItem, index) => {
      console.log(
        "   CalcuTotalPayment 주문대상 ^^^^^^^^^ " +
          selectedItem.title +
          ", " +
          selectedItem.quantity +
          ", " +
          selectedItem.priceStandard +
          ", " +
          selectedItem.priceSales,
      );

      // 정가 합계
      sumPriceStandard +=
        Number(selectedItem.priceStandard) * Number(selectedItem.quantity);
      // 할인금액 합계
      sumPriceSales +=
        (Number(selectedItem.priceStandard) - Number(selectedItem.priceSales)) *
        Number(selectedItem.quantity);
    });

  let totalOrderAmt = sumPriceStandard - sumPriceSales;
  let deliveryAmt = 2000;

  // 결제 예정 금액 (정가 - 할인가 + 배송비)
  // 배송비 계산 (주문금액이 20,000원 미만이면 2,000원 부과)
  if (totalOrderAmt < 20000) {
    totalOrderAmt += deliveryAmt;
  } else {
    deliveryAmt = 0;
  }

  return (
    <div>
      <div className="box-total-payment">
        <div className="total-text">주문합계</div>
        <div className="total-sum">
          상품금액 <strong id="fixedsum">{sumPriceStandard}</strong>원 <i>-</i>
          할인금액 <strong id="discountsum">{sumPriceSales}</strong>원 <i>+</i>
          배송비 <strong id="deliveryfee">{deliveryAmt}</strong>원
        </div>
        <div className="total-price">
          결제 예정 금액 <strong id="totalsum">{totalOrderAmt}</strong>원
        </div>
      </div>
    </div>
  );
};

export default CalcuTotalPayment;

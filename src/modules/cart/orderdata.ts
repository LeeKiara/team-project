export interface OrderItemData {
  id?: number; // id값은 나중에 생성
  itemId: number;
  title: string;
  cover: string;
  priceStandard: string;
  priceSales: string;
  quantity: string;
  orderPrice?: string;
}

export interface PaymentData {
  // 주문자 정보
  // orderUserId: string;
  // orderHp1: string;
  // orderHp2: string;
  // orderHp3: string;
  // orderEmail1: string;
  // orderEmail2: string;

  // 배송지 정보
  deliveryName: string;
  // deliveryHp1: string;
  // deliveryHp2: string;
  // deliveryHp3: string;
  // deliveryAddr1: string;
  // deliveryAddr2: string;
  // deliveryMemo: string;

  // // 결제수단 "CARD | BANK | DEPOSIT"
  // paymentMethod: string;

  // // 주문도서 정보
  // bookItem: OrderItemData[];
}

export interface OrderData {
  paymentMethod: string; // 결제수단
  orderStatus: string; // 주문상태 (1: 완료, 2:취소)
  orderItems: OrderItemData[]; // 주문 item 목록
  orderAddress: OrderAddressData; // 배송지
}

export interface OrderItemData {
  id?: number; // id값은 나중에 생성
  itemId: number;
  quantity: string;
  orderPrice?: string;
}

export interface OrderAddressData {
  deliveryName: string; // 배송자명
  deliveryPhone: string; // 배송자 핸드폰번호
  postcode: string; // 우편번호
  address: string; // 기본주소
  detailAddress: string; // 상세주소
  deliveryMemo: string; // 배송요청사항
}

export interface OrderCreateRequest {
  paymentMethod: string; // 결제수단
  orderStatus: string; // 주문상태 (1: 완료, 2:취소)
  orderItems: OrderItemData[]; // 주문 item 목록
  orderAddress: OrderAddressData; // 배송지
}

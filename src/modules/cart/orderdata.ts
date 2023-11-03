// export interface OrderData {
//   orderId: number; // 주문 id
//   orderDate: string;
//   paymentMethod: string; // 결제수단
//   paymentPrice: number; //결제금액
//   orderStatus: string; // 주문상태 (1: 완료, 2:취소)
//   orderDetails: OrderItemData; // 주문 item 목록(대표되는 도서 1개)
//   orderAddress: OrderAddressData; // 배송지
// }

import http from "@/utils/http";
import useSWR from "swr";

export interface OrderDeliveryResponse {
  orderId: number; // 주문 id
  paymentMethod: string; // 결제수단
  paymentPrice: number; // 결제금액
  orderStatus: string; // 주문상태 (1: 완료; 2:취소)
  orderDate: string; // 주문일자
  deliveryName: string; // 배송자명
  deliveryPhone: string; // 배송자 핸드폰번호
  postcode: string; // 우편번호
  address: string; // 기본주소
  detailAddress: string; // 상세주소
  deliveryMemo: string; //배송요청사항
  orderItems: OrderItemResponse2[]; // 주문도서정보
}

export interface OrderItemResponse2 {
  id: number; // 도서 id
  orderId: number; // 주문 id
  itemId: number;
  orderPrice: number;
  quantity: number;
  title: string;
  cover: string;
}

const INIT_DATA: OrderDeliveryResponse = {
  orderId: 0,
  paymentMethod: "",
  paymentPrice: 0,
  orderStatus: "",
  orderDate: "",
  deliveryName: "",
  deliveryPhone: "",
  postcode: "",
  address: "",
  detailAddress: "",
  deliveryMemo: "",
  orderItems: [],
};
const ORDER_DATA_KEY = "/order/detail";

// 데이터를 가져오는 함수(서버, 로컬스토리지, 캐시, webSQL)
const orderDetailFetcher = async ([key, orderId]): Promise<OrderDeliveryResponse> => {
  console.log("--call orderDetailFetcher --");

  try {
    try {
      // http://localhost:8081/order/detail/2023123456789
      const response = await http.get<OrderDeliveryResponse>(`${key}/${orderId}`);

      if (response.status === 200) {
        console.log("--call orderDetailFetcher response--");
        console.log(response.data);
        // console.log(response.data.paymentMethod + "," + response.data.paymentPrice + "," + response.data.postcode);
        return response.data;
      }
    } catch (e: any) {
      console.log(e);
    }
  } catch (e: any) {
    return INIT_DATA;
  }
};

export const useOrderDetailData = (orderId: number) => {
  const { data: orderDetailData, isValidating: isOrderDetailValidating } = useSWR<OrderDeliveryResponse>(
    [ORDER_DATA_KEY, orderId],
    orderDetailFetcher,
    {
      // 캐시/또는 데이터가져오기 이후에 데이터가 없을 때 반환하는 데이터
      fallbackData: INIT_DATA,
      // 포커스될때 fetcher로 가져오기 해제
      // rebalidate: 캐시와 fetcher로 가져온 데이터를 비교 후 반환
      revalidateOnFocus: false,
      // // 특정 주기별로 데이터 가져오기
      // refreshInterval: 5000,
    },
  );

  return {
    orderDetailData,
    isOrderDetailValidating,
  };
};

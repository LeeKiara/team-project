import axios from "axios";
import useSWR from "swr";

const orderItemApi = axios.create({
  baseURL: "http://localhost:9090",
});

export interface OrderItemData {
  id?: number; // id값은 나중에 생성
  itemId: number;
  title: string;
  cover: string;
  priceSales: string;
  quantity: string;
}

const INIT_DATA: OrderItemData[] = [];
const ORDER_DATA_KEY = "/orderitem";
// const ORDER_DATA_KEY = "@data/contacts";

// 데이터를 가져오는 함수(서버, 로컬스토리지, 캐시, webSQL)
const orderItemFetcher = async ([key]) => {
  console.log("--call orderItemFetcher (contactsApi.get)--");

  try {
    const response = await orderItemApi.get<OrderItemData[]>(`${key}?_sort=id?_sort=id&_order=desc`);

    for (const res of response.data) {
      console.log(res.id + "," + res.itemId + "," + res.title + "," + res.cover + "," + res.priceSales + "," + res.quantity);
    }

    console.log("--call orderItemFetcher response data >> " + response.data.length);

    return response.data;
  } catch (e: any) {
    return INIT_DATA;
  }
};

export const useOrderListData = () => {
  const {
    data: orderListData,
    mutate,
    isValidating: isOrderListValidating,
  } = useSWR<OrderItemData[]>([ORDER_DATA_KEY], orderItemFetcher, {
    // 캐시/또는 데이터가져오기 이후에 데이터가 없을 때 반환하는 데이터
    fallbackData: INIT_DATA,
    // 포커스될때 fetcher로 가져오기 해제
    // rebalidate: 캐시와 fetcher로 가져온 데이터를 비교 후 반환
    revalidateOnFocus: false,
    // // 특정 주기별로 데이터 가져오기
    // refreshInterval: 5000,
  });

  function createOrderListData(orderItems: OrderItemData[]) {
    console.log("/////////// createOrderListData //////////");

    // 배열데이터 변경(mutation)
    // 기존배열에 매개변수로 받은 객체를 추가하고 새로운 배열 반환

    // mutate(변경할데이터) -> 데이터를 변경

    // mutate 함수
    // 데이터를 변경하고 변경된 데이터를 반환
    // mutate((이전데이터) => {... return 변경된데이터})
    mutate(
      async (
        // 데이터 가져오기 이전이고, 최초의 상태변경이면 undefined로 되어있음
        prevData: OrderItemData[] = [...INIT_DATA],
      ) => {
        console.log("--OrderItemData-prev-data--");
        console.log(prevData);

        // 기존 데이터로 신규 배열 생성
        let nextData = [...prevData];

        try {
          // 기존에 저장된 주문대상 목록을 삭제한다
          const response = await orderItemApi.delete(ORDER_DATA_KEY);

          for (const orderItem of orderItems) {
            const existingItem = nextData.find((item) => item.itemId === orderItem.itemId);

            if (existingItem) {
              // 이미 동일한 itemId를 가진 아이템이 존재하는 경우, put 요청을 보냅니다.
              const response = await orderItemApi.put(`${ORDER_DATA_KEY}/${existingItem.id}`, orderItem);

              // 서버에서 업데이트된 데이터로 상태 변경
              if (response.status === 200) {
                nextData = nextData.map((item) => (item.itemId === orderItem.itemId ? { ...response.data } : item));
              }
            } else {
              // 새로운 아이템인 경우, post 요청을 보냅니다.
              const response = await orderItemApi.post(ORDER_DATA_KEY, orderItem);

              // 서버에서 추가된 데이터로 상태 변경
              if (response.status === 201) {
                nextData.unshift({ ...response.data });
              }
            }
          }
        } catch (e: any) {
          console.log(e);
        }

        // try {
        //   for (const orderItem of orderItems) {
        //     // orderItems.forEach((orderItem, index) => {
        //     console.log(
        //       "/////////// createOrderListData 매개변수(orderItem) ////////// itemId:" +
        //         orderItem.itemId +
        //         ",quantity:" +
        //         orderItem.quantity +
        //         ", title:" +
        //         orderItem.title +
        //         "]",
        //     );

        //     // 서버연동 fetch post contact -> id
        //     const response = await orderItemApi.post(ORDER_DATA_KEY, orderItem);
        //     console.log("/////////// createOrderListData response //////////" + response.data);

        //     if (response.status === 201) {
        //       // 배열 앞쪽에 추가
        //       // 서버에서 추가된 데이터로 상태 변경
        //       nextData.unshift({
        //         ...response.data,
        //       });
        //     }

        //     console.log("/////////// DB insert success nextData //////////" + nextData.length);
        //   }
        // } catch (e: any) {
        //   console.log(e);
        // }

        // 변경된 데이터(상태값)를 반환
        return nextData;
      },
      false,
    );
    //mutate(처리함수, false);
    //mutate 이후에 캐시만 업데이트 하고, fetcher를 처리하지 않음
  }

  return {
    orderListData,
    createOrderListData,
    isOrderListValidating,
  };
};

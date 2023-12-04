import { getCookie } from "@/utils/cookie";
import http from "@/utils/http";
import useSWR from "swr";

/*------------------------------------------------------------------------
 장바구니 데이터처리 useSWR 사용
 - 데이터를 자동으로 캐싱하여 불필요한 중복 요청 방지
 - 데이터 요청과 관련된 복잡한 로직을 추상화하여 코드를 간소화 함
 - revalidateOnFocus 옵션은 false 
   : 자동 리로딩이 발생하지 않도록 하였으며, 
     다만 장바구니 삭제 등 데이터 업데이트를 수동으로 트리거 하기 위해 mutate 함수를 사용함
 --------------------------------------------------------------------------*/

export interface BookCartData {
  id?: number; // id값은 나중에 생성
  itemId: number;
  title?: string;
  cover?: string;
  priceStandard?: string;
  priceSales?: string;
  quantity: number;
  isChecked?: boolean;
  stockStatus?: string;
}

const INIT_DATA: BookCartData[] = [];
const BOOKCART_DATA_KEY = "/api/order-commerce/cart";

// 데이터를 가져오는 함수(서버, 로컬스토리지, 캐시, webSQL)
const bookCartFetcher = async ([key, page]) => {
  console.log("--call bookCartFetcher--");

  const token = getCookie("token");
  console.log("---token(call new cartFetcher)---");
  console.log(token);

  let shouldFetchData = false;
  if (token) {
    shouldFetchData = true;
    console.log("--call new cartFetcher : shouldFetchData is true--");
  }

  try {
    if (shouldFetchData) {
      const response = await http.get<BookCartData[]>(`${key}?_sort=id?_sort=id&_order=desc`);

      console.log("--call bookCartFetcher 결과 : --" + response.data.length);

      return response.data;
    } else {
      return INIT_DATA;
    }
  } catch (e: any) {
    return INIT_DATA;
  }
};

export const useBookCartData = (page: number) => {
  const {
    data: bookCartData,
    mutate: mutateCartDataFunction,
    isValidating: isBookCartDataValidating,
  } = useSWR<BookCartData[]>([BOOKCART_DATA_KEY, page], bookCartFetcher, {
    // 캐시/또는 데이터가져오기 이후에 데이터가 없을 때 반환하는 데이터
    fallbackData: INIT_DATA,
    // 포커스될때 fetcher로 가져오기 해제
    // rebalidate: 캐시와 fetcher로 가져온 데이터를 비교 후 반환
    revalidateOnFocus: false,
    // // 특정 주기별로 데이터 가져오기
    // refreshInterval: 5000,
  });

  function createBookCartData(contact: BookCartData) {
    // 배열데이터 변경(mutation)
    // 기존배열에 매개변수로 받은 객체를 추가하고 새로운 배열 반환

    // mutate(변경할데이터) -> 데이터를 변경

    // mutate 함수
    // 데이터를 변경하고 변경된 데이터를 반환
    // mutate((이전데이터) => {... return 변경된데이터})
    mutateCartDataFunction(
      async (
        // 데이터 가져오기 이전이고, 최초의 상태변경이면 undefined로 되어있음
        prevData: BookCartData[] = [...INIT_DATA],
      ) => {
        // console.log("--bookCart-prev-data--");
        console.log(prevData);

        // 기존 데이터로 신규 배열 생성
        const nextData = [...prevData];

        try {
          // ex) 서버연동 fetch post contact -> id
          const response = await http.post(BOOKCART_DATA_KEY + "/add", contact);

          if (response.status === 201) {
            // 배열 앞쪽에 추가
            // 서버에서 추가된 데이터로 상태 변경
            nextData.unshift({
              // ...response.data,
              ...contact,
            });

            console.log("--bookCart-next-data--");
            console.log(nextData);
          }
        } catch (e: any) {
          console.log(e);
        }

        // 변경된 데이터(상태값)를 반환
        return nextData;
      },
      false,
    );
    //mutate(처리함수, false);
    //mutate 이후에 캐시만 업데이트 하고, fetcher를 처리하지 않음
  }

  return {
    bookCartData,
    mutateCartDataFunction,
    createBookCartData,
    isBookCartDataValidating,
  };
};

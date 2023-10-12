import axios from "axios";
import useSWR from "swr";

const INIT_DATA: CartData[] = [];
const CART_DATA_KEY = "/cart";
// const CONTACTS_DATA_KEY = "@data/contacts";

interface CartData {
  id?: number; // id값은 나중에 생성
  gubun: string;
  title: string;
  cover: string;
  priceStandard: string;
  priceSales: string;
  quantity: string;
}

const cartApi = axios.create({
  baseURL: "http://localhost:9090",
});

// 데이터를 가져오는 함수(서버, 로컬스토리지, 캐시, webSQL)
const cartFetcher = async ([key]) => {
  console.log("--call fetcher--");

  try {
    const response = await cartApi.get<CartData[]>(
      `${key}?_sort=id?_sort=id&_order=desc`
    );

    console.log("--call fetcher response data--");
    console.log(response.data);

    return response.data;
  } catch (e: any) {
    // 캐시에 없으면 초기값 반환
    return INIT_DATA;
  }
};

export const useCartData = () => {
  const {
    data: cartData,
    mutate: mutateCartData,
    isValidating: isCartDataValidating,
  } = useSWR<CartData[]>([CART_DATA_KEY], cartFetcher, {
    // 캐시/또는 데이터가져오기 이후에 데이터가 없을 때 반환하는 데이터
    fallbackData: INIT_DATA,
    // 포커스될때 fetcher로 가져오기 해제
    // rebalidate: 캐시와 fetcher로 가져온 데이터를 비교 후 반환
    revalidateOnFocus: false,
    // // 특정 주기별로 데이터 가져오기
    // refreshInterval: 5000,
  });

  function createCartData(cart: CartData) {
    // mutate 함수를 이용하여 데이터를 변경하고 변경된 데이터를 반환
    // : 기존배열에 매개변수로 받은 객체를 추가하고 새로운 배열 반환
    // *syntax : mutate((이전데이터) => {... return 변경된데이터})
    mutate(
      async (
        // 데이터 가져오기 이전이고, 최초의 상태변경이면 undefined로 되어있음
        prevData: CartData[] = [...INIT_DATA]
      ) => {
        console.log("--cart 매개변수 객체--");
        console.log(prevData);

        // 기존 데이터로 신규 배열 생성
        let nextData = [...prevData];

        try {
          // ex) 서버연동 fetch cart -> id
          const response = await cartApi.post(CART_DATA_KEY, cart);

          if (response.status === 201) {
            // 배열 앞쪽에 추가 (서버에서 추가된 데이터로 상태 변경)
            nextData.unshift({
              ...response.data,
            });
          }
        } catch (e: any) {
          console.log(e);
        }

        // 변경된 데이터(상태값)를 반환
        return nextData;
      },
      false
    );

    // *comment :  mutate(처리함수, false);
    //             => mutate 이후에 캐시만 업데이트 하고, fetcher를 처리하지 않음
  }

  return {
    cartData,
    mutateCartData,
    createCartData,
    isCartDataValidating,
  };
};

/*
export const useCartData = () => {
  // ...

  async function updateCartItem(itemId, updatedQuantity) {
    try {
      const response = await cartApi.post(`/updateCartItem/${itemId}`, {
        quantity: updatedQuantity,
      });

      if (response.status === 200) {
        // Fetch the updated data from the server or wherever it is stored
        const updatedData = await cartFetcher([CART_DATA_KEY]);

        // Update the cartData and trigger a re-render
        mutate(CART_DATA_KEY, updatedData, false);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return {
    cartData,
    createCartData,
    updateCartItem,
    isCartDataValidating,
  };
};



*/

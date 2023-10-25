import http from "@/utils/http";
import useSWR, { mutate } from "swr";

const INIT_DATA: CartData[] = [];
const CART_DATA_KEY = "/cart";

export interface CartDataJoinBook {
  itemId: number;
  quantity: string;
}

export interface CartData {
  id?: number; // id값은 나중에 생성
  itemId: number;
  gubun?: string;
  title?: string;
  cover?: string;
  priceStandard?: string;
  priceSales?: string;
  quantity: string;
  isChecked?: boolean;
  // isFetch?: boolean;
}

// 별도의 createCartData 함수
export const createCartData = async (cart: CartData) => {
  try {
    const response = await http.post(CART_DATA_KEY + "/add", cart);

    return response.status;
  } catch (e: any) {
    console.log(e);
    return null;
  }
};

// 데이터를 가져오는 함수(서버, 로컬스토리지, 캐시, webSQL)
const cartFetcher = async ([key, shouldFetchData]) => {
  console.log("--call cartFetcher--");

  if (shouldFetchData) {
    try {
      const response = await http.get<CartData[]>(`${key}?_sort=id?&_order=desc`);

      console.log("--call cartFetcher response data   --");
      console.log(response.data);

      return response.data;
    } catch (e: any) {
      // 캐시에 없으면 초기값 반환
      return INIT_DATA;
    }
  } else {
    console.log("--not call server fetch !!!----");
  }

  return INIT_DATA;
};

export const useCartData = (shouldFetchData?: boolean) => {
  const {
    data: cartData,
    mutate: mutateCartDataFunction,
    isValidating: isCartDataValidating,
  } = useSWR<CartData[]>([CART_DATA_KEY, shouldFetchData], cartFetcher, {
    fallbackData: INIT_DATA,
    revalidateOnFocus: false,
  });

  const addToCart = async (cart: CartData) => {
    const newCartItem = await createCartData(cart);
    if (newCartItem) {
      // 데이터를 성공적으로 추가한 경우에만 업데이트
      // mutate 함수를 이용하여 데이터를 변경하고 변경된 데이터를 반환
      // *syntax : mutate((이전데이터) => {... return 변경된데이터})
      mutateCartDataFunction((prevData: CartData[] = [...INIT_DATA]) => [newCartItem, ...prevData], false);
    }
  };

  return {
    cartData,
    addToCart,
    isCartDataValidating,
    mutateCartDataFunction,
  };
};

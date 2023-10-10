import axios from "axios";
import useSWR from "swr";

const booksApi = axios.create({
  baseURL: "http://localhost:9090",
});

export interface BookData {
  id?: number;
  cover: string;
  title: string;
  author: string;
  priceSales: string;
  priceStandard: string;
  publisher: string;
  link: string;
  description: string;
  isbn: string;
}

export interface BestBookData {
  id?: number;
  cover: string;
  title: string;
  author: string;
  priceSales: string;
  priceStandard: string;
  publisher: string;
  link: string;
  description: string;
  isbn: string;
}

const INIT_DATA: BookData[] = [];

export const BOOKS_DATA_KEY = "/books";

const bookFetcher = async ([key, page]: string | number[]) => {
  try {
    const response = await booksApi.get<BookData[]>(
      `${key}?_sort=id&_order=desc`
    );
    return response.data;
  } catch (e: any) {
    return INIT_DATA;
  }
};

export const useBooksData = (page: number) => {
  const {
    data: booksData,
    mutate,
    isValidating: isBookDataValidating,
  } = useSWR<BookData[]>([BOOKS_DATA_KEY, page], bookFetcher, {
    fallbackData: INIT_DATA,
    revalidateOnFocuse: false,
  });
};

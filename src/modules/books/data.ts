import axios from "axios";
import useSWR, { mutate } from "swr";

const booksApi = axios.create({
  baseURL: "http://localhost:9090",
});

export interface BookData {
  version: string;
  logo: string;
  title: string;
  link: string;
  pubDate: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  query: string;
  searchCategoryId: number;
  searchCategoryName: string;
  item: BookItem[];
}

export interface BookItem {
  id?: number;
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  publisher: string;
  salesPoint: number;
  fixedPrice: boolean;
  customerReviewRank: number;
  seriseInfo: SeriesInfo;
}

export interface SeriesInfo {
  seriesId: number;
  seriesLink: string;
  seriesName: string;
}

export interface BestBookData {
  itemId?: number;
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

const INIT_DATA: BookItem[] = [];

export const BOOKS_DATA_KEY = "/books";

const bookFetcher = async ([key, page]: string | number[]) => {
  try {
    const response = await booksApi.get<BookData>(
      `${key}?_sort=id&_order=desc`
    );
    return response.data[0].item;
  } catch (e: any) {
    return INIT_DATA;
  }
};

export const useBooksItem = (page: number) => {
  const {
    data: booksItem,
    mutate,
    isValidating: isBookItemValidating,
  } = useSWR<BookItem[]>([BOOKS_DATA_KEY, page], bookFetcher, {
    fallbackData: INIT_DATA,
    revalidateOnFocus: false,
  });

  return { booksItem, isBookItemValidating };
};

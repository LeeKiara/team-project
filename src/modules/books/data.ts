import axios from "axios";
import { useState } from "react";
import useSWR, { mutate } from "swr";

const booksApi = axios.create({
  baseURL: "http://localhost:8081",
});

export interface BookData {
  version: string;
  logo: string;
  title: string;
  link: string;
  pubDate: string;
  totalPages: number;
  startIndex: number;
  itemsPerPage: number;
  query: string;
  searchCategoryId: number;
  searchCategoryName: string;
  content: BookItem[];
}

export interface RedisData {
  content: BookItem[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface BookItem {
  id?: number;
  publisher: string;
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
  stockStatus: string;
  cover: string;
  categoryId: number;
  categoryName: string;
  customerReviewRank: number;
  seriesInfo?: SeriesInfo;
  commentCount?: number;
  bookComment?: BookComment[];
  likedBook?: LikesItem[];
}

export interface LikesItem {
  id?: number;
  likes: boolean;
  profileId: number;
}

export interface BookComment {
  id?: number;
  comment: string;
  nickname: string;
  createdDate: number;
  replyComment: ReplyComment[];
}

export interface ReplyComment {
  id?: number;
  comment: string;
  nickname: string;
  createdDate: number;
  parentId: number;
}

export interface SeriesInfo {
  seriesId: number;
  seriesLink: string;
  seriesName: string;
}

export interface AlamData {
  bookItemId: number;
  profileId: number;
  alamDisplay: boolean;
  alam: boolean;
  bookTitle: string;
}

const INIT_DATA: RedisData = null;

// const INIT_DATA: BookItem[] = [];

export const BOOKS_DATA_KEY = "/redis";

// const BOOK_COMMENTS_KEY = "/bookComments";

const bookFetcher = async ({ key, MAX_LIST, currentPage }) => {
  try {
    const fetch = `new?size=${MAX_LIST}&page=${currentPage}`;
    const response = await booksApi.get<RedisData>(`${key}/${fetch}`);
    return response.data;
  } catch (e: any) {
    return INIT_DATA;
  }
};

export const useRedisData = (MAX_LIST: number, currentPage: number) => {
  const {
    data: bookData,
    mutate,
    isValidating: isBookDataValidating,
  } = useSWR<RedisData>(
    { key: BOOKS_DATA_KEY, MAX_LIST, currentPage }, // 객체 형식으로 키와 매개변수 전달
    bookFetcher, // fetcher 함수를 직접 전달
    {
      fallbackData: INIT_DATA,
      revalidateOnFocus: false,
    },
  );

  return { bookData, isBookDataValidating };
};

export function isLocalhost() {
  const currentDomain = window.location.hostname;
  console.log(`Current Domain: ${currentDomain}`);
  if (currentDomain === "localhost") {
    return `http://${currentDomain}:8081/api/book-commerce`;
  } else {
    return `https://${currentDomain}/api/book-commerce`;
  }
}

// const commentFetcher = async (bookId: number) => {
//   try {
//     const response = await booksApi.get<BookComment[]>(`${BOOK_COMMENTS_KEY}/${bookId}`);
//     return response.data;
//   } catch (e: any) {
//     return [];
//   }
// };

// export const useBooksItem = (page?: number) => {
//   const {
//     data: booksItem,
//     mutate,
//     isValidating: isBookItemValidating,
//   } = useSWR<BookItem[]>([BOOKS_DATA_KEY, page], bookFetcher, {
//     fallbackData: INIT_DATA,
//     revalidateOnFocus: false,
//   });

//   return { booksItem, isBookItemValidating };
// };

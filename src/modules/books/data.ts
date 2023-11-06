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

const BOOK_COMMENTS_KEY = "/bookComments";

const bookFetcher = async ([key, page]: string | number[]) => {
  try {
    // const response = await booksApi.get<BookItem[]>(`${key}?_sort=id&_order=desc`);
    const response = await booksApi.get<BookItem[]>(`${key}`);
    // return response.data[0].item;
    return response.data;
  } catch (e: any) {
    return INIT_DATA;
  }
};

const commentFetcher = async (bookId: number) => {
  try {
    const response = await booksApi.get<BookComment[]>(`${BOOK_COMMENTS_KEY}/${bookId}`);
    return response.data;
  } catch (e: any) {
    return [];
  }
};

export const useBooksItem = (page?: number) => {
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

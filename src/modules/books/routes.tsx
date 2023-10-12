import { Route } from "react-router-dom";
import { lazy } from "react";

const BookSidebar = lazy(() => import("./BookSidebar"));
const BookList = lazy(() => import("./BookList"));
const BookNewList = lazy(() => import("./BookNewList"));
const BookBestList = lazy(() => import("./BookBestList"));
const BookForeignList = lazy(() => import("./BookForeignList"));
const BookSearch = lazy(() => import("./BookSearch"));
const BookPage = lazy(() => import("./BookPage"));

export const booksRouts = [
  <Route key="books" path="books" element={<BookSidebar />}>
    ,
    <Route element={<BookList />} index />,
    <Route key="best" path="best" element={<BookBestList />} />,
    <Route key="new" path="new" element={<BookNewList />} />,
    <Route key="foregin" path="foreign" element={<BookForeignList />} />,
  </Route>,
  <Route key="search" path="/search" element={<BookSearch />} />,
  <Route key="page" path="/page" element={<BookPage />} />,
];

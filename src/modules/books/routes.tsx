import { Route } from "react-router-dom";
import BookList from "./BookList";
import BookBestList from "./BookBestList";
import BookNewList from "./BookNewList";
import BookSearch from "./BookSearch";
import { lazy } from "react";
import BookForeignList from "./BookForeignList";

const BookSidebar = lazy(() => import("./BookSidebar"));

export const booksRouts = [
  <Route key="books" path="books" element={<BookSidebar />}>
    ,
    <Route element={<BookList />} index />,
    <Route key="best" path="best" element={<BookBestList />} />,
    <Route key="new" path="new" element={<BookNewList />} />,
    <Route key="foregin" path="foreign" element={<BookForeignList />} />,
  </Route>,
  <Route key="search" path="/search" element={<BookSearch />} />,
];

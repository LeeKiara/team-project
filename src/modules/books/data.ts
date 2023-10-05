interface BookData {
  id?: number;
  imgURL: string;
  title: string;
  creator: string;
  price: string;
}

const INIT_DATA: BookData[] = [];

export const BOOKS_DATA_KEY = "/mall/books";

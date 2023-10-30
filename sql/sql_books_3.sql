use bookshop;

select * from identity;

select * from cart;

select * from book_comment;
truncate table book_comment;
select * from profile;

truncate table foreignbook;
truncate table identity;

select * from foreignbook;
select * from foreign_books;

SELECT * FROM books WHERE SUBSTRING(books.category_name, 1, 4) LIKE '국내도서%';

SELECT books.id, books.publisher, books.title, books.link, books.author, books.pub_date, books.description, books.item_id, books.price_sales, books.price_standard, books.stock_status, books.cover, books.category_id, books.category_name, COUNT(book_comment.id) FROM books LEFT JOIN book_comment ON books.id = book_comment.book_id WHERE SUBSTRING(books.category_name, 1, 4) LIKE '국내도서%' GROUP BY books.id ORDER BY books.id DESC LIMIT 5;


INSERT INTO books (publisher, title, link, author, pub_date, description, isbn, isbn13, item_id, price_sales, price_standard, stock_status, cover, category_id, category_name, customer_review_rank)
SELECT publisher, title, link, author, pub_date, description, isbn, isbn13, item_id, price_sales, price_standard, stock_status, cover, category_id, category_name, customer_review_rank
FROM book;

INSERT INTO books (publisher, title, link, author, pub_date, description, isbn, isbn13, item_id, price_sales, price_standard, stock_status, cover, category_id, category_name, customer_review_rank)
SELECT publisher, title, link, author, pubDate, description, isbn, isbn13, itemId, priceSales, priceStandard, stockStatus, cover, categoryId, categoryName, customerReviewRank
FROM foreign_1;

INSERT INTO books (publisher, title, link, author, pub_date, description, isbn, isbn13, item_id, price_sales, price_standard, stock_status, cover, category_id, category_name, customer_review_rank)
SELECT publisher, title, link, author, pubDate, description, isbn, isbn13, itemId, priceSales, priceStandard, stockStatus, cover, categoryId, categoryName, customerReviewRank
FROM foreignbook;

CREATE TABLE `books` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `publisher` varchar(32) NOT NULL,
  `title` varchar(512) NOT NULL,
  `link` varchar(512) NOT NULL,
  `author` varchar(512) NOT NULL,
  `pub_date` varchar(10) NOT NULL,
  `description` varchar(512) NOT NULL,
  `isbn` varchar(13) NOT NULL,
  `isbn13` varchar(13) NOT NULL,
  `item_id` int NOT NULL,
  `price_sales` int NOT NULL,
  `price_standard` int NOT NULL,
  `stock_status` varchar(20) NOT NULL,
  `cover` varchar(512) NOT NULL,
  `category_id` int NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `customer_review_rank` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `books_id_unique` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1069 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

select * from books;
select * from books order by books.id DESC;

select * from book;
truncate table books;

truncate table new_books;
select * from new_books;

select * from order_item;

CREATE TABLE `book` (
  `id` int DEFAULT NULL,
  `publisher` text,
  `title` text,
  `link` text,
  `author` text,
  `pub_date` text,
  `description` text,
  `isbn` text,
  `isbn13` text,
  `item_id` int DEFAULT NULL,
  `price_sales` int DEFAULT NULL,
  `price_standard` int DEFAULT NULL,
  `stock_status` text,
  `cover` text,
  `category_id` int DEFAULT NULL,
  `category_name` text,
  `customer_review_rank` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
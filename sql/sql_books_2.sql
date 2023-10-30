SELECT books.id, books.publisher, books.title, books.link, books.author, books.pub_date, books.description, books.isbn, books.isbn13, books.item_id, books.price_sales, books.price_standard, books.stock_status, books.cover, books.category_id, books.category_name, books.customer_review_rank, book_comment.id, book_comment.book_id, book_comment.comment, book_comment.profile_id FROM books LEFT JOIN book_comment ON books.id = book_comment.book_id WHERE books.item_id = 299836378;

SELECT COUNT(*) FROM (SELECT books.id books_id, books.publisher books_publisher, books.title books_title, books.link books_link, books.author books_author, books.pub_date books_pub_date, books.description books_description, books.item_id books_item_id, books.price_sales books_price_sales, books.price_standard books_price_standard, books.stock_status books_stock_status, books.cover books_cover, books.category_id books_category_id, books.category_name books_category_name, COUNT(book_comment.id) exp0 FROM books LEFT JOIN book_comment ON books.id = book_comment.book_id WHERE SUBSTRING(books.category_name, 1, 4) LIKE '국내도서%' GROUP BY books.id) subquery;

SELECT books.id, books.publisher, books.title, books.link, books.author, books.pub_date, books.description, books.item_id, books.price_sales, books.price_standard, books.stock_status, books.cover, books.category_id, books.category_name, COUNT(book_comment.id) FROM books LEFT JOIN book_comment ON books.id = book_comment.book_id WHERE SUBSTRING(books.category_name, 1, 13) LIKE '국내도서>%' GROUP BY books.id ORDER BY books.id DESC LIMIT 5;

SELECT books.id, books.publisher, books.title, books.link, books.author, books.pub_date, books.description, books.isbn, books.isbn13, books.item_id, books.price_sales, books.price_standard, books.stock_status, books.cover, books.category_id, books.category_name, books.customer_review_rank, order_item.id, order_item.item_id, order_item.quantity, order_item.order_price, order_item.order_id FROM books INNER JOIN order_item ON order_item.item_id = books.item_id GROUP BY books.id, books.publisher, books.title, books.link, books.author, books.pub_date, books.description, books.item_id, books.price_sales, books.price_standard, books.stock_status, books.cover, books.category_id, books.category_name, books.customer_review_rank, order_item.id, order_item.order_id, order_item.order_price, order_item.item_id, order_item.quantity ORDER BY SUM(order_item.quantity) DESC;

SELECT new_books.id, new_books.publisher, new_books.title, new_books.link, new_books.author, new_books.pub_date, new_books.description, new_books.isbn, new_books.isbn13, new_books.item_id, new_books.price_sales, new_books.price_standard, new_books.stock_status, new_books.cover, new_books.category_id, new_books.category_name, new_books.customer_review_rank FROM new_books WHERE SUBSTRING(new_books.category_name, 1, 13) LIKE '소설/시/희곡%' ORDER BY new_books.id DESC;

-- 댓글찾기--
SELECT book_comment.id, book_comment.new_book_id, book_comment.book_id, book_comment.comment, book_comment.profile_id, profile.id, profile.email, profile.nickname, profile.phone, profile.identity_id FROM book_comment INNER JOIN profile ON profile.id = book_comment.profile_id WHERE book_comment.book_id = 1031;
SELECT books.id, books.publisher, books.title, books.link, books.author, books.pub_date, books.description, books.isbn, books.isbn13, books.item_id, books.price_sales, books.price_standard, books.stock_status, books.cover, books.category_id, books.category_name, books.customer_review_rank FROM books WHERE books.id = 1031;

SELECT * FROM books join book_comment on books.id = book_comment.book_id;

select * from books, book_comment
where books.id = book_comment.book_id;

select * from cart;
select * from cart_item;

select * from books, book_comment, profile
where books.id = book_comment.book_id
and book_comment.profile_id = profile.id;

select * from like_books;

SELECT books.id, books.publisher, books.title, books.link, books.author, books.pub_date, books.description, books.isbn, books.isbn13, books.item_id, books.price_sales, books.price_standard, books.stock_status, books.cover, books.category_id, books.category_name, books.customer_review_rank, COUNT(book_comment.id) commentCount FROM books LEFT JOIN book_comment ON books.id = book_comment.book_id WHERE (SUBSTRING(books.category_name, 1, 4) LIKE '국내도서%') AND ((TRIM(books.title) LIKE '%해리포터%') OR (books.category_name LIKE '%해리포터%') OR (books.author LIKE '%해리포터%') OR (books.publisher LIKE '%해리포터%')) GROUP BY books.id ORDER BY books.id DESC LIMIT 5;

SELECT like_books.id, like_books.new_book_id, like_books.book_id, like_books.likes, like_books.profile_id, books.id, books.publisher, books.title, books.link, books.author, books.pub_date, books.description, books.isbn, books.isbn13, books.item_id, books.price_sales, books.price_standard, books.stock_status, books.cover, books.category_id, books.category_name, books.customer_review_rank, profile.id, profile.email, profile.nickname, profile.phone, profile.identity_id FROM like_books INNER JOIN books ON books.id = like_books.book_id LEFT JOIN profile ON profile.id = like_books.profile_id WHERE (like_books.new_book_id = books.id);

truncate table like_books;
select * from like_books;

select * from like_books where like_books.id = 1;

UPDATE like_books
SET likes = false
WHERE id = 1;

select * from orders;
select * from order_item;

CREATE TABLE `order_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `item_id` int NOT NULL,
  `quantity` int NOT NULL,
  `order_price` int NOT NULL,
  `order_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `order_item_id_unique` (`id`),
  KEY `fk_order_item_order_id__id` (`order_id`),
  CONSTRAINT `fk_order_item_order_id__id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `order_item` (`item_id`, `quantity`, `order_price`, `order_id`) VALUES
(318372642, 5, 100, 1),
(247064966, 3, 75, 1),
(215742011, 2, 50, 2),
(151571198, 4, 120, 2),
(135359371, 2, 50, 3),
(32130217, 1, 25, 3),
(27653151, 3, 75, 4),
(22940384, 6, 150, 4),
(18347192, 1, 25, 5),
(187574, 6, 150, 4),
(237763, 1, 25, 5),
(14522431, 2, 50, 5);

INSERT INTO `orders` (`order_date`, `payment_method`, `payment_price`, `order_status`, `profile_id`)
VALUES
(NOW(), 'A', 100, 'S', 1),
(NOW(), 'B', 75, 'S', 1),
(NOW(), 'A', 50, 'S', 2),
(NOW(), 'B', 120, 'S', 2),
(NOW(), 'A', 50, 'S', 3);

CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `order_date` datetime(6) NOT NULL,
  `payment_method` varchar(1) NOT NULL,
  `payment_price` int NOT NULL,
  `order_status` varchar(1) NOT NULL,
  `profile_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `orders_id_unique` (`id`),
  KEY `fk_orders_profile_id__id` (`profile_id`),
  CONSTRAINT `fk_orders_profile_id__id` FOREIGN KEY (`profile_id`) REFERENCES `profile` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


select * from cart;
select * from cart_item;

select item_id, sum(quantity) from order_item
group by item_id
order by 2 desc;


SELECT
    books.id,
    books.publisher,
    books.title,
    books.link,
    books.author,
    books.pub_date,
    books.description,
    books.isbn,
    books.isbn13,
    books.item_id,
    books.price_sales,
    books.price_standard,
    books.stock_status,
    books.cover,
    books.category_id,
    books.category_name,
    books.customer_review_rank,
    order_item.id AS order_item_id,
    order_item.item_id AS order_item_item_id,
    SUM(order_item.quantity) AS total_quantity,
    order_item.order_price,
    order_item.order_id
FROM
    books
INNER JOIN
    order_item
ON
    order_item.item_id = books.item_id
GROUP BY
    books.id,
    books.publisher,
    books.title,
    books.link,
    books.author,
    books.pub_date,
    books.description,
    books.isbn,
    books.isbn13,
    books.item_id,
    books.price_sales,
    books.price_standard,
    books.stock_status,
    books.cover,
    books.category_id,
    books.category_name,
    books.customer_review_rank,
    order_item.id,
    order_item.item_id,
    order_item.order_price,
    order_item.order_id
ORDER BY
    total_quantity DESC;

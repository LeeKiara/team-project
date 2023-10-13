import { Link } from "react-router-dom";
import { BookNewContainer } from "./styles";
import { useState } from "react";
import { useBooksItem } from "../data";
import Button from "@/components/Button";

const BookNewList = () => {
  const { booksItem: books, isBookItemValidating } = useBooksItem();

  return (
    <>
      <BookNewContainer>
        {isBookItemValidating ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            <ul>
              {books.length > 0 ? (
                books.slice(0, 8).map((item) => (
                  <li key={`${item.itemId}`}>
                    <figure>
                      <Link to={`/page?keyword=${item.itemId}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <h3>
                        {`${item.title}`.length > 12
                          ? `${item.title}`.slice(0, 12) + "..."
                          : `${item.title}`}
                      </h3>
                      <p>
                        {`${item.author}`.length > 8
                          ? `${item.author}`.slice(0, 8) + "..."
                          : `${item.author}`}
                      </p>
                      <dl>
                        정가
                        <del>{`${item.priceStandard}`}원</del>
                      </dl>
                      <dl>판매가: {`${item.priceSales}`}원</dl>
                      <Button
                        gubun="KOR"
                        itemId={item.itemId}
                        title={item.title}
                        cover={item.cover}
                        priceStandard={item.priceStandard.toString()}
                        priceSales={item.priceSales.toString()}
                        quantity="1"
                      />
                    </div>
                  </li>
                ))
              ) : (
                <p>책을 찾을 수 없습니다.</p>
              )}
            </ul>
          </section>
        )}
      </BookNewContainer>
    </>
  );
};

export default BookNewList;

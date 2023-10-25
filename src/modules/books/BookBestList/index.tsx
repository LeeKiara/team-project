import { useEffect, useState } from "react";
import { BookBestContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";
import { useBooksItem } from "../data";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Button from "@/components/Button";

const BookBestList = () => {
  const { booksItem: books, isBookItemValidating } = useBooksItem();
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();
  //선호작품 상태값
  const [storeHeartStates, setStoreHeartStates] = useState({});

  //선호작품 추가
  const handleBookSave = (itemId: number) => {
    setStoreHeartStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  //카테고리 이동 쿼리
  useEffect(() => {
    const queryKeyword = params.get("keyword") || "";
    setSearchQuery(queryKeyword);
  }, [params]);

  return (
    <>
      <BookBestContainer>
        <p>{searchQuery}</p>
        {isBookItemValidating ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            {books.length > 0 ? (
              books.slice(0, 5).map((item) => (
                <article key={`${item.itemId}`}>
                  <div>
                    <figure>
                      <Link to={`/page?keyword=${item.itemId}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <h3>
                        <Link to={`/page?keyword=${item.itemId}`}>{`${item.title}`}</Link>
                      </h3>
                      <dl>
                        <dt>지은이:</dt>
                        <p>{`${item.author}`}</p>
                        <dt>출판사:</dt>
                        <p>{`${item.publisher}`}</p>
                      </dl>
                      <h4>책 소개</h4>
                      <p>{`${item.description}`}</p>
                    </div>
                  </div>
                  <ul>
                    <li>
                      정가:
                      <del>
                        <p>{`${item.priceStandard}`}원</p>
                      </del>
                    </li>
                    <li>판매가: {`${item.priceSales.toLocaleString()}`}원</li>
                    <li
                      onClick={() => {
                        handleBookSave(item.itemId);
                      }}>
                      <button className="btn">
                        {storeHeartStates[item.itemId] ? (
                          <Favorite className="material-icons-outlined heart" />
                        ) : (
                          <FavoriteBorder className="material-icons-outlined" />
                        )}
                        선호작품
                      </button>
                    </li>
                    <Button itemId={item.itemId} quantity={1} />
                  </ul>
                </article>
              ))
            ) : (
              <p>책을 찾을 수 없습니다.</p>
            )}
          </section>
        )}
      </BookBestContainer>
    </>
  );
};

export default BookBestList;

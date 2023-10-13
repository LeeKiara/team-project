import { SearchContainer } from "./styles";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useBooksItem } from "../data";
import {
  Favorite,
  FavoriteBorder,
  ThumbDown,
  ThumbDownOffAlt,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import Button from "@/components/Button";

const BookSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();
  const [storeHeartStates, setStoreHeartStates] = useState({});
  const [storeThumbStates, setStoreThumbState] = useState({});
  const [storeThumbDownStates, setStoreThumbDownState] = useState({});
  const [page, setPage] = useState(0);
  const { booksItem: books, isBookItemValidating } = useBooksItem(page);

  const handleBookSave = (itemId: number) => {
    setStoreHeartStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };
  const handleThumbUp = (itemId: number) => {
    setStoreThumbState((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };
  const handleThumbDown = (itemId: number) => {
    setStoreThumbDownState((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  useEffect(() => {
    const queryKeyword = params.get("keyword") || "";
    setSearchQuery(queryKeyword);
  }, [params]);

  return (
    <>
      <SearchContainer>
        {isBookItemValidating ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            <span>
              {searchQuery}
              <h4>검색 결과</h4>
              <p></p>
            </span>
            <table>
              <thead>
                <tr>
                  <th>책표지</th>
                  <th>책제목</th>
                  <th>저자</th>
                  <th>출판사</th>
                  <th>책소개</th>
                  <th>알라딘 링크</th>
                  <th>정가</th>
                  <th>판매가</th>
                  <th>재고량</th>
                  <th>선택</th>
                </tr>
              </thead>
              <tbody>
                {books.length > 0 ? (
                  books.slice(0, 10).map((item) => (
                    <tr key={`${item.itemId}`}>
                      <td>
                        <Link to={`/page?keyword=${item.itemId}`}>
                          <img src={`${item.cover}`} alt={`${item.title}`} />
                        </Link>
                      </td>
                      <td>" {`${item.title}`} "</td>
                      <td>{`${item.author}`}</td>
                      <td>{`${item.publisher}`}</td>
                      <td>{`${item.description}`}</td>
                      <td>
                        <Link to={`${item.link}`}>{`${item.link}`}</Link>
                      </td>
                      <td>
                        <del>{`${item.priceStandard}`}</del>
                      </td>
                      <td>{`${item.priceSales}`}</td>
                      <td>10</td>
                      <td>
                        <div>
                          <dl
                            onClick={() => {
                              handleBookSave(item.itemId);
                            }}
                          >
                            <button className="btn">
                              {storeHeartStates[item.itemId] ? (
                                <Favorite className="material-icons-outlined heart" />
                              ) : (
                                <FavoriteBorder className="material-icons-outlined" />
                              )}
                              선호작품
                            </button>
                          </dl>
                          <dl
                            onClick={() => {
                              handleThumbUp(item.itemId);
                            }}
                          >
                            <button className="btn">
                              {storeThumbStates[item.itemId] ? (
                                <ThumbUp className="material-icons-outlined thumb" />
                              ) : (
                                <ThumbUpOffAlt className="material-icons-outlined" />
                              )}
                              추천
                            </button>
                          </dl>
                          <dl
                            onClick={() => {
                              handleThumbDown(item.itemId);
                            }}
                          >
                            <button className="btn">
                              {storeThumbDownStates[item.itemId] ? (
                                <ThumbDown className="material-icons-outlined thumb" />
                              ) : (
                                <ThumbDownOffAlt className="material-icons-outlined" />
                              )}
                              싫어요
                            </button>
                          </dl>
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
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>책을 찾을 수 없습니다.</p>
                )}
              </tbody>
            </table>
          </section>
        )}
      </SearchContainer>
    </>
  );
};

export default BookSearch;

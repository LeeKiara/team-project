import { useEffect, useState } from "react";
import { BookBestContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";
import { BookData, BookItem } from "../data";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Button from "@/components/Button";
import axios from "axios";
import { getCookie } from "@/utils/cookie";
import { ProfileData } from "@/modules/cart/userdata";

const BookBestList = () => {
  const token = getCookie("token");

  const [bookList, setBookList] = useState<BookItem[]>([]);
  //카테고리 상태값
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();
  //선호작품 상태값
  const [storeHeartStates, setStoreHeartStates] = useState({});
  //유저정보
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  //선호작품 추가
  const handleBookSave = async (itemId: number) => {
    if (!token) {
      alert("로그인 후 이용해주세요.");
      return;
    } else {
      setStoreHeartStates((prevStates) => ({
        ...prevStates,
        [itemId]: !prevStates[itemId],
      }));
      const likes = !storeHeartStates[itemId];
      console.log(likes);
      const newStoreHearts = {
        like: likes,
      };
      try {
        const response = await axios.put(`http://localhost:8081/books/${itemId}/like`, newStoreHearts, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          console.log("선호작품 등록/수정 성공..!");
        }
      } catch (e: any) {
        console.log(e + "선호작품 오류");
      }
    }
  };

  //내 선호작품 표시
  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await axios.get<ProfileData>(`http://localhost:8081/auth/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProfileData(response.data);
          //좋아요 상태값 설정
        } catch (e: any) {
          console.log(e);
        }
      })();
      bookList.map((book) => {
        // 좋아요 데이터를 해당 북 객체에 추가
        const bookWithLikeData = { ...book, likeData: book.likedBook };

        bookWithLikeData.likeData.forEach((like) => {
          if (like.profileId === profileData.profileId) {
            setStoreHeartStates((prevStates) => ({
              ...prevStates,
              [bookWithLikeData.id]: like.likes,
            }));
          }
        });
      });
    }
  }, [bookList]);

  //카테고리 이동
  useEffect(() => {
    console.log(params);
    const queryKeyword = params.get("option") || "";
    console.log(queryKeyword + "카테고리 키워드");
    const query = queryKeyword.split(">")[1];
    console.log(query);
    setSearchQuery(query);
    if (queryKeyword) {
      (async () => {
        try {
          const response = await axios.get<BookData>(
            `http://localhost:8081/books/category?&option=국내도서>${query}&size=8&page=0`,
          );
          if (response.status === 200) {
            setBookList(response.data.content);
          }
        } catch (e: any) {
          console.log(e);
        }
      })();
    } else {
      (async () => {
        try {
          const response = await axios.get<BookData>(`http://localhost:8081/books/best?page=0&size=8`);
          if (response.status === 200) {
            setBookList(response.data.content);
          }
        } catch (e: any) {
          console.log(e);
        }
      })();
    }
  }, [searchQuery, params]);

  return (
    <>
      <BookBestContainer>
        {!bookList ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            {bookList.length > 0 ? (
              bookList.slice(0, 5).map((item) => (
                <article key={`${item.id}`}>
                  <div>
                    <figure>
                      <Link to={`/page?id=${item.id}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <h3>
                        <Link to={`/page?id=${item.id}`}>{`${item.title}`}</Link>
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
                    <li style={{ fontSize: "small" }}>
                      정가:
                      <del>
                        <p>{`${item.priceStandard}`}원</p>
                      </del>
                    </li>
                    <li style={{ color: "crimson", fontWeight: "bold" }}>
                      판매가: {`${item.priceSales.toLocaleString()}`}원
                    </li>
                    <li
                      onClick={() => {
                        handleBookSave(item.id);
                      }}>
                      <button className="btn">
                        {storeHeartStates[item.id] ? (
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

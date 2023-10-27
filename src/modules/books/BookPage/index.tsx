import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageContainer } from "./styles";
import { BookComment, BookItem, LikesItem } from "../data";
import axios from "axios";
import { Favorite, FavoriteBorder, ThumbDown, ThumbDownOffAlt, ThumbUp, ThumbUpOffAlt } from "@mui/icons-material";
import Button from "@/components/Button";
import { getCookie } from "@/utils/cookie";
import CommentList from "../CommentList";

interface ProfileData {
  profileId: number;
  nickname: string;
  phone?: string;
  email?: string;
}

const BookPage = () => {
  const token = getCookie("token");

  //유저 닉네임
  const [profile, setProfile] = useState<ProfileData | null>(null);

  //디테일 페이지 상태값
  const [detail, setDetail] = useState<BookItem | null>(null);
  //디테일 페이지 id가져오기
  const [searchParams] = useSearchParams();

  //카트데이터 수량값
  const [number, setNumber] = useState(0);

  //선호작품 상태값
  const [showHeartState, setShowHeartState] = useState(false);
  const [likeList, setLikeList] = useState<LikesItem[] | null>(null);
  // 추천 상태값
  const [storeThumbStates, setStoreThumbState] = useState({});
  //싫어요 상태값
  const [storeThumbDownStates, setStoreThumbDownState] = useState({});
  //댓글
  const [commentList, setCommentList] = useState<BookComment[] | null>(null);

  const commentText = useRef() as MutableRefObject<HTMLTextAreaElement>;

  //디테일 페이지 id값 가져오기
  const id = searchParams.get("id");
  //디테일 페이지 id값 가져오기
  const newId = searchParams.get("new");

  //quantity
  // const numberValue = useRef() as MutableRefObject<HTMLInputElement>;

  //수량 더하기 빼기
  const handlePlus = () => {
    setNumber(number + 1);
  };
  const handleMinus = () => {
    setNumber(number - 1);
  };

  //선호작품
  const handleBookSave = async (itemId: number) => {
    if (!token) {
      alert("로그인 후 이용해주세요.");
    } else {
      const newParam = newId ? 0 : null;
      const likes = !showHeartState;
      console.log(likes);
      const newStoreHearts = {
        new: newParam,
        like: likes,
      };

      setShowHeartState(likes);
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

  //추천
  const handleThumbUp = (itemId: number) => {
    setStoreThumbState((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };
  //비추천
  const handleThumbDown = (itemId: number) => {
    setStoreThumbDownState((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  //댓글추가
  const handleSaveComment = (e) => {
    if (!token) {
      alert("로그인 후 이용해주세요.");
    } else {
      e.preventDefault();
      console.log(commentText.current.value);
      const newComment = commentText.current.value;
      if (newComment.trim() === "") {
        // 댓글이 공백일 경우 아무 작업도 수행하지 않음
        alert("댓글을 입력해주세요");
        return;
      }
      const time = new Date().getTime();
      console.log(time);
      const newParam = newId ? 0 : null;
      console.log(newParam + "신간인가");
      const newCommentItem = {
        new: newParam,
        comment: commentText.current.value,
        nickname: profile.nickname,
        createdDate: time,
      };

      const fetchBookComment = async (itemId: string) => {
        try {
          const response = await axios.post<BookComment>(`http://localhost:8081/books/${itemId}`, newCommentItem, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 201) {
            console.log("댓글추가성공");
            setCommentList((prevComments) => [response.data, ...(prevComments || [])]);
          }
        } catch (e: any) {
          console.log(e + "댓글 추가 오류");
        }
      };

      if (id) {
        console.log(id + "도서댓글 추가");
        fetchBookComment(id);
      } else if (newId) {
        console.log(newId + "신간댓글 추가");
        fetchBookComment(newId);
      }

      // 댓글 입력창 비우기
      commentText.current.value = "";
    }
  };

  //댓글 삭제
  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:8081/books/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("댓글 삭제 성공");
        setCommentList(commentList.filter((comment) => comment.id !== itemId));
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  //댓글 수정
  const handleModify = async (itemId, modifyValue) => {
    const modifyComment = JSON.stringify({ comment: modifyValue });
    try {
      const response = await axios.put(`http://localhost:8081/books/${itemId}`, modifyComment, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log("댓글 수정 성공");
        setCommentList(
          commentList.map((item) => (item.id === itemId ? { ...item, comment: modifyValue } : { ...item })),
        );
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  //화면 조회 swr
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get<BookData>(
  //         `http://localhost:9090/books`
  //       );
  //       if (response.status === 200) {
  //         const bookItem: BookItem | undefined = response.data[0].item.find(
  //           (book) => book.itemId === Number(keyword)
  //         );
  //         setDetail(bookItem);
  //       }
  //     } catch (e: any) {
  //       console.log(e);
  //     }
  //   })();
  // }, [keyword]);

  useEffect(() => {
    if (token) {
      if (likeList && likeList.length > 0) {
        console.log(likeList);
        console.log(profile.profileId);
        const likeItem = likeList.find((item) => item.profileId === profile.profileId);
        if (likeItem && likeItem.likes) {
          setShowHeartState(true);
        } else {
          setShowHeartState(false);
        }
      }
    }
  }, [likeList]);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await axios.get<ProfileData>(`http://localhost:8081/auth/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProfile(response.data);
        } catch (e: any) {
          console.log(e);
        }
      })();
    }
  }, [detail]);

  //서버 화면 조회
  useEffect(() => {
    const fetchBookDetail = async (itemId: string, isNew: boolean) => {
      try {
        const url = `http://localhost:8081/books/${isNew ? "new/" : ""}${itemId}`;
        const response = await axios.get<BookItem>(url);

        if (response.status === 200) {
          setDetail(response.data);
          const sortedComments = [...response.data.bookComment].sort((a, b) => b.id - a.id);
          setCommentList(sortedComments);
          setLikeList(response.data.likedBook);
        }
      } catch (e: any) {
        console.log(e);
      }
    };

    if (id) {
      console.log(id + "도서");
      fetchBookDetail(id, false);
    } else if (newId) {
      console.log(newId + "신간");
      fetchBookDetail(newId, true);
    }
  }, []);

  return (
    <>
      <PageContainer>
        <main>
          {detail ? (
            <article>
              <figure>
                <img src={`${detail.cover}`} alt={`${detail.title}`} />
              </figure>
              <aside>
                <h2>{`${detail.title}`}</h2>
                <hr />
                <div>
                  <dl>
                    <dt>출판사: </dt>
                    <p>{`${detail.publisher}`}</p>
                  </dl>
                  <dl>
                    <dt>발행일: </dt>
                    <p>{`${detail.pubDate}`}</p>
                  </dl>
                  <dl>
                    <dt>지은이: </dt>
                    <p>{`${detail.author}`}</p>
                  </dl>
                  <dl>
                    <dt>isbn: </dt>
                    <p>{`${detail.isbn}`}</p>
                  </dl>
                  <dl>
                    <dt>정가: </dt>
                    <p>
                      <del>{`${detail.priceStandard}`} 원</del>
                    </p>
                  </dl>
                  <dl>
                    <dt>판매가: </dt>
                    <p>{`${detail.priceSales}`} 원</p>
                  </dl>
                </div>
                <div id="amount">
                  수량:
                  <input
                    type="number"
                    // ref={numberValue}
                    placeholder="0"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value, 10))}
                  />
                  <div>
                    <img
                      onClick={handlePlus}
                      src="https://image.aladin.co.kr/img/shop/2018/icon_Aup.png"
                      alt="위 화살표"
                    />
                    <img
                      onClick={handleMinus}
                      src="https://image.aladin.co.kr/img/shop/2018/icon_Adown.png"
                      alt="아래화살표"
                    />
                  </div>
                </div>
              </aside>
              <nav>
                <ul>
                  <li
                    onClick={() => {
                      handleBookSave(detail.id);
                    }}>
                    <button className="btn">
                      {showHeartState ? (
                        <Favorite className="material-icons-outlined heart" />
                      ) : (
                        <FavoriteBorder className="material-icons-outlined" />
                      )}
                      선호작품
                    </button>
                  </li>
                  <li
                    onClick={() => {
                      handleThumbUp(detail.itemId);
                    }}>
                    <button className="btn">
                      {storeThumbStates[detail.itemId] ? (
                        <ThumbUp className="material-icons-outlined thumb" />
                      ) : (
                        <ThumbUpOffAlt className="material-icons-outlined" />
                      )}
                      추천
                    </button>
                  </li>
                  <li
                    onClick={() => {
                      handleThumbDown(detail.itemId);
                    }}>
                    <button className="btn">
                      {storeThumbDownStates[detail.itemId] ? (
                        <ThumbDown className="material-icons-outlined thumb" />
                      ) : (
                        <ThumbDownOffAlt className="material-icons-outlined" />
                      )}
                      싫어요
                    </button>
                  </li>
                  <Button itemId={detail.itemId} quantity={number} />
                </ul>
              </nav>
            </article>
          ) : (
            <p>책을 찾을 수 없습니다.</p>
          )}
          <section>
            <h2>도서정보</h2>
            <hr />
            <figure style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ margin: "auto" }}
                src="https://contents.kyobobook.co.kr/sih/fit-in/814x0/dtl/illustrate/151/i9791159242151.jpg"
                alt="이벤트사진"
              />
            </figure>
            {detail ? (
              <article>
                {detail.description ? (
                  <>
                    <hr />
                    <div>
                      <h3>책소개</h3>
                      <p>{detail.description}</p>
                    </div>
                  </>
                ) : null}
                {detail.seriesInfo ? (
                  <>
                    <hr />
                    <div>
                      <h3>시리즈</h3>
                      <Link to={detail.seriesInfo.seriesLink}>
                        <p>{detail.seriesInfo.seriesName}</p>
                      </Link>
                    </div>
                    <hr />
                  </>
                ) : null}
              </article>
            ) : (
              <div>
                <p>책 소개 글이 없습니다.</p>
              </div>
            )}
          </section>
          <footer className="comment-list">
            <form>
              <h4>
                독자서평쓰기
                <sub>로그인을 하시면 댓글을 작성할 수 있습니다.</sub>
              </h4>
              <label>
                <textarea placeholder="댓글을 입력해주세요" cols={100} rows={10} ref={commentText}></textarea>
                <button
                  onClick={(e) => {
                    handleSaveComment(e);
                  }}>
                  등록
                </button>
              </label>
            </form>
            <CommentList
              comments={commentList}
              nickname={profile?.nickname}
              onClick={handleDelete}
              onConfirm={handleModify}
            />
          </footer>
        </main>
      </PageContainer>
    </>
  );
};

export default BookPage;

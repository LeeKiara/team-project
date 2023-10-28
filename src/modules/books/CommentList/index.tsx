import { PortraitOutlined } from "@mui/icons-material";
import { CommnetListContainer } from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { BookComment } from "../data";
import { getCookie } from "@/utils/cookie";
import axios from "axios";

interface CommentModalProps {
  comments: BookComment[];
  onConfirm: (itemId: number, modifyValue: string) => void;
  onClick: (itemId: number) => void;
  nickname?: string;
  id?: string;
  newId: string;
}

const CommentList = ({ comments, onClick, onConfirm, nickname, id, newId }: CommentModalProps) => {
  const token = getCookie("token");
  const [commentList, setCommentList] = useState<BookComment[] | null>(comments);

  const commentText = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const [showModify, setShowModify] = useState({});
  //수정 댓글
  const [modifyValue, setModifyValue] = useState("");
  const modifyRef = useRef() as MutableRefObject<HTMLInputElement>;

  //답글 상태값
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleShowModify = (itemId: number) => {
    setShowModify((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };
  const handleConfirm = (e, itemId) => {
    e.preventDefault();
    if (modifyValue.trim() === "") {
      alert("댓글을 입력해주세요");
      return;
    }
    onConfirm(itemId, modifyValue);
    setShowModify((prev) => ({
      ...prev,
      [itemId]: false[itemId],
    }));
  };

  //답글 추가 모달 상태값
  const handleShowReplyInput = () => {
    setShowReplyInput(true);
  };
  const handleCancleShowReplyInput = () => {
    setShowReplyInput(false);
  };

  //댓글추가
  const handleSaveComment = (e) => {
    if (!token) {
      alert("로그인 후 이용해주세요.");
      return;
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
        nickname: nickname,
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
      setShowReplyInput(false);
    }
  };

  const handleCancle = () => {
    setShowModify(false);
    modifyRef.current.value = "";
  };

  useEffect(() => {
    if (comments && comments.length > 0) {
      const sortedComments = [...comments].sort((a, b) => b.id - a.id);
      setCommentList(sortedComments);
    }
  }, [comments]);

  return (
    <>
      <CommnetListContainer>
        <div className="comment-list">
          {commentList && commentList.length > 0 ? (
            commentList.map((item) => (
              <div key={item.id}>
                <span>
                  <h5>
                    <PortraitOutlined className="material-symbols-outlined" />
                    <sub>{item.nickname}</sub>
                  </h5>
                  <h6>{timeCheck(item.createdDate)}</h6>
                </span>
                <span>
                  {showModify[item.id] ? (
                    <input
                      ref={modifyRef}
                      defaultValue={item.comment}
                      onChange={(e) => {
                        setModifyValue(e.target.value);
                      }}
                    />
                  ) : (
                    <div>
                      <p>{item.comment}</p>
                      {showReplyInput ? (
                        <div id="reply-comment">
                          <textarea placeholder="댓글을 입력해주세요" cols={100} rows={5} ref={commentText}></textarea>
                          <div>
                            <button
                              className="modify-btn"
                              onClick={(e) => {
                                handleSaveComment(e);
                              }}>
                              등록
                            </button>
                            <button
                              className="modify-btn"
                              onClick={() => {
                                handleCancleShowReplyInput();
                              }}>
                              취소
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  )}
                  {item.nickname === nickname ? (
                    <div>
                      <button
                        className="modify-btn"
                        onClick={
                          showModify[item.id]
                            ? (e) => {
                                handleConfirm(e, item.id);
                              }
                            : () => {
                                handleShowModify(item.id);
                              }
                        }>
                        {showModify[item.id] ? "완료" : "수정"}
                      </button>
                      <button
                        className="modify-btn"
                        onClick={
                          showModify[item.id]
                            ? handleCancle
                            : () => {
                                onClick(item.id);
                              }
                        }>
                        {showModify[item.id] ? "취소" : "삭제"}
                      </button>
                    </div>
                  ) : null}
                  {item.nickname !== nickname && !showReplyInput ? (
                    <button className="modify-btn" onClick={handleShowReplyInput}>
                      답글
                    </button>
                  ) : null}
                </span>
              </div>
            ))
          ) : (
            <div>
              <p>댓글이 없습니다.</p>
            </div>
          )}
        </div>
      </CommnetListContainer>
    </>
  );
};

export default CommentList;

function timeCheck(createdTime) {
  const time = new Date();
  const savedTime = new Date(createdTime);
  const savedDay = `${savedTime.getFullYear()}-${savedTime.getMonth()}-${savedTime.getDate().toString()}`;
  const currentDay = `${time.getFullYear()}-${time.getMonth()}-${time.getDate().toString()}`;
  if (savedDay === currentDay) {
    const currentTime = `${savedTime.getHours().toString().padStart(2, "0")}:
    ${savedTime.getMinutes().toString().padStart(2, "0")}:
    ${savedTime.getSeconds().toString().padStart(2, "0")}`;
    return currentTime;
  } else {
    return savedDay;
  }
}

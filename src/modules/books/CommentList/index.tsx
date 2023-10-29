import { Diversity1, PortraitOutlined } from "@mui/icons-material";
import { CommnetListContainer } from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { BookComment, ReplyComment } from "../data";
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
  const [replyList, setReplyList] = useState<ReplyComment[] | null>(null);

  const commentText = useRef() as MutableRefObject<HTMLInputElement>;

  //수정 상태값
  const [showModify, setShowModify] = useState({});
  //수정 댓글
  const [modifyValue, setModifyValue] = useState("");
  const modifyRef = useRef() as MutableRefObject<HTMLInputElement>;

  //답글 상태값
  const [showReplyInput, setShowReplyInput] = useState({});

  //댓글 수정창 보이기 상태값
  const handleShowModify = (itemId: number) => {
    setShowModify((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };
  //댓글 수정
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

  //수정취소
  const handleCancle = () => {
    setShowModify(false);
    modifyRef.current.value = "";
  };
  //답글 추가 모달 상태값
  const handleShowReplyInput = (itemId: number) => {
    setShowReplyInput((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };
  //답글 모달 취소
  const handleCancleShowReplyInput = () => {
    setShowReplyInput(false);
    commentText.current.value = "";
  };

  //답글추가
  const handleSaveComment = (e, commentId) => {
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
      const pageId = newId ? newId : id;
      console.log(newParam + "신간인가");
      console.log(pageId + "페이지 아이디인가");
      const newCommentItem = {
        new: newParam,
        comment: commentText.current.value,
        nickname: nickname,
        createdDate: time,
      };
      const fetchBookComment = async (commentId: string) => {
        try {
          const response = await axios.post<ReplyComment>(
            `http://localhost:8081/books/reply/${pageId}/${commentId}`,
            newCommentItem,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );

          if (response.status === 201) {
            console.log("댓글추가성공");
            setReplyList((prevComments) => [response.data, ...(prevComments || [])]);
          }
        } catch (e: any) {
          console.log(e + "댓글 추가 오류");
        }
      };

      fetchBookComment(commentId);

      // 댓글 입력창 비우기
      commentText.current.value = "";
      setShowReplyInput((prev) => ({
        ...prev,
        [commentId]: false[commentId],
      }));
    }
  };
  //답글 삭제
  const handleReplyDelete = async (commentId, id) => {
    try {
      const response = await axios.delete(`http://localhost:8081/books/reply/${commentId}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log("답글 삭제 성공");
        setReplyList(replyList.filter((reply) => reply.id !== id));
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (comments && comments.length > 0) {
      const sortedComments = [...comments].sort((a, b) => b.id - a.id);
      setCommentList(sortedComments);
      console.log(sortedComments + "댓글리스트");
      sortedComments.map((comment) => {
        const replyComments = [...comment.replyComment].sort((a, b) => b.id - a.id);
        setReplyList(replyComments);
      });
    }
  }, [comments]);

  return (
    <>
      <CommnetListContainer>
        {!commentList ? (
          <p>댓글 로딩 중...</p>
        ) : (
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
                    <div>
                      <div className="comment-main">
                        <div>
                          {!showModify[item.id] ? <p>{item.comment}</p> : null}
                          <span>
                            {showReplyInput[item.id] && item.nickname !== nickname ? (
                              <div
                                style={{
                                  marginTop: "10px",
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}>
                                <input ref={commentText} placeholder="댓글을 입력해주세요" />
                                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                  <button
                                    className="modify-btn"
                                    onClick={(e) => {
                                      handleSaveComment(e, item.id);
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
                            ) : (
                              <div className="display-none">
                                {showModify[item.id] ? (
                                  <input
                                    ref={modifyRef}
                                    defaultValue={item.comment}
                                    onChange={(e) => {
                                      setModifyValue(e.target.value);
                                    }}
                                  />
                                ) : null}
                              </div>
                            )}
                            {showReplyInput[item.id] && item.nickname !== nickname ? null : (
                              <div>
                                {item.nickname === nickname && (
                                  <div className={showModify[item.id] ? "modify-buttons" : "modify-buttons minus-btn"}>
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
                                )}
                              </div>
                            )}
                          </span>
                        </div>
                        {item.nickname !== nickname && !showReplyInput[item.id] && (
                          <div className="reply-btn">
                            <button
                              className="modify-btn"
                              onClick={() => {
                                handleShowReplyInput(item.id);
                              }}>
                              답글
                            </button>
                          </div>
                        )}
                        {!item.replyComment ? (
                          <p>답글 로딩 중..</p>
                        ) : (
                          <div>
                            {item.replyComment.length > 0 ? (
                              <div>
                                {replyList.map((reply) => (
                                  <span key={reply.id}>
                                    {reply.parentId === item.id && reply.nickname === nickname ? (
                                      <div className="reply-list">
                                        <span>
                                          <h5>
                                            <PortraitOutlined className="material-symbols-outlined" />
                                            <sub>{reply.nickname}</sub>
                                          </h5>
                                          <h6>{timeCheck(reply.createdDate)}</h6>
                                        </span>
                                        <span>
                                          <p>{reply.comment}</p>
                                          <button
                                            className="modify-btn"
                                            onClick={() => {
                                              handleReplyDelete(item.id, reply.id);
                                            }}>
                                            삭제
                                          </button>
                                        </span>
                                      </div>
                                    ) : (
                                      <div className="reply-list">
                                        <span>
                                          <h5>
                                            <PortraitOutlined className="material-symbols-outlined" />
                                            <sub>{reply.nickname}</sub>
                                          </h5>
                                          <h6>{timeCheck(reply.createdDate)}</h6>
                                        </span>
                                        <span>
                                          <p>{reply.comment}</p>
                                        </span>
                                      </div>
                                    )}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        )}
                      </div>
                    </div>
                  </span>
                </div>
              ))
            ) : (
              <div>
                <p>댓글이 없습니다.</p>
              </div>
            )}
          </div>
        )}
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

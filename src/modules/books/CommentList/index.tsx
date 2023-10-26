import { PortraitOutlined } from "@mui/icons-material";
import { CommnetListContainer } from "./styles";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { BookComment } from "../data";

interface CommentModalProps {
  comments: BookComment[];
  onConfirm: (itemId: number, modifyValue: string) => void;
  onClick: (itemId: number) => void;
  nickname?: string;
}

const CommentList = ({ comments, onClick, onConfirm, nickname }: CommentModalProps) => {
  const [commentList, setCommentList] = useState<BookComment[] | null>(comments);
  const [showModify, setShowModify] = useState({});
  const [modifyValue, setModifyValue] = useState("");
  const modifyRef = useRef() as MutableRefObject<HTMLInputElement>;

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
        <div className="commentList">
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
                    <p>{item.comment}</p>
                  )}
                  {item.nickname === nickname ? (
                    <div className="modifyBtn">
                      <button
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

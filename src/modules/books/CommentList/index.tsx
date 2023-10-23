import { PortraitOutlined } from "@mui/icons-material";
import { CommnetListContainer } from "./styles";
import { useProfileData } from "@/modules/cart/userdata";
import { useEffect, useState } from "react";

const CommentList = ({ comments }) => {
  const [showModify, setShowModify] = useState(false);
  //유저정보
  const { profileData } = useProfileData();

  return (
    <>
      <CommnetListContainer>
        <div className="commentList">
          {comments && comments.length > 0 ? (
            comments.map((item) => (
              <div key={item.id}>
                <span>
                  <h5>
                    <PortraitOutlined className="material-symbols-outlined" />
                    <sub>{item.nickname}</sub>
                  </h5>
                  <p>{item.comment}</p>
                </span>
                <span>
                  <h6>{timeCheck(item.createdDate)}</h6>
                  {item.nickname === profileData.nickname ? (
                    <div className="modifyBtn">
                      <button>수정</button>
                      <button>삭제</button>
                    </div>
                  ) : null}
                </span>
              </div>
            ))
          ) : (
            <p>댓글이 없습니다.</p>
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

import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { StoreHeartContainer } from "./styles";
import { useEffect, useState } from "react";

const StoreHeartButton = ({ id, onClick, liked }) => {
  const [storeHeartStates, setStoreHeartStates] = useState(liked);

  const handleButtonClick = () => {
    setStoreHeartStates((prevLiked) => !prevLiked); // 상태를 업데이트하는 코드

    // 이제 클릭 이벤트 핸들러를 호출합니다.
    onClick(id);
  };
  useEffect(() => {
    console.log(liked);
    setStoreHeartStates(liked);
  }, [liked]);

  return (
    <StoreHeartContainer>
      <div onClick={handleButtonClick}>
        <button className="btn">
          {storeHeartStates ? (
            <Favorite className="material-icons-outlined heart" />
          ) : (
            <FavoriteBorder className="material-icons-outlined" />
          )}
          선호작품
        </button>
      </div>
    </StoreHeartContainer>
  );
};

export default StoreHeartButton;

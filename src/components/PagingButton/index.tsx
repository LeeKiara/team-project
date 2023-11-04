import { useEffect, useState } from "react";

const PagingButton = () => {
  //현재 페이지
  const [currentPage, setCurrentPage] = useState(0);

  //페이징 숫자 처리
  const [arrowNumberList, setArrowNumberList] = useState([]);
  //페이징 화살표 상태값
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);

  //페이징
  const handleSetPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //페이징 화살표 마이너스
  const handlePageMinus = () => {
    setCurrentPage(currentPage - 1);
  };
  //페이징 화살표 플러스
  const handlePagePlus = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <nav>
      <ol>
        {showArrowLeft && (
          <li className="numberbox">
            <button onClick={handlePageMinus}>{`<`}</button>
          </li>
        )}
        {arrowNumberList.map((num) => (
          <li
            key={num}
            className="numberbox"
            onClick={() => {
              handleSetPage(num);
            }}>
            {num + 1}
          </li>
        ))}
        {showArrowRight && (
          <li className="numberbox">
            <button onClick={handlePagePlus}>{`>`}</button>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default PagingButton;

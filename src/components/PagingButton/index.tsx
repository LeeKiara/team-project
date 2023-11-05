import { PagingContainer } from "./styles";

const PagingButton = ({
  showArrowLeft,
  showArrowRight,
  arrowNumberList,
  handlePageMinus,
  handleSetPage,
  handlePagePlus,
}) => {
  return (
    <PagingContainer>
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
    </PagingContainer>
  );
};

export default PagingButton;

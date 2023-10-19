/*--------------------------
카카오 주소검색 Api 연동
설정 : 
npm install react-daum-postcode
npm install styled-components
---------------------------
*/
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Input, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { AddressSearchStyle } from "./styles";

// const AddressSearchForm = ({ onConfirm, onCancel }) => {
const AddressSearchForm = () => {
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);

  const [detailAddress, setDetailAddress] = useState<string>("");

  const navigate = useNavigate();

  // 데이터 받아오기
  const location = useLocation();
  const searchAddress = location.state;
  const postcode = searchAddress?.postcode;
  const address = searchAddress?.address;

  const handleSearch = () => {
    navigate("/address/search");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/address/succeed");
  };

  useEffect(() => {
    if (postcode && address && detailAddress) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [postcode, address, detailAddress]);

  return (
    // <AddressSearchStyle>
    <Container className="modal-container">
      <form onSubmit={handleSubmit}>
        <AdressWrapper>
          <PostCodeAndButton>
            <input type="text" placeholder="우편번호" value={postcode} style={{ width: "150px" }} />
            {/* <Input
              m="3px"
              size="md"
              type="text"
              placeholder="우편번호"
              value={postcode}
              readOnly
            /> */}
            <input type="button" placeholder="우편번호" value="주소 검색" onClick={handleSearch} />
            {/* <Input m="3px" size="md" type="button" onClick={handleSearch} value="주소 검색" /> */}
          </PostCodeAndButton>
          <input type="text" placeholder="주소" value={address} readOnly style={{ width: "500px" }} />
          {/* <Input m="3px" size="md" type="text" placeholder="주소" value={address} readOnly /> */}
          <input
            style={{ width: "500px" }}
            type="text"
            placeholder="상세주소"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
          {/* <Input
            m="3px"
            size="md"
            type="text"
            placeholder="상세주소"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          /> */}
        </AdressWrapper>
        <ButtonWrapper>
          <button type="submit">배송지 저장하기</button>
          {/* <Button colorScheme="twitter" isDisabled={!isFormComplete} type="submit">
            배송지 저장하기
          </Button> */}
        </ButtonWrapper>
      </form>
    </Container>
    // </AddressSearchStyle>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const AdressWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border: 1px solid #3e3c50;
  background: #fff;
  z-index: 1;
`;

const PostCodeAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default AddressSearchForm;

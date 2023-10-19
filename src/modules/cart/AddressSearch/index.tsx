/*--------------------------
카카오 주소검색 Api 연동
설정 : 
npm install react-daum-postcode
npm install styled-components
---------------------------
*/
import DaumPostcode from "react-daum-postcode";
import { getAddress } from "../../../utils/getAddress";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Input, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { AddressSearchStyle } from "./styles";
import AddressSearch from "./Search";

interface AddressSearchModalProps {
  onCancel: () => void;
}
// const AddressSearchForm = ({ onConfirm, onCancel }) => {
const AddressSearchForm = ({ onCancel }: AddressSearchModalProps) => {
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [addressSearchVisible, setAddressSearchVisible] = useState<boolean>(true);
  const [kakaoApiVisible, setKakaoApiSearchVisible] = useState<boolean>(true);

  const [detailAddress, setDetailAddress] = useState<string>("");

  const navigate = useNavigate();
  const location = useLocation();

  const searchAddress = location.state;
  const postcode = searchAddress?.postcode;
  const address = searchAddress?.address;

  const handleSearch = () => {
    // navigate("/address/search");
    setAddressSearchVisible(true);
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

  // 주소 검색 후 결과 값을 주문 폼에 전달
  const handleComplete = (data: any) => {
    const address = getAddress(data);

    // alert("address:" + address + ", zonecode:" + data.zonecode);

    navigate("/order", {
      state: {
        postcode: data.zonecode,
        address: address,
      },
    });

    onCancel();
  };

  return (
    // <AddressSearchStyle>
    <Container className="modal-container">
      <form onSubmit={handleSubmit}>
        <AdressWrapper>
          <div className="AdressWrapper-header">
            <div>주소찾기</div>

            {/* 닫기 버튼 */}
            <div className="box-close" onClick={onCancel}>
              X
            </div>
          </div>
          <hr />
          {/* <!-- layer : kakaoApi 주소 검색 --> */}
          {kakaoApiVisible && (
            <div className="kakaoApitForm">
              <DaumPostcode onComplete={handleComplete} />
            </div>
          )}
          <br />
        </AdressWrapper>
        <ButtonWrapper>
          {/* <button type="submit">배송지 저장하기</button> */}
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
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border: 1px solid #3e3c50;
  background: #fff;
  z-index: 1;
  padding-left: 45px;

  .AdressWrapper-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0px;
    /* border: 1px solid red; */
    width: 460px;
    font-size: 18px;
    font-weight: 600;

    .box-close {
      cursor: pointer;
    }
  }

  .kakaoApitForm {
    width: 470px;
    /* margin: 10px 50px; */
    border: 1px solid gray;
  }
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

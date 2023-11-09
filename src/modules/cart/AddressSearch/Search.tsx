import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import { getAddress } from "../../../utils/getAddress";
import styled from "styled-components";
// import { Text } from "@chakra-ui/react";
const AddressSearch = () => {
  const navigate = useNavigate();

  const handleComplete = (data: any) => {
    const address = getAddress(data);
    navigate("/address", {
      state: {
        postcode: data.zonecode,
        address: address,
      },
    });
  };

  return (
    <Container>
      <div>
        * 주소 찾기
        <div>
          <DaumPostcode onComplete={handleComplete} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* height: 100vh;
  text-align: center; */
  width: 500px;

  /* 모바일(mobile) 스타일 */
  @media (max-width: 768px) {
    /* > div {
      width: 360px;
      height: 360px;
    } */
  }
`;

export default AddressSearch;

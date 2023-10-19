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
    <div>
      {/* <input type="text" style={{ width: "500px" }} /> */}* 주소 찾기
      {/* <Text fontSize="3xl">주소 찾기</Text> */}
      <div style={{ width: "500px" }}>
        <DaumPostcode onComplete={handleComplete} />
      </div>
    </div>
  );
};

const Container = styled.div`
  height: 100vh;
  text-align: center;
`;

export default AddressSearch;

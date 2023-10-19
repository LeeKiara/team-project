import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { Button, Text } from "@chakra-ui/react";
// import { ChakraProvider } from "@chakra-ui/react";
const AddressSucceed = () => {
  const navigate = useNavigate();
  return (
    // <ChakraProvider>
    <div>
      <Container>
        <Div>
          <TextDiv>
            <input type="text" />
            성공적으로 저장되었습니다🥳
            {/* <Text mb="60px" fontSize="2xl">
              성공적으로 저장되었습니다🥳
            </Text> */}
          </TextDiv>
          <div>
            <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
            {/* <Button onClick={() => navigate("/")} mr="30px" colorScheme="messenger">
              홈으로 돌아가기
            </Button> */}
          </div>
        </Div>
      </Container>
    </div>
    // </ChakraProvider>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Div = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default AddressSucceed;

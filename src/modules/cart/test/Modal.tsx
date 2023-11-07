import ShowMessageModal from "@/components/ShowMessageModal";
import React from "react";
import styled from "styled-components";

// styled-components를 사용하여 스타일 지정
const LayerAddressDel = styled.div`
  width: 360px;
  background-color: #ffffff;
  border: 1px solid #477be0;
  box-shadow: 2px 3px 5px 0 #bababa;
`;

const ContBox = styled.table`
  min-height: 120px;
  padding: 20px;
  text-align: center;
`;

const Btn2 = styled.div`
  float: left;
  width: 50%;
  background-color: #aaaaaa;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 1.15em;
  padding: 10px 0;
`;

const Btn1 = styled.div`
  float: left;
  width: 50%;
  background: #477be0;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
  font-size: 1.15em;
  padding: 10px 0;
`;

function Modal() {
  return (
    <div>
      <LayerAddressDel>
        <ContBox>
          <tbody>
            <tr>
              <td valign="middle" className="big_t">
                <p>선택한 주소를 배송 주소록에서 삭제하시겠습니까?</p>
                삭제한 주소는 다시 복구할 수 없습니다.
              </td>
            </tr>
          </tbody>
        </ContBox>
        <a href="javascript:void(0);">
          <Btn2>취소</Btn2>
        </a>
        <a href="javascript:void(0);">
          <Btn1>삭제</Btn1>
        </a>
        <div style={{ clear: "both" }}></div>
      </LayerAddressDel>

      <hr />
      <ShowMessageModal message="상품을 선택하세요." />
    </div>
  );
}

export default Modal;

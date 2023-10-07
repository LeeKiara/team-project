import styled from "@emotion/styled";
// import deleteButtonImage from "@/modules/cart/assets/icon_delete_order.png";

export const CartListContainer = styled.div`
  /* 모바일 버전 스타일 */
  @media (max-width: 767px) {
    .cart-container {
      width: 100%; /* 모바일 버전의 경우 전체 너비로 설정 */
    }
  }

  /* PC 웹 버전 스타일 */
  @media (min-width: 768px) {
    .cart-container {
      width: 80%; /* PC 웹 버전의 경우 원하는 너비로 설정 */
      margin: 0 auto; /* 가운데 정렬을 위해 margin 사용 */
    }
  }

  .cart-container section {
    width: 65vw;
    margin: auto;
  }

  .cart-container article {
    width: 100%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    /* border: 1px dotted green; */
  }

  /* 테이블 전체 스타일 */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  /* 테이블 헤더 스타일 */
  thead tr {
    background-color: #f5f6f9;
  }

  /* 테이블 헤더 셀 스타일 */
  th {
    padding: 10px;
  }

  /* 테이블 내용 셀 스타일 */
  td {
    padding: 10px;
  }

  .box-list-payment table {
    width: 100%;
  }

  .box-list-payment th {
    padding: 11px 0;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    /* background: #f5f6f9; */
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
  }

  .box-list-payment td {
    padding: 16px 0;
    text-align: center;
    border-bottom: 1px solid #e1e1e1;
  }

  .box-list-payment td:first-of-type {
    border-left: 1px solid #e1e1e1;
  }

  .box-list-payment td:last-child {
    border-right: 1px solid #e1e1e1;
  }

  .box-list-payment td.checkbox {
    vertical-align: top;
  }

  .box-list-payment .link-detail {
    display: flex;
    float: left;
    padding: 0 15px;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.67px;
  }

  .box-list-payment .image {
    display: inline-block;
    margin: 0 23px 0 0;
    width: 110px;
    vertical-align: top;
  }

  .box-list-payment .image img {
    display: block;
    width: 110px;
    height: 154px;
    border: 1px solid #e1e1e1;
  }

  .box-list-payment .text {
    display: flex;
    flex-direction: column;
    font-weight: 400;
    max-width: 380px;
  }

  /* 1216 */
  /* .box-list-payment .text .box-period-select {
    width: 225px;
    margin-top: auto;
    padding-top: 20px;
  }

  .box-list-payment .text .box-period-select .form-select {
    width: 100%;
  }

  .box-list-payment .text .box-period-select .text-period {
    font-size: 14px;
  } */

  .box-list-payment .box-tag {
    margin: 8px 0;
  }

  .box-list-payment .icon-tag {
    display: inline-block;
    padding: 0 8px;
    width: auto;
    height: 22px;
    line-height: 20px;
    font-size: 12px;
    font-weight: 400;
    color: #0c9cff;
    border: 1px solid #0c9cff;
    border-radius: 4px;
  }

  .box-list-payment .box-price {
    font-size: 16px;
    letter-spacing: -1px;
  }

  .box-list-payment .box-price strong {
    font-size: 24px;
  }

  .box-list-payment .box-price del {
    display: block;
    font-size: 14px;
    letter-spacing: -0.5px;
    color: #bfc1cd;
  }

  .box-list-payment .btn-delete-item {
    display: inline-block;
    margin: 0 20px 0 0;
  }

  .box-list-payment .btn-delete-item button {
    display: block;
    width: 40px;
    height: 40px;
    text-indent: -1000px;
    overflow: hidden;
    border: 0px;
  }

  .box-list-payment .btn-view-list {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .box-list-payment .btn-view-list button {
    display: block;
    width: 100%;
    height: 48px;
    font-size: 16px;
    letter-spacing: -0.67px;
    text-align: center;
    border: 1px solid #e1e1e1;
    background: #fff;
  }

  .box-list-payment .btn-view-list button:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 12px;
    background: url("https://www.bookdonga.com/images/pc/icon_delete_order.png") no-repeat 50%;
  }

  .form-number {
    display: inline-block;
    position: relative;
    width: 100%;
    vertical-align: middle;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    overflow: hidden;
  }

  .form-number input[type="number"] {
    display: block;
    float: left;
    margin: 0;
    padding: 0;
    width: calc(100% - 20px);
    height: 30px;
    font-size: 14px;
    text-indent: 16px;
    border: none;
    border-radius: 0;
  }

  .form-number input[type="number"]::-webkit-inner-spin-button,
  .form-number input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .form-number input[type="number"] {
    -moz-appearance: textfield;
  }

  .form-number .quantity-nav {
    position: absolute;
    right: 0;
    top: 1px;
    height: 100%;
  }

  .form-number .quantity-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 20px;
    text-align: center;
    color: #808fa3;
    font-size: 13px;
    line-height: 20px;
    cursor: pointer;
    background: #f6f7fb;
    border-left: 1px solid #e1e1e1;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .form-number .quantity-button.quantity-up {
    position: absolute;
    height: 50%;
    top: 0;
    border-bottom: 1px solid #eee;
  }

  .form-number .quantity-button.quantity-down {
    position: absolute;
    bottom: 0;
    height: 50%;
  }
`;

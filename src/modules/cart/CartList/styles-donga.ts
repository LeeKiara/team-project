import styled from "@emotion/styled";

export const CartListContainer = styled.div`
  @media (min-width: 85rem) {
    div > section > article:nth-of-type(2) > ul {
      gap: 40px;
    }
    div > section > article:nth-of-type(2) > ul > div {
      flex-direction: row;
      justify-content: space-evenly;
    }
    div > section > article:nth-of-type(2) > ul > div > span {
      gap: 50px;
    }
  }
  @media (min-width: 100rem) {
    div > section > article:nth-of-type(2) > ul > div > span {
      gap: 80px;
    }
  }
  @media (min-width: 120rem) {
    div > section > article:nth-of-type(2) > ul {
      gap: 80px;
    }
    div > section > article:nth-of-type(2) > ul > div > span {
      gap: 120px;
    }
  }

  /* 결제하기 */
  .area-payment {
    margin: 0 0 0 80px;
  }

  .area-payment .area-inner {
    position: relative;
    margin: 0 auto;
    padding: 80px 0;
    width: 1200px;
  }

  .contain-payment-header {
    position: relative;
  }

  /* 결제 본문 헤더 */
  .area-payment .contain-payment-header {
    margin-bottom: 48px;
  }

  .area-payment .contain-payment-header .title {
    display: inline-block;
    margin: 0 15px 0 0;
    /* font-size:40px; */
    font-size: 28px;
    font-weight: 600;
    vertical-align: top;
    line-height: 1;
  }

  .area-payment .contain-payment-header .text {
    display: inline-block;
    margin: 0;
    /* font-size:16px; */
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }

  /* 결제 스탭 */
  .box-payment-step {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    border-radius: 2px;
    overflow: hidden;
  }

  .box-payment-step span {
    display: block;
    position: relative;
    z-index: 4;
    margin-right: -15px;
    overflow: hidden;
    height: 32px;
  }

  .box-payment-step span i {
    display: block;
    position: relative;
    z-index: 1;
    margin: 0 23px 0 0;
    padding: 0 0 0 14px;
    font-style: normal;
    color: #f5f6f9;
    font-size: 12px;
    font-weight: 400;
    line-height: 32px;
    white-space: nowrap;
    background: #616fde;
  }

  .box-payment-step span::after {
    content: "";
    display: block;
    position: absolute;
    right: 6px;
    top: 0px;
    width: 32px;
    height: 32px;
    background: #616fde;
    transform: rotate(45deg) skew(190deg, 190deg);
  }

  .box-payment-step span + span {
    z-index: 3;
  }

  .box-payment-step span + span i {
    margin: 0 20px 0 0;
    padding: 0 0 0 18px;
    color: #bfc1cd;
    font-weight: normal;
    background: #f5f6f9;
  }

  .box-payment-step span + span::after {
    background: #f5f6f9;
  }

  .box-payment-step span + span + span {
    z-index: 2;
  }

  .box-payment-step span + span + span i {
    padding: 0 0 0 24px;
    background: #fafafc;
  }

  .box-payment-step span + span + span::after {
    background: #fafafc;
  }

  .box-payment-step span + span + span + span {
    z-index: 1;
    background: #fcfcfc;
  }

  .box-payment-step span + span + span + span i {
    margin: 0;
    padding-right: 30px;
    background: #fcfcfc;
  }

  .box-payment-step span + span + span + span::after {
    content: none;
  }

  .box-payment-step span.on i {
    color: #fff;
    background: #616fde;
  }

  .box-payment-step span.on::after {
    background: #616fde;
  }

  .box-payment-step span.active i {
    color: #fff;
    background: #3d4ed7;
  }

  .box-payment-step span.active::after {
    background: #3d4ed7;
  }

  /* 리스트 헤더 */
  .box-list-header {
    margin-bottom: 8px;
    text-align: right;
  }

  .box-list-header .btn-type1 {
  }

  .box-list-header .btn-type1 button {
    padding: 0 16px;
    width: auto;
    height: 30px;
    line-height: 1;
    font-size: 14px;
    color: #333;
    font-weight: normal;
    border-color: #d7d7d7;
  }

  /* 장바구니 목록 */
  .box-list-payment {
    position: relative;
    margin-bottom: 32px;
    padding-bottom: 40px;
    height: auto;
    overflow: hidden;
  }

  .box-list-payment.on {
    height: 92px;
  }

  .box-list-payment table {
    width: 100%;
  }

  .box-list-payment th {
    padding: 11px 0;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    background: #f5f6f9;
    border-bottom: 1px solid #e1e1e1;
  }

  .box-list-payment th:first-child {
    border-left: 1px solid #f5f6f9;
  }

  .box-list-payment th:last-child {
    border-right: 1px solid #f5f6f9;
  }

  .box-list-payment td {
    padding: 16px 0;
    text-align: center;
    border-bottom: 1px solid #e1e1e1;
  }

  .box-list-payment td:first-child {
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
  .box-list-payment .text .box-period-select {
    width: 225px;
    margin-top: auto;
    padding-top: 20px;
  }

  .box-list-payment .text .box-period-select .form-select {
    width: 100%;
  }

  .box-list-payment .text .box-period-select .text-period {
    font-size: 14px;
  }

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
    background: url(/images/pc/icon_delete_order.png) no-repeat 50%;
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
    background: url(/images/pc/icon_more_orderlist.png) no-repeat 50%;
  }

  /* 합계금액 */
  .box-total-payment {
    display: flex;
    margin-bottom: 32px;
    padding: 28px 32px;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    border: 1px solid #999aa9;
    justify-content: space-between;
  }

  .box-total-payment .total-text {
    width: 200px;
    font-weight: 500;
  }

  .box-total-payment .total-sum {
    line-height: 1;
    text-align: center;
    font-weight: 400;
  }

  .box-total-payment .total-sum strong {
    display: inline-block;
    position: relative;
    top: -2px;
    margin: 0 0 0 15px;
    line-height: 1.5;
    vertical-align: middle;
    font-size: 18px;
    letter-spacing: -1px;
    color: #0091ff;
  }

  .box-total-payment .total-sum i {
    display: inline-block;
    position: relative;
    top: -2px;
    margin: 0 20px;
    font-weight: 400;
    vertical-align: middle;
    font-style: normal;
    font-size: 20px;
    color: #8d99ae;
  }

  .box-total-payment .total-price {
    width: 240px;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
  }

  .box-total-payment .total-price strong {
    display: inline-block;
    vertical-align: middle;
    margin: -6px 2px 0 15px;
    font-size: 24px;
    letter-spacing: -1px;
    color: #e02020;
  }

  .box-submit-payment {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  }

  .box-submit-payment .box-notice-type1 dt {
    margin: 0 0 16px 0;
    padding: 0 0 0 30px;
    line-height: 22px;
    font-size: 14px;
    font-weight: 500;
    color: #e02020;
    background: url(/images/pc/icon_notice_type1.png) no-repeat left top;
  }

  .box-submit-payment .box-notice-type1 .text-list-type1 li {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.83;
  }

  .box-submit-payment .box-notice-type1 .text-list-type1 li strong {
    color: #e02020;
  }

  .box-submit-payment .btn-order {
    display: block;
  }

  .box-submit-payment .btn-order button {
    display: block;
    width: 218px;
    height: 104px;
    line-height: 1;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    border-radius: 4px;
    background: #3d4ed7;
  }

  /* 주문결제 */
  .wrap-payment {
    position: relative;
  }

  .wrap-payment .box-payment-sidebar {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    width: 258px;
  }

  .wrap-payment .box-payment-sidebar .contain-calcpay {
    display: none;
    position: relative;
    padding: 24px;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    background: #fff;
  }

  .wrap-payment .box-payment-sidebar .contain-calcpay.on {
    display: block;
  }

  .wrap-payment .contain-payment-body {
    width: 926px;
  }

  .contain-gift-list dt {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
    background: #f5f6f9;
  }

  .contain-gift-list dd {
    display: flex;
    flex-wrap: wrap;
    padding: 32px 0;
  }

  .item-gift {
    position: relative;
    margin: 0 40px 0 0;
    width: 282px;
    background: #f5f6f9;
  }

  .item-gift:nth-child(n + 4) {
    margin-top: 24px;
  }

  .item-gift:nth-child(3n) {
    margin-right: 0 !important;
  }

  .item-gift .discount {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 16px;
    top: 16px;
    padding: 10px;
    width: 57px;
    height: 57px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.5px;
    text-align: center;
    border-radius: 100%;
    color: #fff;
    background: #fd342a;
    box-sizing: border-box;
  }

  .item-gift .image {
    display: flex;
    width: 282px;
    height: 240px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #e1e1e1;
    background: #fff;
    box-sizing: border-box;
  }

  .item-gift .image img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .item-gift .box-gift {
    padding: 8px;
  }

  .item-gift .box-gift .form-checkbox {
    position: absolute;
    left: 16px;
    top: 16px;
  }

  .item-gift .box-gift .form-number {
    height: 30px;
  }

  .item-gift .box-gift .text-item {
    display: inline-block;
    margin: 0 8px;
    font-size: 14px;
    font-weight: 400;
    vertical-align: middle;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    width: 180px;
    overflow: hidden;
  }

  /* 적립금 계산기 */
  .box-payment-sidebar .title {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 500;
  }

  .box-payment-sidebar .payment-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .box-payment-sidebar .payment-item dt {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 14px;
    font-weight: 400;
  }

  .box-payment-sidebar .payment-item dd {
    font-size: 14px;
    font-weight: 400;
  }

  .box-payment-sidebar .payment-item dd strong {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -1px;
  }

  .box-payment-sidebar .payment-item.minus dd {
    color: #3d4ed7;
  }

  .box-payment-sidebar .payment-item.total {
  }

  .box-payment-sidebar .payment-item.total dt {
    font-size: 16px;
    color: #fd342a;
  }

  .box-payment-sidebar .payment-item.total dd {
    color: #fd342a;
  }

  .box-payment-sidebar .payment-item.total dd strong {
    font-size: 24px;
  }

  .box-payment-sidebar .btn-type1 {
    display: block;
    width: auto;
  }

  .box-payment-sidebar .btn-type1 button {
    width: 100%;
  }

  .box-payment-sidebar .btn-type2 {
    display: block;
    width: auto;
  }

  .box-payment-sidebar .btn-type2 button {
    width: 100%;
    background-color: #3d4ed7;
  }

  .box-payment-sidebar .div-type2 {
    margin-bottom: 24px;
  }

  .box-payment-sidebar .btn-type1.calc {
    position: absolute;
    right: 10px;
    top: 24px;
  }

  .box-payment-sidebar .btn-type1.calc button {
    padding: 0 8px;
    height: 24px;
    line-height: 1;
    font-size: 12px;
    font-weight: normal;
    border-color: #d7d7d7;
  }

  .box-payment-sidebar .box-agreement {
    padding-bottom: 14px;
  }

  .box-payment-sidebar .box-agreement .agree-total {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 500;
  }

  .box-payment-sidebar .box-agreement .agree-each {
    display: flex;
    flex-direction: column;
  }

  .box-payment-sidebar .box-agreement .agree-each .item {
    position: relative;
    margin-bottom: 12px;
    margin-left: 16px;
    font-size: 12px;
    font-weight: 400;
  }

  .box-payment-sidebar .box-agreement .agree-each .item button {
    font-size: 12px;
    font-weight: 400;
  }

  .box-payment-sidebar .box-agreement .agree-each .item button::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 25px;
    background: url(/images/pc/icon_link_agreement.png) no-repeat right 50%;
  }

  /* 결제완료 */
  .box-order-confirm {
    width: 470px;
    margin: 0 auto 36px auto;
  }

  .box-order-confirm .text-order-comp1 {
    margin-bottom: 20px;
    line-height: 1;
    text-align: center;
    font-size: 20px;
  }

  .box-order-confirm .text-order-comp2 {
    margin-bottom: 40px;
    line-height: 1;
    text-align: center;
    font-size: 36px;
    font-weight: 500;
  }

  .box-order-confirm .box-order-num {
    margin: 0 auto;
    padding: 14px 0;
    width: 400px;
    text-align: center;
    border: 1px solid #e1e1e1;
  }

  .box-order-confirm .box-order-num dt {
    display: inline-block;
    margin: 0 8px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.83px;
  }

  .box-order-confirm .box-order-num dd {
    display: inline-block;
    margin: 0 8px;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: -0.83px;
  }

  .box-order-confirm .box-order-error {
    margin: 0 auto;
    padding: 14px 0;
    width: 400px;
    text-align: center;
    border: 1px solid #e1e1e1;
  }

  .box-order-confirm .box-order-error dt {
    display: block;
    margin: 0 0 8px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.83px;
  }

  .box-order-confirm .box-order-error dd {
    display: block;
    margin: 0;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: -0.83px;
  }

  .box-order-confirm .text-notice-type1 {
    margin: 0 0 2px 0;
    color: #575e6f;
  }

  .box-button.mall .btn-type1 {
    margin: 0 2px;
  }

  .box-button.mall .btn-type1 button {
    width: 210px;
    color: #3d4ed7;
    border-color: #3d4ed7;
  }

  .box-button.bottom.mall {
    margin: 24px 24px 64px 24px;
    padding: 32px 0 0 0;
    text-align: right;
    border-top: 1px solid #999aa9;
  }

  .box-button.bottom.mall span {
    margin: 0 0 0 8px;
  }

  .box-button.bottom.mall button {
    padding: 0 40px;
    width: auto;
  }

  .box-button.nomember {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .box-button.nomember span {
    margin: 0;
    width: calc(30% - 5px);
  }

  .box-button.nomember span button {
    width: 100%;
  }

  .box-button.nomember .btn-type2 {
    width: calc(40% - 5px);
  }

  .area-mall-ebsclass {
    border-top: 1px solid #bfc1cd;
  }

  .area-mall-ebsclass .area-inner {
    position: relative;
    margin: 0 auto;
    padding: 80px 0;
    width: 1200px;
    text-align: center;
  }

  .area-mall-ebsclass .text-infor1 {
    margin-bottom: 32px;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.51px;
  }

  .area-mall-ebsclass .text-infor2 {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 400;
  }

  .area-mall-ebsclass .text-infor2 strong {
    color: #3d4ed7;
  }

  .area-mall-ebsclass .text-infor3 {
    margin-bottom: 32px;
    font-size: 14px;
  }

  .area-mall-ebsclass .btn-type2 a,
  .area-mall-ebsclass .btn-type2 button {
    width: 210px;
    background: #3d4ed7;
  }

  /* 주문자 정보 */
  .title-order {
    margin: 0 0 24px 0;
    padding: 12px 0 12px 24px;
    font-size: 16px;
    font-weight: 500;
    background: #f5f6f9;
  }

  .box-information-order {
    padding: 0 24px 34px 24px;
  }

  .box-information-order .box-name {
    margin-bottom: 16px;
  }

  .box-information-order .box-phonenum {
    display: block;
    margin-bottom: 16px;
    width: 337px;
  }

  .box-information-order .box-phonenum .form-text {
    width: 115px;
  }

  .box-information-order .box-email {
    display: block;
    margin-bottom: 16px;
  }

  .box-information-order .box-radio {
    margin-bottom: 24px;
    padding: 10px 0 20px 0;
    border-bottom: 1px solid #f5f6f9;
  }

  .box-information-order .text-notice-type1 strong {
    color: #3d4ed7;
  }

  .box-information-order .box-address {
    margin-bottom: 16px;
  }

  .box-information-order .btn-type1 button {
    padding: 0 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #3d4ed7;
    border-color: #3d4ed7;
  }

  .box-information-payment {
    margin: -24px 0 48px 0;
  }

  .box-information-payment .box-detail-payment {
    display: table;
    margin: 0 0 -1px 0;
    width: 100%;
    border: 1px solid #e1e1e1;
  }

  .box-information-payment .box-detail-payment dt {
    display: table-cell;
    padding: 20px 24px;
    width: 160px;
    box-sizing: border-box;
    font-size: 16px;
    color: #575e6f;
  }

  .box-information-payment .box-detail-payment dd {
    display: table-cell;
    padding: 20px 24px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
  }

  /* 적립금 쿠폰 할인 */
  .box-coupon {
    margin-bottom: 16px;
  }

  .box-coupon label {
    display: inline-block;
    padding: 0 0 0 24px;
    width: 127px;
    font-size: 18px;
    font-weight: 500;
    box-sizing: border-box;
  }

  .box-coupon .form-price {
    display: inline-block;
    padding: 0 16px 0 0;
    height: 40px;
    color: #bfc1cd;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
  }

  .box-coupon .form-price input {
    margin: 0 3px 0 0;
    padding: 0 0 4px 0;
    width: 220px;
    text-align: right;
    color: #fd342a;
    height: 40px;
    line-height: 1;
    font-weight: 500;
    border: none;
  }

  .box-coupon .btn-type1 {
    margin: 0 0 0 3px;
  }

  .box-coupon .btn-type1 button {
    padding: 0 16px;
    width: auto;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #3d4ed7;
    border-color: #3d4ed7;
  }

  .box-coupon .text {
    margin: 0 0 0 10px;
    font-size: 14px;
    font-weight: 500;
  }

  .box-coupon .text strong {
    color: #fd342a;
  }

  .box-coupon .div-bar {
    margin: 0 0 0 10px;
    background: #e1e1e1;
  }

  /* 결제수단 */
  .box-tab-agreement {
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px 0;
  }

  .box-tab-agreement .btn-type1 {
    margin: 0;
  }

  .box-tab-agreement .btn-type1 button {
    margin: 0;
    width: 285px;
    color: #575e6f;
    font-size: 20px;
    font-weight: normal;
    line-height: 1;
    border-color: #e1e1e1;
  }

  .box-tab-agreement .btn-type1.on button {
    color: #3d4ed7;
    border-color: #3d4ed7;
    font-weight: 500;
  }

  .box-payment-agreement {
    display: none;
  }

  .box-payment-agreement.on {
    display: block;
  }

  .box-payment-agreement .text {
    margin-bottom: 24px;
    font-size: 14px;
    letter-spacing: -0.58px;
    line-height: 22px;
  }

  .box-payment-agreement .text strong {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    vertical-align: top;
  }

  .box-payment-agreement .text .icon-information {
    display: inline-block;
    margin: 0 20px 0 6px;
    vertical-align: top;
  }

  .box-payment-agreement .text .icon-information button {
    display: block;
    width: 22px;
    height: 22px;
    text-indent: -1000px;
    overflow: hidden;
    background: url(/images/pc/icon_popup_information.png) no-repeat 50%;
  }

  .box-payment-agreement .box-apply {
    margin-bottom: 17px;
  }

  .box-payment-agreement .box-apply .form-checkbox {
    width: 250px;
    font-size: 16px;
  }

  .box-payment-agreement .box-apply .btn-type1 button {
    padding: 0;
    width: 115px;
    height: 24px;
    font-size: 12px;
    font-weight: normal;
    line-height: 1;
    border-color: #d7d7d7;
  }

  .box-payment-agreement .box-apply .applycheck {
    margin-bottom: -1px;
    padding: 12px 16px;
    border: 1px solid #e1e1e1;
  }

  /* 대량주문 안내 */
  .box-information {
    margin-bottom: 40px;
    padding: 32px;
    border: 1px solid #999aa9;
    border-radius: 4px;
  }

  .box-information dl {
  }

  .box-information dt {
    margin: 0 0 16px 0;
    font-size: 20px;
    font-weight: 500;
  }

  .box-information dd {
    font-size: 16px;
    color: #333;
  }

  .box-information dd.image {
    margin-bottom: 16px;
  }

  .box-information dd li {
    margin-bottom: 4px;
  }

  .box-information dd li strong {
    color: #3d4ed7;
  }

  /* 대량주문 스텝 */
  .box-bulkstep {
    margin-bottom: 30px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6eaf2;
  }

  .box-bulkstep dl {
    width: 175px;
  }

  .box-bulkstep dt {
    margin-bottom: 8px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }

  .box-bulkstep dd {
    font-size: 16px;
    text-align: center;
  }

  .box-bulkstep dd.image {
    position: relative;
    margin-bottom: 16px;
  }

  .box-bulkstep dd.image span {
    display: block;
    margin: 0 auto;
    width: 175px;
    height: 175px;
    border: 1px solid #e6eaf2;
    box-sizing: border-box;
    border-radius: 100%;
  }

  .box-bulkstep dd.image span::after {
    content: "";
    display: block;
    position: absolute;
    left: -70px;
    top: 60px;
    width: 56px;
    height: 56px;
    background: url(/images/pc/icon_bulk_step_arrow.png) no-repeat 50%;
  }

  .box-bulkstep dl:first-child dd.image span::after {
    content: none;
  }

  .box-bulkstep dd.image .step1 {
    background: url(/images/pc/icon_bulk_step1.png) no-repeat 50%;
  }

  .box-bulkstep dd.image .step2 {
    background: url(/images/pc/icon_bulk_step2.png) no-repeat 50%;
  }

  .box-bulkstep dd.image .step3 {
    background: url(/images/pc/icon_bulk_step3.png) no-repeat 50%;
  }

  .box-bulkstep dd.image .step4 {
    background: url(/images/pc/icon_bulk_step4.png) no-repeat 50%;
  }

  .box-bulkstep dd.image .step5 {
    background: url(/images/pc/icon_bulk_step5.png) no-repeat 50%;
  }

  /* 대량주문 교과서 선택 */
  .popup-head-tab {
    position: absolute;
    left: 0;
    /* top:-57px; */
    top: -56px;
    display: flex;
  }

  .popup-head-tab button {
    margin: 0 1px 0 0;
    width: 176px;
    height: 56px;
    color: #bfc1cd;
    font-size: 18px;
    font-weight: 400;
    background: #e6eaf2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .popup-head-tab button.on {
    color: #36364b;
    font-weight: 500;
    background: #fff;
    border-bottom: 1px solid #fff;
    box-sizing: content-box;
  }

  .tab-cont {
    display: none;
  }

  .tab-cont.on {
    display: block;
  }

  .tab-cont .contain-head-bulk {
    position: relative;
    margin-bottom: 20px;
  }

  .tab-cont .contain-head-bulk .title {
    display: inline-block;
    font-size: 28px;
    font-weight: 500;
  }

  .tab-cont .contain-head-bulk .text-result {
    display: inline-block;
    margin: 0 0 0 15px;
    padding: 0 0 0 40px;
    font-size: 16px;
    background: url(/images/pc/icon_bulk_check.png) no-repeat left 50%;
  }

  .tab-cont .contain-head-bulk .box-search {
    position: absolute;
    right: 50px;
    top: 0;
    padding: 8px 8px 8px 20px;
    width: 245px;
    text-align: right;
    border-radius: 24px;
    background: #f5f6f9;
  }

  .tab-cont .contain-head-bulk .box-search input {
    width: 180px;
    text-align: left;
    color: #333;
    font-size: 16px;
    vertical-align: top;
    border: none;
    background: none;
  }

  .tab-cont .contain-head-bulk .box-search button {
    display: inline-block;
    width: 32px;
    height: 32px;
    text-indent: -1000px;
    overflow: hidden;
    border-radius: 100%;
    background: #36364b url(/images/pc/icon_gnb_search_white.png) no-repeat 50%;
  }

  /* 배송 환불 정책 */
  .tab-cont .contain-head-delivery {
    position: relative;
    margin-bottom: 20px;
  }

  .tab-cont .contain-head-delivery .title {
    display: inline-block;
    font-size: 28px;
    font-weight: 500;
  }

  .popup-sub-tab {
    display: flex;
  }

  .popup-sub-tab button {
    position: relative;
    z-index: 0;
    margin-right: -1px;
    width: 50%;
    height: 54px;
    font-size: 18px;
    font-weight: 400;
    color: #999aa9;
    border: 1px solid #f1f1f1;
    box-sizing: border-box;
  }

  .popup-sub-tab button.on {
    z-index: 1;
    font-weight: 500;
    color: #36364b;
    border-color: #999aa9;
  }

  .tab-cont-sub {
    display: none;
    padding: 0;
    height: 400px;
    overflow: auto;
    box-sizing: border-box;
  }

  .tab-cont-sub::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    right: 0px;
    top: 0;
  }

  .tab-cont-sub::-webkit-scrollbar-track {
    box-shadow: none;
    background: #e6eaf2;
  }

  .tab-cont-sub::-webkit-scrollbar-thumb {
    background-color: #36364b;
    outline: none;
    border-radius: 4px;
  }

  .tab-cont-sub.on {
    display: block;
  }

  .tab-cont-sub .box-cont-type1 {
    position: relative;
    margin: 0;
    padding: 32px 0 32px 142px;
    border-top: 1px solid #e1e1e3;
  }

  .tab-cont-sub .box-cont-type1.def {
    padding-left: 205px;
  }

  .tab-cont-sub .box-cont-type1:first-child {
    border: none;
  }

  .tab-cont-sub .box-cont-type1 > dt {
    position: absolute;
    left: 0;
    top: 31px;
    font-size: 20px;
    font-weight: 500;
  }

  .tab-cont-sub .box-cont-type1 > dt::before {
    content: "∙";
    display: inline-block;
    margin: 0 8px 0 5px;
    font-size: 22px;
  }

  .tab-cont-sub .box-cont-type1 > dd {
    margin: 0 0 10px 0;
    font-size: 14px;
    color: #575e6f;
  }

  .tab-cont-sub .box-cont-type2 {
    position: relative;
    margin: 0;
    padding: 32px 0;
    border-top: 1px solid #e1e1e3;
  }

  .tab-cont-sub .box-cont-type2:first-child {
    border: none;
  }

  .tab-cont-sub .box-cont-type2 > dt {
    margin: 0 0 10px 0;
    font-size: 20px;
    font-weight: 500;
  }

  .tab-cont-sub .box-cont-type2 > dt::before {
    content: "∙";
    display: inline-block;
    margin: 0 8px 0 5px;
    font-size: 22px;
  }

  .tab-cont-sub .box-cont-type2 > dd {
    margin: 0 0 10px 22px;
    font-size: 14px;
    color: #575e6f;
  }

  .tab-cont-sub .box-cont-sub-type1 {
    position: relative;
    margin: 0 0 20px 0;
    padding: 0 0 0 214px;
  }

  .tab-cont-sub .box-cont-sub-type1 dt {
    position: absolute;
    left: 0;
    top: 0;
    font-weight: 500;
    color: #36364b;
    font-size: 16px;
  }

  .tab-cont-sub .box-cont-sub-type1 dd {
    margin: 0 0 5px 0;
    color: #575e6f;
  }

  .tab-cont-sub .box-cont-sub-type1 dd p {
    font-size: 16px;
  }

  .tab-cont-sub .box-cont-sub-type2 {
    position: relative;
    margin: 0 0 20px 0;
    padding: 0;
  }

  .tab-cont-sub .box-cont-sub-type2 dt {
    position: static;
    font-weight: 500;
    color: #36364b;
  }

  .tab-cont-sub .box-cont-sub-type2 dd {
    margin: 15px 0 5px 0;
    padding: 0 0 0 16px;
    color: #575e6f;
    text-indent: -16px;
  }

  .tab-cont-sub .box-information-type1 {
    margin: -30px 0 0 0;
    padding: 26px 24px;
    background: #f5f6f9;
  }

  .tab-cont-sub .box-information-type1 dt {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
  }

  .tab-cont-sub .box-information-type1 dd {
  }

  .tab-cont-sub .box-information-type1 dd ul li {
    color: #575e6f;
  }

  .tab-cont-sub .box-information-type2 {
    position: relative;
    margin: 0;
    padding: 32px 0;
    border-top: 1px solid #e1e1e3;
    background: #fff;
  }

  .tab-cont-sub .point {
    color: #3d4ed7;
    font-weight: 500;
  }

  .tab-cont-sub .price {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
  }

  .tab-cont-sub .price strong {
    font-size: 24px;
    color: #fd342a;
    letter-spacing: -0.67px;
  }

  .tab-cont-sub .text-notice-type1 {
    color: #36364b;
  }

  .tab-cont-sub .text-point-type1 {
    margin: 0 0 10px 0;
    color: #fd342a;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.75px;
  }

  /* 교과서 판매 일정 안내 */
  .box-information-sale {
  }

  .box-information-sale dl {
    margin-bottom: 40px;
  }

  .box-information-sale dt {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
  }

  .box-information-sale dd {
    margin-bottom: 20px;
    font-size: 16px;
    color: #575e6f;
    line-height: 1.6;
  }

  .box-information-sale dd .btn-type1 a,
  .box-information-sale dd .btn-type1 button {
    padding: 0 15px;
    height: 32px;
    line-height: 28px;
    color: #36364b;
    font-size: 14px;
    border-color: #d7d7d7;
  }

  .box-information-sale .text-type1 {
    font-size: 16px;
    color: #575e6f;
    line-height: 1.6;
  }

  .box-information-sale .text-type1 strong {
    color: #3d4ed7;
  }

  .box-information-sale .text-list-type1 li {
    padding: 0 0 0 10px;
    text-indent: -10px;
    font-size: 16px;
  }

  /* 주문정보 */
  .contain-bulk-order {
    margin-top: 48px;
    padding-top: 48px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #999aa9;
  }

  .contain-bulk-order .box-item {
    width: 552px;
  }

  .contain-bulk-order .box-item + .box-item {
    width: 631px;
  }

  /* 결제정보 */
  .popup-type1 .mall .payment-detail {
  }

  .popup-type1 .mall .payment-detail table {
    width: 100%;
  }

  .popup-type1 .mall .payment-detail th {
    padding: 10px 0;
    width: 83px;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
  }

  .popup-type1 .mall .payment-detail td {
    padding: 10px 0;
    text-align: left;
    font-size: 16px;
    color: #575e6f;
  }

  .popup-type1 .mall .payment-detail td .point1 {
    font-style: normal;
    color: #fd342a;
    font-weight: 500;
  }

  .pament-total {
    float: left;
  }

  .pament-total dt {
    display: inline-block;
    width: 100px;
    font-size: 16px;
    font-weight: 500;
  }

  .pament-total dd {
    display: inline-block;
    font-size: 14px;
  }

  .pament-total dd strong {
    font-size: 24px;
    color: #e02020;
  }

  /* 이벤트 */
  /* 이벤트 메인 */
  .contain-relation-book {
    position: relative;
    z-index: 1;
    padding: 85px 28px 20px 28px;
    background: #fff;
  }

  .contain-relation-book:nth-child(even) {
    background: #f5f7fd;
  }

  .contain-relation-book > .title {
    margin: 0 28px 35px 28px;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.45;
    letter-spacing: -0.65px;
  }

  .list-type-book ul {
    display: flex;
    flex-wrap: wrap;
  }

  .list-type-book ul li {
    margin: 0 28px 40px 28px;
    width: 230px;
  }

  .list-type-book ul li .image {
    display: block;
    margin-bottom: 20px;
    border: solid 1px #e1e1e3;
    box-shadow: 4px 4px 24px 0 rgba(0, 0, 0, 0.1);
  }

  .list-type-book ul li .image img {
    display: block;
    width: 100%;
    height: 319px;
  }

  .list-type-book ul li .title {
    display: block;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 500;
  }

  .list-type-book ul li .price {
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
  }

  .list-type-book ul li .price strong {
    font-size: 24px;
  }

  .list-type-book ul li .price del {
    font-size: 14px;
    font-weight: 500;
    color: #bfc1cd;
    text-decoration-color: #fd342a;
  }

  .list-type-book ul li .accu {
    display: block;
    font-size: 14px;
    color: #0091ff;
    font-weight: 500;
  }

  .list-type-book ul li .accu strong {
    color: #575e6f;
  }

  /* 고객센터 */
  /* 고객센터 메인 */
  .box-favservice {
    display: flex;
    justify-content: space-between;
  }

  .box-favservice a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 180px;
    height: 180px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    line-height: 1.5;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    -webkit-transition: all 0.3 ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  /* .box-favservice a:hover {color:#fff;border-color:#999aa9;box-shadow:4px 2px 10px rgba(0,0,0,0.2);} */
  .box-favservice a:hover {
    border: 1px solid #0091ff;
    box-shadow: 4px 2px 10px rgba(0, 0, 0, 0.2);
  }

  .box-favservice span {
    margin-top: 90px;
    padding: 0 25px;
  }

  .box-favservice .link-service1 {
    background: url(/images/pc/icon_infor_cs1.png) no-repeat 50% 40px;
  }

  /* .box-favservice .link-service1:hover {background:#36364b url(/images/pc/icon_infor_cs1_on.png) no-repeat 50% 40px;} */
  .box-favservice .link-service2 {
    background: url(/images/pc/icon_infor_cs2.png) no-repeat 50% 40px;
  }

  /* .box-favservice .link-service2:hover {background:#36364b url(/images/pc/icon_infor_cs2_on.png) no-repeat 50% 40px;} */
  .box-favservice .link-service3 {
    background: url(/images/pc/icon_infor_cs3.png) no-repeat 50% 40px;
  }

  /* .box-favservice .link-service3:hover {background:#36364b url(/images/pc/icon_infor_cs3_on.png) no-repeat 50% 40px;} */
  .box-favservice .link-service4 {
    background: url(/images/pc/icon_infor_cs4.png) no-repeat 50% 40px;
  }

  /* .box-favservice .link-service4:hover {background:#36364b url(/images/pc/icon_infor_cs4_on.png) no-repeat 50% 40px;} */
  .box-favservice .link-service5 {
    background: url(/images/pc/icon_infor_cs5.png) no-repeat 50% 40px;
  }

  /* .box-favservice .link-service5:hover {background:#36364b url(/images/pc/icon_infor_cs5_on.png) no-repeat 50% 40px;} */
  .box-favservice .link-service6 {
    background: url(/images/pc/icon_infor_cs6.png) no-repeat 50% 40px;
  }

  /* .box-favservice .link-service6:hover {background:#36364b url(/images/pc/icon_infor_cs6_on.png) no-repeat 50% 40px;} */
  .contain-infor-cscenter .contain-inner {
    display: flex;
    justify-content: center;
  }

  .contain-infor-cscenter dl {
    width: 400px;
    border-left: 1px solid #fff;
  }

  .contain-infor-cscenter dl:first-child {
    border: none;
  }

  .contain-infor-cscenter dl dt {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }

  .contain-infor-cscenter dl dd {
    margin-top: 32px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    line-height: 1.43;
    color: #575e6f;
  }

  .contain-infor-cscenter dl dd.tel {
    font-size: 36px;
    font-weight: 500;
    color: #36364b;
    font-family: "Roboto";
    letter-spacing: 2px;
  }

  .contain-infor-cscenter dl .btn-type2 button {
    display: inline-block;
    width: 128px;
    height: 48px;
    line-height: 46px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.29px;
    background: #36364b;
    border-radius: 4px;
  }

  .contain-infor-cscenter dl dd.mail {
    font-size: 36px;
    font-weight: 500;
    color: #36364b;
    font-family: "Roboto";
  }

  .contain-infor-cscenter dl dd.mail a {
    font-size: 36px;
  }

  /* Login */
  .section-login {
    margin: 0 auto;
    width: 720px;
  }

  .section-login > .title {
    /* margin-bottom:22px; */
    margin-bottom: 48px;
    text-align: center;
  }

  .section-login > .title img {
    cursor: pointer;
  }

  .section-login > .text {
    margin-bottom: 48px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }

  .section-login .contain-login {
    margin-bottom: 24px;
  }

  .section-login .contain-login .box-login-tab {
    display: flex;
    position: relative;
    z-index: 1;
  }

  .section-login .contain-login .box-login-tab span {
    display: block;
    width: 50%;
  }

  .section-login .contain-login .box-login-tab button {
    display: block;
    width: 100%;
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #999aa9;
    /* border:1px solid #f5f6f9;border-bottom:1px solid #999aa9; */
    background: #e6eaf2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .section-login .contain-login .box-login-tab .on button {
    display: block;
    /* border:1px solid #999aa9;border-bottom:1px solid #fff; */
    background: #fff;
  }

  .section-login .contain-login .box-login-cont {
    display: none;
    padding: 74px 109px 64px 109px;
    text-align: center;
    /* border:1px solid #999aa9; */
    border-top: none;
    background: #fff;
  }

  .section-login .contain-login .box-login-cont .title {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 500;
    line-height: 1;
  }

  .section-login .contain-login .box-login-cont [type^="text"] {
    color: #36364b;
    font-weight: 400;
  }

  .section-login .contain-login .box-login-cont [type^="text"],
  .section-login .contain-login .box-login-cont [type^="password"],
  .section-login .contain-login .box-login-cont [type^="number"] {
    display: block;
    width: 100%;
    height: 52px;
    margin-bottom: 12px;
    font-size: 16px;
  }

  .section-login .contain-login .box-login-cont [type^="text"]:focus,
  .section-login .contain-login .box-login-cont [type^="password"]:focus,
  .section-login .contain-login .box-login-cont [type^="number"]:focus {
    background: #f5f6f7;
  }

  .section-login .contain-login .box-login-cont [type^="text"].error,
  .section-login .contain-login .box-login-cont [type^="password"].error,
  .section-login .contain-login .box-login-cont [type^="number"].error,
  .section-login .contain-login .box-login-cont [type^="text"]:invalid,
  .section-login .contain-login .box-login-cont [type^="password"]:invalid,
  .section-login .contain-login .box-login-cont [type^="number"]:invalid {
    font-weight: 500;
    border-color: #fd342a;
  }

  .section-login .contain-login .box-login-cont.on {
    display: block;
  }

  .section-login .btn-type-login {
    display: block;
    margin-bottom: 12px;
  }

  .section-login .btn-type-login button {
    display: block;
    width: 100%;
    height: 52px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    border-radius: 4px;
    background: #3e3c50 url(/images/pc/img_login_login.png) no-repeat;
    background-position: 6px 6px;
  }

  .section-login .form-checkbox {
    display: block;
  }

  .section-login .box-sns {
    padding: 32px 0 14px 0;
  }

  .section-login .box-sns .btn-login {
    display: block;
    margin-bottom: 12px;
  }

  .section-login .box-sns .btn-login button {
    display: block;
    width: 100%;
    height: 52px;
    text-align: center;
    font-size: 16px;
    color: #3e3c50;
    font-weight: 400;
    border: 1px solid #cdcdcd;
    border-radius: 4px;
  }

  .section-login .box-sns .btn-login.naver {
    background: url(/images/pc/icon_login_naver.png) no-repeat 6px 6px;
  }

  .section-login .box-sns .btn-login.kakao {
    background: url(/images/pc/icon_login_kakao.png) no-repeat 6px 6px;
  }

  .section-login .box-sns .btn-login.facebook {
    background: url(/images/pc/icon_login_facebook.png) no-repeat 6px 6px;
  }

  .section-login .box-sns .btn-login.whale {
    background: url(/images/pc/icon_login_whale.png) no-repeat 6px 6px;
  }

  .section-login .box-login-util a {
    display: inline-block;
    font-size: 14px;
    color: #333;
    margin: 0 0 0 32px;
  }

  .section-login .box-login-util a::before {
    content: "";
    display: inline-block;
    margin: -3px 16px 0 -16px;
    width: 1px;
    height: 16px;
    vertical-align: middle;
    background: #e1e1e1;
  }

  .section-login .box-login-util a:first-child::before {
    content: none;
  }

  .section-login .box-login-util a:first-child {
    margin: 0;
  }

  .section-login .box-login-util a:hover {
    color: #1eb6ff;
    font-weight: 500;
    text-decoration: underline;
    text-underline-position: under;
  }

  .section-login .box-order .text {
    margin-bottom: 15px;
  }

  .section-login .box-order .box-tab-sub {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    border-bottom: 2px solid #999aa9;
  }

  .section-login .box-order .box-tab-sub span {
    display: block;
  }

  .section-login .box-order .box-tab-sub span button {
    display: block;
    padding: 16px 16px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #9b9caa;
  }

  .section-login .box-order .box-tab-sub span.on button {
    color: #36364b;
  }

  .section-login .box-order .box-cont-sub {
    display: none;
  }

  .section-login .box-order .box-cont-sub.on {
    display: block;
  }

  .section-login .box-order .box-cont-sub .box-button {
    padding-top: 36px;
  }

  .section-login .box-order .box-cont-sub .box-button [class^="btn-"] {
    margin: 0;
    width: 100%;
  }

  .section-login .box-order .box-cont-sub .box-button [class^="btn-"] button {
    width: 100%;
  }

  .section-login .box-order .box-phonenum {
    width: 100%;
  }

  .section-login .box-order .box-phonenum .form-select {
    width: 155px;
    height: 52px;
  }

  .section-login .box-order .box-phonenum .form-select select {
    width: 155px;
    height: 52px;
  }

  .section-login .box-order .box-phonenum .form-text {
    width: 160px;
  }

  .section-login .box-order .box-ordernum {
    width: 100%;
    line-height: 52px;
  }

  .section-login .box-order .box-ordernum input[type="number"] {
    width: 230px;
  }

  .section-login .box-order .box-email {
    width: 100%;
    line-height: 52px;
  }

  .section-login .box-order .box-email input[type="text"] {
    width: 230px;
  }

  .section-login .box-order .form-calendor input[type="text"] {
    color: #aaa;
    font-weight: 400;
    font-family: "Roboto";
    border: 1px solid #d7d7d7;
    background: #f5f5f5 url(/images/pc/icon_login_calendor.png) no-repeat;
    background-position: right 14px top 50%;
  }

  .section-login input[type^="text"]:focus,
  .section-login input[type^="number"]:focus,
  .section-login input[type^="password"]:focus {
    color: #36364b;
    border-color: #999aa9;
  }

  .section-login select:focus {
    border: 1px solid #999aa9;
  }

  /********************************************************** main (kim) **********************************************************/
  /* main */
  .main-visual-slide {
    margin: -185px 0 0 80px;
    min-width: 1320px;
    position: relative;
  }

  .main-visual {
    position: relative;
    background: linear-gradient(to left, #fff 0%, transparent 100%);
  }

  .main-visual .area-inner {
    position: relative;
    margin: 241px auto 0;
    padding: 0 0 0 0;
    width: 1200px;
    height: calc(874px - 241px);
    box-sizing: border-box;
  }

  .main-visual .area-inner::before {
    content: "";
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1px;
    height: 633px;
    background: rgba(255, 255, 255, 0.2);
  }

  /* .main-visual .area-inner::after {content:'';display:block;position:absolute;right:30px;top:358px;width:40px;height:76px;background:url(/images/pc/img_visual_side.png) no-repeat 50%;} */
  .main-visual .area-inner > a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .main-visual .area-inner .image {
    position: absolute;
    right: 0;
    top: 0;
    width: 719px;
    height: 385px;
  }

  .main-visual .area-inner .image img {
    width: 100%;
    height: 100%;
  }

  .main-visual .area-inner .box-text {
    position: absolute;
    left: 40px;
    top: 32px;
  }

  .main-visual .area-inner .box-text .text1 {
    padding-bottom: 40px;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    line-height: 1.67;
    letter-spacing: -0.75px;
  }

  .main-visual .area-inner .box-text .title {
    padding-bottom: 40px;
    font-size: 48px;
    color: #fff;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -2.08px;
  }

  .main-visual .area-inner .box-text .title strong {
    font-weight: 500;
  }

  .main-visual .area-inner .box-text .text2 {
    font-size: 16px;
    color: #fff;
    font-weight: 400;
    line-height: 1.67;
    letter-spacing: -0.5px;
  }

  .visual-slide-inner .main-visual.slick-active .box-text .text1 {
    animation-name: animate-text1;
    animation-duration: 1s;
    animation-timing-function: ease;
  }

  .visual-slide-inner .main-visual.slick-active .box-text .title {
    animation-name: animate-title;
    animation-duration: 1s;
    animation-timing-function: ease;
  }

  .visual-slide-inner .main-visual.slick-active .box-text .text2 {
    animation-name: animate-text2;
    animation-duration: 1s;
    animation-timing-function: ease;
  }

  @keyframes animate-text1 {
    from {
      margin-left: 20%;
      width: 300%;
      opacity: 0;
    }

    to {
      margin-left: 0px;
      width: 100%;
      opacity: 1;
    }
  }

  @keyframes animate-title {
    from {
      margin-left: 50%;
      width: 300%;
      opacity: 0;
    }

    to {
      margin-left: 0px;
      width: 100%;
      opacity: 1;
    }
  }

  @keyframes animate-text2 {
    from {
      margin-left: 70%;
      width: 300%;
      opacity: 0;
    }

    to {
      margin-left: 0px;
      width: 100%;
      opacity: 1;
    }
  }

  .main-visual-slide .main-visual-control {
    position: absolute;
    right: 0px;
    left: 0px;
    margin: 0 auto;
    width: 1200px;
    bottom: 192px;
    text-align: right;
  }

  .main-visual-control .slick-dot {
    display: inline-block;
  }

  .main-visual-control .slick-dot .slick-dots {
    margin: 0 auto;
    padding: 0px;
    text-align: center;
  }

  .main-visual-control .slick-dot .slick-dots li {
    display: inline-block;
    vertical-align: top;
    margin-left: 16px;
  }

  .main-visual-control .slick-dot .slick-dots li button {
    display: block;
    width: 16px;
    height: 24px;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 0px;
    line-height: 0;
    text-indent: -9999;
    box-sizing: border-box;
  }

  .main-visual-control .slick-dot .slick-dots li.slick-active button {
    background: none;
    border: 2px solid #fff;
  }

  /* 메인비쥬얼 - 배너슬라이드 */
  .main-visual-slide .main-event-banner {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: 0 auto;
  }

  .main-event-banner {
    width: 1200px;
    height: 168px;
  }

  /* .main-event-banner .event-banner-inner {} */
  .main-event-banner .banner-item {
    float: left;
    /* width:100%; */
    width: 50%;
    height: 148px;
    margin-top: 20px;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .main-event-banner .banner-item a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .main-event-banner .banner-item a::after {
    position: absolute;
    left: 0px;
    top: 0px;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }

  .main-event-banner .banner-item.item1 a::after {
    background: #ffffff;
    z-index: -1;
  }

  .main-event-banner .banner-item.item2 a::after {
    background: #36364b;
    z-index: -1;
  }

  .main-event-banner .banner-item:hover {
    margin-top: 0px;
    height: 168px;
  }

  .main-event-banner .banner-item.item1:hover a::after {
    background: #fff;
    opacity: 1;
  }

  .main-event-banner .banner-item.item1:hover .subject::after {
    width: 24px;
    height: 24px;
    background: url(/images/pc/icom_arr_brandcard.png) no-repeat left top;
  }

  .main-event-banner .banner-item.item2:hover a .text {
    color: #91c3ff;
  }

  .main-event-banner .banner-item.item2:hover a .subject {
    color: #fff;
  }

  .main-event-banner .banner-item.item2:hover a::after {
    background: #36364b;
    opacity: 1;
  }

  .main-event-banner .banner-item.item2:hover .subject::after {
    width: 24px;
    height: 24px;
    background: url(/images/pc/icom_arr_brandcard_w.png) no-repeat left top;
  }

  .main-event-banner .banner-item a {
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
  }

  .main-event-banner .banner-item .images {
    flex: none;
    width: 160px;
    overflow: hidden;
    text-align: right;
    /* padding-right:35px; */
    box-sizing: border-box;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    text-align: center;
  }

  .main-event-banner .banner-item .images img {
    height: 168px;
  }

  .main-event-banner .banner-item:hover .images {
    /* padding-top:20px; */
    padding-top: 0px;
    overflow: inherit;
  }

  .main-event-banner .banner-item .title {
    flex: 1;
    margin-top: 32px;
  }

  .main-event-banner .banner-item .text {
    display: block;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 5px;
  }

  .main-event-banner .banner-item .subject {
    display: block;
    width: 100%;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: #242635;
    word-break: keep-all;
    padding-right: 30px;
    box-sizing: border-box;
  }

  .main-event-banner .banner-item:hover .subject::after {
    content: "";
    display: block;
    vertical-align: top;
    margin-top: 8px;
  }

  .main-event-banner .banner-item.item2 .text {
    color: #91c3ff;
  }

  .main-event-banner .banner-item.item2 .subject {
    color: #fff;
  }

  /* main - 무엇을 찾으세요 */
  .box-main-quick {
    display: flex;
  }

  .btn-main-quick {
    position: relative;
    flex: 1 1 120px;
    height: 108px;
    text-align: center;
  }

  .btn-main-quick > button,
  .btn-main-quick > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight: 400;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .btn-main-quick:hover > a {
    border-radius: 4px;
    box-shadow: 3px 3px 10px 0 rgba(174, 174, 192, 0.4);
    background-color: #ffffff;
  }

  .btn-main-quick > button::before,
  .btn-main-quick > a::before {
    content: "";
    display: block;
    width: 40px;
    height: 40px;
    margin: 16px auto;
    vertical-align: top;
    background-size: 40px auto !important;
  }

  .quick-answer > button::before,
  .quick-answer > a::before {
    background: url(/images/pc/icon_mainquick_answer.png) no-repeat center top;
  }

  .quick-learning > button::before,
  .quick-learning > a::before {
    background: url(/images/pc/icon_mainquick_learning.png) no-repeat center top;
  }

  .quick-video > button::before,
  .quick-video > a::before {
    background: url(/images/pc/icon_mainquick_video.png) no-repeat center top;
  }

  .quick-bookbuy > button::before,
  .quick-bookbuy > a::before {
    background: url(/images/pc/icon_mainquick_bookbuy.png) no-repeat center top;
  }

  .quick-bookinquiry > button::before,
  .quick-bookinquiry > a::before {
    background: url(/images/pc/icon_mainquick_bookinquiry.png) no-repeat center top;
  }

  .quick-ebs > button::before,
  .quick-ebs > a::before {
    background: url(/images/pc/icon_mainquick_ebs.png) no-repeat center top;
  }

  .quick-reference > button::before,
  .quick-reference > a::before {
    background: url(/images/pc/icon_mainquick_reference.png) no-repeat center top;
  }

  .quick-shopping > button::before,
  .quick-shopping > a::before {
    background: url(/images/pc/icon_mainquick_shopping.png) no-repeat center top;
  }

  .quick-event > button::before,
  .quick-event > a::before {
    background: url(/images/pc/icon_mainquick_event.png) no-repeat center top;
  }

  .quick-question > button::before,
  .quick-question > a::before {
    background: url(/images/pc/icon_mainquick_question.png) no-repeat center top;
  }

  .btn-main-quick .main-quick-layer {
    opacity: 0;
  }

  .btn-main-quick.on .main-quick-layer {
    opacity: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-transition: all 0.3 ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    z-index: 2;
  }

  .quick-layer-inner {
    background: #fff;
    border-radius: 4px;
    box-shadow: 3px 3px 10px 0 rgba(174, 174, 192, 0.4);
  }

  .main-quick-layer .layer-btn {
    width: 100%;
  }

  .main-quick-layer .layer-btn li {
    width: 100%;
  }

  .main-quick-layer .layer-btn li span {
    width: 100%;
    height: 100%;
  }

  .main-quick-layer .layer-btn li span button {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 38px;
  }

  .main-quick-layer .layer-btn li span button:hover {
    background: #f5f6f9;
    font-weight: 500;
  }

  .main-quick-layer .footer-btn {
    display: block;
  }

  .main-quick-layer .footer-btn button {
    display: block;
    width: 100%;
    margin: 0 auto;
    height: 40px;
    line-height: 38px;
    font-weight: 400;
    letter-spacing: -0.5px;
  }

  .main-quick-layer .footer-btn button::before {
    content: "";
    display: block;
    width: calc(100% - 24px);
    height: 1px;
    margin: 0 auto;
    vertical-align: top;
    background: #999aa9;
  }

  /* main : 꼭 맞춤 교재 제안 슬라이드 */
  .box-main-book {
    overflow: hidden;
    position: relative;
    /* padding-bottom: 80px; */
    margin-top: -20px;
  }

  .main-book-inner {
    margin: 0 auto;
    width: 1224px;
  }

  /* .main-book-slide {position: initial;} */
  /* .main-book-slide .slick-list {overflow: visible;} */
  .main-book-slide .mainbook-item {
    margin: 20px 24px 20px 0;
    /* min-height:440px; */
    background: #fff;
    border-radius: 4px;
  }

  .main-book-slide .mainbook-item:hover {
    box-shadow: 0 2px 20px 0 rgba(54, 54, 75, 0.15);
  }

  .main-book-slide .mainbook-item button,
  .main-book-slide .mainbook-item a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .mainbook-item .mainbook-img {
    position: relative;
    padding-top: 50px;
    overflow: hidden;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 295px;
    overflow: hidden;
  }

  .mainbook-item .mainbook-img .text {
    position: absolute;
    top: 20px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }

  .mainbook-item .mainbook-img .text > span {
    position: relative;
    display: inline-block;
    width: auto;
    max-width: 80%;
    padding: 0 8px;
    text-align: center;
    font-size: 16px;
    line-height: 22px;
    /* font-weight:400; */
    color: #fff;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 0;
  }

  .mainbook-item .mainbook-img .text > span > i {
    position: absolute;
    left: 0px;
    top: 8px;
    content: "";
    display: block;
    width: 100%;
    height: 16px;
    z-index: -1;
  }

  .mainbook-item .mainbook-img .images {
    /* position: relative; */
    display: block;
    width: 175px;
    height: 245px;
    margin: 0 auto;
    /* overflow: hidden; */
  }

  .mainbook-item .mainbook-img .images img {
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  /* 해당이미지는 border없음(협의완) */
  .mainbook-item.slick-active:hover .mainbook-img .images img {
    margin-top: 10px;
  }

  /* .mainbook-item .mainbook-img .images::after {position: absolute; left:0px; top:0px; content: ''; display:block; width: 175px; height:245px; background: red; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);} */
  .mainbook-item .mainbook-text {
    position: relative;
    height: 144px;
    padding: 30px;
    box-sizing: border-box;
  }

  .mainbook-item .mainbook-text > span {
    display: block;
    font-weight: 400;
  }

  .mainbook-item .mainbook-text .point {
    color: #0091ff;
    margin-bottom: 8px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mainbook-item .mainbook-text .subject {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.5px;
    color: #333;
    /* word-break: keep-all; */
    width: 100%;
    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .mainbook-control {
    text-align: center;
    /* margin-top:40px; */
    width: 1200px;
    margin-top: 20px;
  }

  .mainbook-control .mainbook-slide-dot {
    display: inline-block;
    width: auto;
  }

  .mainbook-control .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .mainbook-control .slick-dots {
    display: inline-block;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .mainbook-control .slick-dots li {
    position: relative;
    display: inline-block;
    margin: 0 8px;
    padding: 0;
    cursor: pointer;
  }

  .mainbook-control .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 16px;
    height: 24px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: #e6eaf2;
    box-sizing: border-box;
  }

  .mainbook-control .slick-dots li button:hover,
  .mainbook-control .slick-dots li button:focus {
    outline: none;
  }

  .mainbook-control .slick-dots li.slick-active button {
    background: transparent;
    border: 2px solid #36364b;
  }

  .mainbook-control .slick-arrow {
    width: 48px;
    height: 25px;
    font-size: 0px;
    line-height: 0px;
    text-indent: -9999;
  }

  .mainbook-control .slick-prev.slick-arrow {
    background: url(/images/pc/icon_slide_prev2.png) no-repeat left top;
  }

  .mainbook-control .slick-prev.slick-arrow:active {
    background: url(/images/pc/icon_slide_prev2_on.png) no-repeat left top;
  }

  .mainbook-control .slick-next.slick-arrow {
    background: url(/images/pc/icon_slide_next2.png) no-repeat left top;
  }

  .mainbook-control .slick-next.slick-arrow:active {
    background: url(/images/pc/icon_slide_next2_on.png) no-repeat left top;
  }

  /* 꼭 맞춤 교재 제안 - color */
  .YELLOW1 {
    background: linear-gradient(to bottom, #ffbe41 0%, #f18d36 100%);
  }

  .YELLOW1 i {
    background-color: #f58225;
  }

  .YELLOW2 {
    background: linear-gradient(to bottom, #ffd470 0%, #ffbe41 100%);
  }

  .YELLOW2 i {
    background-color: #fb9a00;
  }

  .YELLOW3 {
    background: linear-gradient(to bottom, #fff170 0%, #ffee41 100%);
  }

  .YELLOW3 i {
    background-color: #f9c200;
  }

  .GREEN1 {
    background: linear-gradient(to bottom, #d5ec76 0%, #b4e14f 100%);
  }

  .GREEN1 i {
    background-color: #8bbc18;
  }

  .GREEN3 {
    background: linear-gradient(to bottom, #84e1b2 0%, #59cc8d 100%);
  }

  .GREEN3 i {
    background-color: #2ca867;
  }

  .RED1 {
    background: linear-gradient(to bottom, #ffa3ca 0%, #ff79b2 100%);
  }

  .RED1 i {
    background-color: #e45894;
  }

  .RED2 {
    background: linear-gradient(to bottom, #ffb3b3 0%, #ff7979 100%);
  }

  .RED2 i {
    background-color: #e94f4f;
  }

  .BLUE1 {
    background: linear-gradient(to bottom, #55a5d8 0%, #4580bb 100%);
  }

  .BLUE1 i {
    background-color: #18699e;
  }

  .BLUE2 {
    background: linear-gradient(to bottom, #90e3ec 0%, #61dad7 100%);
  }

  .BLUE2 i {
    background-color: #49aaad;
  }

  .BLUE3 {
    background: linear-gradient(to bottom, #88d5f3 0%, #60b2e0 100%);
  }

  .BLUE3 i {
    background-color: #2993cb;
  }

  .PURPLE1 {
    background: linear-gradient(to bottom, #b0b4f2 0%, #9690db 100%);
  }

  .PURPLE1 i {
    background-color: #6963b9;
  }

  .PURPLE2 {
    background: linear-gradient(to bottom, #dfa4d5 0%, #c272b5 100%);
  }

  .PURPLE2 i {
    background-color: #a44f95;
  }

  .ETC1 {
    background: linear-gradient(to bottom, #d6dbea 0%, #b0b7ca 100%);
  }

  .ETC1 i {
    background-color: #717fa3;
  }
`;

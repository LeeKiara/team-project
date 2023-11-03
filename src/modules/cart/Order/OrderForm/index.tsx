import { MutableRefObject, useEffect, useRef, useState } from "react";
import { OrderFormContainer } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProfileData } from "@/modules/cart/userdata";
import AddressSearchForm from "../../AddressSearch";
import { OrderData, OrderItemData, OrderAddressData } from "@/modules/cart/orderdata";
import http from "@/utils/http";

const OrderForm = () => {
  // 회원정보
  const { profileData: profileData, isCartDataValidating } = useProfileData();

  // 주소 검색 데이터 받아오기
  const location = useLocation();
  const searchAddress = location.state;
  const postcode = searchAddress?.postcode;
  const address = searchAddress?.address;

  // 장바구니 데이터 받아오기
  const cartBooks = searchAddress?.cartBooks;

  // 주문 데이터 상태관리
  // const [stateOrderData, setStateOrderData] = useState<PaymentData>();

  // 장바구니 도서 관리
  const [stateCartBooks, setStateCartBooks] = useState(cartBooks);

  const [orderNumber, setOrderNumber] = useState(""); // 주문번호 상태

  if (stateCartBooks) {
    console.log(" //////////// 장바구니 데이터 상태 관리(렌더링이 되더라도 데이터가 유지되는지... //////////////");
    stateCartBooks.map((item) => {
      console.log(item.id + ", " + item.itemId + "," + item.title + "," + item.quantity);
    });
  }

  // 주소찾기 버튼 상태관리
  const [addressFormVisible, setAddressFormVisible] = useState(false);

  // 주문 가능 여부
  const [isOrder, setIsOrder] = useState(false);

  // 메세지 Modal visible 상태
  const [isModalVisible, setModalVisible] = useState(false);

  // 배송요청사항
  const [deliveryMemo, setDeliveryMemo] = useState("");

  // 결제수단 "CARD | BANK | DEPOSIT"
  const [paymentMethod, setPaymentMethod] = useState("");
  // 결제수단 "CARD" 상태
  const [isCardSelected, setIsCardSelected] = useState(false);
  // 결제수단 "BANK" 상태
  const [isBankTransferSelected, setIsBankTransferSelected] = useState(false);
  // 결제수단 "DEPOSIT" 상태
  const [isBankDepositSelected, setIsBankDepositSelected] = useState(false);

  // 주문자 정보
  const orderNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const orderHp1Ref = useRef() as MutableRefObject<HTMLInputElement>;
  const orderHp2Ref = useRef() as MutableRefObject<HTMLInputElement>;
  const orderHp3Ref = useRef() as MutableRefObject<HTMLInputElement>;
  const orderEmail1Ref = useRef() as MutableRefObject<HTMLInputElement>;
  const orderEmail2Ref = useRef() as MutableRefObject<HTMLInputElement>;

  const profileHp = profileData.phone;
  let profileHpParts = [];

  // 핸드폰 번호 - 단위로 자르기
  if (profileHp) {
    profileHpParts = profileHp.split("-");
    console.log(profileHpParts); // ["010", "1234", "1234"]
  } else {
    profileHpParts = ["", "", ""];
  }

  const profileEmail = profileData.email;
  let profileEmails = [];

  // 이메일 @ 단위로 자르기
  if (profileEmail) {
    profileEmails = profileEmail.split("@");
    console.log(profileEmails); // ["hong", "naver.com"]
  } else {
    profileEmails = ["", ""];
  }

  // 배송지 정보
  const deliveryNameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const deliveryHp1Ref = useRef() as MutableRefObject<HTMLInputElement>;
  const deliveryHp2Ref = useRef() as MutableRefObject<HTMLInputElement>;
  const deliveryHp3Ref = useRef() as MutableRefObject<HTMLInputElement>;
  // const deliveryAddr1Ref = useRef() as MutableRefObject<HTMLInputElement>;
  const deliveryAddr2Ref = useRef() as MutableRefObject<HTMLInputElement>;
  const deliveryMemoRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    console.log("*** useEffect >>" + postcode + "," + address);

    if (postcode && address) {
      setAddressFormVisible(false);
    }

    cartBooks && setStateCartBooks(cartBooks);

    console.log(" //////////// 렌더링이 되더라도 장바구니 데이터가 유지되는지... //////////////");
    stateCartBooks.map((item) => {
      console.log(item.id + ", " + item.itemId + "," + item.title + "," + item.quantity);
    });
  }, [postcode, address]);

  let sumPriceStandard = 0;
  let sumPriceSales = 0;
  let totalOrderAmt = 0;
  let deliveryAmt = 2000;

  if (stateCartBooks) {
    stateCartBooks.map((item) => {
      console.log(" //////////// 장바구니 데이터(cartBooks) 받아오기 //////////////");
      console.log(item.id + ", " + item.itemId + "," + item.title + "," + item.quantity);

      // 정가 합계
      sumPriceStandard += Number(item.priceStandard) * Number(item.quantity);
      // 할인금액 합계
      sumPriceSales += (Number(item.priceStandard) - Number(item.priceSales)) * Number(item.quantity);
    });

    totalOrderAmt = sumPriceStandard - sumPriceSales;

    // 결제 예정 금액 (정가 - 할인가 + 배송비)
    // 배송비 계산 (주문금액이 20,000원 미만이면 2,000원 부과)
    if (totalOrderAmt < 20000) {
      totalOrderAmt += deliveryAmt;
    } else {
      deliveryAmt = 0;
    }
  }

  const handleCardSelect = () => {
    setIsCardSelected(true);
    setIsBankTransferSelected(false);
    setIsBankDepositSelected(false);
    setPaymentMethod("1");
  };

  const handleBankTransferSelect = () => {
    setIsBankTransferSelected(true);
    setIsCardSelected(false);
    setIsBankDepositSelected(false);
    setPaymentMethod("2");
  };

  const handleBankDepositSelect = () => {
    setIsBankDepositSelected(true);
    setIsBankTransferSelected(false);
    setIsCardSelected(false);
    setPaymentMethod("3");
  };

  const navigate = useNavigate();

  // 주소 창 닫기
  const handleConfirm = () => {
    setAddressFormVisible(false);
  };

  // 주소찾기
  const handleAddrSearch = () => {
    setAddressFormVisible(true);
  };

  const handleChangeDeliveryMemo = (event) => {
    const selectedValue = event.target.value;
    setDeliveryMemo(selectedValue);
  };

  // useEffect(() => {
  //   alert("useEffect:orderNumber " + orderNumber);

  //   if (orderNumber) {
  //     navigate("/order/done", {
  //       state: {
  //         orderNumber: orderNumber,
  //       },
  //     });
  //   }
  // }, [orderNumber]);

  // const handleOrderComplete = () => {
  //   // 주문 완료 로직...

  //   // 주문이 성공적으로 완료되면 orderNumber 값을 설정
  //   const orderId = "12345"; // 예시 주문번호
  //   // setOrderNumber(newOrderNumber);

  //   // 페이지 이동
  //   navigate(`/order/done/${orderId}`);
  // };

  function checkFormData() {
    if (deliveryNameRef.current.value === "") {
      alert("배송자명을 입력하세요.");
      return false;
    }
    if (deliveryHp2Ref.current.value === "" || deliveryHp3Ref.current.value === "") {
      alert("배송자 핸드폰을 입력하세요.");
      return false;
    }

    if (postcode === undefined || address === undefined || deliveryAddr2Ref.current.value === "") {
      alert("주소를 입력하세요.");
      return false;
    }
    if (deliveryMemo === "") {
      alert("배송요청사항을 선택하세요.");
      return false;
    }
    if (paymentMethod === "") {
      alert("결제수단을 선택하세요.");
      return false;
    }

    return true;
  }

  // 주문하기
  const handleOrder = () => {
    console.log("handleOrder >> handleOrder");

    if (!checkFormData()) {
      return;
    }

    // 장바구니 데이터에서 상품id, 수량, 주문가격을 담는다.
    // 객체를 반환하기 위해서 (안에 {}를 사용함 => 객체 리터럴을 생성
    stateCartBooks.map((item) => {
      console.log(`${item.itemId}, ${item.priceSales}, ${item.quantity} `);
    });

    const calcuOrderItemData: OrderItemData[] = stateCartBooks.map((item) => ({
      itemId: item.itemId,
      quantity: item.quantity,
      orderPrice: (Number(item.priceSales) * Number(item.quantity)).toString(),
    }));

    console.log(" // 주문 Items 정보");
    calcuOrderItemData.map((item) => {
      console.log(`${item.itemId}, ${item.quantity}, ${item.orderPrice} `);
    });

    // 배송지 정보
    const orderAddressData: OrderAddressData = {
      deliveryName: deliveryNameRef.current.value, // 배송자명
      deliveryPhone: "010-" + deliveryHp2Ref.current.value + "-" + deliveryHp3Ref.current.value, // 배송자 핸드폰번호
      postcode: postcode, // 우편번호
      address: address, // 기본주소
      detailAddress: deliveryAddr2Ref.current.value, // 상세주소
      deliveryMemo: deliveryMemo === "DIRECT" ? deliveryMemoRef.current.value : deliveryMemo, // 배송요청사항
    };

    console.log(" // 배송지 정보");
    console.log(
      orderAddressData.deliveryName +
        "," +
        orderAddressData.deliveryPhone +
        "," +
        orderAddressData.postcode +
        "," +
        orderAddressData.address +
        "," +
        orderAddressData.detailAddress +
        "," +
        orderAddressData.deliveryMemo,
    );

    // 주문상태 : default 1:완료
    // 온라인 입금이면 0:주문접수
    let saveOrderStatus = "1";
    if (paymentMethod === "3") {
      saveOrderStatus = "0";
    }

    const createOrderData: OrderData = {
      paymentMethod: paymentMethod, // 결제수단
      paymentPrice: totalOrderAmt, // 결제금액
      orderStatus: saveOrderStatus, // 주문상태 (1: 완료, 2:취소, 0:주문접수)
      orderItems: calcuOrderItemData, // 주문 Items 정보
      orderAddress: orderAddressData,
    };

    console.log(" // 주문 정보");
    console.log("paymentMethod:" + createOrderData.paymentMethod + ",paymentPrice:" + createOrderData.paymentPrice);

    (async () => {
      try {
        const response = await http.post("/order/add", createOrderData);

        if (response.status === 201) {
          console.log("주문하기 성공!!!:" + response.data);

          const orderId = response.data;
          // alert("주문하기 성공!!! orderId:" + orderId);

          // navigate(`/order/done/${orderId}`);

          navigate("/order/done", {
            state: {
              orderId: orderId,
              orderStatus: createOrderData.orderStatus,
            },
          });
        }
      } catch (e: any) {
        console.log(e);
        alert("시스템 오류가 발생하였습니다.");
        navigate("/cart");
      }
    })();
  };

  const handleOrderCancel = () => {
    setModalVisible(false);
  };

  return (
    <OrderFormContainer>
      <div className="cart-container">
        <section>
          <article>
            <div className="contain-payment-header">
              <h3 className="title">주문/결제</h3>
            </div>
            <div className="wrap-payment">
              <div className="contain-payment-body">
                {/* 주문 상품 리스트(Loop)  */}
                {stateCartBooks &&
                  stateCartBooks.map((cartCashData, index) => (
                    <article className="box-list-payment" key={`item-${cartCashData.itemId}`}>
                      <div className="bookinfo">
                        <div>
                          <input type="hidden" name="orderdata" />
                          <div className="link-detail">
                            <span className="image">
                              <a href="" target="_blank">
                                <Link to={`/page?id=${cartCashData.id}`}>
                                  {" "}
                                  <img src={cartCashData.cover} alt={cartCashData.title} />
                                </Link>
                              </a>
                            </span>
                            <div className="text">
                              <div>{cartCashData.categoryName}</div>
                              <br />
                              <p>
                                <Link to={`/page?id=${cartCashData.id}`}>{cartCashData.title}</Link>
                                <br />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="priceinfo">
                          <div>
                            <div className="icon-tag-pricegubun">정가</div>
                            <div>{cartCashData.priceStandard.toLocaleString()}원</div>
                          </div>
                          <div>
                            <div className="icon-tag-pricegubun">판매가</div>
                            <div>{cartCashData.priceSales.toLocaleString()}원</div>
                          </div>
                          <div>
                            <div className="icon-tag-pricegubun">수량</div>
                            <div>{cartCashData.quantity.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="icon-tag-pricegubun">주문금액</div>
                            <div>
                              {(Number(cartCashData.priceSales) * Number(cartCashData.quantity)).toLocaleString()}원
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}

                {/* <!-- 주문자 정보 --> */}
                <h4 className="title-order">주문자 정보</h4>
                <div className="box-information-order">
                  {/* <!-- 이름 입력 --> */}
                  <div className="box-name">
                    <span className="form-text">
                      <input
                        type="text"
                        name="oname"
                        placeholder="이름"
                        style={{ width: "316px" }}
                        // ref={orderNameRef}
                        value={profileData.nickname}
                      />
                    </span>
                  </div>

                  {/* <!-- 전화번호 입력 --> */}
                  <div className="box-phonenum">
                    <input
                      type="text"
                      name="ohp1"
                      placeholder="휴대폰 앞자리"
                      // ref={orderHp1Ref}
                      value={profileHpParts[0]}
                    />
                    <input
                      type="text"
                      name="ohp2"
                      placeholder="휴대폰 앞자리"
                      // ref={orderHp2Ref}
                      value={profileHpParts[1]}
                    />
                    <input
                      type="text"
                      name="ohp3"
                      placeholder="휴대폰 뒷자리"
                      // ref={orderHp3Ref}
                      value={profileHpParts[2]}
                    />
                  </div>
                  {/* <!-- //전화번호 입력 --> */}

                  {/* <!-- 이메일 입력 --> */}
                  <div className="box-email">
                    <input type="text" name="email1" value={profileEmails[0]} />
                    @
                    <input type="text" name="email2" value={profileEmails[1]} />
                    <div className="form-select"></div>
                  </div>
                  {/* <!-- //이메일 입력 --> */}
                </div>

                {/* <!-- //배송지 정보 --> */}
                <h4 className="title-order">배송지 정보</h4>
                <div className="box-information-order">
                  {/* <!-- 배송지 이름 입력 --> */}
                  <div className="box-name">
                    <span className="form-text">
                      <input
                        type="text"
                        name="delivery-name"
                        placeholder="이름"
                        style={{ width: "316px" }}
                        ref={deliveryNameRef}
                      />
                    </span>
                  </div>

                  {/* <!-- 배송지 전화번호 입력 --> */}
                  <div className="box-phonenum">
                    <input type="text" name="delivery-hp1" placeholder="010" ref={deliveryHp1Ref} />
                    <input type="text" name="delivery-hp2" placeholder="휴대폰 앞자리" ref={deliveryHp2Ref} />
                    <input type="text" name="delivery-hp3" placeholder="휴대폰 뒷자리" ref={deliveryHp3Ref} />
                  </div>
                  {/* <!-- //전화번호 입력 --> */}

                  {/* <!-- 배송지 주소찾기 --> */}
                  <div className="box-address">
                    <div>
                      <button type="button" onClick={handleAddrSearch}>
                        주소찾기
                      </button>
                      <input
                        type="text"
                        name="zipcode"
                        placeholder="우편번호"
                        readOnly={true}
                        style={{ width: "180px" }}
                        value={postcode}
                      />
                    </div>

                    <input
                      type="text"
                      name="address"
                      placeholder="기본주소"
                      readOnly={true}
                      style={{ width: "550px" }}
                      value={address}
                    />
                    <input
                      type="text"
                      name="street_detail"
                      placeholder="상세 주소 및 상세 건물명"
                      style={{ width: "550px" }}
                      ref={deliveryAddr2Ref}
                    />
                  </div>
                  {/* <!-- //주소찾기 --> */}
                  {/* <!-- 배송메모 --> */}
                  <div className="box-memo">
                    <select onChange={handleChangeDeliveryMemo}>
                      <option value="">배송 메모를 선택해 주세요.</option>
                      <option value="부재 시 경비실에 맡겨 주세요.">부재 시 경비실에 맡겨 주세요.</option>
                      <option value="부재 시 문앞에 놓아 주세요.">부재 시 문앞에 놓아 주세요.</option>
                      <option value="배송 전 미리 연락 바랍니다.">배송 전 미리 연락 바랍니다.</option>
                      <option value="DIRECT">직접입력</option>
                    </select>
                    <input
                      style={{ display: deliveryMemo === "DIRECT" ? "" : "none" }}
                      type="text"
                      name="delivery-memo"
                      placeholder="배송 메모를 입력해 주세요.(50자)"
                      ref={deliveryMemoRef}
                    />
                  </div>
                  {/* <!-- //배송메모 --> */}
                </div>

                {/* <!-- 결제 수단 --> */}
                <h4 className="title-order">결제수단</h4>
                <div className="box-information-payment">
                  {/* <!-- 결제 수단 선택 --> */}
                  <div>
                    <button
                      type="button"
                      onClick={handleCardSelect}
                      className={`${isCardSelected ? "button-selected" : ""}`}>
                      신용카드
                    </button>
                    <button
                      type="button"
                      onClick={handleBankTransferSelect}
                      className={`${isBankTransferSelected ? "button-selected" : ""}`}>
                      실시간 계좌 이체
                    </button>
                    <button
                      type="button"
                      onClick={handleBankDepositSelect}
                      className={`${isBankDepositSelected ? "button-selected" : ""}`}>
                      온라인 입금
                    </button>
                  </div>

                  {/* <!-- 신용카드 --> */}
                  <div className={`payment-tab-cont kind1 ${isCardSelected ? "visible" : ""}`}>
                    <p className="text">
                      <br />
                      <strong>신용카드를 선택하셨습니다.</strong> 보유하신 신용카드로 결제하시는 방법입니다.
                    </p>
                  </div>
                  {/* <!-- //신용카드 --> */}

                  {/* <!-- 실시간 계좌 이체 --> */}
                  <div className={`payment-tab-cont kind2 ${isBankTransferSelected ? "visible" : ""}`}>
                    <p className="text">
                      <br />
                      <strong>실시간 계좌 이체를 선택하셨습니다.</strong> 고객님 계좌에서 바로 이체시키는 결제
                      방법입니다.
                    </p>
                  </div>
                  {/* <!-- //실시간 계좌 이체 --> */}

                  {/* <!-- 온라인 입금 --> */}
                  <div className={`payment-tab-cont kind3 ${isBankDepositSelected ? "visible" : ""}`}>
                    <p className="text">
                      <br />
                      <strong>온라인 입금을 선택하셨습니다.</strong>
                      가상 계좌로 입금해 주시는 결제 방법입니다.
                    </p>
                  </div>
                  {/* <!-- //온라인 입금 --> */}
                </div>

                <div style={{ height: "100px" }}>
                  <h1></h1>
                </div>
              </div>

              {/* 사이드 메뉴 */}
              <div className="box-payment-sidebar" style={{ top: "0px" }}>
                <div className="contain-calcpay">
                  {/* <h4 className="title">결제 예정 금액</h4> */}
                  <dl className="payment-item">
                    <dt>상품 금액</dt>
                    <dd>
                      <strong>{sumPriceStandard.toLocaleString()}</strong>원
                    </dd>
                  </dl>
                  <dl className="payment-item">
                    <dt>배송비</dt>
                    <dd>
                      <strong>{deliveryAmt.toLocaleString()}</strong>원
                    </dd>
                  </dl>
                  {/* <dl className="payment-item minus">
                    <dt>할인 금액</dt>
                    <dd>
                      <strong>-{sumPriceSales.toLocaleString()}</strong>원
                    </dd>
                  </dl> */}

                  <hr className="div-type2" />
                  <dl className="payment-item total">
                    <dt>결제 예정 금액 </dt>

                    <dd>
                      <strong id="totalPriceText">{totalOrderAmt.toLocaleString()}</strong>원
                    </dd>
                  </dl>

                  <hr className="div-type2" />
                  <div className="box-submit-payment">
                    <span className="btn-order">{/* <button onClick={handlePayment}>결제하기</button> */}</span>
                  </div>

                  <div className="box-submit-payment">
                    <button className="btn-payment" onClick={handleOrder}>
                      결제하기
                    </button>

                    {/* <ConfirmModal
                      isVisible={isModalVisible}
                      onConfirm={handleOrder}
                      onCancel={handleOrderCancel}
                      message="주문하시겠습니까?"
                    /> */}
                  </div>

                  {/* (주문준비 완료)결제하기 버튼 */}
                  {/* {isOrder && <Payment orderData={stateOrderData} />} */}
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>

      {/* <!-- layer : 주소 검색 --> */}
      {/* {addrSearchVisible && <AddressSearchForm onConfirm={handleConfirm} onCancel={handleCancel} />} */}
      {addressFormVisible && <AddressSearchForm onCancel={handleConfirm} />}
    </OrderFormContainer>
  );
};

export default OrderForm;

import { useEffect, useState } from "react";
import { PublisherBookContainer } from "./styles";
import http from "@/utils/http";
import { Link } from "react-router-dom";
import CartButton from "@/components/CartButton";

interface EventBookResponse {
  itemId: number;
  title: string;
  description: number;
  cover: string;
  textSentence: string;
  mentSentence: string;
  authorImage: string;
  author: string;
  publisher: string;
  authorDescription: string;
}

const PublisherBook = () => {
  const [itemAward, setItemAward] = useState("-1"); // item-Award 선택값
  const [eventBooks, setEventBooks] = useState<EventBookResponse[]>([]); // event books

  console.log("itemAward => [" + itemAward + "]");

  const cartQuantity = 1;

  // 처음 컴포넌트 렌더링 됐을 때 한 번 되도록 빈 배열로 넣음
  // (의존변수 배열이 없으면 컴포넌트가 업데이트 될 때 마다 실행됨)
  useEffect(() => {
    (async () => {
      try {
        const response = await http.get<EventBookResponse[]>("/api/order-commerce/publisher/event");
        if (response.status === 200) {
          console.log("response.data" + response.data);

          console.log(response);
          setEventBooks([...response.data]);
        }
      } catch (e: any) {
        console.log(e);
      }
      // setLoading(false)
    })();
  }, []);

  const handleItemAward = (index) => {
    // alert("handleWrapListItem:" + index);
    setItemAward(index);

    scrollToTargetDiv();
  };

  const scrollToTargetDiv = () => {
    const targetDiv = document.querySelector(".wrap_book_desc") as HTMLElement;

    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <PublisherBookContainer>
      <section className="wrap_list_award">
        <div className="wrap_title">
          <span className="publisher">출판사 러브앤프리</span>
          <span className="description">2023 결산 도서 다섯 권을 소개합니다. </span>
          {/* <span className="wrap_list_page">
            <span className="page visible" data-grade="all">
              수상작 전체
            </span>
            <span className="page" data-grade="platinum">
              대상
            </span>
            <span className="page" data-grade="gold">
              금상
            </span>
            <span className="page" data-grade="silver">
              은상
            </span>
          </span> */}
          {/* <span className="sub_title">brunchbook project</span> */}
        </div>
        <div onClick={scrollToBottom}>here</div>
        <div className="wrap_list_item">
          <ul id="gradeItemList_all" style={{ width: "1400px" }} data-page="1">
            {eventBooks &&
              eventBooks.map((item, index) => (
                <li
                  key={item.itemId}
                  className="item_award"
                  onClick={() => {
                    handleItemAward(index);
                  }}>
                  <div className="wrap_item_award_cover">
                    <img className="img_cover" src={item.cover} />
                    <div className="border_left"></div>
                  </div>
                  <p className="title">{item.title}</p>
                  <p className="author">
                    <span className="by">by</span>&nbsp;
                    <a target="_blank" href={item.author}>
                      {" "}
                      {item.author}{" "}
                    </a>
                  </p>
                  <span className="open_marker"></span>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {eventBooks &&
        eventBooks.map((item, index) => (
          <section
            key={item.itemId}
            className={`${Number(itemAward) == index ? "wrap_book_info open" : "wrap_book_info"}`}>
            <div className="wrap_inner_book_info">
              <div className="wrap_book">
                <div className="wrap_title">
                  <h3 className="title_book">{item.title}</h3>
                </div>
                <div className="wrap_book_desc">
                  <div className="wrap_book_desc_buy">
                    <p className="book_description">{item.description}</p>

                    <Link to={`/page?id=${item.id}`}>
                      <button className="btn_book_detail" type="button">
                        도서 상세
                      </button>
                    </Link>

                    {/* 장바구니 담기 버튼 */}
                    <CartButton
                      itemId={item.itemId}
                      quantity={1}
                      title={item.title}
                      cover={item.cover}
                      priceStandard={20000}
                      priceSales={10000}
                    />
                  </div>

                  <div
                    className="wrap_book_image"
                    style={{
                      backgroundImage: `url(${item.cover})`,
                    }}>
                    <div className="border_left"></div>
                  </div>

                  <div className="wrap_book_share_sentence">
                    <div
                      className="wrap_book_sentence"
                      style={{
                        backgroundImage: `url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/sentence_background_image_02.png)`,
                      }}>
                      <p className="layer_dimmed"></p>
                      <img
                        src="//t1.daumcdn.net/brunch/static/img/help/pc/publish/quotation_pc.png"
                        className="quotation"
                      />
                      <p className="wrap_text_sentence">{item.textSentence}</p>
                      <p className="ment_sentence">작가가 사랑한 한 문장</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/@brunch78ko" target="_blank">
                <div className="wrap_author">
                  <div
                    className="user_image"
                    style={{
                      backgroundImage: `url(${item.authorImage})`,
                    }}></div>
                  <div className="user_name">{item.author}</div>
                  <span className="publisher_book">{item.publisher}</span>
                  <div className="user_description">{item.authorDescription}</div>
                  <div className="user_follow">작가 구독하기</div>
                </div>
              </a>
            </div>
          </section>
        ))}

      <section className="wrap_list_sentence">
        <div className="wrap_banner">
          <div className="wrap_inner_banner">
            <div className="wrap_sentence">
              <p className="text_guide">2023년 1월부터 10월까지 </p>
              <p className="layerBook text_sentence">
                많이 사랑해주신 <br></br> 책 5권을 러브앤프리만의<br></br> 이야기로 소개합니다
              </p>
              <p className="text_autor">
                <span className="by">by</span>&nbsp; 러브앤프리
              </p>
            </div>
            <div className="wrap_book_image">
              <div className="wrap_img_book_inner">
                <img
                  className="layerBook img_book_inner"
                  src="https://t1.daumcdn.net/section/oc/14826ed738544ff8ac0a55e33b4dfc6d"
                  alt=""
                />
                <div className="border_center"></div>
              </div>
              <div className="wrap_img_book_cover">
                <img
                  className="layerBook img_book_cover"
                  data-no="2195.0"
                  src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788998342340.jpg"
                  alt=""
                />
                <div className="border_left"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublisherBookContainer>
  );
};

export default PublisherBook;

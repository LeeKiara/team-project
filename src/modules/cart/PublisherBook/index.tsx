import { useEffect, useState } from "react";
import { PublisherBookContainer } from "./styles";
import Button from "@/components/Button";
import http from "@/utils/http";
import { EventBookResponse } from "../../eventBookData";

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
        const response = await http.get<EventBookResponse[]>("publisher/event");
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
  };

  return (
    <PublisherBookContainer>
      <section className="wrap_list_award">
        <div className="wrap_title">
          <span className="title">브런치북 수상작</span>
          <span className="wrap_list_page">
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
          </span>
          <span className="sub_title">brunchbook project</span>
        </div>
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
            <div className="wrap_inner_book_info #pc">
              <div className="wrap_book">
                <div className="wrap_title">
                  <h3 className="title_book">{item.title}</h3>
                </div>
                <div className="wrap_book_desc">
                  <div className="wrap_book_desc_buy">
                    <p className="book_description">{item.description}</p>
                    <a href="https://gift.kakao.com/product/7656368" target="_blank" className="#buybook">
                      {/* <button className="btn_buy_book" type="button">
                      책 구매하기
                    </button> */}
                      <Button itemId={item.id} quantity={cartQuantity} />
                    </a>
                  </div>
                  <a href="https://gift.kakao.com/product/7656368" target="_blank" className="#buybook">
                    <div
                      className="wrap_book_image"
                      style={{
                        backgroundImage: `url(${item.cover})`,
                      }}>
                      <div className="border_left"></div>
                    </div>
                  </a>
                  <div className="wrap_book_share_sentence">
                    <div
                      className="wrap_book_sentence"
                      style={{
                        backgroundImage: `url(${item.textSentence})`,
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

      {/* <section className={`${itemAward == "0" ? "wrap_book_info open" : "wrap_book_info"}`}>
        <div className="wrap_inner_book_info #pc">
          <div className="wrap_book">
            <div className="wrap_title">
              <h3 className="title_book">아름다운 우리나라 전국 무장애 여행지 39</h3>
            </div>
            <div className="wrap_book_desc">
              <div className="wrap_book_desc_buy">
                <p className="book_description">
                  전국 무장애 여행지 39곳. 휠체어 타고 떠나는 #아름다운 우리나라 전국 무장애 여행지 39
                </p>
                <a href="https://gift.kakao.com/product/7656368" target="_blank" className="#buybook">
                  <button className="btn_buy_book" type="button">
                    책 구매하기
                  </button>
                </a>
              </div>
              <a href="https://gift.kakao.com/product/7656368" target="_blank" className="#buybook">
                <div
                  className="wrap_book_image"
                  style={{
                    backgroundImage: "url(http://t1.daumcdn.net/lbook/image/6432508?timestamp=20230927151645)",
                  }}>
                  <div className="border_left"></div>
                </div>
              </a>
              <div className="wrap_book_share_sentence">
                <div
                  className="wrap_book_sentence"
                  style={{
                    backgroundImage:
                      "url(http://t1.daumcdn.net/brunch/static/img/help/pc/publish/sentence_background_image_02.png)",
                  }}>
                  <p className="layer_dimmed"></p>
                  <img
                    src="//t1.daumcdn.net/brunch/static/img/help/pc/publish/quotation_pc.png"
                    className="quotation"
                  />
                  <p className="wrap_text_sentence">
                    여행은 누구에게나 평등해야 한다. 접근 가능한 여행. 평등한 여행. 무장애 여행
                  </p>
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
                  backgroundImage:
                    "url(//img1.daumcdn.net/thumb/C200x200.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/mmq/image/HK7XgDzGMqlqoWbBGgRqAgwlsmc.jpg",
                }}></div>
              <div className="user_name">전윤선</div>
              <span className="publisher_book">나무발전소</span>
              <div className="user_description">전윤선의 브런치입니다. 여행작가 에세이스트 입니다</div>
              <div className="user_follow">작가 구독하기</div>
            </div>
          </a>
        </div>
      </section>
      <section className={`${itemAward == "1" ? "wrap_book_info open" : "wrap_book_info"}`}>
        <div className="wrap_inner_book_info #pc">
          <div className="wrap_book">
            <div className="wrap_title">
              <h3 className="title_book">아름다운 우리나라 전국 무장애 여행지 39</h3>
            </div>
            <div className="wrap_book_desc">
              <div className="wrap_book_desc_buy">
                <p className="book_description">
                  전국 무장애 여행지 39곳. 휠체어 타고 떠나는 #아름다운 우리나라 전국 무장애 여행지 39
                </p>
                <a href="https://gift.kakao.com/product/7656368" target="_blank" className="#buybook">
                  <button className="btn_buy_book" type="button">
                    책 구매하기
                  </button>
                </a>
              </div>
              <a href="https://gift.kakao.com/product/7656368" target="_blank" className="#buybook">
                <div
                  className="wrap_book_image"
                  style={{
                    backgroundImage: "url(http://t1.daumcdn.net/lbook/image/6432508?timestamp=20230927151645)",
                  }}>
                  <div className="border_left"></div>
                </div>
              </a>
              <div className="wrap_book_share_sentence">
                <div
                  className="wrap_book_sentence"
                  style={{
                    backgroundImage:
                      "url(http://t1.daumcdn.net/brunch/static/img/help/pc/publish/sentence_background_image_02.png)",
                  }}>
                  <p className="layer_dimmed"></p>
                  <img
                    src="//t1.daumcdn.net/brunch/static/img/help/pc/publish/quotation_pc.png"
                    className="quotation"
                  />
                  <p className="wrap_text_sentence">
                    여행은 누구에게나 평등해야 한다. 접근 가능한 여행. 평등한 여행. 무장애 여행
                  </p>
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
                  backgroundImage:
                    "url(//img1.daumcdn.net/thumb/C200x200.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/mmq/image/HK7XgDzGMqlqoWbBGgRqAgwlsmc.jpg",
                }}></div>
              <div className="user_name">전윤선</div>
              <span className="publisher_book">나무발전소</span>
              <div className="user_description">전윤선의 브런치입니다. 여행작가 에세이스트 입니다</div>
              <div className="user_follow">작가 구독하기</div>
            </div>
          </a>
        </div>
      </section> */}

      <section className="wrap_list_sentence">
        <div className="wrap_banner">
          <div className="wrap_inner_banner">
            <div className="wrap_sentence">
              <p className="text_guide">저자가 사랑한 책 속의 한 문장</p>
              <p className="layerBook text_sentence" data-no="2195.0">
                서울에도 아직 청춘이 내 집 마련할 수 있는 기회가 열려 있습니다.
              </p>
              <p className="text_autor">
                <span className="by">by</span>&nbsp;
                <a target="_blank" href="/@@43k">
                  스케치
                </a>{" "}
                /{" "}
                <span data-no="2195.0" className="layerBook">
                  청춘의 재테크 상담소
                </span>
              </p>
            </div>
            <div className="wrap_book_image">
              <div className="wrap_img_book_inner">
                <img
                  className="layerBook img_book_inner"
                  data-no="2195.0"
                  src="https://t1.daumcdn.net/section/oc/14826ed738544ff8ac0a55e33b4dfc6d"
                  alt=""
                />
                <div className="border_center"></div>
              </div>
              <div className="wrap_img_book_cover">
                <img
                  className="layerBook img_book_cover"
                  data-no="2195.0"
                  src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788947545273.jpg"
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

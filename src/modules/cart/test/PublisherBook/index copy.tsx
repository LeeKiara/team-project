import { useState } from "react";
import { PublisherBookContainer } from "./styles";
import Button from "@/components/Button";

const PublisherBook = () => {
  const [itemAward, setItemAward] = useState("-1"); // item-Award 선택값

  console.log("itemAward => [" + itemAward + "]");

  const cartQuantity = 1;

  const data = [
    {
      id: 7014,
      image: "http://t1.daumcdn.net/lbook/image/6427524?timestamp=20230902172215",
      author: "이준호",
      title: "반역자와 배신자들",
    },
    {
      id: 7020,
      image: "https://t1.daumcdn.net/brunch/static/img/banner/9791192642055.jpg",
      author: "백지성",
      title: "50, 이제 결혼합니다",
    },
    {
      id: 7034,
      image: "http://t1.daumcdn.net/lbook/image/6430811?timestamp=20230905184640",
      author: "OncoAzim",
      title: "3분 진료 공장의 세계",
    },
    {
      id: 7043,
      image: "http://t1.daumcdn.net/lbook/image/6432436?timestamp=20230907132022",
      author: "개화걸 김도희",
      title: "어디에나 있고 어디에도 없는 나나랜드",
    },
  ];

  const dataDesc = [
    {
      title: "아름다운 우리나라 전국 무장애 여행지 39",
      description: "전국 무장애 여행지 39곳. 휠체어 타고 떠나는 #아름다운 우리나라 전국 무장애 여행지 39",
      image: "http://t1.daumcdn.net/lbook/image/6432508?timestamp=20230927151645",
      authorName: "전윤선",
      authorImage:
        "http://img1.daumcdn.net/thumb/C200x200.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/mmq/image/HK7XgDzGMqlqoWbBGgRqAgwlsmc.jpg",
      publisher: "나무발전소",
      authorDescription: "전윤선의 브런치입니다. 여행작가 에세이스트 입니다",
      quotation: "여행은 누구에게나 평등해야 한다. 접근 가능한 여행. 평등한 여행. 무장애 여행",
    },
    // 다른 항목들 추가
    {
      title: "50, 이제 결혼합니다",
      description:
        "결혼 기피 시대에 외치는 만혼의 행복. 속박은 다운, 편안함은 업! 결혼과 비혼 사이에서 고민하는 중년들에게 유용한 힌트를 담았습니다. 청춘의 문턱을 막 넘어선 분들도 ‘선행 학습’ 삼아 확인해 보시면 좋겠습니다.",
      image: "https://t1.daumcdn.net/brunch/static/img/banner/9791192642055.jpg",
      authorName: "백지성",
      authorImage:
        "https://img1.daumcdn.net/thumb/C200x200.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/dL46/image/2HfsauQITevnJN3sD9-A8YPIQF8.jpg",
      publisher: "오르골",
      authorDescription:
        "만혼, 재혼을 고민하는 사람들을 위해 글을 썼습니다. 오랜 세월 좌충우돌 외롭게 살아오다 50에 결혼하며 느낀, 중년의 결혼과 삶, 행복에 대한 생각들을 나누고자 글을 씁니다.",
      quotation: "성숙한 나이에 하는 결혼, 그것은 가장 영리하고 지혜로운 선택일 수 있다.",
    },
    {
      title: "3분 진료 공장의 세계",
      description:
        "1시간을 넘게 기다려 3분도 안 돼 끝나는 진료, 의사들은 환자와 눈조차 맞추지 않으려 한다. 대학병원의 진료실은 왜 모두에게 불평불만의 공간이 되었을까? ‘3분 진료 공장’이 되어버린 우리 의료계의 현실을 짚어본다",
      image: "http://t1.daumcdn.net/lbook/image/6430811?timestamp=20230905184640",
      authorName: "OncoAzim",
      authorImage:
        "https://img1.daumcdn.net/thumb/C200x200.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/wdm/image/WPUa5gY1qlqmk-ZkHsRAjgcQPmM.jpg",
      publisher: "두리반",
      authorDescription:
        "잃었지만 잊지 않은 것들 (2019, 라이킷)을 썼습니다. 한 대학병원의 종양내과에서 일합니다. 언젠가는 웃기는 책과 만화책을 내고 싶습니다.",
      quotation: "누군가는 힘겨웠던 삶을 마감하고, 또 다른 누군가는 두려움과 불안에 떨며 진료실로 들어온다.",
    },
    {
      title: "어디에나 있고 어디에도 없는 나나랜드",
      description:
        "평범한 1990년생이 질문을 던지고 행복을 찾아 노력했던 발자국 모음이다. 4개국 거주, 36개국 여행 뒤 돌아와 내린 결론은, 숨 쉬고, 배우고, 사랑하고, 성장했던 모든 곳이 결국 나만의 ‘나나랜드’였다!",
      image: "http://t1.daumcdn.net/lbook/image/6432436?timestamp=20230907132022",
      authorName: "개화걸 김도희",
      authorImage:
        "https://img1.daumcdn.net/thumb/C200x200.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/akp/image/Be22p7saKnctljYKefDlCF1qRUE.jpeg",
      publisher: "모놀로그",
      authorDescription:
        "스무 살까지 여권도 없던 극한의 모범생에서 4개국 거주, 36개국 여행, 사랑하는 영국남자와 결혼했어요. 다양한 문화의 관점에서 일상에 '왜'를 질문합니다.",
      quotation:
        "나를 둘러싼 환경이 바뀌면 나 자신뿐만 아니라 주변 사람과의 관계나 환경에 대해 수많은 질문이 떠오른다.",
    },
  ];

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
            {data.map((item, index) => (
              <li
                key={item.id}
                className="item_award"
                onClick={() => {
                  handleItemAward(index);
                }}>
                <div className="wrap_item_award_cover">
                  <img className="img_cover" src={item.image} />
                  <div className="border_left"></div>
                </div>
                <p className="title">{item.title}</p>
                <p className="author">
                  <span className="by">by</span>&nbsp;
                  <a target="_blank" href={item.authorId}>
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

      {dataDesc.map((item, index) => (
        <section key={item.id} className={`${Number(itemAward) == index ? "wrap_book_info open" : "wrap_book_info"}`}>
          <div className="wrap_inner_book_info #pc">
            <div className="wrap_book">
              <div className="wrap_title">
                <h3 className="title_book">{dataDesc[index].title}</h3>
              </div>
              <div className="wrap_book_desc">
                <div className="wrap_book_desc_buy">
                  <p className="book_description">{dataDesc[index].description}</p>
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
                      backgroundImage: `url(${dataDesc[index].image})`,
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
                    <p className="wrap_text_sentence">{dataDesc[index].quotation}</p>
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
                    backgroundImage: `url(${dataDesc[index].authorImage})`,
                  }}></div>
                <div className="user_name">{dataDesc[index].authorName}</div>
                <span className="publisher_book">{dataDesc[index].publisher}</span>
                <div className="user_description">{dataDesc[index].authorDescription}</div>
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

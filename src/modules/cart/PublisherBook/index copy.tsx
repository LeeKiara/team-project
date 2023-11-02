import { PublisherBookContainer } from "./styles";

const PublisherBook = () => {
  const data = [
    {
      id: 7014,
      actionName: "브런치스토리 책방 > 브런치북 출간 프로젝트 수상작 영역 클릭",
      actionKind: "ClickContent",
      layer: "awarded_books",
      copy: "반역자와 배신자들",
      image: "http://t1.daumcdn.net/lbook/image/6427524?timestamp=20230902172215",
      author: "이준호",
      authorId: "@@dfBO",
      title: "반역자와 배신자들",
    },
    {
      id: 7020,
      actionName: "브런치스토리 책방 > 브런치북 출간 프로젝트 수상작 영역 클릭",
      actionKind: "ClickContent",
      layer: "awarded_books",
      copy: "50, 이제 결혼합니다",
      image: "https://t1.daumcdn.net/brunch/static/img/banner/9791192642055.jpg",
      author: "백지성",
      authorId: "@@dL46",
      title: "50, 이제 결혼합니다",
    },
    {
      id: 7034,
      actionName: "브런치스토리 책방 > 브런치북 출간 프로젝트 수상작 영역 클릭",
      actionKind: "ClickContent",
      layer: "awarded_books",
      copy: "3분 진료 공장의 세계",
      image: "http://t1.daumcdn.net/lbook/image/6430811?timestamp=20230905184640",
      author: "OncoAzim",
      authorId: "@@wdm",
      title: "3분 진료 공장의 세계",
    },
    {
      id: 7043,
      actionName: "브런치스토리 책방 > 브런치북 출간 프로젝트 수상작 영역 클릭",
      actionKind: "ClickContent",
      layer: "awarded_books",
      copy: "어디에나 있고 어디에도 없는 나나랜드",
      image: "http://t1.daumcdn.net/lbook/image/6432436?timestamp=20230907132022",
      author: "개화걸 김도희",
      authorId: "@@akp",
      title: "어디에나 있고 어디에도 없는 나나랜드",
    },
  ];

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
            <li
              className="item_award open"
              data-no="7130"
              data-tiara-action-name="브런치스토리 책방 > 브런치북 출간 프로젝트 수상작 영역 클릭"
              data-tiara-action-kind="ClickContent"
              data-tiara-layer="awarded_books"
              data-tiara-copy="아름다운 우리나라 전국 무장애 여행지 39"
              data-tiara-image="http://t1.daumcdn.net/lbook/image/6432508?timestamp=20230927151645"
              data-tiara-id="7130"
              data-tiara-author="전윤선"
              data-tiara-author_id="@@mmq">
              <div className="wrap_item_award_cover">
                <img className="img_cover" src="http://t1.daumcdn.net/lbook/image/6432508?timestamp=20230927151645" />
                <div className="border_left"></div>
              </div>
              <p className="title">아름다운 우리나라 전국 무장애 여행지 39</p>
              <p className="author">
                <span className="by">by</span>&nbsp;
                <a target="_blank" href="/@@mmq">
                  전윤선
                </a>
              </p>
              <span className="open_marker"></span>
            </li>
            <li
              className="item_award"
              data-no="7014"
              data-tiara-action-name="브런치스토리 책방 > 브런치북 출간 프로젝트 수상작 영역 클릭"
              data-tiara-action-kind="ClickContent"
              data-tiara-layer="awarded_books"
              data-tiara-copy="반역자와 배신자들"
              data-tiara-image="http://t1.daumcdn.net/lbook/image/6427524?timestamp=20230902172215"
              data-tiara-id="7014"
              data-tiara-author="이준호"
              data-tiara-author_id="@@dfBO">
              <div className="wrap_item_award_cover">
                <img className="img_cover" src="http://t1.daumcdn.net/lbook/image/6427524?timestamp=20230902172215" />
                <div className="border_left"></div>
              </div>
              <p className="title">반역자와 배신자들</p>
              <p className="author">
                <span className="by">by</span>&nbsp;
                <a target="_blank" href="/@@dfBO">
                  이준호
                </a>
              </p>
              <span className="open_marker"></span>
            </li>
            <li
              className="item_award"
              data-no="7020"
              data-tiara-action-name="브런치스토리 책방 > 브런치북 출간 프로젝트 수상작 영역 클릭"
              data-tiara-action-kind="ClickContent"
              data-tiara-layer="awarded_books"
              data-tiara-copy="50, 이제 결혼합니다"
              data-tiara-image="https://t1.daumcdn.net/brunch/static/img/banner/9791192642055.jpg"
              data-tiara-id="7020"
              data-tiara-author="백지성"
              data-tiara-author_id="@@dL46">
              <div className="wrap_item_award_cover">
                <img className="img_cover" src="https://t1.daumcdn.net/brunch/static/img/banner/9791192642055.jpg" />
                <div className="border_left"></div>
              </div>
              <p className="title">50, 이제 결혼합니다</p>
              <p className="author">
                <span className="by">by</span>&nbsp;
                <a target="_blank" href="/@@dL46">
                  백지성
                </a>
              </p>
              <span className="open_marker"></span>
            </li>
            <li
              className="item_award"
              data-no="7034"
              data-tiara-action-name="브런치스토리 책방 > 브런치북 출간 프로젝트 수상작 영역 클릭"
              data-tiara-action-kind="ClickContent"
              data-tiara-layer="awarded_books"
              data-tiara-copy="3분 진료 공장의 세계"
              data-tiara-image="http://t1.daumcdn.net/lbook/image/6430811?timestamp=20230905184640"
              data-tiara-id="7034"
              data-tiara-author="OncoAzim"
              data-tiara-author_id="@@wdm">
              <div className="wrap_item_award_cover">
                <img className="img_cover" src="http://t1.daumcdn.net/lbook/image/6430811?timestamp=20230905184640" />
                <div className="border_left"></div>
              </div>
              <p className="title">3분 진료 공장의 세계</p>
              <p className="author">
                <span className="by">by</span>&nbsp;
                <a target="_blank" href="/@@wdm">
                  OncoAzim
                </a>
              </p>
              <span className="open_marker"></span>
            </li>
            <li
              className="item_award"
              data-no="7043"
              data-tiara-action-name="브런치스토리 책방 > 브런치북 출간 프로젝트 수상작 영역 클릭"
              data-tiara-action-kind="ClickContent"
              data-tiara-layer="awarded_books"
              data-tiara-copy="어디에나 있고 어디에도 없는 나나랜드"
              data-tiara-image="http://t1.daumcdn.net/lbook/image/6432436?timestamp=20230907132022"
              data-tiara-id="7043"
              data-tiara-author="개화걸 김도희"
              data-tiara-author_id="@@akp">
              <div className="wrap_item_award_cover">
                <img className="img_cover" src="http://t1.daumcdn.net/lbook/image/6432436?timestamp=20230907132022" />
                <div className="border_left"></div>
              </div>
              <p className="title">어디에나 있고 어디에도 없는 나나랜드</p>
              <p className="author">
                <span className="by">by</span>&nbsp;
                <a target="_blank" href="/@@akp">
                  개화걸 김도희
                </a>
              </p>
              <span className="open_marker">*****</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="wrap_book_info">
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
      <section className="wrap_book_info">
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

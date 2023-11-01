import styled from "@emotion/styled";

// 색상 변수 정의
const primaryColor = "#36364b";
const borderColor = "#e1e1e1";
const grayColor = "#999aa9";
const lightgrayColor = "#f5f6f9";
const blueColor = "#3d4ed7";
const lightblueColor = "#0c9cff";
const darkRedColor = "#e02020";

export const PublisherBookContainer = styled.div`
  body * {
    font-family: Noto Sans Light;
  }

  section {
    /* display: flex; */
    /* justify-content: center; */
    /* flex-direction: column;
    gap: 20px;
    margin-bottom: 50px; */
    /* margin-left: 20%;
    margin-right: 20%; */
  }

  .service_header .wrap_custom_now {
    display: none;
  }

  .service_header.beyond_content .wrap_custom_now {
    display: block;
  }

  .wrap_list_banner {
    height: 400px;
    position: relative;
    overflow: hidden;
  }

  .wrap_list_banner .logo_brunch {
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    z-index: 100;
    left: 30px;
    top: 30px;
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/brunch-bi.png) no-repeat;
  }

  .wrap_list_banner .log_text {
    font-size: 18px;
    letter-spacing: -0.9px;
    color: #333333;
    position: absolute;
    top: 36px;
    left: 82px;
    z-index: 100;
  }

  .wrap_list_banner .wrap_sns_share {
    position: absolute;
    top: 37px;
    right: 40px;
    z-index: 100;
  }

  .wrap_sns_share .btn_share {
    width: 26px;
    height: 26px;
    border-radius: 13px;
    float: left;
    margin-right: 10px;
  }

  .wrap_sns_share .btn_share.btn_share_facebook {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/facebook.png) no-repeat;
  }

  .wrap_sns_share .btn_share.btn_share_facebook:hover {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/facebook-over.png) no-repeat;
  }

  .wrap_sns_share .btn_share.btn_share_kakaostory {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/kakao.png) no-repeat;
  }

  .wrap_sns_share .btn_share.btn_share_kakaostory:hover {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/kakao-over.png) no-repeat;
  }

  .wrap_sns_share .btn_share.btn_share_twitter {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/twitter.png) no-repeat;
  }

  .wrap_sns_share .btn_share.btn_share_twitter:hover {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/twitter-over.png) no-repeat;
  }

  .wrap_list_banner .wrap_inner_list_banner {
    width: 940px;
    margin: 0 auto;
    position: relative;
  }

  .wrap_list_banner .wrap_banner {
    display: none;
  }

  .wrap_list_banner .wrap_list_page {
    width: 20px;
    position: absolute;
    z-index: 100;
    top: 200px;
    right: -5px;
  }

  .wrap_list_banner .wrap_list_page .page_no {
    cursor: pointer;
    display: block;
    float: left;
    width: 20px;
    height: 28px;
    margin-bottom: 6px;
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/img_banner_numbers_rtn.png) no-repeat;
    background-size: 140px 200px;
  }

  .wrap_list_banner .wrap_list_page .page_no:hover,
  .wrap_list_banner .wrap_list_page .page_no.showing {
    /*height: 17px;*/
  }

  .wrap_list_banner .wrap_list_page .page1 {
    background-position: -28px -20px;
  }

  .wrap_list_banner .wrap_list_page .page2 {
    background-position: -28px -54px;
  }

  .wrap_list_banner .wrap_list_page .page3 {
    background-position: -28px -88px;
  }

  .wrap_list_banner .wrap_list_page .page4 {
    background-position: -28px -122px;
  }

  .wrap_list_banner .wrap_list_page .page5 {
    background-position: -28px -156px;
  }

  .wrap_list_banner .wrap_list_page .page1:hover,
  .wrap_list_banner .wrap_list_page .page1.showing {
    background-position: -89px -20px;
  }

  .wrap_list_banner .wrap_list_page .page2:hover,
  .wrap_list_banner .wrap_list_page .page2.showing {
    background-position: -89px -54px;
  }

  .wrap_list_banner .wrap_list_page .page3:hover,
  .wrap_list_banner .wrap_list_page .page3.showing {
    background-position: -89px -88px;
  }

  .wrap_list_banner .wrap_list_page .page4:hover,
  .wrap_list_banner .wrap_list_page .page4.showing {
    background-position: -89px -122px;
  }

  .wrap_list_banner .wrap_list_page .page5:hover,
  .wrap_list_banner .wrap_list_page .page5.showing {
    background-position: -89px -156px;
  }

  .wrap_list_banner .wrap_ico_bookStore {
    width: 93px;
    height: 61px;
    display: block;
    top: 60px;
    z-index: 100;
    position: absolute;
  }

  .wrap_list_banner .item_banner {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
  }

  .wrap_list_banner .item_banner a {
    display: block;
    width: 100%;
    height: 100%;
  }

  .wrap_list_banner .item_banner.showing {
    z-index: 10;
  }

  /******* 수상작 *******/
  .wrap_list_award {
    width: 1200px;
    height: 550px;
    position: relative;
    overflow: hidden;
    /* border: 1px solid red; */
    margin-left: 20%;
    margin-right: 20%;
    /* border: 1px solid blue; */
  }

  .wrap_list_award .wrap_inner_list_award {
    width: 940px;
    margin: 0 auto;
    position: relative;
  }

  .wrap_list_award .btn_move_slide {
    width: 72px;
    height: 72px;
    position: absolute;
    top: 240px;
  }

  .wrap_list_award .btn_move_slide.prev {
    position: absolute;
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/off-prev.png) no-repeat;
    left: 30px;
    z-index: 100;
    cursor: default;
  }

  .wrap_list_award .btn_move_slide.prev.on {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/on-prev.png) no-repeat;
    cursor: pointer;
  }

  .wrap_list_award .btn_move_slide.next {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/off-next.png) no-repeat;
    right: 30px;
    z-index: 100;
    cursor: default;
  }

  .wrap_list_award .btn_move_slide.next.on {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/on-next.png) no-repeat;
    cursor: pointer;
  }

  .wrap_list_award .wrap_title {
    margin-top: 70px;
    width: 100%;
    position: relative;
  }

  .wrap_list_award .wrap_title .title {
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    text-align: left;
    color: #333333;
  }

  .wrap_list_award .wrap_title .sub_title {
    font-family: Futura;
    font-size: 11px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: 0.6px;
    text-align: left;
    color: #bfbfbf;
    margin-top: 2px;
    display: block;
  }

  .wrap_list_award .wrap_title .wrap_list_page {
    position: absolute;
    right: 0;
  }

  .wrap_list_award .wrap_list_page .page {
    cursor: pointer;
    font-size: 12px;
    letter-spacing: -0.3px;
    text-align: left;
    color: #959595;
    margin-right: 11px;
  }

  .wrap_list_award .wrap_list_page .page.visible {
    border-bottom: 2px solid #959595;
    display: inline-block;
    color: #333;
  }

  .wrap_list_award .slide_award_list {
    opacity: 0;
    transition-duration: 0.5s;
    position: absolute;
    z-index: -1;
  }

  .wrap_list_award .slide_award_list.visible {
    opacity: 1;
    z-index: 10;
  }

  .wrap_list_award .wrap_list_item {
    margin-top: 25px;
  }

  .wrap_list_award .wrap_list_item .item_award {
    float: left;
    cursor: pointer;
    position: relative;
  }

  .item_award .img_cover {
    width: 200px;
    box-sizing: border-box;
    border: 1px solid #eee;
    /*height: 320px;*/
  }

  .item_award .title {
    margin-top: 14px;
    font-size: 16px;
    letter-spacing: -0.4px;
    color: #333333;
    width: 220px;
    overflow: hidden;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }

  .item_award .author {
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 7px;
    width: 220px;
    overflow: hidden;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }

  .item_award .author a {
    color: #bfbfbf;
  }

  .by {
    font-family: Georgia;
    font-weight: normal;
    font-style: italic;
  }

  .item_award .open_marker {
    display: block;
    width: 22px;
    height: 11px;
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/select.png) no-repeat;
    position: absolute;
    left: 0;
    bottom: -28px;
    transition-duration: 0.2s;
    opacity: 0;
  }

  .item_award.open .open_marker {
    opacity: 1;
  }

  .item_award .wrap_item_award_cover {
    position: relative;
    font-size: 0;
  }

  .item_award .wrap_item_award_cover .border_left {
    position: absolute;
    width: 8px;
    height: 100%;
    background: #000;
    top: 0;
    opacity: 0.03;
  }

  /******** 책 상세 ********/
  .wrap_book_info {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition-duration: 0.5s;
    transition-property: height;
    background: #f8f8f8;
  }

  .wrap_book_info.open {
    height: 700px;
    opacity: 1;
    background: #f8f8f8 url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/bg_text_center.png) center no-repeat;
    padding-bottom: 68px;
    /* border: 1px solid red; */
  }

  .wrap_inner_book_info {
    width: 940px;
    margin: 0 auto;
  }

  .wrap_inner_book_info .wrap_book {
    float: left;
    margin-top: 50px;
  }

  .wrap_inner_book_info .wrap_author {
    float: right;
    width: 280px;
    height: 440px;
    background-color: #ffffff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
    margin: 198px 0 0 20px;
  }

  .wrap_inner_book_info .wrap_author .user_image {
    width: 110px;
    height: 110px;
    border-radius: 55px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 48px auto 19px;
  }

  .wrap_inner_book_info .wrap_author .user_name {
    width: 164px;
    height: 18px;
    font-size: 14px;
    color: #333333;
    letter-spacing: -0.3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 auto;
    text-align: center;
  }

  .wrap_inner_book_info .wrap_author .user_description {
    width: 164px;
    line-height: 1.62;
    letter-spacing: -0.3px;
    color: rgba(149, 149, 149, 0.66);
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 23px auto 0;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    max-height: 108px;
    -webkit-box-orient: vertical;
  }

  .wrap_inner_book_info .wrap_author .user_follow {
    margin: 32px auto 0;
    width: 130px;
    height: 40px;
    border: 1px solid #000;
    text-align: center;
    font-size: 13px;
    color: #333333;
    line-height: 42px;
  }

  .wrap_inner_book_info .wrap_book_desc {
    clear: both;
  }

  .wrap_inner_book_info .wrap_book .wrap_title {
    position: relative;
    overflow: hidden;
  }

  .wrap_inner_book_info .wrap_book .wrap_title .title_book {
    font-size: 32.3px;
    float: left;
    font-weight: normal;
    font-family: Nanum Myeongjo;
    width: 378px;
    line-height: 1.3;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    max-height: 160px;
    -webkit-box-orient: vertical;
  }

  .wrap_inner_book_info .wrap_author .publisher_book {
    font-size: 12px;
    display: block;
    margin-top: 4px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #959595;
  }

  .wrap_inner_book_info .wrap_book_desc .wrap_book_desc_buy {
    width: 387px;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    text-align: left;
    color: #959595;
    float: left;
    padding-top: 21px;
  }

  .wrap_inner_book_info .wrap_book_desc .book_description {
    width: 389px;
    max-height: 82px;
    line-height: 1.64;
    color: #959595;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    max-height: 314px;
    -webkit-box-orient: vertical;
  }

  .wrap_inner_book_info .wrap_book_desc .btn_buy_book {
    margin-top: 45px;
    width: 130px;
    height: 40px;
    border-radius: 1px;
    background-color: #333333;
    font-size: 13px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.54;
    letter-spacing: -0.3px;
    color: #ffffff;
    left: 0;
  }

  .wrap_inner_book_info .wrap_book_desc .wrap_book_image {
    float: left;
    width: 160px;
    height: 218px;
    border: 1px solid #eee;
    box-sizing: content-box;
    margin-left: 84px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    font-size: 0;
  }

  .wrap_inner_book_info .wrap_book_desc .wrap_book_image .border_left {
    position: absolute;
    width: 6px;
    height: 100%;
    background: #000;
    top: 0;
    opacity: 0.03;
  }

  .wrap_inner_book_info .wrap_book_desc .wrap_book_share_sentence {
    width: 640px;
    overflow: hidden;
    padding-top: 20px;
    clear: both;
    position: relative;
  }

  .wrap_inner_book_info .wrap_book_desc .wrap_book_share {
    margin-top: 284px;
    width: 155px;
    height: 62px;
    float: left;
  }

  .wrap_inner_book_info .wrap_book_desc .wrap_book_sentence {
    width: 460px;
    height: 310px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
    float: right;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
  }

  .wrap_inner_book_info .wrap_book_desc .wrap_text_sentence {
    top: 51px;
    left: 58px;
    width: 314px;
    height: 151px;
    font-family: Nanum Myeongjo;
    font-size: 26px;
    line-height: 1.46;
    letter-spacing: -0.7px;
    color: #ffffff;
    position: absolute;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    max-height: 314px;
    -webkit-box-orient: vertical;
  }

  .wrap_inner_book_info .wrap_book_desc .wrap_book_sentence .quotation {
    width: 15px;
    height: 10px;
    display: block;
    position: absolute;
    top: 41px;
    left: 41px;
  }

  .wrap_inner_book_info .wrap_book_desc .wrap_book_sentence .layer_dimmed {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .wrap_inner_book_info .wrap_book_desc .ment_sentence {
    position: absolute;
    right: 36px;
    bottom: 32px;
    font-family: Nanum Myeongjo;
    font-size: 14px;
    letter-spacing: -0.3px;
    text-align: left;
    color: rgba(255, 255, 255, 0.7);
  }

  /********* 한문장 *********/
  .wrap_list_sentence {
    overflow: hidden;
    background: #f8f8f8;
    padding-bottom: 100px;
  }

  .wrap_list_sentence .wrap_banner {
    height: 410px;
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/bg_navy_w_2560px.png) no-repeat center;
  }

  .wrap_list_sentence .wrap_inner_banner {
    width: 940px;
    margin: 0 auto;
  }

  .wrap_list_sentence .wrap_inner_banner .wrap_sentence {
    float: left;
    width: 442px;
    height: 410px;
    position: relative;
  }

  .wrap_list_sentence .wrap_sentence .text_guide {
    margin-top: 70px;
    font-size: 14px;
    letter-spacing: -0.3px;
    color: #d6c7d1;
  }

  .wrap_list_sentence .wrap_sentence .text_sentence {
    margin-top: 37px;
    width: 410px;
    font-family: Nanum Myeongjo;
    font-size: 32px;
    line-height: 1.5;
    letter-spacing: -1.6px;
    text-align: left;
    color: #f8f8f8;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    max-height: 160px;
    -webkit-box-orient: vertical;
  }

  .wrap_list_sentence .wrap_sentence .text_autor {
    margin-top: 17px;
    font-size: 13px;
    color: rgba(248, 248, 248, 0.6);
  }

  .wrap_list_sentence .wrap_sentence .text_autor a {
    font-size: 13px;
    color: rgba(248, 248, 248, 0.6);
  }

  .wrap_list_sentence .wrap_inner_banner .wrap_book_image {
    float: left;
    width: 442px;
    margin-left: 32px;
    position: relative;
  }

  .wrap_list_sentence .wrap_img_book_cover {
    position: absolute;
    top: 50px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 0;
  }

  .wrap_list_sentence .wrap_book_image .img_book_cover {
    width: 220px;
  }

  .wrap_list_sentence .wrap_img_book_cover .border_left {
    position: absolute;
    width: 8px;
    height: 100%;
    background: #000;
    top: 0;
    opacity: 0.03;
  }

  .wrap_list_sentence .wrap_img_book_inner {
    position: absolute;
    left: 50px;
    top: 120px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 0;
  }

  .wrap_list_sentence .wrap_book_image .img_book_inner {
    width: 420px;
    height: 310px;
  }

  .wrap_list_sentence .wrap_img_book_inner .border_center {
    position: absolute;
    width: 1px;
    height: 100%;
    background: #000;
    top: 0;
    left: 50%;
    opacity: 0.1;
  }

  .wrap_list_sentence .wrap_list {
    height: 455px;
    width: 940px;
    margin: 0 auto;
    padding-top: 10px;
  }

  .wrap_list_sentence .wrap_list .list_book_sentence {
    width: 430px;
    margin: 80px 0 0 0;
    float: left;
  }

  .wrap_list_sentence .wrap_list .list_book_sentence.elem_margin_right {
    margin-right: 80px;
  }

  .wrap_list_sentence .list_book_sentence .title {
    font-size: 14px;
    letter-spacing: -0.3px;
    color: #6b8fb1;
    border-bottom: 1px solid rgba(107, 143, 177, 0.3);
  }

  .wrap_list_sentence .list_book_sentence .sentence {
    margin-top: 20px;
    font-size: 18px;
    color: #333333;
    line-height: 1.39;
    letter-spacing: -0.5px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    max-height: 72px;
    -webkit-box-orient: vertical;
  }

  .wrap_list_sentence .list_book_sentence .author {
    font-size: 13px;
    margin-top: 25px;
    color: #bfbfbf;
  }

  .wrap_list_sentence .list_book_sentence .author a {
    color: #bfbfbf;
  }

  .wrap_list_sentence .layerBook {
    cursor: pointer;
  }

  /*********** 모든 책 *********/

  .wrap_list_all .wrap_list_all_title {
    text-align: center;
  }

  .list_item_book .wrap_title_author {
    height: 85px;
    padding: 15px 20px 0;
  }

  .wrap_list_all .wrap_list_all_title .title {
    margin-top: 160px;
    font-family: Nanum Myeongjo;
    font-size: 34px;
    line-height: 1.29;
    letter-spacing: -1.7px;
    color: #666666;
  }

  .wrap_list_all .wrap_list_all_title .desc {
    margin-top: 15px;
    font-size: 14px;
    letter-spacing: -0.3px;
    color: #959595;
  }

  .wrap_list_all .wrap_list_all_book {
    width: 960px;
    margin: 70px auto 0;
    position: relative;
  }

  .wrap_list_all .wrap_list_all_book .list_item_book {
    position: absolute;
    margin-bottom: 120px;
    animation: animation_up 0.2s;
    transition: opacity 0.2s ease-out 0s, transform 0.3s ease-out 0s;
    width: 220px;
    border: 1px solid #eee;
    cursor: pointer;
  }

  .wrap_list_all .list_item_book .img_book_cover {
    width: 220px;
    display: block;
    border-bottom: 1px solid #eee;
  }

  .wrap_list_all .list_item_book .title {
    font-size: 16px;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    line-height: 1.38;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    max-height: 43px;
    -webkit-box-orient: vertical;
    color: #333;
  }

  .wrap_list_all .list_item_book .author {
    font-size: 13px;
    color: #bfbfbf;
    margin-top: 6px;
    width: 220px;
    overflow: hidden;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }

  .wrap_list_all .list_item_book .author a {
    color: #bfbfbf;
  }

  /*.wrap_list_all .list_item_book .img_book_cover.emphasize {*/
  /*width: 460px;*/
  /*}*/

  .layer-more-loading {
    position: fixed;
    bottom: 30px;
    left: 50%;
    margin-left: -13px;
  }

  #brunchLayerBase {
    display: none;
    background: #f8f8f8 url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/bg_text_center.png) center no-repeat;
  }

  #brunchLayerBase .wrap_inner_book_info {
    overflow: hidden;
  }

  #brunchLayerBase .btn_close {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/publish/btn-close.png) no-repeat;
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }

  .book_request {
    position: absolute;
    right: 30px;
    float: right;
    font-size: 12px;
    line-height: 1.67;
    font-family: "Noto Sans DemiLight";
  }

  .book_request.book_request_link {
    color: rgba(255, 255, 255, 1);
  }

  /* 상단 배너 수정 2017-11-02*/
  .wrap_banner_book {
    background-color: transparent;
    width: 660px;
    height: 340px;
    bottom: 0;
    margin: 60px auto 0;
  }
  .wrap_banner_book_info {
    float: left;
    width: 420px;
    height: 100%;
  }

  .wrap_banner_book_info .text_banner_book_title {
    background-color: rgba(52, 52, 52, 0.3);
    color: #fff;
    margin: 20px 0 0;
    display: inline-block;
    font-size: 13px;
    line-height: 1;
    padding: 6px 10px;
  }
  .wrap_banner_book_info .text_banner_edit_desc {
    width: 362px;
    font-size: 38px;
    font-weight: 100;
    line-height: 1.25;
    letter-spacing: -2.2px;
    color: #ffffff;
    font-family: Noto Sans Thin;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    height: 138px;
    max-height: 138px;
    -webkit-box-orient: vertical;
    padding: 0;
    margin: 19px 0 0;
  }
  .wrap_banner_book_info .text_banner_author {
    padding: 0;
    margin: 48px 0 0;
  }
  .wrap_banner_book_info .text_banner_author img {
    width: 42px;
    height: 42px;
    background-color: #666666;
    border-radius: 25px;
    display: inline-block;
    float: left;
  }
  .wrap_banner_book_info .text_banner_author .text_banner_author_desc {
    width: 367px;
    display: inline-block;
    float: left;
    margin-left: 9px;
    color: #fff;
  }
  .wrap_banner_book_info .text_banner_author .text_banner_author_desc .text_banner_author_user {
    font-family: Noto Sans Thin;
    font-size: 13px;
    font-weight: 300;
    line-height: 1.54; /*letter-spacing: -0.1px;*/
    color: #ffffff;
  }
  .wrap_banner_book_info .text_banner_author .text_banner_author_desc span {
    font-family: Noto Sans Thin;
    font-size: 12px;
    font-weight: 300;
    line-height: 1.67; /*letter-spacing: -0.3px;*/
    color: rgba(255, 255, 255, 0.8);
  }

  .wrap_banner_book_image_container {
    display: table;
    height: auto;
  }

  .wrap_banner_book_image {
    bottom: 0;
    float: left;
    position: absolute;
  }

  .wrap_banner_book_image .border_left {
    width: 8px;
    height: 100%;
    background: #000;
    position: absolute;
    opacity: 0.03;
  }

  .wrap_banner_book_image .book_image {
    max-width: 240px;
  }

  .wrap_banner_book_image img {
    box-shadow: 4px 18px 28px 3px #00000020;
    max-height: 340px;
    width: 100%;
    vertical-align: bottom;
  }
`;

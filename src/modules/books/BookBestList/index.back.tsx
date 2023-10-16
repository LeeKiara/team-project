import { useEffect, useState } from "react";
import { BookBestContainer } from "./styles";
import { Link, useSearchParams } from "react-router-dom";
import { useBooksItem } from "../data";
import { Favorite, FavoriteBorder, Key } from "@mui/icons-material";
import Button from "@/components/Button";
import { CartData, useCartData } from "@/modules/cart/cartdata";

const BookBestList = () => {
  const { booksItem: books, isBookItemValidating } = useBooksItem();
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();
  const { createCartData, cartData } = useCartData();
  //선호작품 상태값
  const [storeHeartStates, setStoreHeartStates] = useState({});
  // isAddedToCart 상태를 각 아이템별로 관리할 수 있는 배열을 만듭니다.
  const [isAddedToCartArray, setIsAddedToCartArray] = useState([]);

  const handleAddCart = ({ gubun, itemId, title, cover, priceStandard, priceSales, quantity }: CartData) => {
    if (!isAddedToCartArray[itemId]) {
      // 해당 아이템이 장바구니에 이미 추가되었는지 확인하고 추가되지 않았을 때만 추가합니다.
      // cartItems 배열에 이미 추가된 아이템이 있는지 확인
      const isAlreadyInCart = cartData.some((item) => item.itemId === itemId);

      if (!isAlreadyInCart) {
        // 장바구니에 아이템 추가
        const newItem = {
          gubun,
          itemId,
          title,
          cover,
          priceStandard,
          priceSales,
          quantity,
        };
        createCartData(newItem);

        console.log("장바구니에 추가: " + title);
      } else {
        console.log("이미 장바구니에 있는 상품: " + title);
      }
    }
  };

  //선호작품 추가
  const handleBookSave = (itemId: number) => {
    setStoreHeartStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  //카테고리 이동 쿼리
  useEffect(() => {
    const queryKeyword = params.get("keyword") || "";
    setSearchQuery(queryKeyword);
  }, [params]);

  return (
    <>
      <BookBestContainer>
        <p>{searchQuery}</p>
        {isBookItemValidating ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            {books.length > 0 ? (
              books.slice(0, 5).map((item) => (
                <article key={`${item.itemId}`}>
                  <div>
                    <figure>
                      <Link to={`/page?keyword=${item.itemId}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <h3>
                        <Link to={`/page?keyword=${item.itemId}`}>{`${item.title}`}</Link>
                      </h3>
                      <dl>
                        <dt>지은이:</dt>
                        <p>{`${item.author}`}</p>
                        <dt>출판사:</dt>
                        <p>{`${item.publisher}`}</p>
                      </dl>
                      <h4>책 소개</h4>
                      <p>{`${item.description}`}</p>
                    </div>
                  </div>
                  <ul>
                    <li>
                      정가:
                      <del>
                        <p>{`${item.priceStandard}`}원</p>
                      </del>
                    </li>
                    <li>판매가: {`${item.priceSales}`}원</li>
                    <li
                      onClick={() => {
                        handleBookSave(item.itemId);
                      }}>
                      <button className="btn">
                        {storeHeartStates[item.itemId] ? (
                          <Favorite className="material-icons-outlined heart" />
                        ) : (
                          <FavoriteBorder className="material-icons-outlined" />
                        )}
                        선호작품
                      </button>
                    </li>
                    <Button
                      key={item.itemId}
                      onClick={(cartData: CartData) => {
                        handleAddCart(
                          (cartData = {
                            gubun: "KOR",
                            itemId: item.itemId,
                            title: item.title,
                            cover: item.cover,
                            priceStandard: item.priceStandard.toString(),
                            priceSales: item.priceSales.toString(),
                            quantity: "1",
                          }),
                        );
                      }}
                    />
                  </ul>
                </article>
              ))
            ) : (
              <p>책을 찾을 수 없습니다.</p>
            )}
          </section>
        )}
      </BookBestContainer>
    </>
  );
};

export default BookBestList;

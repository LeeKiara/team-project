import { Link, useSearchParams } from "react-router-dom";
import { BookNewContainer } from "./styles";
import { useEffect, useState } from "react";
import { BookData, BookItem } from "../data";
import Button from "@/components/Button";
import axios from "axios";
import { ButtonStyle } from "@/components/Button/styles";
import { ShoppingCart } from "@mui/icons-material";
import CartButton from "@/components/CartButton";

const BookNewList = () => {
  const [newBookList, setNewBookList] = useState<BookItem[]>([]);
  //카테고리 상태값
  const [searchQuery, setSearchQuery] = useState("");
  const [params] = useSearchParams();

  // const [showButton, setShowButton] = useState(false);
  // const [confirmed, setConfirmed] = useState(false);

  // const handleShow = () => {
  //   const isConfirmed = window.confirm("장바구니에 추가하시겠습니까?");

  //   if (isConfirmed) {
  //     setConfirmed(true); // 확인을 받았다면 confirmed 상태를 true로 설정
  //   }

  //   setShowButton(true); // 버튼을 표시
  // };

  //카테고리 이동
  useEffect(() => {
    console.log(params);
    const queryKeyword = params.get("option") || "";
    console.log(queryKeyword + "카테고리 키워드");
    const query = queryKeyword.split(">")[1];
    console.log(query);
    setSearchQuery(query);
    if (queryKeyword) {
      (async () => {
        try {
          const response = await axios.get<BookItem[]>(`http://localhost:8081/books/new/category?option=${query}`);
          if (response.status === 200) {
            setNewBookList([...response.data]);
          }
        } catch (e: any) {
          console.log(e);
        }
      })();
    } else {
      (async () => {
        try {
          const response = await axios.get<BookItem[]>(`http://localhost:8081/books/new`);
          if (response.status === 200) {
            setNewBookList([...response.data]);
          }
        } catch (e: any) {
          console.log(e);
        }
      })();
    }
  }, [searchQuery, params]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get<BookData>(`http://localhost:8081/books/new?page=0&size=8`);
  //       if (response.status === 200) {
  //         setNewBookList(response.data.content);
  //       }
  //     } catch (e: any) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  return (
    <>
      <BookNewContainer>
        {!newBookList ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            <ul>
              {newBookList.length > 0 ? (
                newBookList.slice(0, 8).map((item) => (
                  <li key={`${item.id}`}>
                    <figure>
                      <Link to={`/page?new=${item.id}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <Link to={`/page?new=${item.id}`}>
                        <h3>{`${item.title}`.length > 12 ? `${item.title}`.slice(0, 12) + "..." : `${item.title}`}</h3>
                      </Link>
                      <p>{`${item.author}`.length > 8 ? `${item.author}`.slice(0, 8) + "..." : `${item.author}`}</p>
                      <dl>
                        정가
                        <del>{`${item.priceStandard}`}원</del>
                      </dl>
                      <dl>판매가: {`${item.priceSales}`}원</dl>
                      <CartButton
                        itemId={item.itemId}
                        quantity={1}
                        title={item.title}
                        cover={item.cover}
                        priceStandard={item.priceStandard}
                        priceSales={item.priceSales}
                      />
                    </div>
                  </li>
                ))
              ) : (
                <p>책을 찾을 수 없습니다.</p>
              )}
            </ul>
          </section>
        )}
      </BookNewContainer>
    </>
  );
};

export default BookNewList;

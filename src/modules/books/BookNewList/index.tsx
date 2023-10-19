import { Link } from "react-router-dom";
import { BookNewContainer } from "./styles";
import { useEffect, useState } from "react";
import { BookData, BookItem } from "../data";
import Button from "@/components/Button";
import axios from "axios";
import { ButtonStyle } from "@/components/Button/styles";
import { ShoppingCart } from "@mui/icons-material";

const BookNewList = () => {
  const [newBookList, setNewBookList] = useState<BookItem[]>([]);
  // const [showButton, setShowButton] = useState(false);
  // const [confirmed, setConfirmed] = useState(false);

  // const handleShow = () => {
  //   const isConfirmed = window.confirm("장바구니에 추가하시겠습니까?");

  //   if (isConfirmed) {
  //     setConfirmed(true); // 확인을 받았다면 confirmed 상태를 true로 설정
  //   }

  //   setShowButton(true); // 버튼을 표시
  // };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<BookData>(`http://localhost:8081/books/new?page=0&size=8`);
        if (response.status === 200) {
          setNewBookList(response.data.content);
        }
      } catch (e: any) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <BookNewContainer>
        {!newBookList ? (
          <p>로딩 중...</p>
        ) : (
          <section>
            <ul>
              {newBookList.length > 0 ? (
                newBookList.map((item) => (
                  <li key={`${item.id}`}>
                    <figure>
                      <Link to={`/page?new=${item.id}`}>
                        <img src={`${item.cover}`} alt={`${item.title}`} />
                      </Link>
                    </figure>
                    <div>
                      <h3>{`${item.title}`.length > 12 ? `${item.title}`.slice(0, 12) + "..." : `${item.title}`}</h3>
                      <p>{`${item.author}`.length > 8 ? `${item.author}`.slice(0, 8) + "..." : `${item.author}`}</p>
                      <dl>
                        정가
                        <del>{`${item.priceStandard}`}원</del>
                      </dl>
                      <dl>판매가: {`${item.priceSales}`}원</dl>
                      <Button
                        gubun="KOR"
                        itemId={item.itemId}
                        title={item.title}
                        cover={item.cover}
                        priceStandard={item.priceStandard.toString()}
                        priceSales={item.priceSales.toString()}
                        quantity="1"
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

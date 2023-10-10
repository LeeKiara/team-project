import { HomeContainer } from "./styles";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <article>
          <div>MD 추천 도서</div>
        </article>
        <section>
          <article>
            <h3>
              오늘의 글귀
              <span>
                <h4>저자</h4>
                <h4>책</h4>
                <h4>가격</h4>
              </span>
            </h3>
            <div>
              <span>
                <figure>
                  <img src="책이미지" alt="책이미지" />
                </figure>
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                perspiciatis, dolor pariatur nihil suscipit ut atque modi
                provident excepturi tenetur. Vel labore officiis aliquid
                corporis voluptatum laborum quibusdam magni dolores.
              </p>
            </div>
            <div>
              가격: 30,000원
            </div>
          </article>
          <article>
            <h3>베스트셀러</h3>
            <ul>
              <div>
                <span>
                  <li>책1</li>
                  <li>책2</li>
                </span>
                <span>
                  <li>책3</li>
                  <li>책4</li>
                </span>
              </div>
              <div>
                <span>
                  <li>책1</li>
                  <li>책2</li>
                </span>
                <span>
                  <li>책3</li>
                  <li>책4</li>
                </span>
              </div>
            </ul>
          </article>
        </section>
      </div>
    </HomeContainer>
  );
};

export default Home;

import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
`;

const Sidebar = styled.aside`
  width: 300px;
  height: 50px;
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  background-color: #f2f2f2;
  padding: 20px;
  border: 1px solid #ddd;
`;

const TestSidebar = () => {
  return (
    <Container>
      <Content>
        <h1>Main Content</h1>
        {/* 주요 콘텐츠 내용 */}
        <div style={{ width: "50px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui reiciendis beatae quisquam illum
          molestias repellendus corrupti iste, suscipit tempore quaerat officia quas alias voluptatum. Inventore
          temporibus consectetur animi similique?
        </div>
        <div style={{ width: "50px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, quam et modi autem facilis in ut accusantium
          perferendis dolore molestias itaque velit sequi, debitis assumenda totam culpa vitae at non recusandae est
          dolores ex, atque odit illo? Eius iusto quidem cum sunt corrupti similique dolorem, repellendus aliquam
          deleniti optio reiciendis! Explicabo, sapiente a? Et aspernatur est enim explicabo velit id nulla ipsam
          reprehenderit, quam nihil vel ab? Numquam nisi accusantium vel mollitia ea fugit sunt temporibus laborum!
          Molestias illum commodi ipsum enim molestiae dolore! Tenetur nesciunt itaque quis minus excepturi, pariatur
          fugit. Provident nemo eligendi quidem dolore aliquid ipsam architecto nam iste facilis hic minima, animi rem
          odio quam aspernatur repellendus soluta omnis! Earum a mollitia labore omnis vitae repudiandae rerum beatae ut
          odit explicabo reiciendis voluptate ab esse soluta delectus sequi dignissimos, atque aperiam totam eum neque
          ex dolore possimus sed! Modi beatae tempora, maiores maxime ipsa nisi ut voluptate quis illum expedita ipsum,
          ex quo adipisci nemo assumenda magni dolores perferendis! Repellat, voluptate. Cumque doloremque, repudiandae
          libero eos culpa quia repellat quisquam explicabo error voluptate, optio sed architecto impedit, aliquam ullam
          odio beatae officia reprehenderit eaque maxime. Earum sit placeat ipsa eligendi incidunt eius. Earum, soluta.
          Ipsam similique sequi reprehenderit quas eos quae, at repudiandae quos quidem cupiditate quam consectetur esse
          ipsa dolor beatae minima atque nobis, alias, eaque voluptas maxime iure odio. Blanditiis cupiditate esse harum
          consectetur voluptatum, illo itaque illum tempore sunt deserunt repudiandae molestiae doloremque iusto
          consequuntur obcaecati praesentium laborum fuga autem pariatur repellendus aliquam delectus incidunt placeat
          animi. Ex deleniti repellat consectetur. Similique doloremque, optio debitis omnis atque aliquam dicta alias
          explicabo adipisci minus porro ipsam fugit perferendis perspiciatis nam pariatur laborum ipsum autem. Vitae,
          ex, nam officiis modi temporibus iure corrupti quam assumenda perferendis voluptates nihil ea iusto voluptatum
          possimus ratione tenetur magnam ducimus nemo hic animi distinctio nobis est voluptate. Architecto quasi ullam,
          ratione adipisci facere nobis quas, impedit doloremque itaque, provident autem corrupti! Laudantium laborum
          commodi nemo, sapiente eveniet porro! Molestias, cupiditate fugit! Hic omnis expedita, harum fuga repellat
          corrupti nostrum minima nesciunt sapiente ab perspiciatis maiores excepturi voluptatem ipsam esse molestiae
          provident eaque temporibus reprehenderit delectus accusamus error sed quibusdam aliquam! Veritatis similique
          quasi non vel, placeat rem! Nostrum numquam libero totam veniam. Ea placeat quae accusamus, vel repellat quo.
          Veritatis nesciunt optio ratione non. Nulla corrupti aliquid expedita cum eum vero praesentium nobis tempora,
          explicabo vel ab. Nulla animi quos nesciunt dolorum similique necessitatibus, accusamus esse, iusto voluptatum
          voluptatibus, numquam dolorem sunt fugiat magnam nostrum cum quas perspiciatis veritatis libero saepe ut rem
          consectetur inventore harum! Magnam tempore distinctio pariatur officiis mollitia vitae rerum eaque odit quo,
          quaerat atque, cumque incidunt sapiente earum molestias debitis illo corrupti impedit ipsum quibusdam
          repudiandae ipsa minus. Consequuntur culpa earum ullam. Delectus quo laborum numquam illum possimus quasi
          inventore debitis tenetur nisi mollitia rem, libero impedit deleniti optio suscipit! Minima, sed repellat.
          Culpa, iure tempore cum doloremque sint eligendi, impedit ratione nulla laborum dolor placeat recusandae omnis
          excepturi alias officia sequi commodi at!
        </div>
      </Content>
      <Sidebar>
        <h2>Sidebar</h2>
        {/* 사이드바 내용 */}
      </Sidebar>
    </Container>
  );
};

export default TestSidebar;

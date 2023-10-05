import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  #sidebar {
    display: flex;
    justify-content: center;
    border: 1px solid crimson;
  }
  main {
    display: flex;
    width: 80%;
    gap: 20px;
  }
  main > aside {
    width: 200px;
    border: 2px solid black;
  }
  main > aside > h1 {
    text-align: center;
  }
  main > aside > ul {
    margin: 0;
    padding: 0;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  main > aside > ul > li {
    list-style: none;
  }
  main > section {
    width: 100%;
  }
`;

import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  #sidebar {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  main {
    display: flex;
    width: 60%;
    /* border: 1px solid blue; */
    gap: 20px;
  }
  main > aside {
    width: 200px;
    border: 2px solid black;
  }
  main > aside > ul {
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  main > aside > h3 {
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: antiquewhite;
  }
  main > section {
    width: 100%;
  }
`;

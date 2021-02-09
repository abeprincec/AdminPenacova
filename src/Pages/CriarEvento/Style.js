import styled from "styled-components";

export const FormPage = styled.div`
  header {
    padding-bottom: 230px;
    background-color: #0d0d0d;
  }

  .titulo-pagina {
    margin-top: -130px;
  }

  .links {
    margin-top: 67px;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  .link {
    margin-right: 35px;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 10px;
    font-weight: 300;
    font-size: 14px;
    text-decoration: none;
    color: #dbdbdb;
    opacity: 0.7;
  }

  .active-tab {
    border-bottom: 2.5px solid #3ca661;
    opacity: 1;
  }
`;

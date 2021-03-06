import styled from "styled-components";

export const FormPage = styled.div`
  header {
    padding-bottom: 230px;
    background-color: #0d0d0d;
  }

  main {
    margin-top: 40px;
  }
  padding-bottom: 180px;

  .titulo-pagina {
    margin-top: -130px;
  }

  .links {
    margin-top: 67px;
    justify-content: space-between;
    display: flex;
  }

  .input-mask {
    resize: vertical;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.cardColor};
    border: none;
    outline: 0;
    padding-top: 12px;
    font-size: 14px;
    color: #dbdbdb; //Cor a ser Adicionada ao Tema
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 12px;
    line-height: 28px;
    width: 100%;
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

  .round-shape {
    padding: 10px;
    background-color: #3ca661;
    border-radius: 50%;
  }

  .active-tab {
    border-bottom: 2.5px solid #3ca661;
    opacity: 1;
  }

  .add-buton {
    padding: 12px;
    background-color: #3ca661;
    border-radius: 50%;
    outline: 0;
    border: none;
    color: #dbdbdb;
  }

  .add-escalao {
    font-size: 13px;
    font-weight: 300;
  }

  .remove-escalao {
    float: right;
    margin-top: 25px;
    font-size: 13px;
    font-weight: 300;
    color: #ee6f6f;
    opacity: 0.8;
    margin-bottom: 20px;
    :hover {
      opacity: 1;
    }
  }

  .remove-descricao {
    float: right;
    font-size: 13px;
    font-weight: 300;
    color: #ee6f6f;
    opacity: 0.8;
    align-items: center;
    display: flex;

    :hover {
      opacity: 1;
    }
  }

  .item-precario {
    display: flex;
    justify-content: start;
    align-items: center;
    
  }
`;

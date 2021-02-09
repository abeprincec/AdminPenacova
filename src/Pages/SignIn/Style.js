import styled from "styled-components";

export const Body = styled.div`
  position: relative;
  min-height: 100vh;

  header {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  #Logotipo {
    width: 150px;
    justify-content: center;
    align-items: center;
    display: block;
    margin: auto;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }

  main {
    justify-content: center;
    display: flex;
    align-items: center;
  }

  footer {
    background-color: ${({ theme }) => theme.cardColor};
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 200;
    font-size: 11px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4rem;
    text-align: center;
    margin-top: -25px;

    p {
      margin-top: 8px;
    }

    @media (max-width: 575.98px) {
      bottom: none;
    }
  }
`;

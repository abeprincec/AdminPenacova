import styled from "styled-components";

export const PageNomeModalidade = styled.div`
  header {
    background-color: #0d0d0d;
    padding-bottom: 40vh;
  }

  main {
    margin-top: -200px;
  }

  form {
    margin-top: 125px;
  }

   .list-modalidade{
    margin-top:80px;
  }

  
`;

export const Border = styled.div`
  width: 70%;
  position: absolute;
  border-bottom: 1px solid ${(props) => props.borderColor};
  bottom: 24px;
  margin-left: auto;
  margin-right: auto;

  left: 0;
  right: 0;
  text-align: center;
`;

export const Card = styled.label`
  background-color: ${({ theme }) => theme.cardColor};
  cursor: pointer;
  padding-top: 55px;
  padding-bottom: 55px;
  width: 100%;
  border-radius: 7px;
  position: relative;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  

  input[type="radio"] {
    display: none;
  }
  .radio-btn > i {
    color: #313131;
    background-color: #313131;
    position: absolute;
    top: 12%;
    right: 0;
    transform: translateX(-50%) scale(0.7);
    border-radius: 50%;
    padding: 4px;
    pointer-events: none;
  }

  input:checked + .radio-btn > i {
    opacity: 1;
    transform: translateX(-50%) scale(0.7);
    color: #ffffff;
    background-color: #3ca661;
    position: absolute;
    top: 12%;
    right: 0;
  }
`;

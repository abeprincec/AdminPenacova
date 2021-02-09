import styled from "styled-components";

export const InputGroupFloat = styled.div`
  .form-control {
    border: none !important;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    border-radius: 7px;
    background: ${({ theme }) => theme.cardColor};
    color: ${({ theme }) => theme.colorTextInput};
    margin-bottom: 20px;
    padding-left: 16px;

    :last-child {
      margin-bottom: 0;
    }
  }

  label {
    margin-top: 4px;
    font-weight: 200;
    font-size: 14px;
    color: #8c8c8c;
    padding-left: 16px;
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;
    border-color: #3ca661;
  }
`;

export const InputGroup = styled.div`
  box-sizing: border-box;

  margin-bottom: 24px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const InputForm = styled.input`
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
`;

export const InputLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  color: #dbdbdb;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const InputSelect = styled.select`
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.cardColor};
  border: none;
  outline: 0;
  padding-top: 12px;
  padding-left: 14px;
  
  padding-bottom: 12px;
  color: #dbdbdb; //Cor a ser Adicionada ao Tema
`;

export const OptionSelect = styled.option``;

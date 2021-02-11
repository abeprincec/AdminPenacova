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
  padding-right: 14px ;
  padding-bottom: 12px;
  line-height: 28px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  color: #dbdbdb;
  margin-bottom: 12px;
`;

export const InputSelect = styled.select`
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.cardColor};
  border: none;
  outline: 0;
  padding-right:14px !important;
  padding-top: 14px;
  padding-left: 14px;
  font-size: 14px;
  height: 53px;
  padding-bottom: 14px;
  color: #dbdbdb; //Cor a ser Adicionada ao Tema
`;

export const OptionSelect = styled.option``;

export const TextArea = styled.textarea`
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
  min-height: 300px;
`;

export const InputFile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  border-width: 2px;
  border-radius: 5px;
  border-color: #3b3b3b;
  border-style: dashed;
  background-color: ${({ theme }) => theme.cardColor};
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  font-size: 14px;
`;

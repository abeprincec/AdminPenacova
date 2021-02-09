import styled from "styled-components";

export const InputGroup = styled.div`
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

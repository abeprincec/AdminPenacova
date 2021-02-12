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

  .is-invalid-input {
    background-color: red;
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
  margin-bottom: 12px;
`;

export const InputSelect = styled.select`
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.cardColor};
  border: none;
  outline: 0;
  padding-right: 14px !important;
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

export const Checkbox = styled.div`
  input[type="checkbox"] {
    --active: #3CA661;
    --active-inner: #fff;
    --background: ${({theme})=> theme.cardColor};
    --disabled: #f6f8ff;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
    &:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
    }
    &:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: 0.3s;
      --d-t: 0.6s;
      --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
    }
    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: 0.9;
      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }
      & + label {
        cursor: not-allowed;
      }
    }
    
    &:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    &:not(.switch) {
      width: 21px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
    & + label {
      font-size: 14px;
      line-height: 21px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 12px;
      font-weight:300;
      color: #dbdbdb;
    }
  }
  input[type="checkbox"] {
    &:not(.switch) {
      border-radius: 7px;
      &:after {
        width: 5px;
        height: 9px;
        border: 2px solid var(--active-inner);
        border-top: 0;
        border-left: 0;
        left: 7px;
        top: 4px;
        transform: rotate(var(--r, 20deg));
      }
      &:checked {
        --r: 43deg;
      }
    }
    &.switch {
      width: 38px;
      border-radius: 11px;
      &:after {
        left: 2px;
        top: 2px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: var(--ab, var(--border));
        transform: translateX(var(--x, 0));
      }
      &:checked {
        --ab: var(--active-inner);
        --x: 17px;
      }
      &:disabled {
        &:not(:checked) {
          &:after {
            opacity: 0.6;
          }
        }
      }
    }
  }
`;

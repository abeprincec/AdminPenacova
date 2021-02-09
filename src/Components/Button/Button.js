import styled from "styled-components";

export const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.white};
  border-radius: 7px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  border: none !important;
  font-weight: 200;
  font-size: 14px;
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
  outline: 0 !important;

  :hover {
    opacity: 1;
  }
`;

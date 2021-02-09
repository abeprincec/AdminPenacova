import styled from "styled-components";

export const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  

  #Logotipo {
    width: 85px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  color: ${({ theme }) => theme.text};
  padding-right: 32px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  background: unset !important;
  outline: none !important;
  opacity: 0.95;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  

  :hover {
    opacity: 1;
  }
`;

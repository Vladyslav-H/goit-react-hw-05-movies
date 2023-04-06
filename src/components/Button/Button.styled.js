import styled from 'styled-components';

export const Button = styled.button`
  max-width: 150px;
  height: 35px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: green;

  font-weight: 500;
  font-size: 16px;
  box-shadow: 3px 5px 24px -9px rgba(0, 0, 0, 0.75);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.05;
    color: green;
    background-color: #fff;
    border: 1px solid green;
  }
`;

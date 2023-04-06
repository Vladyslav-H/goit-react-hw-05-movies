import styled from 'styled-components';
import { Container } from 'components/Container/Container.styled';

export const ContainerDetPage = styled(Container)`
  align-items: flex-start;
`;

export const ButtonGoBack = styled.button`
  width: 150px;
  height: 35px;
  margin-bottom: 40px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: green;
  box-shadow: 3px 5px 24px -9px rgba(0, 0, 0, 0.75);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
    color: green;
    background-color: #fff;
    border: 1px solid green;
  }
`;

export const InfoContainer = styled.div`
  /* margin-bottom: 30px; */
`;

export const Item = styled.li`
  display: block;
  color: green;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: lightgreen;
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const InfoTitle = styled.h5`
  margin-bottom: 10px;
  font-size: 16px;
`;

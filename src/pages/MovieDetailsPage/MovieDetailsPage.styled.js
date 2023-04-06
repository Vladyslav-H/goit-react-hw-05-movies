import styled from 'styled-components';
import { Container } from 'components/Container/Container.styled';
import { Button } from 'components/Button/Button.styled';

export const ContainerDetPage = styled(Container)`
  align-items: flex-start;
`;

export const ButtonGoBack = styled(Button)`
  margin-bottom: 40px;
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

import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;
  color: yellow;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.05;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

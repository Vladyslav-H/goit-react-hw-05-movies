import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 40px 30px;
`;

export const Item = styled.li`
  display: flex;
  width: 200px;
  height: 420px;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;

  box-shadow: 3px 5px 24px -9px rgba(255, 255, 255, 0.75);
`;

export const EmptyImage = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

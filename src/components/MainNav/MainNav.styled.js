import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
display: flex;
    gap: 20px;
`

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: orangered;
  background-color:white;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: 1px solid orangered;
  box-shadow: 3px 5px 24px -9px rgba(0, 0, 0, 0.75);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    scale: 1.1;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;

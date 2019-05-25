import React from 'react'
import { Navbar, NavItem } from 'react-materialize';
import styled from 'styled-components';

const NavbarStyles = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  height: ${({ theme }) => theme.layout.navbarHeight};
  padding: 0 ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export default function Header() {
  return (
    <NavbarStyles brand={<a>Dad Joke 3000</a>} alignLinks="right">
      <NavItem>
        History of the Dad Joke
      </NavItem>
      <NavItem>
        Help
      </NavItem>
    </NavbarStyles>
  );
}

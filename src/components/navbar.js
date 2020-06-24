import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = styled.nav`
  background: #333;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 0.5rem 10rem;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.h1`
  margin-right: auto;
  order: 0;
  color: white;
  font-weight: 200;
`

const NavList = styled.ul`
  list-style: none;
`

const NavItem = styled.li`
  display: inline;
`

const NavLink = styled(Link)`
  display: inline-block;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #fff;
`

export default function Navbar(props) {
  return (
    <Nav>
      <Container>
        <Logo>Makershare</Logo>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavList>
      </Container>
    </Nav>
  )
}

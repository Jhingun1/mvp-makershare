import React from "react"
import styled from "styled-components"
import Navbar from "./navbar"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const PageHeader = props => {
  return (
    <div>
      <Navbar />
      <Container>{props.children}</Container>
    </div>
  )
}

const StyledPageHeader = styled(PageHeader)`
  background: #222;
  height: 100vh;
`

export default function Header(props) {
  return (
    <StyledPageHeader>
      <h1>hi</h1>
    </StyledPageHeader>
  )
}

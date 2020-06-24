import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    /* Use a typography plugin maybe? */
    font-family: sans-serif;
    font-size: 1.6rem;
  }
`

export default function Layout(props) {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  )
}

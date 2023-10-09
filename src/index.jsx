import * as React from "react"
import * as RaectDom from "react-dom"
import { Header } from "./Header"


window.addEventListener("load", () => {
  RaectDom.render(<Header />, document.getElementById("react_root"))
})

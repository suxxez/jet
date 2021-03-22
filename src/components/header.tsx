import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { initiateHeaderScroll } from "../scripts/header-scroll"

const Header = () => {
  const siteTitle = "JET"
  const elements = ["Link1", "Link2", "Link3"]

  const toggle = document.querySelector(".toggle")
  const menu = document.querySelector(".flexContainerHeader")

  const toggleMenu = () => {
    if (menu?.classList.contains("active")) {
      menu?.classList.remove("active")

      // adds the menu (hamburger) icon
      //toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>"
    } else {
      menu?.classList.add("active")

      // adds the close (x) icon
      //toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>"
    }
  }

  React.useEffect(() => {
    initiateHeaderScroll()
    toggle?.addEventListener("click", toggleMenu, false)
  })

  return (
    <header>
      <div
        className="flexContainerHeader"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <ul className="navigationBar">
          
          {elements.map((value, index) => {
            return (
              <li className="item" key={index}>
                <Link to="/">{value}</Link>
              </li>
            )
          })}
          <li className="toggle">hh</li>
        </ul>
      </div>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

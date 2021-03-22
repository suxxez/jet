import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { initiateHeaderScroll } from "../scripts/header-scroll"

const Header = () => {
  const siteTitle = "JET"
  const elements = ["Leistungen", "Über uns", "Kontakt"]

  React.useEffect(() => {
    initiateHeaderScroll()
    const toggle = document.querySelector(".toggle")
    const menu = document.querySelector(".flexContainerHeader")

    const toggleMenu = () => {
      if (menu?.classList.contains("active")) {
        menu?.classList.remove("active")
      } else {
        menu?.classList.add("active")
      }
    }
    toggle?.addEventListener("click", toggleMenu, false)
  })

  return (
    <header>
      <div
        className="flexContainerHeader"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <ul className="navigationBar">
          <li className="logo">
            <h1 style={{ margin: 0 }}>
              <Link to="/">{siteTitle}</Link>
            </h1>
          </li>
          {elements.map((value, index) => {
            return (
              <li className="item" key={index}>
                <Link to="/">{value}</Link>
              </li>
            )
          })}

          <li className="toggle">
            <StaticImage
              src="../images/hamburger.svg"
              alt="X"
              className="hamburger"
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { initiateHeaderScroll } from "../scripts/header-scroll"

import hamburger from "../images/svg/hamburger.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = () => {
  React.useEffect(() => {
    initiateHeaderScroll()
    const toggle = document.querySelector(".toggle")

    let toggleMenu = () => {
      let menu = document.querySelector(".flexContainerHeader")
      console.log(menu)

      if (menu?.classList.contains("active")) {
        menu?.classList.remove("active") // close menu
      } else {
        menu?.classList.add("active") // open menu
      }
    }

    toggle?.addEventListener("click", toggleMenu, false)

    const menuItems = document.querySelectorAll(".item")
    menuItems.forEach(element => {
      element.addEventListener("click", toggleMenu)
    })
  }, [])

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
            <Link to="/">
              <div className="logo_normal">
                <StaticImage
                  src="../images/logo_elektrotechnik.webp"
                  alt="Logo"
                  loading="lazy"
                  width={128}
                  height={50}
                  placeholder="none"
                />
              </div>
              <div className="logo_white">
                <StaticImage
                  src="../images/logo_white.webp"
                  alt="Logo"
                  loading="eager"
                  width={128}
                  height={50}
                  placeholder="none"
                />
              </div>
            </Link>
          </li>
          <li className="item">
            <AnchorLink to="/#leistungen">Leistungen</AnchorLink>
          </li>
          <li className="item">
            <AnchorLink to="/#ueber-uns">Über uns</AnchorLink>
          </li>
          <li className="item">
            <Link to="/karriere">Karriere</Link>
          </li>
          <li className="toggle">
            <img src={hamburger} alt="Menu" className="hamburger" />
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

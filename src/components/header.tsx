import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { initiateHeaderScroll } from "../scripts/header-scroll"

const Header = () => {
  const elements = ["Leistungen", "Über uns", "Kontakt"]

  React.useEffect(() => {
    initiateHeaderScroll()
    const toggle = document.querySelector(".toggle")
    const menu = document.querySelector(".flexContainerHeader")

    let toggleMenu = () => {
      console.log(menu?.classList.contains("active"));
      
      if (menu?.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu()
      }
    }
    toggle?.addEventListener("click", toggleMenu, false)


    const closeMenu = () => {
      menu?.classList.remove("active");
    }

    const openMenu = () => {
      menu?.classList.add("active");
    }

    const menuItems = document.querySelectorAll(".item");
    menuItems.forEach(element => {
      element.addEventListener("click", closeMenu)
    });
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
            <div className="logo_normal">
              <StaticImage
                src="../images/logo_elektrotechnik.webp"
                alt="X"
                loading="eager"
                width={126}
                height={50}
              />
            </div>
            <div className="logo_white">
              <StaticImage
                src="../images/logo_white.webp"
                alt="X"
                loading="eager"
                width={126}
                height={50}
              />
            </div>
          </li>
          {/* {elements.map((value, index) => {
            return (
              <li className="item" key={index}>
                <Link to="#{Value}">{value}</Link>
              </li>
            )
          })} */}
          <li className="item">
            <Link to="#leistungen">Leistungen</Link>
          </li>
          <li className="item">
            <Link to="#ueber-uns">Über uns</Link>
          </li>
          <li className="item">
            <Link to="/karriere">Karriere</Link>
          </li>
          <li className="toggle">
            <StaticImage
              src="../images/svg/hamburger.svg"
              alt="X"
              loading="eager"
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

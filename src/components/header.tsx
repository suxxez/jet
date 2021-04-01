import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { initiateHeaderScroll } from "../scripts/header-scroll"

const Header = () => {

  React.useEffect(() => {
    initiateHeaderScroll()
    const toggle = document.querySelector(".toggle")
    
    let toggleMenu = () => {
      let menu = document.querySelector(".flexContainerHeader")
      console.log(menu);
      
      
      if (menu?.classList.contains("active")) {
        menu?.classList.remove("active"); // close menu
      } else {
        menu?.classList.add("active"); // open menu
      }
    }

    toggle?.addEventListener("click", toggleMenu, false)

    const menuItems = document.querySelectorAll(".item");
    menuItems.forEach(element => {
      element.addEventListener("click", toggleMenu)
    });
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
            <Link to="/#leistungen">Leistungen</Link>
          </li>
          <li className="item">
            <Link to="/#ueber-uns">Über uns</Link>
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

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Link } from "gatsby"
import * as React from "react"

import "./footer.scss"

const Footer = () => {
  return (
    <>
      <footer
        style={{
          minHeight: "100px",
          position: "relative",
        }}
      >
        <div className="footerLinksContainer">
          <span>© {new Date().getFullYear()}</span>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>

        <div className="footerBgContainer">
          <svg
            width="100%"
            height="100"
            preserveAspectRatio="none"
            viewBox="0 0 1440 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2.2645L60 1.29348C120 0.322467 240 -1.61954 360 2.65293C480 6.7312 600 17.2182 720 17.2182C840 17.2182 960 6.73118 1080 5.17755C1200 3.62392 1320 10.6153 1380 14.3051L1440 17.8008V120.729H1380C1320 120.729 1200 120.729 1080 120.729C960 120.729 840 120.729 720 120.729C600 120.729 480 120.729 360 120.729C240 120.729 120 120.729 60 120.729H0V2.2645Z"
              fill="#DE354C"
            />
          </svg>
        </div>
      </footer>
    </>
  )
}

export default Footer

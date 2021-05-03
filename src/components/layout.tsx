import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/open-sans"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import "./index.scss"
import { toggleDarkMode } from "../scripts/dark-mode"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  React.useEffect(() => {
    // if dark mode has previously been toggled, it gets toggled again
    toggleDarkMode(true)

    const toggle = document.getElementById("darkModeToggle") as HTMLElement
    toggle?.addEventListener("click", () => {
      toggleDarkMode()
    })
  })

  return (
    <>
      <div id="bodyWrapper">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `104px auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>

        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import VideoTest from "../images/WebIntro_cc.mp4"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <svg className="headingBlob" width="468" height="387" viewBox="0 0 468 387" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M359.25 64.0485C394.25 86.1075 411.25 125.388 406.25 159.444C401 193.5 374 222.332 351.25 253.098C328.5 283.865 309.75 316.373 278.75 327.209C247.5 338.045 204 327.015 163 313.857C122 300.893 83.75 285.8 59.25 260.645C35 235.683 24.75 200.66 33 168.732C41 136.998 67.75 108.167 101.5 85.914C135.5 63.6615 176.75 48.1815 224 42.7635C271 37.3455 324.25 41.9895 359.25 64.0485Z" fill="#FF0066"/> </svg>
    <div className="headingContainer">
      <h1 className="mainHeading">
        Ihr Ansprechpartner für Elektrotechnik im Münsterland.
      </h1>
      <div className="videoWrapper">
        <iframe
          width="355"
          height="200"
          src="https://www.youtube-nocookie.com/embed/cw602cSBfZg?start=142"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <div className="content">
      
    </div>
  </Layout>
)

export default IndexPage

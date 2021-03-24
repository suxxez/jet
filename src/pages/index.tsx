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
    <div className="titlePlaceholder"></div>
    <h1 className="mainHeading">
      Ihr Ansprechpartner für Elektrotechnik im Münsterland.
    </h1>
    <p className="whiteParagraph">Lernen Sie unser Unternehmen kennen:</p>
    {/* <div className="videoWrapper">
    <iframe
      width="355"
      height="200"
      src="https://www.youtube-nocookie.com/embed/cw602cSBfZg?controls=0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullscreen
    ></iframe>
    </div> */}
    <video autoPlay loop muted src={VideoTest} id="introVideo"></video>
    <div className="content">
      <div className="cards">
        <Card imageSrc="gatsby-astronaut.png" heading="Beratung"></Card>
        <Card imageSrc="gatsby-icon.png" heading="Planung"></Card>
        <Card imageSrc="gatsby-astronaut.png" heading="Installation"></Card>
      </div>
    </div>
  </Layout>
)

export default IndexPage

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
    
    <h1 className="mainHeading">Jakobi Elektrotechnik</h1>
    <video autoPlay loop muted src={VideoTest} id="introVideo"></video>
    <div className="placeholder"></div>
    <div className="content">
      <div className="cards">
        <Card imageSrc="gatsby-astronaut.png" heading="Beratung"></Card>
        <Card imageSrc="gatsby-icon.png" heading="Planung"></Card>
        <Card imageSrc="gatsby-astronaut.png" heading="Installation"></Card>
      </div>
      <i className="fas fa-comments"></i>


    </div>
    
  </Layout>
)

export default IndexPage

import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import jetVideo from "../videos/jet.mp4"

import alarm from "../images/svg/alarm2.svg"
import construction from "../images/svg/construction.svg"
import network from "../images/svg/network.svg"
import smarthome from "../images/svg/smarthome.svg"
import solar from "../images/svg/solar.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="JET" />
    <div className="headingContainer">
      <StaticImage
        src="../images/logo_elektrotechnik.webp"
        alt="Logo"
        loading="lazy"
        width={500}
      />
      <h1 className="mainHeading">Mach mehr aus Deiner Elektroinstallation.</h1>
      <div className="videoWrapper">
        <video controls width="400" /* preload="none" */>
          <source src={jetVideo} type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="content">
      <h1 id="leistungen">Leistungen</h1>
      <div className="leistungen">
        <figure>
          <img
            src={construction}
            height="200px"
            alt="Neubau, Altbau, Sanierung"
          />
          <figcaption>Neubau, Altbau, Sanierung</figcaption>
        </figure>
        <figure>
          <img
            src={smarthome}
            height="200px"
            alt="Smart Home"
            id="smartHomeLogo"
          />
          <figcaption>Smart Home</figcaption>
        </figure>
        <figure>
          <StaticImage
            src="../images/knx.webp"
            alt="KNX"
            height={200}
            className="knxImage"
          ></StaticImage>
          <figcaption>KNX</figcaption>
        </figure>
        <figure>
          <img src={solar} height="200px" alt="Solar" />
          <figcaption>Solar</figcaption>
        </figure>
        <figure>
          <img src={network} height="200px" alt="Netzwerk" />
          <figcaption>Netzwerk</figcaption>
        </figure>
        <figure id="alarmFigure">
          <img src={alarm} height="200px" alt="Alarmanlagen" />
          <figcaption>Alarmanlagen</figcaption>
        </figure>
      </div>
      <p>
        <b>und viele mehr</b>
      </p>
      <h1 id="ueber-uns">Über uns</h1>
      <div className="personCardContainer">
        <div className="personCard">
          <StaticImage
            src="../images/frank.webp"
            alt="Frank"
            height={200}
          ></StaticImage>
          <h2>Frank Steinheider</h2>
          <p>
            +49 171 765 941 0<br />
            f.steinheider@jakobi-elektrotechnik.de
          </p>
        </div>
        <div className="personCard">
          <StaticImage
            src="../images/tobias.webp"
            alt="Tobias"
            height={200}
          ></StaticImage>
          <h2>Tobias Lander</h2>
          <p>
            +49 175 452 818 0<br />
            t.lander@jakobi-elektrotechnik.de
          </p>
        </div>
      </div>
      <div className="gallery">
        <StaticImage
          src="../images/bild1.webp"
          alt="Treppenbeleuchtung"
          height={250}
        ></StaticImage>
        <StaticImage
          src="../images/bild2.webp"
          alt="Smart Home"
          height={250}
        ></StaticImage>
        <StaticImage
          src="../images/bild3.webp"
          alt="Außenbeleuchtung"
          height={250}
        ></StaticImage>
      </div>
      <h1 id="partner">Partner</h1>
      <p>
        Gemeinsam mit unseren Partnern bieten wir Ihnen viele verschiedene
        Dienste kombiniert an.
      </p>
      <div className="gallery">
        <a href="https://brandschutz-ostbevern.de/">
          <StaticImage
            src="../images/leinkenjost.webp"
            alt="Leinkenjost"
            height={100}
          ></StaticImage>
        </a>
        <a href="https://www.jakobi-haustechnik.de/">
          <StaticImage
            src="../images/haustechnik.webp"
            alt="Jakobi Haustechnik"
            height={100}
          ></StaticImage>
        </a>
        <a href="https://www.paderbad.de/">
          <StaticImage
            src="../images/paderbad.webp"
            alt="Paderbad"
            height={100}
          ></StaticImage>
        </a>
        <a href="https://www.enerix.de/photovoltaik/warendorf/">
          <StaticImage
            src="../images/enerix.webp"
            alt="Enerix"
            height={100}
          ></StaticImage>
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage

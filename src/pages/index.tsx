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
    <svg
      className="headingBlob"
      width="468"
      height="387"
      viewBox="0 0 468 387"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        d="M359.25 64.0485C394.25 86.1075 411.25 125.388 406.25 159.444C401 193.5 374 222.332 351.25 253.098C328.5 283.865 309.75 316.373 278.75 327.209C247.5 338.045 204 327.015 163 313.857C122 300.893 83.75 285.8 59.25 260.645C35 235.683 24.75 200.66 33 168.732C41 136.998 67.75 108.167 101.5 85.914C135.5 63.6615 176.75 48.1815 224 42.7635C271 37.3455 324.25 41.9895 359.25 64.0485Z"
        fill="#FF0066"
      />{" "}
    </svg>
    <div className="headingContainer">
      <h1 className="mainHeading">
        Ihr Ansprechpartner für Elektrotechnik im Münsterland.
      </h1>
      <div className="videoWrapper">
        <video controls width="355" height="200" preload="none">
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
          <img src={smarthome} height="200px" alt="Smart Home" />
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
            f.steinheider@jet.de
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
            t.lander@jet.de
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
        <StaticImage
          src="../images/leinkenjost.webp"
          alt="Leinkenjost"
          height={100}
        ></StaticImage>
        <StaticImage
          src="../images/haustechnik.webp"
          alt="Jakobi Haustechnik"
          height={100}
        ></StaticImage>
        <StaticImage
          src="../images/paderbad.webp"
          alt="Paderbad"
          height={100}
        ></StaticImage>
        <StaticImage
          src="../images/enerix.webp"
          alt="Enerix"
          height={100}
        ></StaticImage>
      </div>
    </div>
  </Layout>
)

export default IndexPage

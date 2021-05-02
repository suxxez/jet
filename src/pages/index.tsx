import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import jetVideo from "../videos/jet.mp4"

import cursor from "../images/svg/cursor.svg"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="JET" />

    {/* ------- HEADING SECTION ------- */}

    <div className="headingContainer">
      <div className="logo_normal">
        <StaticImage
          src="../images/logo_elektrotechnik.webp"
          alt="Logo"
          loading="lazy"
          width={500}
        />
      </div>
      <div className="logo_white">
        <StaticImage
          src="../images/logo_white.webp"
          alt="Logo"
          loading="lazy"
          width={500}
        />
      </div>
      <h1 className="mainHeading">Mach mehr aus Deiner Elektroinstallation.</h1>
      <div className="videoWrapper">
        <video controls width="400" /* preload="none" */>
          <source src={jetVideo} type="video/mp4" />
        </video>
      </div>
    </div>

    <div className="content">
      {/* ------- DARK MODE SECTION ------- */}

      <div className="darkModeSection">
        <p>
          <b>
            Wir möchten Dich für alle Möglichkeiten der Elektrotechnik
            begeistern...
          </b>
        </p>
        <div id="darkModeToggle">
          <div className="lampe_on">
            <StaticImage
              src="../images/lampe_on.webp"
              alt="Lampe"
              loading="lazy"
              width={200}
            />
          </div>
          <div className="lampe_off">
            <StaticImage
              src="../images/lampe_off.webp"
              alt="Lampe"
              loading="eager"
              width={200}
            />
          </div>
          <img src={cursor} id="cursor" height="40px" alt="Cursor" />
        </div>
        <p>
          <b>... und lassen Dich nicht im Dunkeln.</b>
        </p>
      </div>

      {/* ------- ANSPRECHPARTNER SECTION ------- */}

      <h1 id="ueber-uns">Deine Ansprechpartner</h1>
      <div className="segel">
          <StaticImage
            src="../images/segel.webp"
            alt="Logo-Segel"
            height={400}
          ></StaticImage>
        </div>
      <div className="personCardContainer">
        <div className="personCard">
          <StaticImage
            src="../images/frank.webp"
            alt="Frank"
            height={200}
          ></StaticImage>
          <h2>Frank Steinheider</h2>
          <p>
            <a href="+491717659410">+49 171 765 941 0</a><br />
            <a href="mailto:f.steinheider@jakobi-elektrotechnik.de" className="email-link">f.steinheider@jakobi-elektrotechnik.de</a>
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
            <a href="tel:+491754528180"> +49 175 452 818 0 </a><br />
            <a href="mailto:t.lander@jakobi-elektrotechnik.de" className="email-link">t.lander@jakobi-elektrotechnik.de</a>
          </p>
        </div>
      </div>

      {/* ------- LEISTUNGEN SECTION ------- */}

      <h1 id="leistungen">Unsere Leistungen</h1>

      <div className="gallery leistungen">
        <Card imageSrc="neubau.webp" heading="Neubau, Altbau, Sanierung"></Card>
        <Card imageSrc="smarthome.webp" heading="Smart Home"></Card>
        <Card imageSrc="knx.webp" heading="KNX"></Card>
        <Card imageSrc="solar.webp" heading="Solar"></Card>
        <Card imageSrc="netzwerk.webp" heading="Netzwerk"></Card>
        <Card imageSrc="alarm.webp" heading="Alarmanlagen"></Card>
      </div>
      <p>
        <b>und viele mehr</b>
      </p>

      {/* ------- PARTNER SECTION ------- */}

      <h1 id="partner">Unsere Partner</h1>
      <p>
        Gemeinsam mit unseren Partnern bieten wir Ihnen viele verschiedene
        Dienste kombiniert an.
      </p>
      <div className="gallery">
        <a href="https://www.jakobi-haustechnik.de/">
          <StaticImage
            src="../images/haustechnik.webp"
            alt="Jakobi Haustechnik"
            height={70}
          ></StaticImage>
        </a>
        <a href="https://www.paderbad.de/">
          <StaticImage
            src="../images/paderbad.webp"
            alt="Paderbad"
            height={70}
          ></StaticImage>
        </a>
        <a href="https://brandschutz-ostbevern.de/">
          <StaticImage
            src="../images/leinkenjost.webp"
            alt="Leinkenjost"
            height={70}
          ></StaticImage>
        </a>
        <a href="https://www.enerix.de/photovoltaik/warendorf/">
          <StaticImage
            src="../images/enerix.webp"
            alt="Enerix"
            height={70}
          ></StaticImage>
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage

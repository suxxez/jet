import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/impressum.scss"

import { toggleDarkMode } from "../scripts/dark-mode"

export default function Impressum() {
  React.useEffect(() => {
    toggleDarkMode(true)
  })

  return (
    <Layout>
      <Seo title="Impressum" />
      <div>
        <h1>Impressum</h1>
        <p>
          Jakobi Elektrotechnik GmbH <br />
          Schüttenkamp 5<br />
          33175 Bad Lippspringe
        </p>
        <p>
          <table>
            <tr>
              <td>Telefon</td>
              <td>05252 93322 0</td>
            </tr>
            <tr>
              <td>Fax</td>
              <td>05252 93322 11</td>
            </tr>
            <tr>
              <td>E-Mail</td>
              <td>info@jakobi-elektrotechnik.de</td>
            </tr>
            <tr>
              <td>Homepage</td>
              <td>www.jakobi-elektrotechnik.de</td>
            </tr>
            <tr>
              <td>Registergericht</td>
              <td>Amtsgericht Paderborn</td>
            </tr>
            <tr>
              <td>Handelsregister</td>
              <td>HRB 13735</td>
            </tr>
            <tr>
              <td>Vertretungs­berechtigte/-r Geschäfts­führer/-in</td>
              <td>Viktor Jakobi, Andreas Jakobi</td>
            </tr>
            <tr>
              <td>USt-IdNr.</td>
              <td>DE 322133326</td>
            </tr>
          </table>
        </p>
      </div>
    </Layout>
  )
}

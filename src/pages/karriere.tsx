import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { toggleDarkMode } from "../scripts/dark-mode"

export default function Karriere() {
  React.useEffect(() => {
      toggleDarkMode(true);
  })

  return (
    <Layout>
      <Seo title="Karriere" />
      <div>
        <h1>Karriere</h1>
        <h2>Aktuell sind folgende Stellen ausgeschrieben:</h2>
        <ul>
          <li>Elektroniker für Gebäude- und Energietechnik (w/m/d)</li>
          <li>Bauhelfer (w/m/d)</li>
        </ul>
        <p>
          Aussagekräftige Bewerbungsunterlagen bitte per Mail an Tobias oder Frank senden.
        </p>
      </div>
    </Layout>
  )
}

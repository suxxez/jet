import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { toggleDarkMode } from "../scripts/dark-mode"

export default function Impressum() {
  React.useEffect(() => {
      toggleDarkMode(true);
  })
  
  return (
    <Layout>
      <SEO title="Impressum" />
      <div>
        <h1>Impressum</h1>
        <p>Hier steht bald das Impressum.</p>
      </div>
    </Layout>
  )
}

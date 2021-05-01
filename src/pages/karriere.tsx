import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { toggleDarkMode } from "../scripts/dark-mode"

export default function Karriere() {
  React.useEffect(() => {
      toggleDarkMode(true);
  })

  return (
    <Layout>
      <SEO title="Karriere" />
      <div>
        <h1>Karriere</h1>
        <p>Aktuell sind keine Stellen ausgeschrieben.</p>
      </div>
    </Layout>
  )
}

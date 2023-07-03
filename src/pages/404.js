import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404" />
    <h1>404: Nicht gefunden!</h1>
    <p>Diese Seite existiert nicht. <Link to="/" style={{color: "#de354c"}}>Hier geht es zur Startseite zurück.</Link></p>
  </Layout>
)

export default NotFoundPage

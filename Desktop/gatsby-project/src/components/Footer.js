import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function Footer() {
  const data = useStaticQuery(graphql`
    query CopyrightInfo {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)

  const { copyright } = data.site.siteMetadata
  return (
    <footer>
      <p>{copyright}</p>
    </footer>
  )
}

export default Footer

import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

function Navbar() {
  // możemy usunąć query TitleInfo i też będzie działać, ale ma to znaczenie przy query variables,
  // przy używaniu hooka useStaticQuery dobrze jest nazywać komponenty z dużej litery ponieważ czasem potrafi wystąpić error
  // ten hook może być użyty tylko raz w komponencie

  const data = useStaticQuery(graphql`
    query TitleInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar

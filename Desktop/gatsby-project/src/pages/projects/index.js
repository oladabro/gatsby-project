import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"
import { styleProjects } from "../../styles/projects.module.css"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes

  console.log(projects)
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styleProjects}>
          {projects.map(project => (
            <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`

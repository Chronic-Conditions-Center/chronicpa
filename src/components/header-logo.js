import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ccc-logo.png" }) {
        childImageSharp {
          gatsbyImageData (
              width: 200
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const mainLogo = getImage(data.placeholderImage.childImageSharp.gatsbyImageData)

  return <GatsbyImage image={mainLogo} alt="Chronic Conditions Center Logo" loading="eager" />
}

export default HeaderLogo
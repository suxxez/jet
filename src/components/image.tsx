import React, { useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

type ImageProps = {
  src: string
}

/**
 * Image component, encapsulated GatsbyImage
 * @param src the image source
 */
const Image = ({ src, ...props }: ImageProps) => {
  // query all images
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  // find image based on src param
  const match = useMemo(
    () =>
      data.allFile.nodes.find(
        ({ relativePath }: { relativePath: string }) => src === relativePath
      ),
    [data, src]
  )

  const image = match.childImageSharp.gatsbyImageData

  return (
    <>
      <GatsbyImage image={image} alt="X" {...props}></GatsbyImage>
    </>
  )
}

export default Image

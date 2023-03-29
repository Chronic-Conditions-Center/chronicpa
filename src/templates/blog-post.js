import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo 
      title={post.seo.title} 
      description={post.seo.metaDesc}
      metaImage={post.seo.opengraphImage.localFile.childImageSharp.gatsbyImageData}
      />

      <MainBlog>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{parse(post.title)}</h1>

            <p>{post.date}</p>

            {/* if we have a featured image for this post let's display it */}
            {featuredImage?.fluid && (
              <GatsbyImage
                image={featuredImage.gatsbyImageData}
                alt={featuredImage.alt}
                style={{ marginBottom: 50 }} />
            )}
          </header>

          {!!post.content && (
            <section itemProp="articleBody">{parse(post.content)}</section>
          )}

          <hr />

        </article>

        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={next.uri} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </MainBlog>

    </Layout>
  );
}


const MainBlog = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  padding: 50px 20px;
  h1,
  h2 {
    font-family: "Roboto Slab";
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 2px;
    font-style: normal;
    color: #000;
    margin-top: 0;
    margin-bottom: 20px;
    transition-duration: .3s;
  }
  p, ol, ul {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    font-style: normal;
    line-height: 1.3;
    color: #000;
  }
  ul {
    padding-left: 30px;
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`query BlogPostById($id: String!, $previousPostId: String, $nextPostId: String) {
  post: wpPost(id: {eq: $id}) {
    id
    excerpt
    content
    title
    date(formatString: "MMMM DD, YYYY")
    seo {
      title
      metaDesc
      opengraphImage {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
  previous: wpPost(id: {eq: $previousPostId}) {
    uri
    title
  }
  next: wpPost(id: {eq: $nextPostId}) {
    uri
    title
  }
}`

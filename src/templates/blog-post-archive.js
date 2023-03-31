import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes
  const SeoData = data.wpPage
  const BannerImage = getImage(data.file.childImageSharp.gatsbyImageData)

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="Chiropractic Blogs" />
        <p style={{textAlign: 'center'}}>
          No blog posts found!
        </p>
        <p style={{textAlign: 'center'}}>
          <Link to={'/'}>Back to Home</Link>
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo 
      title={SeoData.seo.title} 
      description={SeoData.seo.metaDesc}
      metaImage={SeoData.seo.opengraphImage.localFile.childImageSharp.gatsbyImageData}
      />

      <MainBlog>
        <div class="blog-banner">
          <GatsbyImage image={BannerImage} alt="Chronic Conditions Center Blog Background" />
          <h1>Chronic Conditions Center Blog</h1>
        </div>

        <div class="blog-main">
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.title

              return (
                <li key={post.uri}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <div class="article-image">
                      <GatsbyImage image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={post.featuredImage.node.title} />
                    </div>
                    <div class="article-content">
                      <header>
                        <h2>
                          <Link to={post.uri} itemProp="url">
                            <span itemProp="headline">{parse(title)}</span>
                          </Link>
                        </h2>
                        <small>{post.date}</small>
                      </header>
                      <section itemProp="description">{parse(post.excerpt)}</section>
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>

            <div class="pagination">
              {previousPagePath && (
                <>
                  <Link to={previousPagePath}>Previous page</Link>
                  <br />
                </>
              )}
              {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
            </div>
          
        </div>
      </MainBlog>

    </Layout>
  );
}

const MainBlog = styled.section`
  .blog-banner {
    position: relative;
    padding-left: calc(30px + 2%);
    padding-right: calc(30px + 2%);
    padding-top: 90px;
    padding-bottom: 90px;
    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    h1 {
      font-family: "Roboto Slab";
      font-size: 45px;
      color: #fff;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 2px;
      font-style: normal;
      margin-top: 0;
      margin-bottom: 0;
      position: relative;
      z-index: 2;
    }
  }
  .blog-main {
    max-width: 1170px;
    width: 100%;
    padding: 50px 30px;
    margin: 0 auto;
    article {
      display: flex;
      align-items: center;
      margin-bottom: 35px;
      .article-image {
        width: 35%;
        .gatsby-image-wrapper {
          max-height: 350px;
        }
      }
      .article-content {
        width: 65%;
        padding-left: 40px;
      }
    }
  }
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
  p, ol {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    font-style: normal;
    line-height: 1.3;
    color: #000;
  }
  .pagination {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 60px 0 30px;
    a {
      font-family: Roboto;
      font-size: 18px;
      color: #25afb4;
      text-decoration: none;
    }
  }
  @media(max-width:767px) {
    .blog-banner {
      h1 {
        font-size: 28px;
      }
    }
    .blog-main {
      article {
        flex-wrap: wrap;
        .article-image {
          width: 100%;
          margin-bottom: 35px;
          .gatsby-image-wrapper {
            max-height: 300px;
          }
        }
        .article-content {
          width: 100%;
          padding-left: 0px;
        }
      }
    }
    h2 {
      font-size: 28px !important;
    }
  }
`

export default BlogIndex

export const pageQuery = graphql`query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
  allWpPost(
    sort: {fields: [date], order: DESC}
    limit: $postsPerPage
    skip: $offset
  ) {
    nodes {
      excerpt
      uri
      date(formatString: "MMMM DD, YYYY")
      title
      excerpt
      featuredImage {
        node {
          title
          localFile {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
  wpPage(databaseId: {eq: 808}) {
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
  }
  file(relativePath: {eq: "banner_bg.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 1950, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
    }
  }
}`

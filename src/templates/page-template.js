import React  from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"
import StandardPageBuilder from "../components/standard-page-builder"


const Page = ({ data: { page } }) => {

  const layouts = page.customPageBuilder.pageBuilder;

  return (
    <Layout>
      <Seo 
      title={page.seo.title} 
      description={page.seo.metaDesc}
      metaImage={page.seo.opengraphImage.localFile.childImageSharp.fluid}
      />
      <article>
            {   
                layouts.map((layout, index) => {
                    return <StandardPageBuilder key={index} layoutData={layout} />
                })
            }
      </article>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      id
      seo {
        title
        metaDesc
        opengraphImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
        }
      }
      customPageBuilder {
        pageBuilder {
            __typename
            ... on WpPage_Custompagebuilder_PageBuilder_PageBanner {
                fieldGroupName
                bannerTitle
                bannerBackground {
                    title
                    localFile {
                      childImageSharp {
                        gatsbyImageData (
                            width: 1800
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                }
            }
            ... on WpPage_Custompagebuilder_PageBuilder_FullWidthSection {
                fieldGroupName
                fullWidthSectionId
                fullWidthSectionTopPadding
                fullWidthSectionBottomPadding
                fullWidthSectionColorScheme
                fullWidthSectionSectionContent
            }
            ... on WpPage_Custompagebuilder_PageBuilder_CallToAction {
                fieldGroupName
                ctaSectionId
                ctaTopPadding
                ctaBottomPadding
                ctaColorScheme
                ctaContent
                ctaButtonText
                ctaButtonLink
                phoneText
                phoneLink
            } 
            ... on WpPage_Custompagebuilder_PageBuilder_TwoColumnsImage {
              fieldGroupName
              twoColSectionId
              twoColTopPadding
              twoColBottomPadding
              twoColColorScheme
              twoColColumnSizes
              twoColImagePosition
              twoColImageMaxWidth
              twoColSectionContent
              twoColSectionImage {
                title
                localFile {
                  childImageSharp {
                    gatsbyImageData (
                        width: 900
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
            ... on WpPage_Custompagebuilder_PageBuilder_GallerySlideshow {
              fieldGroupName
              gallerySectionId
              galleryTopPadding
              galleryColorScheme
              galleryBottomPadding
              slideshowImages {
                title
                sourceUrl
                original: localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                thumbnail: localFile {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            ... on WpPage_Custompagebuilder_PageBuilder_AnchorButtons {
              fieldGroupName
              anchorSectionId
              anchorTopPadding
              anchorBottomPadding
              anchorColorScheme
              anchorSectionTitle
              anchorButtonMap {
                anchorButtonLabel
                anchorId
              }
            }
            ... on WpPage_Custompagebuilder_PageBuilder_ContactSection {
              fieldGroupName
              contactSectionId
              contactTopPadding
              contactBottomPadding
              contactColorScheme
              contactImage {
                title
                localFile {
                  childImageSharp {
                    gatsbyImageData (
                        width: 900
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
              contactAddress
              contactPhoneLabel
              contactPhoneLink
              contactFaxLabel
              contactFaxLink
              contactEmail
              contactDirectionsLink
              contactGoogleMapEmbed
            }
        }
      }
    }
  }
`
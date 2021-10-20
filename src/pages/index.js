import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

import HeroSlider from "../components/home-sections/hero-slider"
import SectionTwoCopy from "../components/home-sections/section-two-copy"
import TestimonialSlider from '../components/home-sections/testimonial-slider-v2'
import HomeSectionThree from "../components/home-sections/home-section-three"
import ContactSection from "../components/home-sections/contact-section"

const IndexPage = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <HeroSlider/>
            <HomeSectionTwo>
              <div class="flex-row">
                  <div class="flex-col">
                      <SectionTwoCopy />
                  </div>
                  <div class="flex-col">
                      <TestimonialSlider />
                  </div>
              </div>
            </HomeSectionTwo>
            <HomeSectionThree/>
            <ContactSection />
        </Layout>
    )

}

const HomeSectionTwo = styled.section`
  background-color: #f1f1f1;
  padding: 50px 20px;
  .flex-row {
      max-width: 1180px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      .flex-col {
          width: 50%;
      }
  }
  @media(max-width:1100px) {
    .flex-row {
      .flex-col {
        width: 100%;
      }
    }
  }
`

export default IndexPage

export const pageQuery = graphql`
    query {
        queryContent: wpHomeSection(databaseId: {eq: 32}) {
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
        }
    }
`
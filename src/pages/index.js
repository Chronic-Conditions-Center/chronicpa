import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

import HeroSlider from "../components/home-sections/hero-slider"
import HomeSectionOne from "../components/home-sections/home-section-one"
import SectionTwoCopy from "../components/home-sections/section-two-copy"
import Testimonials from '../components/home-sections/testimonials-section'
import HomeSectionThree from "../components/home-sections/home-section-three"
import ContactSection from "../components/home-sections/contact-section"

const IndexPage = ({ data: { queryContent } }) => {

    return (
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.gatsbyImageData}
            />
            <HeroSlider/>
            <HomeSectionOne />
            <Testimonials />
            <SectionTwoCopy />
            <HomeSectionThree/>
            <ContactSection />
        </Layout>
    );

}

export default IndexPage

export const pageQuery = graphql`{
  queryContent: wpHomeSection(databaseId: {eq: 32}) {
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
}`
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"
import { Helmet } from 'react-helmet'

const ThankYouPage = () => {

  return (
    <Layout>
      <Helmet>
        <script>{ "gtag('event', 'conversion', {'send_to': 'AW-10996258427/c_uvCKmDu-MDEPustvso'});" }</script>
      </Helmet>
      <Seo title="Thank You" />
      <MainSection>
        <h1>Thanks for Contacting Us</h1>
        <p>We'll be in touch shortly!</p>
        <Link to={"/"}>Return Home</Link>
      </MainSection>
    </Layout>
  )
}

const MainSection = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 10rem 3rem;
  margin: 0 auto;
  text-align: center;
  h1 {
    font-family: "Roboto Slab";
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 2px;
    font-style: normal;
    color: rgb(0, 0, 0);
    margin-top: 0px;
    transition-duration: 0.3s;
  }
  p {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    font-style: normal;
    line-height: 1.3;
    color: rgb(0, 0, 0);
    margin-bottom: 35px;
  }
  a {
    display: inline-block;
    max-width: 320px;
    text-decoration: none;
    font-family: Roboto;
    font-size: 20px;
    line-height: 1.5;
    color: rgb(255, 255, 255);
    background-color: rgb(37, 175, 180);
    padding: 10px 50px;
    border: 2px solid rgb(37, 175, 180);
    border-radius: 50px;
    transition-duration: 0.3s;
    &:hover {
      cursor: pointer;
      color: rgb(37, 175, 180);
      background-color: transparent;
    }
  }
`

export default ThankYouPage
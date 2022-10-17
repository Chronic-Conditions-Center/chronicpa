// src/layouts/CallToAction/CallToAction.js

import React from "react"
import styled from 'styled-components'
import CtaButton from '../../components/cta-button'
import { Helmet } from 'react-helmet'

const CallToAction = ({ ctaSectionId, ctaTopPadding, ctaBottomPadding, ctaColorScheme, ctaContent, ctaButtonText, ctaButtonLink }) => {

    return (
      <BlockContent
      id={ctaSectionId}
      className={`color-${ctaColorScheme}`}
      style={{
          paddingTop: `${ctaTopPadding}px`,
          paddingBottom: `${ctaBottomPadding}px`
      }}
      >
        <Helmet>
          <script>{ " gtag('config', 'AW-10996258427/NSPpCIGUu-MDEPustvso', {'phone_conversion_number': '412-595-7332'});" }</script>
        </Helmet>
          <div dangerouslySetInnerHTML={{__html: ctaContent}} />
          <div class="button-row">
              {/* <CtaButton linkValue={ctaButtonLink} textValue={ctaButtonText} /> */}
              <a id="Phone_CTA" href={ctaButtonLink} target="_blank" rel="noreferrer">{ctaButtonText}</a>
          </div>
      </BlockContent>
    )
  }
  
const BlockContent = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  &.color-white {
    background-color: #fff;
    h2, p {
      color: #000;
    }
    hr {
      background-color: #25afb4;
    }
    .button-row {
      a {
        display: inline-block;
        text-decoration: none;
        font-family: Roboto;
        font-size: 20px;
        line-height: 1.5;
        padding: 10px 50px;
        border: 2px solid #25afb4;
        background-color: #25afb4;
        color: #fff;
        border-radius: 50px;
        transition-duration: .3s;
        &:hover {
          background-color: #fff;
          color: #25afb4;
        }
      }
    }
  }
  &.color-gray {
    background-color: #f1f1f1;
    h2, p {
      color: #000;
    }
    hr {
      background-color: #25afb4;
    }
    .button-row {
      a {
        display: inline-block;
        text-decoration: none;
        font-family: Roboto;
        font-size: 20px;
        line-height: 1.5;
        padding: 10px 50px;
        border: 2px solid #25afb4;
        background-color: #25afb4;
        color: #fff;
        border-radius: 50px;
        transition-duration: .3s;
        &:hover {
          background-color: #fff;
          color: #25afb4;
        }
      }
    }
  }
  &.color-blue {
    background-color: #25afb4;
    h2, p {
      color: #fff;
    }
    hr {
      background-color: #fff;
    }
    a {
        color: #fff;
        &:hover {
            color: #fff;
        }
    }
    .button-row {
      a {
        display: inline-block;
        text-decoration: none;
        font-family: Roboto;
        font-size: 20px;
        line-height: 1.5;
        padding: 10px 50px;
        border: 2px solid #fff;
        background-color: #fff;
        color: #25afb4;
        border-radius: 50px;
        transition-duration: .3s;
        &:hover {
          background-color: #25afb4;
          color: #fff;
        }
      }
    }
  }
  > div {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  h2 {
    font-family: "Roboto Slab";
    font-size: 40px;
    line-height: 1.3;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 2px;
    font-style: normal;
    margin-top: 0em;
    margin-bottom: 30px;
  }
  hr {
    margin: 30px 0;
    max-width: 100px;
    width: 100%;
    height: 2px;
  }
  p {
    font-family: Roboto;
    font-weight: 500;
    letter-spacing: 0px;
    font-style: normal;
    font-size: 20px;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 20px;
  }
  @media(max-width:767px) {
    h2 {
      font-size: 28px;
    }
    p, li, a {
      font-size: 18px;
    }
    a {
      padding: 10px 25px;
    }
  }
`

export default CallToAction
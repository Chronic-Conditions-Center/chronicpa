// src/layouts/FullWidthSection/FullWidthSection.js

import React from "react"
import styled from 'styled-components'

const FullWidthSection = ({ fullWidthSectionId, fullWidthSectionTopPadding, fullWidthSectionBottomPadding, fullWidthSectionColorScheme, fullWidthSectionSectionContent }) => {

    return (
      <BlockContent
      id={fullWidthSectionId}
      className={`color-${fullWidthSectionColorScheme}`}
      style={{
          paddingTop: `${fullWidthSectionTopPadding}px`,
          paddingBottom: `${fullWidthSectionBottomPadding}px`
      }}
      >
          <div dangerouslySetInnerHTML={{__html: fullWidthSectionSectionContent}} />
      </BlockContent>
    )
  }
  
const BlockContent = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  &.color-white {
    background-color: #fff;
    h2, h3, p, li {
      color: #000;
    }
    hr {
      background-color: #25afb4;
    }
  }
  &.color-gray {
    background-color: #f1f1f1;
    h2, h3, p, li {
      color: #000;
    }
    hr {
      background-color: #25afb4;
    }
  }
  &.color-blue {
    background-color: #25afb4;
    h2, h3, p, li {
      color: #fff;
    }
    hr {
      background-color: #fff;
    }
  }
  > div {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
  }
  .iframe-flex {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    iframe {
      padding: 10px;
    }
  }
  .flex-list {
    display: flex;
    ul {
      width: 50%;
    }
  }
  .flex-col {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .col-half {
      width: 50%;
      &:first-child {
        padding-right: 30px;
      }
      &:last-child {
        padding-left: 30px;
      }
    }
  }
  blockquote {
    text-align: center;
    border-left: none;
    padding-left: 0;
    margin: 0;
    p {
      color: #858a9f !important;
    }
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
  h3 {
    font-family: "Roboto Slab";
    font-weight: 400;
    letter-spacing: 0px;
    font-style: normal;
    font-size: 32px;
    line-height: 1.4;
    margin-top: 0em;
    margin-bottom: 30px;
  }
  hr {
    margin: 30px 0;
    max-width: 100px;
    width: 100%;
    height: 2px;
    &.centered {
      margin: 30px auto;
    }
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
  li {
    font-family: Roboto;
    font-weight: 500;
    letter-spacing: 0px;
    font-style: normal;
    font-size: 20px;
    line-height: 1.5;
  }
  ul, ol {
    margin-left: 35px;
}
`

export default FullWidthSection
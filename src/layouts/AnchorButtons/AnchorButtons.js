// src/layouts/AnchorButtons/AnchorButtons.js

import React from "react"
import styled from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll';

const AnchorButtons = ({ anchorSectionId, anchorTopPadding, anchorBottomPadding, anchorColorScheme, anchorSectionTitle, anchorButtonMap }) => {

    const buttonMap = anchorButtonMap

    return (
      <BlockContent
      id={anchorSectionId}
      className={`color-${anchorColorScheme}`}
      style={{
          paddingTop: `${anchorTopPadding}px`,
          paddingBottom: `${anchorBottomPadding}px`
      }}
      >
        <div>
            <h4 class="anchor-title">{anchorSectionTitle}</h4>
            <div class="button-row">
                {buttonMap.map(buttonSrc => (
                    <button onClick={() => scrollTo(buttonSrc.anchorId)}>{buttonSrc.anchorButtonLabel}</button>
                ))}
            </div>
        </div>
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
    &.col-half {
        > div {
            > div:first-child {
                width: 50%;
            }
            > div:last-child {
                width: 50%;
            }
        }
    }
    &.col-one-third {
        > div {
            > div:first-child {
                width: 66.66%;
            }
            > div:last-child {
                width: 33.33%;
            }
        }
    }
    &.col-one-fourth {
        > div {
            > div:first-child {
                width: 75%;
            }
            > div:last-child {
                width: 25%;
            }
        }
    }
    &.image-right {
        > div {
            > div:first-child {
                order: 1;
                padding-right: 30px;
            }
            > div:last-child {
                order: 2;
                padding-left: 30px;
            }
        }
    }
    &.image-left {
        > div {
            > div:first-child {
                order: 2;
                padding-left: 30px;
            }
            > div:last-child {
                order: 1;
                padding-right: 30px;
            }
        }
    }
    > div {
        max-width: 1170px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .section-image {
        text-align: center;
        .gatsby-image-wrapper {
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
    .gallery-row {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }
    .button-row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        button {
            font-family: Roboto;
            font-size: 20px;
            width: calc(33.333333333333% - 4%);
            margin-right: 2%;
            margin-left: 2%;
            margin-top: 0px;
            margin-bottom: 20px;
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            line-height: 30px;
            padding: 10px 30px;
            color: #fff;
            background-color: #25afb4;
            border: none;
            border-radius: 5px;
            transition-duration: .3s;
            &:hover {
                cursor: pointer;
            }
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
    h4.anchor-title {
        font-family: "Roboto Slab";
        font-weight: 400;
        font-size: 24px;
        line-height: 1.4;
        letter-spacing: 0px;
        font-style: normal;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        color: #000 !important;
        border-top: 2px solid #000;
        border-bottom: 2px solid #000;
        width: 100%;
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

export default AnchorButtons
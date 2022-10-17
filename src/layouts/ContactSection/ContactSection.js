// src/layouts/ContactSection/ContactSection.js

import React from "react"
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'

import { FaPhone } from 'react-icons/fa';
import { FaFax } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaStreetView } from 'react-icons/fa';

import ContactForm from "../../components/contact-form"

const ContactSection = ({ contactSectionId, contactTopPadding, contactBottomPadding, contactColorScheme, contactImage, contactAddress, contactPhoneLabel, contactPhoneLink, contactFaxLabel, contactFaxLink, contactEmail, contactDirectionsLink, contactGoogleMapEmbed }) => {

    const mainImage = getImage(contactImage.localFile.childImageSharp.gatsbyImageData)
    
    return (
      <BlockContent
      id={contactSectionId}
      className={`color-${contactColorScheme}`}
      >
        <Helmet>
          <script>{ " gtag('config', 'AW-10996258427/NSPpCIGUu-MDEPustvso', {'phone_conversion_number': '412-595-7332'});" }</script>
        </Helmet>
        <div 
        class="contact-main"
        style={{
            paddingTop: `${contactTopPadding}px`,
            paddingBottom: `${contactBottomPadding}px`
        }}
        >
            <div class="contact-info">
                <h2>Get in touch</h2>
                <div class="flex-row">
                    <div class="half-col">
                        <GatsbyImage image={mainImage} alt={contactImage.title} />
                    </div>
                    <div class="half-col">
                        <div dangerouslySetInnerHTML={{__html: contactAddress}} />
                        <div class="contact-links">
                            <a id="contact_phone_link" href={contactPhoneLink}><FaPhone size={20}/> {contactPhoneLabel}</a>
                            <a href={contactFaxLink}><FaFax size={20}/> {contactFaxLabel}</a>
                            <a href={`mailto:${contactEmail}`}><FaEnvelope size={20}/> {contactEmail}</a>
                            <a href={contactDirectionsLink} target="_blank" rel="noreferrer"><FaStreetView size={20}/> Get Directions</a>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm/>
        </div>
        <div class="google-map" dangerouslySetInnerHTML={{__html: contactGoogleMapEmbed}} />
      </BlockContent>
    )
  }
  
const BlockContent = styled.section`
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
  > div.contact-main {
    max-width: 1230px;
    width: 100%;
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    .contact-info {
        width: 50%;
        padding-right: 30px;
        .flex-row {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            .half-col {
                width: 50%;
                &:first-child {
                    padding-right: 20px;
                }
                &:last-child {
                    padding-left: 20px;
                }
            }
            .contact-links {
                display: flex;
                flex-direction: column;
                a {
                    font-family: Roboto;
                    font-size: 18px;
                    font-weight: 500;
                    color: #25afb4;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    svg {
                        margin-right: 10px;
                    }
                }
            }
        }
    }
    .contact-form {
        width: 50%;
        padding-left: 30px;
        .flex-form {
            max-width: 700px;
            width: 100%;
            margin: 0 auto;
            .two-col {
                width: 100%;
                display: flex;
                justify-content: space-between;
                input {
                    font-family: Roboto;
                    font-size: 18px;
                    padding-top: 0;
                    padding-bottom: 0;
                    height: 55px;
                    background-color: #ffffff;
                    color: #858a9f;
                    border-width: 1px 1px 1px 1px;
                    border-color: #eaeaea;
                    border-radius: 0px;
                    border: 1px solid #d2d2d2;
                    padding: 8px 15px;
                    width: calc(50% - 10px);
                    margin-bottom: 20px;
                }
            }
            .full {
                width: 100%;
                textarea {
                    font-family: Roboto;
                    font-size: 18px;
                    padding-top: 0;
                    padding-bottom: 0;
                    height: 55px;
                    background-color: #ffffff;
                    color: #858a9f;
                    border-width: 1px 1px 1px 1px;
                    border-color: #eaeaea;
                    border-radius: 0px;
                    border: 1px solid #d2d2d2;
                    padding: 8px 15px;
                    width: 100%;
                    margin-bottom: 20px;
                    min-height: 150px;
                }
            }
            .submit {
                width: 100%;
                text-align: center;
                button {
                    display: inline-block;
                    max-width: 320px;
                    text-decoration: none;
                    font-family: Roboto;
                    font-size: 20px;
                    line-height: 1.5;
                    color: #fff;
                    background-color: #25afb4;
                    padding: 10px 50px;
                    border: 2px solid #25afb4;
                    border-radius: 50px;
                    transition-duration: .3s;
                    &:hover {
                        cursor: pointer;
                        color: #25afb4;
                        background-color: transparent;
                    }
                }
            }
        }
    }
  }
  div.google-map {
      p {
          margin-bottom: 0;
      }
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
@media(max-width: 1000px) {
  > div.contact-main {
    .contact-info {
      .flex-row {
        flex-wrap: wrap;
        .half-col {
          width: 100%;
          padding-left: 0px;
          padding-right: 0px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
@media(max-width:767px) {
  h2 {
    font-size: 28px;
    overflow-wrap: break-word;
  }
  h3 {
    font-size: 20px;
  }
  p, li {
    font-size: 18px;
  }
  ul, ol {
    margin-left: 0;
  }
  > div.contact-main {
    flex-wrap: wrap;
    .contact-info {
      width: 100%;
      padding-right: 0px;
    }
    .contact-form {
      width: 100%;
      padding-left: 0px;
      .flex-form {
        .submit {
          button {
            font-size: 18px;
            padding: 10px 25px;
          }
        }
      }
    }
  }
}
`

export default ContactSection
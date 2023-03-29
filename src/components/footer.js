import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import { FaPhone } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {

    return(
        <FooterMain>

            <div class="flex-row">
                <div class="flex-col">
                    <p class="footer-title">About Us</p>
                    <p>Chronic Conditions Center is the premier leader in integrated neurometabolic healthcare. We use FDA approved medical procedures for the treatment of peripheral neuropathy, joint pain and metabolic disorders.</p>
                </div>
                <div class="flex-col">
                    <p class="footer-title">Contact Info</p>
                    <p><a href="tel:+14125957332" aria-label="Phone Number 412-595-7332"><FaPhone size={24}/>412-595-7332</a><br/>
                    <a href="mailto:info@chronicpa.com" aria-label="Email Address"><FaRegEnvelope size={24}/>info@chronicpa.com</a><br/>
                    <a href="https://g.page/cccpa1?share" target="_blank" aria-aria-label="Street Address"><FaMapMarkerAlt/>1699 Washington Rd.<br/>
                    Suite 401<br/>
                    Pittsburgh, PA 15228</a></p>
                </div>
                <div class="flex-col">
                    <p class="footer-title">Hours</p>
                    <p>Monday through Thursday<br/>
                    8:00 a.m. to 5:00 p.m.<br/>
                    by appointment only.</p>
                    <p class="footer-title">Follow Us</p>
                    <div class="footer-socials">
                        <a href="https://www.facebook.com/cccpa1" target="_blank" aria-label="Facebook"><FaFacebookF size={24}/></a>
                        <a href="https://twitter.com/kevinsmithdc" target="_blank" aria-label="Twitter"><FaTwitter size={24}/></a>
                        <a href="https://www.instagram.com/kevinsmithdc" target="_blank" aria-label="Instagram"><FaInstagram size={24}/></a>
                        <a href="https://www.youtube.com/c/KevinSmithdc" target="_blank" aria-label="YouTube"><FaYoutube size={24}/></a>
                        <a href="https://www.linkedin.com/in/ksmithdc/" target="_blank" aria-label="LinkedIn"><FaLinkedin size={24}/></a>
                        <a href="https://www.pinterest.com/ksmithdc/_saved/" target="_blank" aria-label="Pinterest"><FaPinterestP size={24}/></a>
                    </div>
                </div>
                <div class="flex-col">
                    <p class="footer-title">Our Location</p>
                    <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.6932179464447!2d-80.051309!3d40.349151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f99c7d96e10d%3A0x302207661968f10f!2sChronic%20Conditions%20Center!5e0!3m2!1sen!2smx!4v1659712062695!5m2!1sen!2smx" width="100%" height="250" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div class="footer-bottom">
                <p>© Copyright 2012 - 2023   |   CHRONIC PA   |   ALL RIGHTS RESERVED  |  <Link to={"/site-map/"}>Sitemap</Link></p>
            </div>

            <div class="appointment-widget">
                <a href="https://live.vcita.com/site/ld2sp6z9us1n52jd/online-scheduling" target="_blank" rel="noreferrer">Make an Appointment</a>
            </div>

        </FooterMain>
    )

}

const FooterMain = styled.footer`
    position: relative;
    padding: 60px 10px 25px;
    border-top: 20px solid #222222;
    background-color: #000000;
    .flex-row {
        max-width: 1380px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .flex-col {
            width: 25%;
            padding-right: 35px;
            p {
                font-family: Roboto;
                font-size: 20px;
                font-weight: 500;
                letter-spacing: 0px;
                font-style: normal;
                color: #fff;
                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
            p.footer-title {
                font-family: "Roboto Slab";
                font-weight: 400;
                line-height: 1.4;
                letter-spacing: 0px;
                font-style: normal;
                color: #fff;
                margin-bottom: 30px;
            }
            svg {
                margin-right: 20px;
                color: #25afb4;
                fill: #25afb4;
            }
        }
    }
    .footer-bottom {
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
        margin-top: 30px;
        p, a {
            font-family: Roboto;
            color: #aaaaaa;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            text-decoration: none;
        }
    }
    .appointment-widget {
        position: fixed;
        right: 20px;
        bottom: 0;
        z-index: 100;
        a {
            display: block;
            background-color: #508dcc !important;
            color: #fff;
            font-family: Arial,sans-serif !important;
            font-size: 14px !important;
            line-height: 37px;
            border-radius: 5px 5px 0 0;
            padding: 0 40px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 5px #ccc;
            text-decoration: none;
        }
        /* @media(max-width:767px) {
            display: none;
        } */
    }
    @media(max-width:1100px) {
        .flex-row {
            max-width: 700px;
            flex-wrap: wrap;
            justify-content: flex-start;
            .flex-col {
                width: 50%;
            }
        }
    }
    @media(max-width:767px) {
        .flex-row {
            justify-content: center;
            .flex-col {
                width: 100%;
                padding-right: 0;
                text-align: center;
                .footer-socials {
                    margin-bottom: 50px;
                }
            }
        }
    }
`

export default Footer
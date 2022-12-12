import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import { FaChevronDown } from 'react-icons/fa';

const HeaderMenu = () => {

    return(
        <MainNav>
            <ul class="main-menu">
                {/* <li><Link to={"/history/"}>About Us</Link></li> */}
                <li class={"has-submenu"}>About Us <FaChevronDown size={12}/>
                    <ul class="submenu">
                        <li><Link to={"/history/"}>Our History</Link></li>
                        <li><Link to={"/meet-the-staff/"}>Meet the Staff</Link></li>
                    </ul>
                </li>
                <li class={"has-submenu"}>Conditions <FaChevronDown size={12}/>
                    <ul class="submenu large">
                        <li><Link to={"/back-pain/"}>Back Pain</Link></li>
                        <li><Link to={"/neck-pain/"}>Neck Pain</Link></li>
                        <li><Link to={"/shoulder-pain/"}>Shoulder Pain</Link></li>
                        {/* <li><Link to={"/spinal-pain/"}>Spinal Pain</Link></li> */}
                        <li><Link to={"/hip-pain-chiropractor/"}>Hip Pain</Link></li>
                        <li><Link to={"/knee-pain/"}>Knee Pain</Link></li>
                        <li><Link to={"/foot-pain-chiropractor/"}>Foot Pain</Link></li>
                        <li><Link to={"/car-accident-pain/"}>Car Accident Pain</Link></li>
                        <li><Link to={"/numbness-tingling/"}>Numbness/Tingling</Link></li>
                        <li><Link to={"/chiropractic-for-herniated-discs/"}>Herniated Disc</Link></li>
                        <li><Link to={"/peripheral-neuropathy/"}>Peripheral Neuropathy</Link></li>
                        <li><Link to={"/sciatica-treatment/"}>Sciatica</Link></li>
                        <li><Link to={"/scoliosis-chiropactic/"}>Scoliosis</Link></li>
                        <li><Link to={"/spinal-stenosis/"}>Spinal Stenosis</Link></li>
                        {/* <li><Link to={"/thyroid-problems/"}>Thyroid Problems</Link></li> */}
                        <li><Link to={"/thyroid/"}>Low Thyroid</Link></li>
                    </ul>
                </li>
                <li class={"has-submenu"}>Services <FaChevronDown size={12}/>
                    <ul class="submenu large">
                        {/* <li><Link to={"/viscosupplementation/"}>Viscosupplementation</Link></li>
                        <li><Link to={"/platelet-rich-plasma/"}>Platelet Rich Plasma</Link></li>
                        <li><Link to={"/electroanalgesia/"}>Electroanalgesia</Link></li> */}
                        <li><Link to={"/chiropractic/"}>Chiropractic</Link></li>
                        <li><Link to={"/weight-loss/"}>Weight Loss</Link></li>
                        <li><Link to={"/thyroid-restoration/"}>Thyroid Restoration</Link></li>
                        <li><Link to={"/laser/"}>Laser</Link></li>
                        <li><Link to={"/spinal-decompression/"}>Decompression</Link></li>
                        <li><Link to={"/pulsewave-therapy/"}>Pulsewave</Link></li>
                        {/* <li><Link to={"/cord-tissue-matrix/"}>Cord Tissue Matrix</Link></li> */}
                    </ul>
                </li>
                <li class={"has-submenu"}>Patient Resources <FaChevronDown size={12}/>
                    <ul class="submenu">
                        <li><Link to={"/new-patients/"}>New Patients</Link></li>
                        <li><Link to={"/tour-of-the-office/"}>Tour of the Office</Link></li>
                        <li><Link to={"/blog/"}>Blog</Link></li>
                        {/* <li><Link to={"/research/"}>Research</Link></li> */}
                    </ul>
                </li>
                <li><Link to={"/testimonials/"}>Testimonials</Link></li>
                <li><Link to={"/contact/"}>Contact</Link></li>
            </ul>
        </MainNav>
    )

}

const MainNav = styled.nav`
    opacity: 1;
    visibility: visible;
    transition-duration: .3s;
    ul.main-menu {
        list-style: none;
        display: flex;
        margin-bottom: 0;
        margin-top: 0px;
        > li {
            color: #4c5166;
            font-family: "Roboto Slab";
            font-weight: 700;
            font-size: 16px;
            line-height: 4;
            letter-spacing: 1px;
            padding-right: 35px;
            margin-bottom: 0;
            position: relative;
            overflow: hidden;
            transition-duration: .5s;
            &:last-child {
                padding-right: 0;
            }
            a {
                color: #4c5166;
                font-family: "Roboto Slab";
                font-weight: 700;
                font-size: 16px;
                letter-spacing: 1px;
                font-style: normal;
                text-decoration: none;
                transition-duration: .5s;
            }
            > ul.submenu {
                position: absolute;
                left: 0;
                visibility: hidden;
                opacity: 0;
                z-index: 3;
                transition: opacity .2s ease-in;
                width: 240px;
                margin: 0;
                background-color: #f2efef;
                font-family: Roboto;
                font-weight: 500;
                letter-spacing: 0px;
                font-style: normal;
                line-height: 34px;
                list-style: none;
                border-top: 3px solid #25afb4;
                box-shadow: 1px 1px 30px rgb(0 0 0 / 6%);
                li {
                    margin-bottom: 0;
                    a {
                        display: block;
                        width: 100%;
                        font-family: Roboto;
                        font-weight: 500;
                        padding: 7px 20px;
                        border-bottom-color: #dcdadb;
                        color: #333333;
                        background-color: #f2efef;
                        font-size: 14px;
                        line-height: 34px;
                        text-transform: uppercase;
                        transition-duration: .3s;
                        &:hover {
                            background-color: #f8f8f8;
                        }
                    }
                }
                &.large {
                    display: flex;
                    flex-wrap: wrap;
                    width: 480px;
                    li {
                        width: 50%;
                    }
                }
            }
            &: hover {
                overflow: visible;
                cursor: pointer;
                > ul.submenu {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }
    @media(max-width: 1180px) {
        ul.main-menu {
            li {
                font-size: 14px;
                a {
                    font-size: 14px;
                }
            }
        }
    }
    @media(max-width: 1100px) {
        display: none;
        opacity: 0;
        visibility: hidden;
    }
`

export default HeaderMenu
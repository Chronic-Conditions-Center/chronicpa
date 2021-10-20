import React, { Component} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'
import PageTransition from 'gatsby-plugin-page-transitions'
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../css/slick.css"
import "../css/slick-theme.css"

import HeaderLogo from "../components/header-logo"
import HeaderMenu from "../components/header-menu"
import MobileMenu from "../components/mobile-menu"
import Footer from "../components/footer"

import { FaPhone } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.container = null;
        this.trigger = null;
    }
    
    toggleMenu() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const children = this.props.children
        let headerName = "headerStatus";
        if (this.state.isOpen) {
          headerName += ' mobileOpen';
        }
        return (
            <Main>

                <HeaderTop>

                    <p><a href="tel:+14125957332"><FaPhone size={18}/> 412-595-7332</a>  <span onClick={() => scrollTo('#home_contact')}><FaRegCalendarAlt size={18}/> Schedule a Consult</span></p>

                </HeaderTop>

                <HeaderMain className={headerName}>

                    <div class="header-flex">
                        <Link to={'/'} className={"header-logo"}>
                            <HeaderLogo/>
                        </Link>

                        <HeaderMenu/>

                        <div class="mobile-menu-icon">
                            <button onClick={() => this.toggleMenu()} aria-label="Open Mobile Menu">
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                        </div>
                    </div>

                    <div class="mobile-menu">
                        <MobileMenu />
                    </div>

                </HeaderMain>

                <MainLayout className={headerName}>

                    <PageTransition transitionTime={1000}>
                        <MainContent>
                            <main>{children}</main>
                        </MainContent>
                    </PageTransition>

                </MainLayout>

                <Footer />

            </Main>
        );
    }
}

const Main = styled.div`
    position: relative;
    overflow: hidden;
    background-color: #fff;
`

const HeaderTop = styled.div`
    background-color: #25afb4;
    padding: 5px 20px;
    width: 100%;
    position: relative;
    p {
        font-family: "Roboto";
        font-weight: 500;
        color: #fff;
        text-align: center;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            margin: 0 10px;
        }
    }
    a {
        color: #fff;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            cursor: pointer;
        }
    }
    @media(max-width:767px) {
        p {
            font-size: 13px;
        }
    }
`

const HeaderMain = styled.header`
    position: relative;
    width: 100%;
    height: auto;
    .header-cta {
        position: absolute;
        top: 0;
        right: 0;
        height: auto;
        width: 310px;
        font-family: "Roboto";
        font-weight: 700;
        color: #fff;
        border-radius: 0 0 0 50px;
        background-color: #25afb4;
        margin-top: 0;
        padding: 17px 30px;
        padding-left: 45px;
        line-height: 1;
        text-decoration: none;
        text-transform: uppercase;
    }
    .header-flex {
        padding: 20px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .mobile-menu-icon {
        display: none;
        opacity: 0;
        visibility: hidden;
        transition-duration: .3s;
        button {
            width: 35px;
            height: 23px;
            position: relative;
            padding: 0;
            border: none;
            background-color: transparent;
            > div {
                position: absolute;
                width: 35px;
                height: 3px;
                background-color: #25afb4;
                border-radius: 3px;
                transition-duration: .3s;
                &:first-child {
                    top: 0;
                    left: 0;
                }
                &:nth-child(2) {
                    top: 10px;
                    left: 0;
                }
                &:last-child {
                    top: 20px;
                    left: 0;
                }
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
    .mobile-menu {
        position: relative;
        width: 100%;
        padding: 0px;
        opacity: 0;
        visibility: hidden;
        display: none;
        transition: all 0s cubic-bezier(.25,.46,.45,.94);
        transition-duration: .6s;
        max-height: 0px;
        height: auto;
        overflow: hidden;
    }
    &.mobileOpen {
        .mobile-menu-icon {
            button {
                > div {
                    &:first-child {
                        transform: rotate(45deg);
                        top: 9px;
                    }
                    &:nth-child(2) {
                        opacity: 0;
                    }
                    &:last-child {
                        transform: rotate(-45deg);
                        top: 9px;
                    }
                }
            }
        }
        .mobile-menu {
            max-height: 800px;
        }
    }
    @media(max-width:1100px) {
        .mobile-menu-icon {
            display: block;
            opacity: 1;
            visibility: visible;
        }
        .mobile-menu {
            display: block;
            opacity: 1;
            visibility: visible;
        }
    }
    @media(max-width:767px) {
        .header-flex {
            .header-logo {
                .gatsby-image-wrapper {
                    max-width: 140px;
                }
            }
        }
    }
`

const MainLayout = styled.div``

const MainContent = styled.div``

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
export default Layout
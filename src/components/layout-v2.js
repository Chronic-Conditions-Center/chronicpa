import React, { Component} from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
//import PageTransition from 'gatsby-plugin-page-transitions'

import "../css/slick.css"
import "../css/slick-theme.css"
import "../css/image-gallery.scss"

import HeaderSticky from "../components/header-sticky"
import Footer from "../components/footer"

class Layout extends Component {

    render() {
        const children = this.props.children

        return (
            <Main  id="sticky_trigger" >

                <HeaderSticky />

                <MainLayout>

                    {/* <PageTransition transitionTime={1000}> */}
                        <MainContent>
                            <main>{children}</main>
                        </MainContent>
                    {/* </PageTransition> */}

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
    &.active {
        .sticky-header {
            box-shadow: rgb(0 0 0 / 12%) 0px 5px 10px;
        }
        .header-top {
            p {
                font-size: 13px;
            }
        }
        .header-flex {
            padding: 10px 50px;
        }
        .header-logo {
            max-width: 140px !important;
        }
        .main-menu {
            li {
                font-size: 14px;
                a {
                    font-size: 14px;
                }
            }
        }
    }
`

const MainLayout = styled.div`
    padding-top: 162px;
    transition-duration: .3s;
    @media(max-width:767px) {
        padding-top: 140px;
    }
`

const MainContent = styled.div``

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
export default Layout
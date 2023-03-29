import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"

class HeroSlider extends Component {

    render() {

        const { data } = this.props; 
        const queryContent = data.wpHomeSection

        const slideOneImage = getImage(queryContent.heroSliderV2.hsSlideOneImage.localFile.childImageSharp.gatsbyImageData)
        const slideTwoImage = getImage(queryContent.heroSliderV2.hsSlideTwoImage.localFile.childImageSharp.gatsbyImageData)
        const slideThreeImage = getImage(queryContent.heroSliderV2.hsSlideThreeImage.localFile.childImageSharp.gatsbyImageData)


        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 1000,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return(
            <SliderMain>

                <Slider {...settings}>
                    <div class="hero-slide">
                        <GatsbyImage className={"slide-background top-center"} image={slideOneImage} alt={queryContent.heroSliderV2.hsSlideOneImage.title} loading="eager" />
                        <div class="slide-content" dangerouslySetInnerHTML={{ __html: queryContent.heroSliderV2.hsSlideOneCopy}} />
                    </div>
                    <div class="hero-slide">
                        <GatsbyImage className={"slide-background"} image={slideTwoImage} alt={queryContent.heroSliderV2.hsSlideTwoImage.title} />
                        <div class="slide-content" dangerouslySetInnerHTML={{ __html: queryContent.heroSliderV2.hsSlideTwoCopy}} loading="eager" />
                    </div>
                    <div class="hero-slide">
                        <GatsbyImage className={"slide-background"} image={slideThreeImage} alt={queryContent.heroSliderV2.hsSlideThreeImage.title} />
                        <div class="slide-content" dangerouslySetInnerHTML={{ __html: queryContent.heroSliderV2.hsSlideThreeCopy}} loading="eager" />
                    </div>
                </Slider>

                <MobileHero>
                    <GatsbyImage 
                        className={"mobile-hero-background top-center"} 
                        image={slideOneImage} 
                        alt={queryContent.heroSliderV2.hsSlideOneImage.title} 
                        loading="eager" />
                    <div class="hero-content" dangerouslySetInnerHTML={{ __html: queryContent.heroSliderV2.hsSlideOneCopy}} />
                </MobileHero>

            </SliderMain>
        )

    }

}

const SliderMain = styled.section`
    .slick-slider {
        height: 80vh;
        .hero-slide {
            height: 80vh;
            position: relative;
            display: flex !important;
            justify-content: center;
            align-items: center;
            .slide-background {
                position: absolute !important;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                img {
                    height: 100%;
                    object-fit: cover;
                    object-position: bottom center;
                }
                &.top-center {
                    img {
                        object-position: top center;
                    }
                }
            }
            .slide-content {
                text-align: center;
                position: relative;
                z-index: 3;
                max-width: 800px;
                h1,
                h2 {
                    font-family: Roboto;
                    font-size: 60px;
                    font-weight: 100;
                    line-height: 1.2;
                    color: #fff;
                    text-shadow: 2px 2px 4px rgba(0,0,0,.8);
                    transition-duration: .3s;
                }
                p {
                    font-family: Roboto;
                    font-size: 24px;
                    line-height: 1.5;
                    color: #fff;
                    transition-duration: .3s;
                }
                a {
                    font-family: Roboto;
                    font-size: 24px;
                    line-height: 1.5;
                    color: #fff;
                    text-decoration: none;
                    font-family: Roboto;
                    font-size: 24px;
                    line-height: 1.5;
                    color: #fff;
                    background-color: #25afb4;
                    padding: 10px 50px;
                    border: 2px solid #fff;
                    border-radius: 50px;
                    transition-duration: .3s;
                    &:hover {
                        color: #25afb4;
                        background-color: #fff;
                    }
                    &.button-phone {
                        display: none;
                    }
                }
            }
            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,.6);
                z-index: 2;
            }
        }
        .slick-dots {
            bottom: 25px;
            z-index: 4;
            li {
                background-color: #fff;
                border-radius: 50%;
                width: 15px;
                height: 15px;
                margin: 0 10px;
                transition-duration: .3s;
                opacity: .5;
                &.slick-active {
                    opacity: 1;
                }
                button {
                    &:before {
                        content:'';
                    }
                }
            }
        }
    }
    @media(max-width:767px) {
        .slick-slider {
            display: none;
            .hero-slide {
                .slide-content {
                    padding: 0 20px;
                    h1,
                    h2 {
                        font-size: 32px;
                        line-height: 1.3;
                    }
                    p {
                        font-size: 18px;
                        line-height: 1.3;
                    }
                    a {
                        display: inline-block;
                        font-size: 16px;
                        margin: 10px auto;
                        padding: 10px 35px;
                        &.button-phone {
                            display: inline-block;
                        }
                    }
                }
            }
        }
    }
`

const MobileHero = styled.section`
    display: none;
    background-color: #25afb4;

    .mobile-hero-background {
        grid-area: 1/1;
        z-index: 0;
    }
    .hero-content {
        position: relative;
        z-index: 1;
        grid-area: 1/1;
        padding: 80px 20px 20px;
        background: rgba(0,0,0,0.6);
        text-align: center;
    }
    h1,
    h2 {
        font-family: Roboto;
        font-size: 32px;
        line-height: 1.3;
        font-weight: 100;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0,0,0,.8);
        transition-duration: .3s;
    }
    p {
        font-family: Roboto;
        font-size: 18px;
        line-height: 1.3;
        color: #fff;
        transition-duration: .3s;
    }
    a {
        display: inline-block;
        margin: 10px auto;
        padding: 10px 35px;

        border: 2px solid #fff;
        border-radius: 50px;

        font-family: Roboto;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        color: #fff;
        text-decoration: none;

        color: #25afb4;
        background-color: #fff;

        transition-duration: .3s;



        &:hover {
            color: #25afb4;
            background-color: #fff;
        }
    }
    @media(max-width:767px) {
        display: grid;
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            wpHomeSection(databaseId: {eq: 38}) {
                title
                heroSliderV2 {
                    hsSlideOneCopy
                    hsSlideOneImage {
                        title
                        localFile {
                          childImageSharp {
                              gatsbyImageData (
                                  width: 1800
                                  placeholder: BLURRED
                                  formats: [AUTO, WEBP, AVIF]
                              )
                          }
                        }
                    }
                    hsSlideTwoCopy
                    hsSlideTwoImage {
                        title
                        localFile {
                          childImageSharp {
                              gatsbyImageData (
                                  width: 1800
                                  placeholder: BLURRED
                                  formats: [AUTO, WEBP, AVIF]
                              )
                          }
                        }
                    }
                    hsSlideThreeCopy
                    hsSlideThreeImage {
                        title
                        localFile {
                          childImageSharp {
                              gatsbyImageData (
                                  width: 1800
                                  placeholder: BLURRED
                                  formats: [AUTO, WEBP, AVIF]
                              )
                          }
                        }
                    }
                }
            }
        }
      `}
      render={data => <HeroSlider data={data} {...props} />}
    />
  );
import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Slider from "react-slick"

import { RiDoubleQuotesR } from 'react-icons/ri';

const TestimonialSliderV2 = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: allWpTestimonial {
                nodes {
                    title
                    content
                }
            }
        }
    `) 

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    return(
        
        <MainSection>

            <RiDoubleQuotesR size={44}/>

            <SliderContainer>
                <Slider {...settings}>
                    {data.queryContent.nodes.map(testimonial => {
                        return(
                            <TestimonialSlide itemScope itemType="http://schema.org/Review">
                                <div dangerouslySetInnerHTML={{ __html: testimonial.content }} itemProp="reviewBody" />
                                <h3 dangerouslySetInnerHTML={{ __html: testimonial.title }} itemProp="author" />
                            </TestimonialSlide> 
                        )
                    })}
                </Slider>
            </SliderContainer>

            <div class="testimonial-link">
                <Link to={"/testimonials/"}>More Testimonials</Link>
            </div>
                
        </MainSection>
    );

}

const MainSection = styled.div`
    position: relative;
    padding: 50px;
    padding-top: 70px;
    .testimonial-link {
        width: 100%;
        text-align: center;
        a {
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
    svg {
        position: absolute;
        top: 0;
        left: calc(50% - 22px);
        padding: 5px;
        background-color: #25afb4;
        border: 2px solid #fff;
        border-radius: 50%;
        fill: #fff;
    }
    @media(max-width:767px) {
        padding-left: 0;
        padding-right: 0;
        .testimonial-link {
            a {
                font-size: 18px;
            }
        }
    }
`

const SliderContainer = styled.div`
    position: relative;
    @media(max-width:1100px) {
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
    }
`

const TestimonialSlide = styled.div`
    text-align: center;
    p {
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        font-style: italic;
        color: #000;
        opacity: .7;
        transition-duration: .3s;
    }
    h3 {
        font-family: "Roboto Slab";
        font-size: 24px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 2px;
        font-style: normal;
        color: #000;
        opacity: .9;
        transition-duration: .3s;
    }
    @media(max-width:767px) {
        p {
            font-size: 16px;
        }
        h3 {
            font-size: 20px;
        }
    }
`

export default TestimonialSliderV2
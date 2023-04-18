import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Slider from "react-slick"

import { RiDoubleQuotesR } from 'react-icons/ri';

export default () => {

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
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    return(
        
        <MainSection>

            <RiDoubleQuotesR size={44}/>

            <SliderContainer>
                {data.queryContent.nodes.map(testimonial => {
                    return(
                        <TestimonialSlide itemScope itemType="http://schema.org/Review">
                            <div dangerouslySetInnerHTML={{ __html: testimonial.content }} itemProp="reviewBody" />
                            <h3 dangerouslySetInnerHTML={{ __html: testimonial.title }} itemProp="author" />
                        </TestimonialSlide> 
                    )
                })}
            </SliderContainer>

            <div class="testimonial-link">
                <Link to={"/testimonials/"}>More Testimonials</Link>
            </div>
                
        </MainSection>
    );

}

const MainSection = styled.div`
    position: relative;
    padding: 120px 0 10px 0;
    background-color: #25afb4;
    .testimonial-link {
        position: absolute;
        bottom: 30px;
        width: 100%;
        text-align: center;
        a {
            display: inline-block;
            max-width: 320px;
            text-decoration: none;
            font-family: Roboto;
            font-size: 20px;
            line-height: 1.5;
            color: #25afb4;
            background-color: #fff;
            padding: 10px 50px;
            border: 2px solid #fff;
            border-radius: 50px;
            transition-duration: .3s;
            &:hover {
                cursor: pointer;
                color: #fff;
                background-color: #25afb4;
            }
        }
    }
    svg {
        position: absolute;
        top: 50px;
        left: calc(50% - 22px);
        padding: 5px;
        background-color: #25afb4;
        border: 2px solid #fff;
        border-radius: 50%;
        fill: #fff;
    }
    @media(max-width:767px) {
        .testimonial-link {
            a {
                font-size: 18px;
            }
        }
    }
`

const SliderContainer = styled.div`
    position: relative;
    display: grid;
    grid-auto-columns: 75%;
    grid-template-rows: 1fr;
    grid-auto-flow: column;
    gap: 15%;
    overflow-x: scroll;
    padding-bottom: 150px;

    &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.4); 
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent; 
    }

    & > div:first-child {
        margin-left: 35%;
    }
    & > div:last-child {
        margin-right: 35%;
    }

    @media(min-width:767px) {
        /* grid-auto-columns: 500px; */
    }
    @media(min-width:1200px) {
        /* grid-auto-columns: 500px; */
    }
`

const TestimonialSlide = styled.div`
    text-align: center;
    p {
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        font-style: italic;
        color: #fff;
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
        color: #fff;
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

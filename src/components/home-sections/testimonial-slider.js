import React, { Component } from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Slider from "react-slick"

class TestimonialSlider extends Component {

    render() {

        const { data } = this.props; 

        const settings = {
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
        };
    
        return(
            
            <MainSection>
    
                <SliderContainer>
                    <Slider {...settings}>
                        {data.allWpTestimonial.nodes.map(testimonial => {
                            return(
                                <TestimonialSlide>
                                    <div dangerouslySetInnerHTML={{ __html: testimonial.content }} />
                                    <h3 dangerouslySetInnerHTML={{ __html: testimonial.title }} />
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

}

const MainSection = styled.div``

const SliderContainer = styled.div``

const TestimonialSlide = styled.div``

export default props => (
    <StaticQuery
      query={graphql`
        query {
            allWpTestimonial(sort: {order: DESC})  {
                nodes {
                    title
                    content
                }
            }
        }
      `}
      render={data => <TestimonialSlider data={data} {...props} />}
    />
);
import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import HeaderMain from "../components/header-main"

const StickyHeader = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals("ScrollTrigger", ScrollTrigger)
        }
    
        let stickyTimeline = gsap.timeline({
            paused: true,
            scrollTrigger: {
              trigger: "#sticky_trigger",
              id: "sticky_trigger",
              start: "280px top",
              end: "bottom top",
              toggleActions: "play none none none",
              toggleClass: "active",
            },
        })
        stickyTimeline.to(".sticky-header", {duration: .5});
    }, [])

    return (
        <StickyContainer className={'sticky-header'}>
            <HeaderMain />
        </StickyContainer>
    )

}

const StickyContainer = styled.div`
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: #fff;
    transition-duration: .5s;
`

export default StickyHeader
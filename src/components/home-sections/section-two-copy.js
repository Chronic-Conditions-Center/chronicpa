import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const HomeSectionTwo = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpHomeSection(databaseId: {eq: 16}) {
                content
            }
        }
    `)

    return(

        <MainSection>
            <div dangerouslySetInnerHTML={{ __html: data.queryContent.content}} />
        </MainSection>
        
    )

}

const MainSection = styled.div`
    padding-right: 50px;
    h2 {
        font-family: "Roboto Slab";
        font-size: 40px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 2px;
        font-style: normal;
        color: #000;
        margin-top: 0;
        transition-duration: .3s;
    }
    p, ol {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0px;
        font-style: normal;
        line-height: 1.3;
        color: #000;
    }
    ol {
        margin-left: 50px;
    }
    @media(max-width:1100px) {
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 50px;
        text-align: center;
        padding-right: 0;
        h2 {
            font-size: 32px;
        }
        ol {
            margin-left: 0;
            li {
                list-style-position: inside;
            }
        }
    }
    @media(max-width:767px) {
        h2 {
            font-size: 28px;
        }
        p, ol {
            font-size: 18px;
        }
    }
`

export default HomeSectionTwo
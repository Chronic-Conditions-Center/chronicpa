import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const HomeSectionOne = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpHomeSection(databaseId: {eq: 629}) {
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
    background-color: #f1f1f1;
    padding: 40px 20px;
    > div {
        max-width: 1180px;
        margin: 0 auto;
    }
    hr {
        background-color: #25afb4;
        margin: 20px 0;
        max-width: 100px;
        width: 100%;
        height: 2px;
    }
    h1,
    h2 {
        font-family: "Roboto Slab";
        font-size: 28px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 2px;
        font-style: normal;
        color: #000;
        margin-top: 0;
        margin-bottom: 20px;
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
        h2 {
            font-size: 24px;
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
            font-size: 20px;
        }
        p, ol {
            font-size: 18px;
        }
    }
`

export default HomeSectionOne
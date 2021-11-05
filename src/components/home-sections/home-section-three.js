import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const HomeSectionThree = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpHomeSection(databaseId: {eq: 14}) {
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

const MainSection = styled.section`
    background-color: #25afb4;
    padding: 50px 20px;
    .flex-row {
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        .flex-col {
            width: 25%;
            padding: 0 20px;
        }
    }
    h2 {
        font-family: "Roboto Slab";
        font-size: 40px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 2px;
        font-style: normal;
        color: #fff;
        text-align: center;
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 35px;
        transition-duration: .3s;
    }
    h3 {
        font-family: "Roboto Slab";
        font-size: 32px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 2px;
        font-style: normal;
        color: #fff;
        margin-top: 0;
        text-align: center;
        transition-duration: .3s;
    }
    hr {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    p {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0px;
        font-style: normal;
        line-height: 1.3;
        color: #fff;
        text-align: center;
        transition-duration: .3s;
    }
    a {
        display: inline-block;
        text-decoration: none;
        font-family: Roboto;
        font-size: 15px;
        line-height: 1.5;
        color: #25afb4;
        background-color: #fff;
        padding: 10px 25px;
        border: 2px solid #fff;
        border-radius: 50px;
        transition-duration: .3s;
        &:hover {
            color: #fff;
            background-color: #25afb4;
        }
    }
    @media(max-width:1100px) {
        > div {
            max-width: 700px;
            width: 100%;
            margin: 0 auto;
        }
        .flex-row {
            .flex-col {
                width: 50%;
            }
        }
        h2 {
            font-size: 32px;
        }
        h3 {
            font-size: 24px;
        }
        p {
            font-size: 18px;
        }
    }
    @media(max-width:767px) {
        .flex-row {
            .flex-col {
                width: 100%;
            }
        }
        h2 {
            font-size: 28px;
        }
        h3 {
            font-size: 20px;
        }
        p {
            font-size: 16px;
        }
    }
`

export default HomeSectionThree
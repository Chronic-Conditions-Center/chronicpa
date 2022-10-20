import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const ContactSection = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpHomeSection(databaseId: {eq: 13}) {
                content
                homeContact {
                    homeContactButtonLink
                    homeContactButtonText
                    homeContactPhoneLink
                    homeContactPhoneText
                }
            }
        }
    `)

    return(

        <MainSection id={"home_contact"}>
            <Helmet>
                <script>{ " gtag('config', 'AW-10996258427/NSPpCIGUu-MDEPustvso', {'phone_conversion_number': '412-595-7332'});" }</script>
            </Helmet>
            <div class="main-col">
                <div class="section-title" dangerouslySetInnerHTML={{ __html: data.queryContent.content}} />
                {/* <form name="Free Consultation Form" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                    <input type="hidden" name="form-name" value="Free Consultation Form" aria-label="Input"/>
                    <div class="flex-form">
                        <div class="two-col">
                            <input type="text" name="first-name" placeholder="First Name" aria-label="Input" required/>
                            <input type="text" name="last-name" placeholder="Last Name" aria-label="Input" required/>
                        </div>
                        <div class="two-col">
                            <input type="text" name="phone" placeholder="Best phone number" aria-label="Input" required/>
                            <input type="email" name="email" placeholder="Email Address" aria-label="Input" required/>
                        </div>
                        <div class="full">
                            <textarea name="symptoms" placeholder="Describe your Main Symptoms" aria-label="Input"></textarea>
                        </div>
                        <div class="submit">
                            <button type="submit" name="submit" class={"submit"}  aria-label="Send">Schedule a Consultation</button>
                        </div>
                    </div>
                </form> */}
                <div class="schedule-button">
                    <a id="home_button_cta" class="button-link" href={data.queryContent.homeContact.homeContactButtonLink} target="_blank">{data.queryContent.homeContact.homeContactButtonText}</a>
                    <a id="home_phone_cta" class="button-phone" href={data.queryContent.homeContact.homeContactPhoneLink}>{data.queryContent.homeContact.homeContactPhoneText}</a>
                </div>
            </div>
        </MainSection>
        
    )

}

const MainSection = styled.section`
    background-color: #f1f1f1;
    padding: 100px 20px;
    .main-col {
        max-width: 1180px;
        width: 100%;
        margin: 0 auto;

    }
    h2 {
        font-family: "Roboto Slab";
        font-size: 40px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 2px;
        font-style: normal;
        color: #000;
        margin-top: 0;
        text-align: center;
        transition-duration: .3s;
    }
    .flex-form {
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
        .two-col {
            width: 100%;
            display: flex;
            justify-content: space-between;
            input {
                font-family: Roboto;
                font-size: 18px;
                padding-top: 0;
                padding-bottom: 0;
                height: 55px;
                background-color: #ffffff;
                color: #858a9f;
                border-width: 1px 1px 1px 1px;
                border-color: #eaeaea;
                border-radius: 0px;
                border: 1px solid #d2d2d2;
                padding: 8px 15px;
                width: calc(50% - 10px);
                margin-bottom: 20px;
            }
        }
        .full {
            width: 100%;
            textarea {
                font-family: Roboto;
                font-size: 18px;
                padding-top: 0;
                padding-bottom: 0;
                height: 55px;
                background-color: #ffffff;
                color: #858a9f;
                border-width: 1px 1px 1px 1px;
                border-color: #eaeaea;
                border-radius: 0px;
                border: 1px solid #d2d2d2;
                padding: 8px 15px;
                width: 100%;
                margin-bottom: 20px;
                min-height: 150px;
            }
        }
        .submit {
            width: 100%;
            text-align: center;
            button {
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
    }
    .schedule-button {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
            display: inline-block;
            max-width: 340px;
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
            &.button-phone {
                display: none;
            }
        }
    }
    @media(max-width:1100px) {
        .main-col {
            max-width: 700px;
        }
        h2 {
            font-size: 32px;
        }
    }
    @media(max-width:767px) {
        h2 {
            font-size: 28px;
        }
        .flex-form {
            .two-col {
                flex-wrap: wrap;
                input {
                    width: 100%;
                }
            }
            .submit {
                button {
                    font-size: 18px;
                    padding: 10px 25px;
                }
            }
        }
        .schedule-button {
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
`

export default ContactSection
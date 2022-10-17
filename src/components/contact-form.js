import React, { Component} from "react"
import styled from 'styled-components'

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.gtag("conversion", "click", { send_to: ["AW-10996258427/c_uvCKmDu-MDEPustvso"]})
    }    

    render() {
        return (
            <FormContainer>
                <h2>How Can We Help?</h2>
                <form name="Free Consultation Form" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
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
                            <button id="Contact_Submit" type="submit" name="submit" class={"submit"} onClick={this.handleClick} aria-label="Send">Schedule a Consultation</button>
                        </div>
                    </div>
                </form>
            </FormContainer>
        )
    }
}

const FormContainer = styled.div`
    width: 50%;
    padding-left: 30px;
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
`

export default ContactForm
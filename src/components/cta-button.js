import React, { Component} from "react"
import PropTypes from "prop-types"

class CtaButton extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.gtag('config', 'AW-10996258427/NSPpCIGUu-MDEPustvso', {

            'phone_conversion_number': '412-595-7332'
        
          });
    } 

    render() {
        const linkValue = this.props.linkValue
        const textValue = this.props.textValue
        return (
            <a href={linkValue} onClick={this.handleClick}>
                {textValue}
            </a>
        )
    }

}

CtaButton.propTypes = {
    linkValue: PropTypes.node.isRequired,
    textValue: PropTypes.node.isRequired,
  }

export default CtaButton
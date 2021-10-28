// src/layouts/ContactSection/ContactSection.data.js

module.exports = () => {
    return `
    ... on WpPage_Custompagebuilder_PageBuilder_ContactSection {
        fieldGroupName
        contactSectionId
        contactTopPadding
        contactBottomPadding
        contactColorScheme
        contactImage {
          title
          localFile {
            childImageSharp {
              gatsbyImageData (
                  width: 900
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        contactAddress
        contactPhoneLabel
        contactPhoneLink
        contactFaxLabel
        contactFaxLink
        contactEmail
        contactDirectionsLink
        contactGoogleMapEmbed
      }
    `
}
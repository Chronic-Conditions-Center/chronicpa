// src/layouts/GallerySlideshow/GallerySlideshow.data.js

module.exports = () => {
    return `
        ... on WpPage_Custompagebuilder_PageBuilder_AnchorButtons {
            fieldGroupName
            anchorSectionId
            anchorTopPadding
            anchorBottomPadding
            anchorColorScheme
            anchorSectionTitle
            anchorButtonMap {
                anchorButtonLabel
                anchorId
            }
        }
    `
}
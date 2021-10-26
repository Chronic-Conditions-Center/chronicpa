// src/layouts/GallerySlideshow/GallerySlideshow.data.js

module.exports = () => {
    return `
        ... on WpPage_Custompagebuilder_PageBuilder_GallerySlideshow {
            fieldGroupName
            gallerySectionId
            galleryTopPadding
            galleryColorScheme
            galleryBottomPadding
            slideshowImages {
                title
                sourceUrl
                original: localFile {
                    childImageSharp {
                        gatsbyImageData (
                            width: 1200
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                thumbnail: localFile {
                    childImageSharp {
                        gatsbyImageData (
                            width: 250
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    `
}
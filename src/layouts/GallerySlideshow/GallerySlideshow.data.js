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
                        fluid(maxWidth: 1200) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                thumbnail: localFile {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                          }
                    }
                }
            }
        }
    `
}
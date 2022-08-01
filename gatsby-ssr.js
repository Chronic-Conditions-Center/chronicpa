import React from "react";

export function onRenderBody({ setHeadComponents, setPostBodyComponents }) {
 setHeadComponents([
    <script type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html:`
            {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "CHRONIC PA",
                "image": "https://chronicpa.com/static/59c7e96f84da5b9debf7adfbfa94836e/1d5ed/ccc-logo.avif",
                "url": "https://chronicpa.com/",
                "telephone": "412-595-7332",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1699 Washington Rd. Suite 401",
                  "addressLocality": "Pittsburgh",
                  "addressRegion": "PA",
                  "postalCode": "15228",
                  "addressCountry": "US"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 40.349151,
                  "longitude": -80.05130919999999
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday"
                  ],
                  "opens": "08:00",
                  "closes": "16:00"
                },
                "sameAs": [
                  "https://www.facebook.com/cccpa1",
                  "https://www.instagram.com/kevinsmithdc",
                  "https://www.youtube.com/c/KevinSmithdc",
                  "https://www.linkedin.com/in/ksmithdc/",
                  "https://www.pinterest.com/ksmithdc/_saved/"
                ] 
              }
        `
        }}
    ></script>,
  ]);

  setPostBodyComponents([
    <script id="analyticsId" type="text/javascript" src="https://analytics-5900.kxcdn.com/analytics.js" data-id="SWtwQmJVNTZRVzVqZW01VlZHNDFWVWhUTmxsMFkzYzlQU0k9" async></script>,
  ]);

}
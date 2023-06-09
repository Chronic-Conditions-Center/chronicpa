import React from "react";

export function onRenderBody({ setHeadComponents, setPostBodyComponents }) {
 setHeadComponents([
    <script type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html:`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Chronic Conditions Center",
              "image": "https://chronicpa.com/static/59c7e96f84da5b9debf7adfbfa94836e/1d5ed/ccc-logo.avif",
              "url": "https://chronicpa.com/",
              "description": "Chronic Conditions Center is an interdisciplinary clinic that combines chiropractic and science-based nutrition. We offer a variety of clinical approaches because there is no “one size fits all” when it comes to healthcare. We empower you to optimize your health with the latest technologies in physical & functional medicine. Our clinic utilizes an integrated approach for treating a variety of chronic health issues such as joint pain, weight loss, peripheral neuropathy, and low thyroid. We offer chiropractic, functional medicine, spinal decompression, laser, shockwave therapy, and more. Contact our clinic today to see what our FDA-cleared treatments can do to change your life. Call us at 412-595-7332.",
              "telephone": "412-595-7332",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1699 Washington Rd., Suite 401",
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
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Wednesday",
                  "Thursday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Tuesday",
                "opens": "08:00",
                "closes": "12:30"
              }],
              "sameAs": [
                "https://www.facebook.com/cccpa1",
                "https://twitter.com/kevinsmithdc",
                "https://www.instagram.com/kevinsmithdc",
                "https://www.youtube.com/c/KevinSmithdc",
                "https://www.linkedin.com/in/ksmithdc/",
                "https://www.pinterest.com/ksmithdc/_saved/"
              ] 
            }
        `
        }}
    ></script>,
    <script async src="//404532.tctm.co/t.js"></script>,
  ]);

  setPostBodyComponents([
    <script id="analyticsId" type="text/javascript" src="https://analytics-5900.kxcdn.com/analytics.js" data-id="SWtwQmJVNTZRVzVqZW01VlZHNDFWVWhUTmxsMFkzYzlQU0k9" async></script>,
  ]);

}
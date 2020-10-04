import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{`DMD - Project 5 - Cure My Depression`}</title>
        <meta name="title" content="Frontend developer Deimantas Butėnas" />
        <meta name="description" content="A portfolio website of Deimantas Butėnas where you can see his work!" />
        <meta name="keywords" content="web development, frontend, portfolio, design, web design" />
        <link rel="canonical" href="https://www.deimantasbutenas.lt/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deimantasbutenas.lt/" />
        <meta property="og:title" content="Frontend developer Deimantas Butėnas" />
        <meta property="og:description" content="A portfolio website of Deimantas Butėnas where you can see his work!" />
        <meta property="og:image" content="https://www.deimantasbutenas.lt/meta-og-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.deimantasbutenas.lt/" />
        <meta property="twitter:title" content="Frontend developer Deimantas Butėnas" />
        <meta property="twitter:description" content="A portfolio website of Deimantas Butėnas where you can see his work!" />
        <meta property="twitter:image" content="https://www.deimantasbutenas.lt/meta-og-image.png" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

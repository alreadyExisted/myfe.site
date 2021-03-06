import React from 'react'

export default class HTML extends React.Component {
  render() {
    const { htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents } = this.props
    return (
      <html prefix="og: http://ogp.me/ns#" {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {headComponents}
        </head>
        <body {...bodyAttributes} className="light">
          <noscript key="noscript">Your browser does not support JavaScript!</noscript>
          {preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    )
  }
}

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    seo: site {
      siteMetadata {
        title
        author
        description
        siteUrl
      }
    }
    file: allFile(filter: { name: { eq: "og-image" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const SEO = ({ title, description, slug, image }) => {
  const {
    seo: { siteMetadata },
    file: {
      edges: [
        {
          node: { publicURL }
        }
      ]
    }
  } = useStaticQuery(query)
  const metaDescription = description || siteMetadata.description
  const url = slug === '/' || slug === '' ? siteMetadata.siteUrl : `${siteMetadata.siteUrl}/${slug}`

  return (
    <Helmet
      htmlAttributes={{ lang: 'ru' }}
      {...(title
        ? {
            titleTemplate: `%s — ${siteMetadata.title}`,
            title
          }
        : {
            title: `${siteMetadata.title} — A blog by Vitaliy Polyansky`
          })}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:url',
          content: url
        },
        {
          property: 'og:title',
          content: title || siteMetadata.title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:image',
          content: image || `${siteMetadata.siteUrl}/${publicURL}`
        }
      ]}
      link={[
        {
          ref: 'canonical',
          href: url
        }
      ]}
    />
  )
}

SEO.defaultProps = {
  slug: ''
}

export { SEO }

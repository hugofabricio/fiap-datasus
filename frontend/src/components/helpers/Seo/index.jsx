import React from 'react'
import { Helmet } from 'react-helmet'

import useSiteMetadata from '@hooks/use-site-metadata'
import { string, object, arrayOf } from 'prop-types'

const Seo = ({ lang, title, description, meta, image }) => {
  const siteMetadata = useSiteMetadata()

  const defaultTitle = siteMetadata?.title
  const metaDescription = description || siteMetadata.description
  const ogImage = `${siteMetadata.siteUrl}/${image || siteMetadata.ogImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `${defaultTitle} | %s` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: ogImage
        }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `pt-br`,
  description: ``,
  meta: [],
  image: ``
}

Seo.propTypes = {
  lang: string,
  title: string.isRequired,
  description: string,
  meta: arrayOf(object),
  image: string
}

export default Seo

import React from 'react'

import { string, node, number, oneOfType } from 'prop-types'

import * as S from './styles'

const SectionHeading = ({ className, children, ...rest }) => (
  <S.SectionBlock
    as="header"
    className={`section-heading ${className}`}
    {...rest}
  >
    {children}
  </S.SectionBlock>
)

SectionHeading.defaultProps = {
  className: ''
}

SectionHeading.propTypes = {
  className: string,
  children: node,
  bgColor: string,
  zIndex: oneOfType([number, string]),
  paddingTop: oneOfType([number, string]),
  paddingRight: oneOfType([number, string]),
  paddingBottom: oneOfType([number, string]),
  paddingLeft: oneOfType([number, string]),
  marginTop: oneOfType([number, string]),
  marginRight: oneOfType([number, string]),
  marginBottom: oneOfType([number, string]),
  marginLeft: oneOfType([number, string])
}

export default SectionHeading

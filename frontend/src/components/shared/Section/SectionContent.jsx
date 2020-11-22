import React from 'react'

import { string, node, number, oneOfType } from 'prop-types'

import * as S from './styles'

const SectionContent = ({ className, children, ...rest }) => (
  <S.SectionBlock
    as="article"
    className={`section-content ${className}`}
    {...rest}
  >
    {children}
  </S.SectionBlock>
)

SectionContent.defaultProps = {
  className: ''
}

SectionContent.propTypes = {
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

export default SectionContent

import React from 'react'

import { string, node, number, oneOfType } from 'prop-types'

import * as S from './styles'

const SectionWrapper = ({ className, children, ...rest }) => (
  <S.SectionBlock
    as="section"
    className={`section-wrapper ${className}`}
    {...rest}
  >
    {children}
  </S.SectionBlock>
)

SectionWrapper.defaultProps = {
  className: ''
}

SectionWrapper.propTypes = {
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

export default SectionWrapper

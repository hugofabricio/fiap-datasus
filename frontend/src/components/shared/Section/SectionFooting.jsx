import React from 'react'

import { string, node, number, oneOfType } from 'prop-types'

import * as S from './styles'

const SectionFooting = ({ className, children, ...rest }) => (
  <S.SectionBlock
    as="footer"
    className={`section-footing ${className}`}
    {...rest}
  >
    {children}
  </S.SectionBlock>
)

SectionFooting.defaultProps = {
  className: ''
}

SectionFooting.propTypes = {
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

export default SectionFooting

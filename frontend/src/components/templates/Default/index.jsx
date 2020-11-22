import React from 'react'

import Footer from '@shared/Footer'
import Header from '@shared/Header'
import { GlobalStyles, theme } from '@styles'
import { node } from 'prop-types'
import { ThemeProvider } from 'styled-components'

import * as S from './styles'

const DefaultLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <S.Wrapper role="main">{children}</S.Wrapper>
    <Footer />
  </ThemeProvider>
)

DefaultLayout.propTypes = {
  children: node.isRequired
}

export default DefaultLayout

import React from 'react'
import ScrollLock from 'react-scrolllock'

import { AppProvider } from '@contexts/appContext'
import Footer from '@shared/Footer'
import Header from '@shared/Header'
import { GlobalStyles, theme } from '@styles'
import Doc from '@web/Doc'
import { node } from 'prop-types'
import { ThemeProvider } from 'styled-components'

import * as S from './styles'

const DefaultLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <GlobalStyles />
      <Header />
      <ScrollLock isActive={false}>
        <S.Wrapper role="main">{children}</S.Wrapper>
      </ScrollLock>
      <Footer />
      <Doc />
    </AppProvider>
  </ThemeProvider>
)

DefaultLayout.propTypes = {
  children: node.isRequired
}

export default DefaultLayout

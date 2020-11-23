import media from '@utils/media'
import { rgba } from 'polished'
import styled from 'styled-components'

export const ModalDialogContent = styled.div`
  position: relative;
  z-index: 99999;
  width: 100%;
  min-height: 100px;
  pointer-events: auto;
  background-clip: padding-box;
  background-color: ${({ theme: { colors } }) => colors.neutral0};
  box-shadow: 0 40px 40px -20px ${({ theme: { colors } }) => rgba(colors.neutral700, 0.25)};
  outline: 0;
  padding: 48px;
  border-radius: 20px;

  ${media.lessThan('sm')`
    padding: 24px;
  `}
`

export const ModalDialog = styled.div`
  display: flex;
  position: relative;
  width: auto;
  transition: transform 0.3s ease-out;
  pointer-events: none;
  margin: 16px;
  align-items: center;
  min-height: calc(100% - 64px);

  ${media.greaterThan('sm')`
    max-width: 640px;
    margin: 32px auto;
  `}

  ${media.lessThan('sm')`
    max-width: 80%;
    margin: 0 auto;
  `}
`

export const DocWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9998;
  transition: opacity 0.15s linear;
  outline: 0;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: ${({ theme: { colors } }) => rgba(colors.neutral700, 0.9)};
`
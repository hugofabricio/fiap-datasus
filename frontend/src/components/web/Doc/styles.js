import Button from '@shared/Button'
import media from '@utils/media'
import { rem } from 'polished'
import { rgba } from 'polished'
import styled from 'styled-components'

export const ModalClose = styled(Button)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 100%;
  position: absolute;
  top: -15px;
  right: -15px;
`

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
    max-width: 90%;
    margin: 0 auto;
    padding: 32px 0;
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

export const DocItem = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`

export const DocReq = styled.div`
  background-color: ${({ theme: { colors } }) => colors.neutral800};
  padding: 6px 12px;
  letter-spacing: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  span {
    &.method {
      color: ${({ theme: { colors } }) => colors.teal500};
    }

    &.url {
      color: ${({ theme: { colors } }) => colors.yellow500};
    }

    &.param {
      color: ${({ theme: { colors } }) => colors.red500};
    }
  }
`

export const DocRes = styled.div`
  background-color: ${({ theme: { colors } }) => colors.neutral750};
  padding: 12px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const DocCode = styled.pre`
  font-size: ${rem(12)};

  ${media.greaterThan('sm')`
    max-height: 200px;
    overflow-y: auto;
  `}
`

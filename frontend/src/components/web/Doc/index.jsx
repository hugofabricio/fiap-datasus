import React, { useRef, useContext } from 'react'

import { AppContext } from '@contexts/appContext'
import useEscKeyPress from '@hooks/use-esc-key-press'
import useOnClickOutside from '@hooks/use-on-click-outside'
import Text from '@shared/Text'

import * as S from './styles'

const Doc = () => {
  const ref = useRef(null)
  const { modalState, setModalState } = useContext(AppContext)

  useOnClickOutside(ref, () => setModalState(false))
  useEscKeyPress(() => setModalState(false))

  return (
    <>
      <S.DocWrapper isOpen={modalState} ref={ref} className="overlay">
        <S.ModalDialog>
          <S.ModalDialogContent>
            <Text as="h2" size={24} weight={600}>
              Documentação
            </Text>
          </S.ModalDialogContent>
        </S.ModalDialog>
      </S.DocWrapper>
    </>
  )
}

export default Doc

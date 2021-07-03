import { Close } from '@styled-icons/material-outlined'
import { useEffect, useState, useCallback } from 'react'
import * as S from './styles'

export type ModalProps = {
  children?: React.ReactNode
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  title?: string
}

const Modal = ({ isOpen, setIsOpen, title, children }: ModalProps) => {
  const [modal, setModal] = useState<HTMLDivElement | null>(null)

  const onDialog = useCallback((node) => {
    if (node !== null) {
      setModal(node)
    }
  }, [])

  useEffect(() => {
    if (modal == null) {
      return
    }

    modal
      .getRootNode()
      .addEventListener('keydown', handleKeyDown as EventListener, true)
    return () =>
      modal
        .getRootNode()
        .removeEventListener('keydown', handleKeyDown as EventListener, true)
  })

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <S.Overlay isOpen={isOpen} aria-hidden={!isOpen}>
      <S.Modal
        ref={onDialog}
        isOpen={isOpen}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
      >
        <S.Wrapper>
          <S.CloseButton onClick={() => setIsOpen(false)} role="button">
            <Close aria-label="close dialog box" />
          </S.CloseButton>
          <S.Header>
            <S.Title>{title}</S.Title>
          </S.Header>
          <S.Content>{children} </S.Content>
        </S.Wrapper>
      </S.Modal>
    </S.Overlay>
  )
}

export default Modal

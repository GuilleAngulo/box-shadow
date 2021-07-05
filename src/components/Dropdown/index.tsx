import { useState, forwardRef, useImperativeHandle, Ref } from 'react'

import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
  arrow?: boolean
}

export type DropdownHandle = {
  closeDropdown: () => void
}

const Dropdown = (
  { title, children, arrow = false }: DropdownProps,
  forwardRef: Ref<DropdownHandle>
) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeDropdown = () => setIsOpen(false)

  useImperativeHandle(forwardRef, () => {
    return {
      closeDropdown
    }
  })

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen((prevState) => !prevState)}>
        {title}
        {arrow && (
          <S.Chevron size={24} isOpen={isOpen} aria-label="dropdown arrow" />
        )}
      </S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay
        onClick={() => setIsOpen((prevState) => !prevState)}
        aria-hidden={!isOpen}
      />
    </S.Wrapper>
  )
}
export default forwardRef(Dropdown)

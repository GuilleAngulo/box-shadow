import { useState, forwardRef, useImperativeHandle, Ref } from 'react'
import { ChevronUp, ChevronDown } from '@styled-icons/boxicons-regular'

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
          <S.Icon>
            {!isOpen ? <ChevronDown width={24} /> : <ChevronUp width={24} />}
          </S.Icon>
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

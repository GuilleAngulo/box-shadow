import { useEffect, useRef, useState } from 'react'
import { useBoxShadow } from 'hooks/use-box-shadow'

import ToolItem from 'components/ToolItem'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { LayerPlus as AddIcon } from '@styled-icons/boxicons-regular'
import * as S from './styles'

const Tools = () => {
  const { boxShadow = [], addBoxShadow, loading } = useBoxShadow()

  const [scroll, setScroll] = useState(false)
  const addShadowRef = useRef<HTMLLIElement>(null)

  const scrollToBottom = () => {
    if (addShadowRef.current && scroll) {
      addShadowRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAdd = () => {
    addBoxShadow()
    setScroll(true)
  }

  useEffect(() => {
    scrollToBottom()
    setScroll(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll])

  return (
    <S.Wrapper>
      <S.ToolsGrid>
        <TransitionGroup component={null}>
          {boxShadow.map((item, index) => {
            const props = {
              horizontalOffset: item?.horizontalOffset,
              verticalOffset: item?.verticalOffset,
              blurRadius: item?.blurRadius,
              spreadRadius: item?.spreadRadius,
              color: item?.color,
              inset: item?.inset,
              visibility: item?.visible
            }

            return (
              <CSSTransition
                key={item.id}
                timeout={200}
                classNames="item"
                exit={!loading}
                enter={!loading}
              >
                <ToolItem index={index} {...props} />
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <S.Add
          role="button"
          aria-label="create new box shadow"
          ref={addShadowRef}
          onClick={handleAdd}
        >
          <AddIcon width={50} />
        </S.Add>
      </S.ToolsGrid>
    </S.Wrapper>
  )
}

export default Tools

import { useBoxShadow } from 'hooks/use-box-shadow'
import ShadowTool from 'components/ShadowTool'

import { AddToQueue as AddIcon } from '@styled-icons/boxicons-regular'

import * as S from './styles'
import { useMemo } from 'react'

const Tools = () => {
  const { boxShadow = [], addBoxShadow } = useBoxShadow()

  const range = useMemo(() => {
    const output = []

    for (let i = 0; i < boxShadow.length; i++) {
      output.push(i)
    }

    return output
  }, [boxShadow])

  return (
    <S.Wrapper>
      <S.ToolsWrapper>
        <>
          {range.map((index) => (
            <ShadowTool key={index} index={index} />
          ))}
        </>
        <S.Add
          role="button"
          aria-label="create new box shadow"
          onClick={() => addBoxShadow()}
        >
          <AddIcon width={50} />
        </S.Add>
      </S.ToolsWrapper>
    </S.Wrapper>
  )
}

export default Tools

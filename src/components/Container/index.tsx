import Code from 'components/Code'
import Shadow from 'components/Shadow'
import Tools from 'components/Tools'

import * as S from './styles'

const Container = () => {
  return (
    <S.Wrapper>
      <S.Panel>
        <S.Display>
          <Shadow />
          <Code />
        </S.Display>
        <Tools />
      </S.Panel>
    </S.Wrapper>
  )
}

export default Container

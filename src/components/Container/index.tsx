import Terminal from 'components/Terminal'
import Shadow from 'components/Shadow'
import Tools from 'components/Tools'

import * as S from './styles'
import TopTools from 'components/TopTools'

const Container = () => {
  return (
    <S.Wrapper>
      <TopTools />
      <S.Panel>
        <S.Display>
          <Shadow />
          <Terminal />
        </S.Display>
        <Tools />
      </S.Panel>
    </S.Wrapper>
  )
}

export default Container

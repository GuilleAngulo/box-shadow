import Terminal from 'components/Terminal'
import Shadow from 'components/Shadow'
import Tools from 'components/Tools'

import * as S from './styles'
import TopTools from 'components/TopTools'
import ShapeTool from 'components/ShapeTool'

const Container = () => {
  return (
    <S.Wrapper>
      <TopTools />
      <S.Panel>
        <S.Display>
          <Shadow />
          <div>
            <ShapeTool />
            <Terminal />
          </div>
        </S.Display>
        <Tools />
      </S.Panel>
    </S.Wrapper>
  )
}

export default Container

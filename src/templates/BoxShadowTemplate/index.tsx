import Terminal from 'components/Terminal'
import Shadow from 'components/Shadow'
import Tools from 'components/Tools'
import ShapeTool from 'components/ShapeTool'

import * as S from './styles'

import { Preset } from 'types'

export type HomeTemplateProps = {
  boxShadow?: Preset
}

const HomeTemplate = ({ boxShadow }: HomeTemplateProps) => {
  return (
    <S.Wrapper>
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

export default HomeTemplate

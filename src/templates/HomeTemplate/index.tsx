import Terminal from 'components/Terminal'
import Shadow from 'components/Shadow'
import Tools from 'components/Tools'

import * as S from './styles'
import TopTools from 'components/TopTools'
import ShapeTool from 'components/ShapeTool'
import { Preset } from 'types'

export type HomeTemplateProps = {
  featured?: Preset
}

const HomeTemplate = ({ featured }: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <TopTools featured={featured} />
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

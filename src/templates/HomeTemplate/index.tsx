import Terminal from 'components/Terminal'
import Shadow from 'components/Shadow'
import Tools from 'components/Tools'

import * as S from './styles'
import TopTools from 'components/TopTools'
import ShapeTool from 'components/ShapeTool'
import { AuthoredPreset } from 'types'

export type HomeTemplateProps = {
  featured?: AuthoredPreset
}

const HomeTemplate = ({ featured }: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <TopTools featured={featured} />
      <S.Panel>
        <S.Display>
          {/* <TopTools featured={featured} /> */}
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

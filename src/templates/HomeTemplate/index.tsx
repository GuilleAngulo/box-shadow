import Terminal from 'components/Terminal'
import Shadow from 'components/Shadow'
import Tools from 'components/Tools'

import * as S from './styles'
import TopTools from 'components/TopTools'
import ShapeTool from 'components/ShapeTool'
import { AuthoredPreset } from 'types'
import { BoxShadowProvider } from 'hooks/use-box-shadow'

export type HomeTemplateProps = {
  featured?: AuthoredPreset
}

const HomeTemplate = ({ featured }: HomeTemplateProps) => {
  return (
    <S.Wrapper>
      <BoxShadowProvider>
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
      </BoxShadowProvider>
    </S.Wrapper>
  )
}

export default HomeTemplate

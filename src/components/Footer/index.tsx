import Link from 'next/link'

import { Github } from '@styled-icons/boxicons-logos'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Info>
      {/* &copy; {new Date().getFullYear()}  */}
      <Link href="https://github.com/GuilleAngulo/box-shadow">
        <a target="_blank" rel="noreferrer">
          <span>
            <Github size={18} />
            Box Shadow Club
          </span>
        </a>
      </Link>
      |
      <p>
        ⛏️ Built by{' '}
        <Link href="https://github.com/GuilleAngulo">
          <a target="_blank" rel="noreferrer">
            Guillermo Angulo
          </a>
        </Link>
      </p>
    </S.Info>
  </S.Wrapper>
)

export default Footer

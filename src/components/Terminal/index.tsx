import { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { stringify, prettify, stringifyTerminal } from 'utils/helpers'
import { useBoxShadow } from 'hooks/use-box-shadow'

import * as S from './styles'
import { ContentCopy } from '@styled-icons/material-outlined'
import { ShadowProps } from 'types'

export type TerminalProps = {
  initialBoxShadow?: ShadowProps[]
}

const Terminal = ({ initialBoxShadow }: TerminalProps) => {
  const [copied, setCopied] = useState(false)
  const { boxShadow = [] } = useBoxShadow()

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(prettify(stringify(boxShadow)))
      setCopied(true)
      /** After 5 seconds, allow to copy again */
      setTimeout(() => setCopied(false), 5000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <S.Wrapper aria-label="CSS Snippet">
      <S.Language>CSS</S.Language>
      <S.CopyWrapper onClick={handleCopyCode} role="button">
        {copied ? (
          <span>Copied ✓</span>
        ) : (
          <ContentCopy size={20} aria-label="Copy Code" />
        )}
      </S.CopyWrapper>
      <Highlight
        {...defaultProps}
        code={prettify(stringifyTerminal(boxShadow || initialBoxShadow, true))}
        language="css"
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <S.Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <S.Line key={i} {...getLineProps({ line, key: i })}>
                <S.LineContent>
                  {line.map((token, key) =>
                    token.content === 'rgba' ? (
                      <S.RGBA
                        key={key}
                        {...getTokenProps({ token, key })}
                        alpha={boxShadow[i]?.color.alpha ?? 0}
                        blue={boxShadow[i]?.color.blue ?? 0}
                        green={boxShadow[i]?.color.green ?? 0}
                        red={boxShadow[i]?.color.red ?? 0}
                      />
                    ) : (
                      <span key={key} {...getTokenProps({ token, key })} />
                    )
                  )}
                </S.LineContent>
              </S.Line>
            ))}
          </S.Pre>
        )}
      </Highlight>
    </S.Wrapper>
  )
}

export default Terminal

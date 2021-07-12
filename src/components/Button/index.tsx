import Spinner from 'components/Spinner'
import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  variant?: boolean
  icon?: JSX.Element
  loading?: boolean
  isActive?: boolean
  error?: string
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    variant = false,
    loading = false,
    isActive = false,
    error,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    variant={variant}
    isActive={isActive}
    error={error}
    ref={ref}
    {...props}
  >
    {!!icon && (loading ? <Spinner color="white" /> : icon)}
    {!icon && loading && <Spinner color="white" />}
    {!!error && <S.Error title={error} />}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)

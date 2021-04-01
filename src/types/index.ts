export type RGBAProps = {
  red: number
  green: number
  blue: number
  alpha: number
}

export type ShadowProps = {
  horizontalOffset: number
  verticalOffset: number
  blurRadius: number
  spreadRadius: number
  color: RGBAProps
  inset?: boolean
}

export type AnimationDirection =
  | 'normal'
  | 'alternate'
  | 'reverse'
  | 'alternate-reverse'
  | 'initial'
  | 'inherit'

export type CubicBezier = {
  x1: number
  y1: number
  x2: number
  y2: number
}

export type Steps = {
  number: number
  position: 'start' | 'end'
}

export type TimingFunction =
  | 'ease'
  | 'ease-out'
  | 'ease-in'
  | 'ease-in-out'
  | 'linear'
  | 'step-start'
  | 'step-end'
  | Steps
  | CubicBezier

export type IterationCount = number | 'infinite' | 'initial' | 'inherit'

export type FillMode =
  | 'none'
  | 'forwards'
  | 'backwards'
  | 'both'
  | 'initial'
  | 'inherit'

export type AnimationDuration = number | 'initial' | 'inherit'

export type PlayState = 'paused' | 'running' | 'initial' | 'inherit'

export type AnimationProps = {
  duration?: AnimationDuration
  timingFunction?: TimingFunction
  delay?: number
  direction?: AnimationDirection
  iterationCount?: IterationCount
  fillMode?: FillMode
  playState?: PlayState
}

export type Keyframe = {
  progress?: number[]
  boxShadow?: ShadowProps[]
}

export type BoxShadowKeyProps =
  | 'horizontalOffset'
  | 'verticalOffset'
  | 'blurRadius'
  | 'spreadRadius'
  | 'inset'
  | 'color'
  | 'opacity'

export type Shape = 'square' | 'circle'

export type Mode = 'light' | 'dark'

export type Author = {
  name?: string
  link?: string
  photo?: string
}

export type Preset = {
  name: string
  boxShadow: ShadowProps[]
  shape: Shape
  theme: Mode
  author?: string
}

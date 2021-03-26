import { useState } from 'react'
import Image from 'next/image'

import Button from 'components/Button'
import Modal from 'components/Modal'

import * as S from './styles'
import { Settings } from '@styled-icons/material-outlined'
import {
  simplePreset,
  neumorphismPreset,
  ringsPreset,
  ledsPreset,
  eclipsePreset
} from 'utils/shadow'
import { useBoxShadow } from 'hooks/use-box-shadow'
import { Preset } from 'types'

const PresetModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { loadPreset } = useBoxShadow()
  const items = [
    { name: 'Simple', img: '/img/simple.svg', preset: simplePreset },
    {
      name: 'Neumorphism',
      img: '/img/neumorphism.svg',
      preset: neumorphismPreset
    },
    { name: 'Rings', img: '/img/rings.svg', preset: ringsPreset },
    { name: 'Leds', img: '/img/leds.svg', preset: ledsPreset },
    { name: 'Ecplipse', img: '/img/eclipse.svg', preset: eclipsePreset }
  ]

  const handleClick = (preset: Preset) => {
    loadPreset(preset)
    setIsOpen(false)
  }

  return (
    <S.Wrapper>
      <Button
        size="small"
        icon={<Settings />}
        minimal
        aria-label="add preset configurations"
        onClick={() => setIsOpen(true)}
      />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Choose a preset:">
        <S.ItemsWrapper>
          {items.map((item) => (
            <S.Item
              role="button"
              aria-label={`select preset ${item.name}`}
              key={item.name}
              onClick={() => handleClick(item.preset)}
            >
              <Image src={item.img} width={150} height={150} />
              {item.name}
            </S.Item>
          ))}
        </S.ItemsWrapper>
      </Modal>
    </S.Wrapper>
  )
}
export default PresetModal

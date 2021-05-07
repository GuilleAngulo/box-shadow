import { useEffect, useState } from 'react'

import {
  BoxShadowAuthorProps,
  getAllBoxShadowsByUser
} from 'services/boxShadows'
import { useAuth } from 'hooks/use-auth'

import Button from 'components/Button'
import Modal, { ModalProps } from 'components/Modal'
import CollectionItem from 'components/CollectionItem'

import mock from './mock'
import * as S from './styles'
import { Refresh } from '@styled-icons/material-outlined'

const mock6 = mock(93)

export type LoadDialogProps = Omit<ModalProps, 'children' | 'title'>

const LoadDialog = ({ isOpen, setIsOpen }: LoadDialogProps) => {
  const { user } = useAuth()
  const [boxShadowsList, setBoxShadowsList] = useState<
    BoxShadowAuthorProps[] | null
  >([])
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setIsOpen(false)
  }

  const loadBoxShadowList = () => {
    if (user) {
      setLoading(true)
      // setBoxShadowsList(mock6 as BoxShadowAuthorProps[])
      //setTimeout(() => setLoading(false), 500)
      getAllBoxShadowsByUser(user.id)
        .then(({ data, error }) => {
          setLoading(false)
          if (error) throw error
          if (data && Array.isArray(data)) {
            setBoxShadowsList(data)
          }
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    //setLoading(true)
    loadBoxShadowList()
  }, [user])

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Your collection">
      <S.Content>
        {/* <S.Info>Load / Delete one of your designs:</S.Info> */}
        <S.Grid>
          {loading
            ? [...new Array(6)].map((_, i) => (
                <S.SkeletonItem key={i}>
                  <S.SkeletonTitle />
                  <S.SkeletonImage />
                  <S.SkeletonControls>
                    <S.SkeletonButton />
                    <S.SkeletonButton />
                  </S.SkeletonControls>
                </S.SkeletonItem>
              ))
            : boxShadowsList?.map((boxShadow) => {
                return (
                  <CollectionItem
                    key={boxShadow.id}
                    boxShadow={boxShadow}
                    closeModal={() => setIsOpen(false)}
                    refresh={loadBoxShadowList}
                  />
                )
              })}
        </S.Grid>
      </S.Content>
      <S.Controls>
        <Button
          minimal
          icon={<Refresh />}
          // disabled={loading}
          // loading={loading}
          // onClick={loadBoxShadowList}
          onClick={() => {
            setLoading((prev) => !prev)
          }}
          aria-label="close"
        >
          Refresh
        </Button>
        <Button variant onClick={handleClick} aria-label="close">
          Cancel
        </Button>
      </S.Controls>
    </Modal>
  )
}
export default LoadDialog

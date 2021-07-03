import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useState
} from 'react'

import {
  BoxShadowAuthorProps,
  getAllBoxShadowsByUser
} from 'services/boxShadows'
import { useAuth } from 'hooks/use-auth'

import Button from 'components/Button'
import Modal, { ModalProps } from 'components/Modal'
import CollectionItem from 'components/CollectionItem'

import * as S from './styles'

export type CollectionDialogProps = Omit<ModalProps, 'children' | 'title'>

export type LoadCollectionHandle = {
  loadBoxShadowList: () => void
}

const CollectionDialog = (
  { isOpen, setIsOpen }: CollectionDialogProps,
  forwardRef: Ref<LoadCollectionHandle>
) => {
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

  useImperativeHandle(forwardRef, () => {
    return {
      loadBoxShadowList
    }
  })

  useEffect(() => {
    /** The API request for collection update will be triggered:
     * 1.- when user changes
     * 2.- when deleting an item (on handleDelete at CollectionItem component)
     * 3.- when creating an item (on save at Login component - useImperativeHandle)
     */
    loadBoxShadowList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Your collection">
      <S.Wrapper>
        <S.Content>
          {/* <S.Info>Load / Delete one of your designs:</S.Info> */}
          <S.Grid>
            {loading ? (
              [...new Array(6)].map((_, i) => (
                <S.SkeletonItem key={i}>
                  <S.SkeletonTitle />
                  <S.SkeletonImage />
                  <S.SkeletonControls>
                    <S.SkeletonButton />
                    <S.SkeletonButton />
                  </S.SkeletonControls>
                </S.SkeletonItem>
              ))
            ) : boxShadowsList?.length ? (
              boxShadowsList?.map((boxShadow) => {
                return (
                  <CollectionItem
                    key={boxShadow.id}
                    boxShadow={boxShadow}
                    isModalOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                    refresh={loadBoxShadowList}
                  />
                )
              })
            ) : (
              <h1 style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
                Your collection is empty
              </h1>
            )}
          </S.Grid>
        </S.Content>
        <S.Controls>
          <Button variant onClick={handleClick} aria-label="close">
            Cancel
          </Button>
        </S.Controls>
      </S.Wrapper>
    </Modal>
  )
}
export default forwardRef(CollectionDialog)

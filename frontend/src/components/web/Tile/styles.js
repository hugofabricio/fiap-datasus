import media from '@utils/media'
import styled from 'styled-components'

export const TitleHeading = styled.div``

export const TileValue = styled.div``

export const TileIcon = styled.div`
  margin-right: 24px;
  flex: 1;

  ${media.lessThan('sm')`
    width: 100%;
    margin-right: 0;
    margin-bottom: 24px;
  `}
`

export const TileCaption = styled.div`
  display: flex;
  flex: 4;
  justify-content: space-between;

  ${media.lessThan('xs')`
    width: 100%;
  `}
`

export const TileFooting = styled.div`
  margin-top: 24px;
`

export const TileBody = styled.div`
  display: flex;

  ${media.lessThan('xs')`
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const TileWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.neutral300};
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 30px;
`

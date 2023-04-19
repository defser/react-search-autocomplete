import styled from 'styled-components'

export const GoIcon = ({
                         hasFocus,
                         searchString,
                         handleGo
                       }: {
  hasFocus: boolean
  searchString: string
  handleGo: Function
}) => {
  const handleGoButtonClick = () => {
    handleGo()
  }

  if (hasFocus || (!searchString || searchString?.length <= 0)) {
    return null
  }

  return (
    <StyledClearIcon className="clear-icon" onClick={handleGoButtonClick}>
      Ga
    </StyledClearIcon>
  )
}

const StyledClearIcon = styled.div`
  margin: ${(props) => props.theme.clearIconMargin};
  color: ${(props) => props.theme.goColor};

  &:hover {
    cursor: pointer;
  }
`

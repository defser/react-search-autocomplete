import { ChangeEventHandler, FocusEvent, FocusEventHandler, useRef } from 'react'
import styled from 'styled-components'
import { ClearIcon } from './ClearIcon'
import { SearchIcon } from './SearchIcon'
import {GoIcon} from "./GoIcon";

interface SearchInputProps {
  searchString: string
  setSearchString: ChangeEventHandler<HTMLInputElement>
  resetSearchString: Function
  setHighlightedItem: Function
  autoFocus: boolean
  onFocus: FocusEventHandler<HTMLInputElement>
  onClear: Function
  handleGo: Function
  placeholder: string
  showIcon: boolean
  showClear: boolean
  hasFocus: boolean
}

export default function SearchInput({
  searchString,
  setSearchString,
  resetSearchString,
  setHighlightedItem,
  autoFocus,
  onFocus,
  onClear,
  handleGo,
  placeholder,
  hasFocus,
  showIcon = true,
  showClear = true
}: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null)

  let manualFocus = true

  const handleOnFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    manualFocus && onFocus(event)
  }

  return (
    <StyledSearchInput>
      <SearchIcon showIcon={showIcon} />
      <input
        ref={ref}
        spellCheck={false}
        value={searchString}
        onChange={setSearchString}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onKeyDown={(event) => setHighlightedItem({ event })}
        data-test="search-input"
        type="search"
      />
      <GoIcon
        hasFocus={hasFocus}
        searchString={searchString}
        handleGo={handleGo}
      />
      <ClearIcon
        hasFocus={hasFocus}
        showClear={showClear}
        resetSearchString={resetSearchString}
        searchString={searchString}
        onClear={onClear}
      />
    </StyledSearchInput>
  )
}

const StyledSearchInput = styled.div`
  min-height: ${(props) => props.theme.height};
  width: 100%;

  display: flex;
  align-items: center;

  > input {
    width: 100%;

    padding: 0 0 0 13px;

    border: none;
    outline: none;

    background-color: rgba(0, 0, 0, 0);
    font-size: inherit;
    font-family: inherit;

    color: ${(props) => props.theme.color};

    ::placeholder {
      color: ${(props) => props.theme.placeholderColor};
      opacity: 1;

      :-ms-input-placeholder {
        color: ${(props) => props.theme.placeholderColor};
      }

      ::-ms-input-placeholder {
        color: ${(props) => props.theme.placeholderColor};
      }
    }
  }
`

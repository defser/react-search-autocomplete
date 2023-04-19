import { ChangeEventHandler, FocusEventHandler } from 'react';
interface SearchInputProps {
    searchString: string;
    setSearchString: ChangeEventHandler<HTMLInputElement>;
    resetSearchString: Function;
    setHighlightedItem: Function;
    autoFocus: boolean;
    onFocus: FocusEventHandler<HTMLInputElement>;
    onClear: Function;
    handleSearch: Function;
    placeholder: string;
    showIcon: boolean;
    showClear: boolean;
    hasFocus: boolean;
}
export default function SearchInput({ searchString, setSearchString, resetSearchString, setHighlightedItem, autoFocus, onFocus, onClear, handleSearch, placeholder, hasFocus, showIcon, showClear }: SearchInputProps): JSX.Element;
export {};

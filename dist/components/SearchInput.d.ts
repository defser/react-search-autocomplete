import { ChangeEventHandler, FocusEventHandler } from 'react';
interface SearchInputProps {
    searchString: string;
    setSearchString: ChangeEventHandler<HTMLInputElement>;
    setHighlightedItem: Function;
    autoFocus: boolean;
    onFocus: FocusEventHandler<HTMLInputElement>;
    onClear: Function;
    placeholder: string;
    showIcon: boolean;
    showClear: boolean;
    hasFocus: boolean;
}
export default function SearchInput({ searchString, setSearchString, setHighlightedItem, autoFocus, onFocus, onClear, placeholder, hasFocus, showIcon, showClear }: SearchInputProps): JSX.Element;
export {};

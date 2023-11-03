import React from 'react'
import './SearchInput.styles.scss';
interface SearchInputProps {
    onChange: (value: string) => void;
}
export function SearchInput({ onChange }: SearchInputProps) {
    return (
        <div className="search-input">
            <input
                type="text"
                placeholder="Search by name"
                onChange={(e: { target: { value: string; }; }) => onChange(e.target.value)}
                data-testid="search-input-input"
            />
        </div>
    );
}
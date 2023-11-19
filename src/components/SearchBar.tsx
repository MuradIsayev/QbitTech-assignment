// SearchBar.tsx
import React from 'react';
import { Input } from './ui/input';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Input
        type="search"
        className="max-w-sm mr-5"
        name="search"
        placeholder="Search by address..."
        autoComplete="off"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </>
  );
};

export default SearchBar;

import React from 'react';
import { ModeToggle } from '../components/mode-toggle';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  return (
    <nav className="w-full h-10 bg-red-400">
      <div className="flex justify-between items-center gap-2">
        <Input
          type="text"
          className="max-w-sm"
          name="search"
          placeholder="Search by address..."
          autoComplete="off"
        />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default SearchBar;

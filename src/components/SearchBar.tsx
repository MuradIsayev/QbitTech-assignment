import React from 'react';
import { ModeToggle } from '../components/mode-toggle';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const SearchBar = () => {
  return (
    <nav className="w-full h-10 mb-6">
      <div className="flex justify-between items-center gap-2 mb-3">
        <Input
          type="text"
          className="max-w-sm"
          name="search"
          placeholder="Search by address..."
          autoComplete="off"
        />
        <ModeToggle />
      </div>
      <Separator />
    </nav>
  );
};

export default SearchBar;

import React from 'react';
import { Input } from './ui/input';

interface FiltersProps {
  value: number | null;
  name: string;
  placeholder: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filters = ({
  value,
  name,
  placeholder,
  handleInputChange
}: FiltersProps) => {
  return (
    <>
      <Input
        type="number"
        className={`grow max-w-[10rem] ${name === 'maxPrice' ? 'lg:mr-8' : ''}`}
        name={name}
        value={value ?? ''}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Filters;

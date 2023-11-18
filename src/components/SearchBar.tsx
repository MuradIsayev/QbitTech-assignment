import { Input } from '@/components/ui/input';

const SearchBar = () => {
  return (
    <nav className="w-full h-10 mt-5 mb-4">
      <div className="flex items-center justify-between gap-2 mb-3">
        <Input
          type="search"
          className="max-w-sm"
          name="search"
          placeholder="Search by address..."
          autoComplete="off"
        />
      </div>
    </nav>
  );
};

export default SearchBar;

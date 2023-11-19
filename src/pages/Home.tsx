// Home.tsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchHouses } from '../api/card';
import Card from '@/components/Card';
import { House } from '@/types/house';
import SearchBar from '../components/SearchBar';
import Filters from '@/components/Filters';
import { Button } from '@/components/ui/button';

type NullableNumber = number | null;

interface FilterOptions {
  minPrice: NullableNumber;
  maxPrice: NullableNumber;
  minFloor: NullableNumber;
  maxFloor: NullableNumber;
}

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    minPrice: null,
    maxPrice: null,
    minFloor: null,
    maxFloor: null
  });

  const {
    data: houses = [],
    isError,
    isLoading
  } = useQuery<House[]>({
    queryKey: ['houses'],
    queryFn: fetchHouses,
    staleTime: 1000 * 60 * 5
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterOptions(prevFilterOptions => ({
      ...prevFilterOptions,
      [name]: value === '' ? null : Number(value)
    }));
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilterOptions({
      minPrice: null,
      maxPrice: null,
      minFloor: null,
      maxFloor: null
    });
  };

  const filteredHouses = houses.filter(house => {
    const { minPrice, maxPrice, minFloor, maxFloor } = filterOptions;
    const matchesSearchTerm = house.address
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPriceRange =
      (minPrice === null || house.price >= minPrice) &&
      (maxPrice === null || house.price <= maxPrice);
    const matchesFloorRange =
      (minFloor === null || house.floor >= minFloor) &&
      (maxFloor === null || house.floor <= maxFloor);

    return matchesSearchTerm && matchesPriceRange && matchesFloorRange;
  });

  const renderHouses = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError || !houses) {
      return <div>Error fetching data...</div>;
    }

    return (
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-4">
        {filteredHouses.map(house => (
          <Card key={house.id} house={house} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <nav className="w-full h-10 mt-5 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filters
            value={filterOptions.minPrice}
            name="minPrice"
            placeholder="Min Price:"
            handleInputChange={handleInputChange}
          />
          -
          <Filters
            value={filterOptions.maxPrice}
            name="maxPrice"
            placeholder="Max Price:"
            handleInputChange={handleInputChange}
          />
          <Filters
            value={filterOptions.minFloor}
            name="minFloor"
            placeholder="Min Floor:"
            handleInputChange={handleInputChange}
          />
          -
          <Filters
            value={filterOptions.maxFloor}
            name="maxFloor"
            placeholder="Max Floor:"
            handleInputChange={handleInputChange}
          />
          <Button variant="secondary" onClick={resetFilters}>
            RESET
          </Button>
        </div>
      </nav>
      <div>
        <h3 className="mb-3 text-2xl">Houses</h3>
        {renderHouses()}
      </div>
    </div>
  );
};

export default Home;

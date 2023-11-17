import SearchBar from '../components/SearchBar';
import { useQuery } from '@tanstack/react-query';
import { fetchHouses } from '../api/card';
import Card from '@/components/Card';
import { House } from '@/types/house';

const Home = () => {
  const {
    data: houses,
    isError,
    isLoading
  } = useQuery<House[]>({
    queryKey: ['houses'],
    queryFn: fetchHouses,
    staleTime: 1000 * 60 * 5
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !houses) {
    return <div>Error fetching data...</div>; // Handle error or empty data case
  }

  return (
    <div>
      <nav>
        <SearchBar />
      </nav>
      <div>
        <h3 className="mb-3 text-2xl">Houses</h3>
        <div className="flex flex-row flex-wrap justify-between gap-2">
          {houses.map(house => (
            <Card key={house.id} house={house} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

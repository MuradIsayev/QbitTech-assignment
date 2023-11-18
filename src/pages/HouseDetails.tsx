import { fetchHouseById } from '@/api/card';
import { House } from '@/types/house';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

type HouseParams = {
  id: string;
};

const HouseDetails = () => {
  const params = useParams<HouseParams>();
  const { id } = params;

  const parsedId = id ? parseInt(id, 10) : NaN;

  const {
    data: house,
    isError,
    isLoading
  } = useQuery<House>({
    queryKey: ['house', parsedId],
    queryFn: () => fetchHouseById({ id: parsedId })
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !house) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div>
      {house.address} - {parsedId}
    </div>
  );
};

export default HouseDetails;

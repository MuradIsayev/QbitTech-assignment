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
      <div className="grid w-full gap-4 lg:grid-rows-3 lg:grid-cols-4 md:grid-cols-2 md:grid-rows-2">
        {house.imageURLs.map((imageURL, index) => (
          <div
            key={index}
            className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2 md:col-span-1 md:row-span-1' : ''}`}
          >
            <img
              className="w-full h-full rounded-lg object-fit"
              src={imageURL}
              alt="house image"
            />
          </div>
        ))}
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default HouseDetails;

import axios from 'axios';
import { House } from '@/types/house'; // Import the House type from your file

export const fetchHouses = async (): Promise<House[]> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}`);
    const houses = response.data;

    return houses;
  } catch (error) {
    console.error('Error fetching houses:', error);
    return [];
  }
};

export const fetchHouseById = async ({
  id
}: {
  id: number;
}): Promise<House> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_BACKEND_URL}/${id}`
    );
    const house = response.data;

    return house;
  } catch (error) {
    console.error('Error fetching house:', error);
    return {} as House;
  }
};

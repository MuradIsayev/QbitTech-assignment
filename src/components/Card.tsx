import { House } from '@/types/house';
import React from 'react';

interface CardProps {
  house: House; // Define the prop structure as a single House object
}

const Card: React.FC<CardProps> = ({ house }) => {
  return (
    <>
      <div className="w-[320px] flex-grow-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={house.imageURLs[0]} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            ``
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {house?.address}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {house?.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;

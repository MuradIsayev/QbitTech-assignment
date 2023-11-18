import { House } from '@/types/house';
import React from 'react';
import image from '../assets/house.jpg';
import { Link } from 'react-router-dom';
import floor from '../assets/icons/floor.png';
import area from '../assets/icons/area.png';

interface CardProps {
  house: House; // Define the prop structure as a single House object
}

const Card: React.FC<CardProps> = ({ house }) => {
  return (
    <>
      <Link to="#">
        <div className="max-w-xs m-2 bg-white border border-gray-200 rounded-lg shadow cursor-pointer group md:max-w-sm lg:max-w-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="transition-all duration-200 rounded-t-lg opacity-90 group-hover:opacity-100"
            src={image}
            alt="house"
          />
          <div className="px-4 py-2">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {house?.price} AZN
            </h5>
            <p className="font-normal text-gray-900 dark:text-white">
              {house?.address}
            </p>
            <p className="mb-2 text-sm font-normal text-gray-700 truncate dark:text-gray-400">
              {house?.description}
            </p>
            <div className="flex flex-row items-start justify-between mb-4">
              <div className="flex items-center gap-1">
                <div className="object-contain w-5 h-5">
                  <img src={floor} alt="floor icon" />
                </div>
                <p className="text-[1rem] font-semibold text-gray-900 dark:text-[#000]">
                  {house?.floor}
                </p>
              </div>

              <div className="flex items-center gap-1 ">
                <div className="object-contain w-5 h-5">
                  <img src={area} alt="area icon" />
                </div>
                <p className="text-[1rem] font-semibold text-gray-900 dark:text-[#000]">
                  {house?.area}m<sup>2</sup>
                </p>
              </div>
            </div>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;

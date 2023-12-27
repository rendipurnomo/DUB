import React from 'react';
import { useCategory } from './useCategory';
import Loader from '../ui/Loader';
import { Link } from 'react-router-dom';


const Category = () => {
  const { categories, isLoading, error } = useCategory();
  return (
    <div className="py-4 md:py-8 border-b-[1px] border-light/20 flex flex-col pl-4 md:pl-12 gap-4">
      <h1 className="text-3xl font-bold font-tourney">Kategori Pilihan</h1>
      {error && <p>Error: {error.message}</p>}
      {isLoading && <Loader />}
      {categories && (
        <div className="flex justify-start flex-wrap mr-2 md:mr-4 gap-y-4">
          {categories.map((category, index) => (
            <Link
              to={`/category/${category}`}
              key={index}
              className="bg-light/20 px-2 md:px-4 py-1 md:py-2 rounded-full border-2 border-primary mr-4">
              <p className="text-xs md:text-lg font-light md:font-bold capitalize">{category}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;

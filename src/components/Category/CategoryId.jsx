import React from "react";
import { useCategoryId } from "./useCategoryId";
import Loader from "../ui/Loader";
import { useLocation } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
// import Category from ".";

const CategoryId = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2]
  const { categoryId, isLoading, error } = useCategoryId({
    category: category,
  });
  console.log(categoryId);

  return <div className="my-8 px-14">
    {/* <Category /> */}
    <div className="flex flex-col gap-4">
    <h1 className="text-3xl font-bold font-tourney">Result for {category.split("%20").join(" ")}</h1>
    {error && <p>Error: {error.message}</p>}
    {isLoading && <Loader />}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8">
    {categoryId && categoryId.map((id, index) => (
        <ProductCard key={index} product={id}/>
        ))}
        </div>
        </div>
  </div>;
};

export default CategoryId;

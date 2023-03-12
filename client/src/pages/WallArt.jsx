import React from "react";
import ItemCard from "../components/ItemCard";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function Furniture() {
  const { data, loading, error } = useFetch("/api/fetchArt");
  console.log(data);

  const navigate = useNavigate();

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {error
            ? "something went wrong"
            : loading
            ? "Loading..."
            : data?.map((item) => (
                <ItemCard
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  image={item.image[0]}
                  price={item.price}
                  link={`/art/${item._id}`}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Furniture;

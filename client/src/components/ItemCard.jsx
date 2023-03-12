import React from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function ItemCard(props) {
  const navigate = useNavigate();
  return (
    <>
      <a
        key={props.id}
        // href={`/furniture/${item._id}`}
        className="group"
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={props.image}
            alt=""
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            onClick={() => navigate(props.link)}
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{props.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{props.price}</p>
      </a>
    </>
  );
}

export default ItemCard;

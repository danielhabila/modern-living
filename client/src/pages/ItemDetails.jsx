import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { addToCart } from "../state/cartReducer";
import { Tab } from "@headlessui/react";
import useFetch from "../hooks/useFetch.jsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemDetails() {
  const location = useLocation();
  let category;
  if (location.pathname.includes("art")) {
    category = "fetchArt";
  } else if (location.pathname.includes("furniture")) {
    category = "fetchFurniture";
  } else if (location.pathname.includes("lighting")) {
    category = "fetchLighting";
  }
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/api/${category}/${id}`);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {/* small images for navigation under big image */}
                {data?.image.map((image, index) => (
                  <Tab
                    key={index}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-indigo-500" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                          )}
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            {/* Big Image */}
            <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
              {data?.image.map((image, index) => (
                <Tab.Panel key={index}>
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {data?.name}
            </h1>

            <div className="mt-3">
              <p className="text-2xl text-gray-900">{data?.price}</p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="space-y-6 text-base text-gray-700" />
              <p className="italic font-semibold text-xl">Description</p>
              <p>{data?.description}</p>
            </div>

            <form className="mt-6">
              <div className="sm:flex-col1 mt-10 flex items-center space-x-4">
                {/* Quantity input */}
                <div>
                  <div className="flex items-center border border-gray-200 divide-x divide-gray-200 rounded">
                    <button
                      type="button"
                      className="w-10 h-10  leading-10 text-gray-600 transition hover:opacity-75 grid place-content-center"
                      onClick={() => setQty(Math.max(qty - 1, 1))}
                    >
                      −
                    </button>

                    <div className="h-10 w-16  border-transparent grid place-content-center">
                      {qty}
                    </div>
                    <button
                      type="button"
                      className="w-10 h-10  leading-10 text-gray-600 transition hover:opacity-75 grid place-content-center"
                      onClick={() => setQty(qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  // type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-green-600 py-2 px-8 text-base font-medium text-white hover:bg-green-700 sm:w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(
                      addToCart({
                        id: data?._id,
                        name: data?.name,
                        price: Number(data?.price.replace(/[$,]/g, "")),
                        image: data?.image[0],
                        qty,
                      })
                    );
                  }}
                >
                  Add to bag
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

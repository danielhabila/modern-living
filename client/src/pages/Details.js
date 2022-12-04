import React from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

const Details = () => {
  return (
    <div>
      <div className="pb-20"></div>
      <div className="relative w-full h-max md:h-[80vh] grid place-content-center  mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid gap-4 md:grid-cols-1">
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="aspect-square w-full rounded-xl object-cover"
            />

            <div className="grid place-content-center">
              <ul className="mt-1 flex gap-1">
                <li>
                  <img
                    alt="Tee"
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>
                <li>
                  <img
                    alt="Tee"
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>
                <li>
                  <img
                    alt="Tee"
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>
                <li>
                  <img
                    alt="Tee"
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="sticky top-0">
            <div className="mt-6 flex justify-between">
              <div className="max-w-[35ch]">
                <h1 className="text-xl font-bold">Fun Product</h1>
                <p className="mt-0.5 text-sm">Highest Rated Product</p>
                <div className="mt-2 -ml-0.5 flex">⭐️⭐️⭐️⭐️⭐️</div>
              </div>
              <p className="text-lg font-bold">$119.99</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                veniam dicta beatae eos ex error culpa delectus rem tenetur,
                architecto quam nesciunt, dolor veritatis nisi minus inventore,
                rerum at recusandae?
              </p>
            </div>
            <form className="mt-8">
              <div className="mt-8 flex">
                <div>
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min={1}
                    defaultValue={1}
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs "
                  />
                </div>

                <button
                  type="submit"
                  className="w-[80%] rounded-2xl bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                >
                  Add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

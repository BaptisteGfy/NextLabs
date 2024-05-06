/* eslint-disable @next/next/no-img-element */
import React from "react";

const Uipage = () => {
  return (
    <main className="flex h-screen items-center justify-center gap-x-16 bg-gray-900 text-white">
      <div className="group h-[420px] w-[300px] cursor-pointer bg-transparent perspective">
        <div className="relative  size-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
          <div className="absolute size-full border-2 backface-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/166660152?v=4"
              alt="card picture"
              className="size-full object-cover"
            />
          </div>
          <div className="absolute size-full bg-gray-100 my-rotate-y-180 backface-hidden ">
            <div className="flex h-full flex-col items-center justify-center px-4 pb-24 text-justify text-gray-800">
              <h3 className="text-3xl font-semibold">Titre</h3>
              <p className="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi nostrum similique veritatis pariatur velit, aliquid
                dolor officia eius minus laboriosam repellat numquam itaque rem
                temporibus sunt reiciendis dolores, sint labore?
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Uipage;

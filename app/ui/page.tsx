/* eslint-disable @next/next/no-img-element */
import React from "react";

const Uipage = () => {
  return (
    <main className="flex h-screen items-center justify-center gap-x-16 bg-gray-900 text-white">
      <div className="group h-[420px] w-[300px] cursor-pointer bg-transparent perspective">
        <div className="relative size-full duration-1000 preserve-3d group-hover:[transform:rotateY(180deg)]">
          <div className="backface-hidden absolute size-full border-2">
            <img
              src="https://avatars.githubusercontent.com/u/166660152?v=4"
              alt="card picture"
              className="size-full object-cover"
            />
          </div>
          <div className="backface-hidden absolute size-full bg-gray-100 [transform:rotateY(180deg)] ">
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

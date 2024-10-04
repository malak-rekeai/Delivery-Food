import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="md:px-12 flex flex-col md:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] items-center">
      {menu.map((category) => (
        <Link
  href={`/menu/${category.slug}`}
          key={category.id}
          className="md:w-1/2 w-full h-[350px] bg-cover"
          style={{ backgroundImage: `url( ${category.img})` }}
        >
          <div className="flex flex-col gap-3 w-1/2 md:w-8/12 p-7 h-full  justify-around cursor-pointer">
            <h1 className="text-2xl font-bold">{category.title}</h1>
            <p>{category.desc}</p>
            <button
              className={`py-4 px-6 font-medium transition ${category.color === 'black' ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              More
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;

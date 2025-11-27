import React from "react";

const BlogCard = ({ image, title, subTitle, category, link }) => {
  return (
    <div className="py-6 flex flex-col gap-2 items-center justify-center border-b-[1px] border-b-zinc-800 group">
      <div className="w-full h-full mb-2 overflow-hidden relative cursor-pointer">
       <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
          src={image}
          alt={subTitle}
        />
       </a>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-designColor border-[1px] border-designColor px-2">
          {title}
        </span>
        <h2 className="text-xs text-center font-semibold font-titleFont text-[#ccc] group-hover:text-designColor duration-300 capitalize">
          {subTitle}
        </h2>
        <p className="text-sm -mt-1 text-gray-400">{category}</p>
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";

const ReviewComponent = ({ info }) => {
  return (
    <div className="px-[5vw] py-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <img
            className="w-12 cursor-pointer border-[1px] border-black rounded-[50%]"
            src={info.imgSrc}
            alt=""
          />
          <h2 className="font-semibold text-xl cursor-pointer hover:text-blue-700 transition-all duration-300">
            {info.usersName}
          </h2>
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className="flex gap-2 text-xl font-semibold">
            <p>⭐</p>
            <p>{info.rating}</p>
          </div>
          <p className="text-gray-500">
            {info.number} {info.datetime} ago
          </p>
        </div>
      </div>
      <p className="text-gray-600">{info.comment}</p>
    </div>
  );
};

ReviewComponent.defaultProps = {
  info: {
    comment:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio reprehenderit excepturi porro quos sit doloremque aliquid, dicta suscipit quisquam ullam tenetur. Iure cumque amet facilis mollitia reprehenderit quas soluta voluptas voluptates vel tenetur impedit aperiam ullam incidunt, dolores eveniet animi eaque eos suscipit quia eius accusamus optio velit consequatur. Fugit.",
    usersName: "Lorem ipsum",
    rating: "5.0",
    number: 11,
    datetime: "months",
    imgSrc: "./user.png",
  },
};

export default ReviewComponent;

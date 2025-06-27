import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
}

const ListCard = ({ title, description, image }: Props) => {
  return (
    <div className="flex items-center py-4">
      <img src={image} />
      <div className="flex flex-col px-8 space-y-4 text-black">
        <p className="text-xl font-medium">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ListCard;

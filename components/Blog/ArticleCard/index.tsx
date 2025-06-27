import React from "react";
type Props = {
  title: string;
  department: string;
  user: string;
  date: string;
};
const ArticleCard = ({ title, department, user, date }: Props) => {
  return (
    <section>
      <div className="flex flex-col items-start justify-center pb-12 space-y-4 text-sm text-left text-black w-[15rem]">
        <p className="text-xs font-bold text-blue-800">{department}</p>
        <p className="text-sm font-semibold lg:text-lg hover:text-pink-600">
          {title}
        </p>
        <div className="grid grid-cols-2 text-xs text-gray-500 divide-x-2 divide-gray-400 lg:text-sm">
          <p>{user}</p>
          <p className="pl-4">{date}</p>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;

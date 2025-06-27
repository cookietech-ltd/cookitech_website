import React from "react";
import Slideup from "../SlideUp";
import BlogCard from "./BlogCard";
import data from "@/config/data";
import ArticleCard from "./ArticleCard";

const Blog = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 pb-12 space-y-20 bg-white">
      <div className="flex flex-col items-center space-y-24">
        <div className="max-w-sm text-center md:max-w-3xl space-y-7">
          <p className="text-base font-semibold text-blue-900 underline decoration-red-500 decoration-2">
            {" "}
            Read Cookietech Ltd IT News
          </p>
          <p className="text-2xl font-bold text-black md:text-5xl">
            Latest News & Articles
          </p>
          <p className="text-sm text-gray-600 ">
            Sit amet consectetur adipisicing elitm sed eiusmod temp sed
            incididunt labore dolore magna aliquatenim veniam quis ipsum nostrud
            exer citation ullamco laboris.
          </p>{" "}
        </div>
        <div className="flex flex-col lg:space-x-12 space-y-14 md:grid lg:grid-cols-3 md:space-y-0 md:grid-cols-2 md:gap-4">
          {data.blog.map((item: any, index: number) => (
            <Slideup key={index} index={index}>
              <BlogCard
                image={item.image}
                title={item.title}
                department={item.department}
                user={item.user}
                date={item.date}
              />
            </Slideup>
          ))}
        </div>
        <div className="flex flex-col p-4 space-y-8 md:grid md:grid-cols-3 md:gap-x-14 md:space-y-0 lg:p-0">
          <ArticleCard
            title={"Data Security with multiple business values"}
            department={"Security News"}
            user={"By Admin"}
            date={"24 June 2019"}
          />
          <div className="lg:px-20 md:border-x-2">
            <ArticleCard
              title={"Data Security with multiple business values"}
              department={"Security News"}
              user={"By Admin"}
              date={"24 June 2019"}
            />
          </div>
          <ArticleCard
            title={"Data Security with multiple business values"}
            department={"Security News"}
            user={"By Admin"}
            date={"24 June 2019"}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;

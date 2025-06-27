import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  image: string;
  title: string;
  department: string;
  description: string;
  link: string;
}
const SliderCard = ({ image, title, department, description, link }: Props) => {
  return (
    <section className="p-10 md:p-1">
      <div className="absolute space-y-3 bg-white w-80 ml-[15rem] mt-[11rem] z-10 hidden md:block lg:block xl:block">
        <div className="py-5 pl-6 space-y-3 bg-violet-900">
          <p className="text-lg font-medium text-white">{title}</p>
          <p className="text-xs text-gray-500">{department}</p>
        </div>
        <p className="px-8 text-left text-gray-700 py-7">{description}</p>
        <div className="flex items-center pb-3 pl-8 space-x-4">
          {/* <a
            href="#"
            className="text-sm font-medium text-pink-600 hover:text-blue-900"
          >
            {link}
          </a>
          <FontAwesomeIcon icon={faArrowRight} className="text-blue-900" /> */}
        </div>
      </div>
      <div className="relative max-w-lg overflow-hidden bg-no-repeat bg-cover ">
        <img
          src={image}
          className="w-full transition duration-300 ease-in-out md:max-w-xl hover:scale-110"
          alt="Louvre"
        />
      </div>
      <div className="relative z-10 block w-full space-y-3 bg-white md:hidden lg:hidden xl:hidden">
        <div className="py-5 pl-6 space-y-3 bg-violet-900">
          <p className="text-lg font-medium text-white">{title}</p>
          <p className="text-xs text-gray-500">{department}</p>
        </div>
        <p className="px-8 text-left text-gray-700 py-7">{description}</p>
        <div className="flex items-center pb-3 pl-8 space-x-4">
          {/* <a
            href="#"
            className="text-sm font-medium text-pink-600 hover:text-blue-900"
          >
            {link}
          </a>
          <FontAwesomeIcon icon={faArrowRight} className="text-blue-900" /> */}
        </div>
      </div>
    </section>
  );
};

export default SliderCard;

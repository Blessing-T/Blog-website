

import Carousel from "./carousel";

export default function FeaturedPost() {
  return (
    <article className="p-6">
     <Carousel/>
      <div className="text-sm text-black">
        <span className="uppercase text-teal-500 ">Featured</span>
        {" / "}
        <span className="uppercase text-teal-500">Lifestyle</span>
        {" • "}
        <span>October 28, 2017</span>
      </div>
      <h2 className="text-3xl mt-2 text-gray-800 hover:text-teal-500 cursor-pointer">
        Take a Deep Breath and Just Be
      </h2>
    </article>
  );
}

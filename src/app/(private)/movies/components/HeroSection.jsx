import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import VideoSection from "./VideoSection";
import { getVideoKey } from "@/helpers/movieFunctions";
import Link from "next/link";

const HeroSection = async ({ title, overview, id }) => {
  let videoKey = await getVideoKey(id);
  //   console.log(videoKey);

  return (
    <div className="relative h-[50vw]">
      <VideoSection videoKey={videoKey} />
      <div className="absolute top-[30%] ml-20 md:ml-40">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {overview}
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-3">
          {/* //? next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir. */}
          <Link
            href={`/movies/${id}`}
            className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
          >
            <PlayIcon className="w-4 md:w-7 text-black mr-1" />
            Play
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;

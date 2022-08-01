import React from "react";
import { H2, H4 } from "./elements/Text";

export const TimeLine = ({ options = [] }) => {
  return (
    <ol className="relative z-50 flex flex-col gap-10 border-l border-gray-200 dark:border-gray-700">
      {options.map((option, index) => (
        <li
          key={index}
          className="bg-black/20 p-3 -mt-1.5 rounded-xl text-left ml-6 flex flex-col gap-3 items-start"
        >
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-4 ring-black">
            <img className="w-full rounded-full" src={option.image} />
          </span>

          <H2 className="flex items-center flex-wrap font-bold gap-2">
            <span>{option.name}</span>
            {option.isWorking && (
              <span className="bg-blue-100 text-blue-900 text-sm font-medium px-2.5 py-0.5 rounded ">
                Currently Working
              </span>
            )}
          </H2>

          <div className="flex flex-col gap-2">
            <time className="text-sm text-black">{option.time}</time>
            {/* <time className="text-sm">Released on January 13th, 2022</time> */}

            <H4 className="bg-white/50 p-2 rounded-lg font-semibold">
              {option.about}
            </H4>
          </div>
          <a
            href={option.href}
            className="inline-flex items-center py-2 px-4 text-sm text-white bg-indigo-600 rounded-3xl"
          >
            Visit
          </a>
        </li>
      ))}
    </ol>
  );
};

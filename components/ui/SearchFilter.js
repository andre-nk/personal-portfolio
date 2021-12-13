import React from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export default function SearchFilter({mockTags, selectedTags, setSelectedTags}) {
  return (
    <Disclosure>
      {({ open }) => (
        <React.Fragment>
          <Disclosure.Button className="flex justify-between w-full pr-2 pt-5 text-md">
            <span className="flex space-x-4 text-primary-black font-medium">
              <Image
                src="/icons/filter.svg"
                height={24}
                width={24}
                alt="filter"
              />
              <p>Filter</p>
            </span>
            <Image
              src="/icons/chevron.svg"
              height={24}
              width={24}
              alt="chevron"
              className={`${open ? "rotate-180" : "rotate-0"} duration-[400ms]`}
            />
          </Disclosure.Button>
          <Disclosure.Panel
            className={`px-1 pt-4 text-md flex flex-wrap w-full ${
              open ? "opacity-100" : "opacity-0"
            } duration-300`}
          >
            {mockTags.map((tag) => {
              return (
                <div
                  key={tag.id}
                  onClick={() => {
                    selectedTags.includes(tag.id)
                      ? setSelectedTags(
                          selectedTags.filter((id) => id !== tag.id)
                        )
                      : setSelectedTags([...selectedTags, tag.id]);
                  }}
                  style={{
                    backgroundColor: selectedTags.includes(tag.id)
                      ? "#191B1D"
                      : "#FFFFFF",
                    color: tag.color,
                  }}
                  className={`px-4 py-2 mx-1 my-1 border-[1.2px] border-primary-black rounded-lg duration-300`}
                >
                  <p>{tag.name}</p>
                </div>
              );
            })}
          </Disclosure.Panel>
        </React.Fragment>
      )}
    </Disclosure>
  );
}

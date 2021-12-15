import Head from "next/head";
import React, { useState, useRef } from "react";

import ProjectList from "../../components/layout/ProjectList";
import SearchBar from "../../components/ui/SearchBar";
import SearchFilter from "../../components/ui/SearchFilter";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const mockTags = [
    {
      id: 1,
      name: "React",
      color: "#61DAFB",
    },
    {
      id: 2,
      name: "Vue",
      color: "#41B883",
    },
    {
      id: 3,
      name: "Angular",
      color: "#E03E2F",
    },
    {
      id: 4,
      name: "NextJS",
      color: "#00D8FF",
    },
    {
      id: 5,
      name: "NodeJS",
      color: "#339933",
    },
    {
      id: 6,
      name: "Express",
      color: "#333333",
    },
    {
      id: 7,
      name: "MongoDB",
      color: "#339933",
    },
  ];

  return (
    <div>
      <Head>
        <title>Andreas Notokusumo · Search Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-6 lg:px-12 min-h-screen">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          <h2 className="text-[2.5rem] font-bold pt-3 leading-tight">
            All of my projects:
          </h2>
          <SearchBar setSearch={setSearch} search={search} />
        </div>
        <SearchFilter
          mockTags={mockTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <ProjectList />
      </div>
    </div>
  );
}

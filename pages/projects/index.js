import Head from "next/head";
import { createClient } from "contentful";
import React, { useEffect, useState } from "react";

import ProjectList from "../../components/layout/ProjectList";
import SearchBar from "../../components/ui/SearchBar";

export default function ProjectsPage() {
  const [queryProjects, setQueryProjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const client = createClient({
      space: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    });

    const fetcher = async () => {
      if (!(search === "")) {
        const searchRes = await client.getEntries({
          query: search,
          content_type: "project",
        });

        setQueryProjects(searchRes.items);
      } else {
        const projectRes = await client.getEntries({
          content_type: "project",
        });

        setQueryProjects(projectRes.items);
      }
    };

    fetcher();
  }, [search]);

  return (
    <div>
      <Head>
        <title>
          Andreas Notokusumo ·{" "}
          {search === "" ? "Projects" : "Search results for " + search}
        </title>
        <meta
          name="description"
          content="All of Andreas' projects displayed as a mini-blog"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="px-6 py-12 lg:px-12 min-h-screen">
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          <h2 className="text-[2.5rem] font-bold pb-3 leading-tight">
            {search ? `Searching for "${search}"` : "All of my projects:"}
          </h2>
          <SearchBar setSearch={setSearch} search={search} />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="500"
        >
          {queryProjects !== [] && <ProjectList projectRes={queryProjects} />}
        </div>
      </div>
    </div>
  );
}

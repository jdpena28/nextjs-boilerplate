import React from "react";
import { useQuery } from "react-query";

const SampleReactQuery = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/jdpena28/nextjs-boilerplate").then(
      (res) => res.json()
    )
  );
  if (error) return console.log(error);

  return (
    <div className="flex h-screen items-center text-center">
      {isLoading ? (
        <p className="w-full text-center text-4xl font-bold">Loading ...</p>
      ) : (
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold uppercase">{data.name}</h1>
          <p>{data.description}</p>
          <strong>👀 {data.subscribers_count}</strong>{" "}
          <strong>✨ {data.stargazers_count}</strong>{" "}
          <strong>🍴 {data.forks_count}</strong>
        </div>
      )}
    </div>
  );
};

export default SampleReactQuery;

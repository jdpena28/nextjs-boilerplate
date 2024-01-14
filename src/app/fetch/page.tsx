async function getData() {
  const res = await fetch(
    "https://api.github.com/repos/jdpena28/nextjs-boilerplate"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <section
      className="container mx-auto flex h-screen w-full items-center justify-center"
      id="sample-data">
      <div className="text-center space-y-5">
        <h1 className="text-4xl font-bold uppercase">{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
      </div>
    </section>
  );
}

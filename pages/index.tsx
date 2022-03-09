import type { NextPage } from "next";
import { nanoid } from "nanoid";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <NextSeo
        title="Next.js Boilerplate"
        description="Next.js Boilerplate configuration with Eslint, Prettier and Husky"
      />
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Next.js Boilerplate</h1> <br />
        <p>Configuration with Eslint, Prettier and Husky</p>
        <p className="text-xl font-bold">Dependencies</p>
        <ul className="list-disc !text-left">
          <li key={nanoid()}>
            <a
              className="hover:text-blue-600"
              href="https://github.com/ai/nanoid">
              Nanoid
            </a>
          </li>
          <li key={nanoid()}>
            <a
              className="hover:text-blue-600"
              href="https://github.com/axios/axios">
              Axios
            </a>
          </li>
          <li key={nanoid()}>
            <a
              className="hover:text-blue-600"
              href="https://react-query.tanstack.com/overview">
              React - Query
            </a>
          </li>
          <Link href="/SampleReactQuery">
            <p className="cursor-pointer text-blue-700 underline">
              [Sample Page for React Query and Axios]
            </p>
          </Link>
        </ul>
        <p className="text-xl font-bold">Dev-Dependencies</p>
        <ul className="list-disc !text-left">
          <li key={nanoid()}>
            <a
              className="hover:text-blue-600"
              href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss">
              Tailwind Uniformed Class Order
            </a>
          </li>
          <li key={nanoid()}>
            <a
              className="hover:text-blue-600"
              href="https://typescript-eslint.io/docs/linting/">
              TS Lint Parser
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;

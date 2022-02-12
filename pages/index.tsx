import type { NextPage } from "next";
import { NextSeo } from "next-seo";

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
        <ul className="list-disc !text-left">
          <li className="">
            <a href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss">
              Tailwind Uniformed Class Order
            </a>
          </li>
          <li>
            <a href="https://typescript-eslint.io/docs/linting/">
              TS Lint Parser
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;

import Link from "next/link";

const RootPage = () => {
  return (
    <section
      className="container mx-auto flex h-screen w-full items-center justify-center"
      id="main">
      <div className="text-center">
        <h1 className="font-semibold">Next.js Boilerplate</h1> <br />
        <p>Configuration with Eslint, Prettier and Husky</p>
        <p className="text-xl font-bold">Dependencies</p>
        <ul className="list-disc !text-left">
          <li>
            <a href="https://github.com/axios/axios">Axios</a>
          </li>
          <li>
            <a href="https://react-query.tanstack.com/overview">
              React - Query
            </a>
          </li>
          <Link href="/fetch">
            [Sample Page for React Query and Axios]
          </Link>
        </ul>
        <p className="text-xl font-bold">Dev-Dependencies</p>
        <ul className="list-disc !text-left">
          <li>
            <a href="https://github.com/tailwindlabs/prettier-plugin-tailwindcss">
              Tailwind Uniformed Class Order
            </a>
          </li>
          <li>
            <a href="https://typescript-eslint.io/packages/parser">
              TS Lint Parser
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RootPage;

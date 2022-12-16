import { FC } from "react";
import { Link } from "react-router-dom";

import Layout from "@/components/molecules/Layout";
import Card from "@/components/organisms/Card";

const Home: FC = () => {
  return (
    <Layout>
      <Layout.Grid className="grid-cols-2 gap-3 lg:grid-cols-4">
        {new Array(50).fill("").map((_, index) => (
          <Link key={index} to={`/about/${index}`}>
            <Card index={index} />
          </Link>
        ))}
      </Layout.Grid>
    </Layout>
  );
};

export default Home;

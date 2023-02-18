import { FC } from "react";
import { Link } from "react-router-dom";

import Layout from "@/components/atoms/Layout";
import Text from "@/components/atoms/Text";

const Home: FC = () => {
  return (
    <Layout>
      <Layout.Grid className="grid-cols-2 gap-3 lg:grid-cols-4">
        {new Array(50).fill("").map((_, index) => (
          <Link key={index} to={`/about/${index}`}>
            <Layout className="rounded-md border bg-white p-5">
              <Layout className="overflow-hidden">
                <img
                  className="duration-200 hover:scale-125 hover:opacity-80"
                  src="https://i.ytimg.com/vi/bN01WRBS0Ec/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDqr49CxWnwW8Kz5iCIndcAtfBjEg"
                />
              </Layout>
              <Layout>
                <Text as="strong">{index}</Text>
              </Layout>
            </Layout>
          </Link>
        ))}
      </Layout.Grid>
    </Layout>
  );
};

export default Home;

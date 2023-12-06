import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { Link } from "react-router-dom";

import Input from "@/components/atoms/Input";
import Layout from "@/components/atoms/Layout";
import Text from "@/components/atoms/Text";
import queryKeyStore from "@/factory";

const Home: FC = () => {
  const { data } = useQuery({
      ...queryKeyStore.todos.list()
  });
  console.log(data);

  if (!data) return null;

  return (
    <Layout>
      <Layout className="my-4">
        <Input />
      </Layout>
      <Layout.Grid className="grid-cols-2 gap-3 lg:grid-cols-4">
        {data.map((value, index) => (
          <Link key={index} to={`/about/${value}`}>
            <Layout className="rounded-md border bg-white p-5">
              <Layout className="overflow-hidden">
                <img
                    alt="image"
                  className="duration-200 hover:scale-125 hover:opacity-80"
                  src="https://i.ytimg.com/vi/bN01WRBS0Ec/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDqr49CxWnwW8Kz5iCIndcAtfBjEg"
                />
              </Layout>
              <Layout>
                <Text as="strong">{value}</Text>
              </Layout>
            </Layout>
          </Link>
        ))}
      </Layout.Grid>
    </Layout>
  );
};

export default Home;

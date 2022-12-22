import { FC, memo } from "react";
import Layout from "@/components/molecules/Layout";

interface ICard {
  index: number;
}

const Card: FC<ICard> = ({ index }) => {
  return (
    <Layout className="h-64 rounded-md border bg-white p-5">
      <Layout className="overflow-hidden">
        <img
          className="duration-200 hover:scale-125 hover:opacity-80"
          src="https://i.ytimg.com/vi/bN01WRBS0Ec/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDqr49CxWnwW8Kz5iCIndcAtfBjEg"
        />
      </Layout>
      <Layout>{index}</Layout>
    </Layout>
  );
};

export default memo(Card);

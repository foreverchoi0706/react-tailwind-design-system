import { FC, memo } from "react";
import Layout from "@/components/molecules/Layout";

interface ICard {
  index: number;
}

const Card: FC<ICard> = ({ index }) => {
  return (
    <Layout className="h-64 overflow-hidden rounded-md border bg-white p-5 hover:opacity-80">
      <img
        className="duration-200 hover:scale-125"
        src="https://i.ytimg.com/vi/bN01WRBS0Ec/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDqr49CxWnwW8Kz5iCIndcAtfBjEg"
      />
      {index}
    </Layout>
  );
};

export default memo(Card);

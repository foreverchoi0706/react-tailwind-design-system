import { FC, memo } from "react";
import Layout from "@/components/molecules/Layout";

const Skeleton: FC = () => {
  return <Layout className="animate-pulse" />;
};

export default memo(Skeleton);

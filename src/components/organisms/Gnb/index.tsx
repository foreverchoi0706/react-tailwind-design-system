import { FC, memo } from "react";
import Layout from "@/components/molecules/Layout";

const Gnb: FC = () => {
  return (
    <Layout.Box className="p-3">
      <Layout.List className="flex justify-between">
        <Layout.ListItem>sad</Layout.ListItem>
        <Layout.ListItem>sad</Layout.ListItem>
        <Layout.ListItem>sad</Layout.ListItem>
        <Layout.ListItem>sad</Layout.ListItem>
      </Layout.List>
    </Layout.Box>
  );
};

export default memo(Gnb);

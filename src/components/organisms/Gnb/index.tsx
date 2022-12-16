import { FC, memo } from "react";
import ROUTES from "@/constants/routes";
import Layout from "@/components/molecules/Layout";

interface IProps {
  routes: typeof ROUTES;
}

const Gnb: FC<IProps> = ({ routes }) => {
  return (
    <Layout className="p-3">
      <Layout.List className="flex justify-between">
        {routes.map((route, index) => (
          <Layout.ListItem key={index}>{route.pathname}</Layout.ListItem>
        ))}
        <Layout.ListItem>로그인</Layout.ListItem>
      </Layout.List>
    </Layout>
  );
};

export default memo(Gnb);

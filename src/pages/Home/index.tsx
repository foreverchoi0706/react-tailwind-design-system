import { FC } from "react";
import { Link } from "react-router-dom";

import Layout from "@/components/molecules/Layout";
import Card from "@/components/organisms/Card";
import Button from "@/components/molecules/Button";

const Home: FC = () => {
  const handleClickSignInButton = () => {
    window.open("/adress");
  };
  return (
    <Layout>
      <Button.Text onClick={handleClickSignInButton}>주소 모달</Button.Text>
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

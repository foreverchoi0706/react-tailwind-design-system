import { FC, useCallback } from "react";
import { Button, Input } from "newt-ui";
import Layout from "@/components/atoms/Layout";

const My: FC = () => {
  const buttonDoubleClickHandler = useCallback(() => {
    console.log(1);
  }, []);

  return (
    <Layout>
      <Button
        className="bg-red-500 md:bg-blue-500 lg:bg-yellow-500"
        onDoubleClick={buttonDoubleClickHandler}
      >
        Button
      </Button>
      <Input />
      <Button className="">Button</Button>
    </Layout>
  );
};

export default My;

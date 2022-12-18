import Layout from "@/components/molecules/Layout";
import { FC, MouseEventHandler, useCallback, useRef } from "react";

const About: FC = () => {
  const ref = useRef<HTMLLIElement>(null);

  const handleClick = useCallback<MouseEventHandler<HTMLLIElement>>((e) => {
    console.log(e.currentTarget.id);
    console.log(ref);
  }, []);

  return (
    <Layout>
      <Layout.List>
        <Layout.ListItem
          id="dsad"
          ref={ref}
          onClick={handleClick}
          className="cursor-pointer bg-red-500"
        >
          ssadsadasdsada
        </Layout.ListItem>
      </Layout.List>
    </Layout>
  );
};

export default About;

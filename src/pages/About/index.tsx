import React, { FC } from "react";
import { DnD } from "react-rough-dnd";

import Layout from "@/components/atoms/Layout";
export interface IProfileForm {
  id: string;
  pw: string;
  repw: string;
  education: number[];
  address: {
    value: string;
  }[];
  cell: string;
}

const About: FC = () => {
  return (
    <Layout>
      <DnD.Container
        onDragAndDrop={(a, b) => {
          console.log(a, b);
        }}
      >
        <div>AAA</div>
        <div>BBB</div>
        <div>CCC</div>
        <div>DDD</div>
        <div>EEE</div>
      </DnD.Container>
    </Layout>
  );
};

export default About;

import Layout from "@/components/molecules/Layout";
import { useParams } from "react-router-dom";

const About = () => {
  const parmas = useParams();
  return <Layout>{parmas.id}</Layout>;
};

export default About;

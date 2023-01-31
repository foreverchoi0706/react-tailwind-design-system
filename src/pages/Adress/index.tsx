import Layout from "@/components/molecules/Layout";
import { FC, memo, useEffect, useState } from "react";

const Adress: FC = () => {
  const [adress, setAdress] = useState<string>("test");
  const handleScriptLoad = () => {
    const postcode = new (window as any).daum.Postcode({
      oncomplete: (data: any) => {
        console.log(data);

        setAdress(data.address);
      },
    });
    postcode.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.defer = true;
    script.onload = handleScriptLoad;
    window.document.body.appendChild(script);
  }, []);

  useEffect(() => {}, []);

  return <Layout>{adress}</Layout>;
};

export default memo(Adress);

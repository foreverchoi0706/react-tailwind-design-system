import { FC } from "react";

import Layout from "@/components/molecules/Layout";
import Modal from "@/components/molecules/Modal";
import useFlag from "@/hooks/useFlag";

const Home: FC = () => {
 const [isOpen, handleClickCard] = useFlag();

 return (
  <Layout.Box>
   <Layout.Grid className="grid-cols-2 gap-3 lg:grid-cols-4">
    {new Array(50).fill("").map((_, index) => (
     <Layout.Box
      key={index}
      onClick={handleClickCard}
      className="p-5 h-64 border"
     >
      {index}
     </Layout.Box>
    ))}
   </Layout.Grid>
   {isOpen && (
    <Modal onClose={handleClickCard}>
     <Modal.Contents>
      <Modal.Header>Header</Modal.Header>
      <Modal.Body>
       <form>
        <Layout.Flex className="flex-col">
         <input />
         <button type="submit">TEST</button>
        </Layout.Flex>
       </form>
      </Modal.Body>
      <Modal.Footer>Footer</Modal.Footer>
     </Modal.Contents>
    </Modal>
   )}
  </Layout.Box>
 );
};

export default Home;

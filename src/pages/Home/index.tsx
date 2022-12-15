import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Layout from "@/components/molecules/Layout";
import Modal from "@/components/molecules/Modal";
import Form from "@/components/molecules/Form";
import Element from "@/components/atoms/Element";
import useFlag from "@/hooks/useFlag";
import Button from "@/components/molecules/Button";

const Home: FC = () => {
  const [isOpen, handleClickCard] = useFlag();

  const methods = useForm();

  return (
    <Layout.Box>
      <Layout.Grid className="grid-cols-2 gap-3 lg:grid-cols-4">
        {new Array(50).fill("").map((_, index) => (
          <Layout.Box
            className="h-64 border p-5"
            key={index}
            onClick={handleClickCard}
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
              <FormProvider {...methods}>
                <Form>
                  <Form.Input />
                </Form>
              </FormProvider>
            </Modal.Body>
            <Modal.Footer>
              <Button.Primary>SUBMIT</Button.Primary>
            </Modal.Footer>
          </Modal.Contents>
        </Modal>
      )}
    </Layout.Box>
  );
};

export default Home;

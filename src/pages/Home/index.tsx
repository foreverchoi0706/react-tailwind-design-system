import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Layout from "@/components/molecules/Layout";
import Modal from "@/components/molecules/Modal";
import Form from "@/components/molecules/Form";
import Button from "@/components/molecules/Button";
import useFlag from "@/hooks/useFlag";

const Home: FC = () => {
  const [isOpen, handleClickCard] = useFlag();

  const methods = useForm();

  return (
    <Layout>
      <Layout.Grid className="grid-cols-2 gap-3 lg:grid-cols-4">
        {new Array(50).fill("").map((_, index) => (
          <Layout
            className="h-64 border p-5"
            key={index}
            onClick={handleClickCard}
          >
            {index}
          </Layout>
        ))}
      </Layout.Grid>
      {isOpen && (
        <Modal onClose={handleClickCard}>
          <Modal.Overlay />
          <Modal.Contents>
            <Modal.Header>
              <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
              <FormProvider {...methods}>
                <Form>
                  <Layout.Flex className="flex-col gap-10">
                    <Form.Field name="name1">
                      <Form.Label>이름 1</Form.Label>
                      <Form.Input />
                    </Form.Field>
                    <Form.Field name="name2">
                      <Form.Label>이름 2</Form.Label>
                      <Form.Input />
                    </Form.Field>
                    <Form.Field name="name3">
                      <Form.Label>이름 3</Form.Label>
                      <Form.Input />
                    </Form.Field>
                  </Layout.Flex>
                </Form>
              </FormProvider>
            </Modal.Body>
            <Modal.Footer className="mt-5">
              <Button.Primary>SUBMIT</Button.Primary>
            </Modal.Footer>
          </Modal.Contents>
        </Modal>
      )}
    </Layout>
  );
};

export default Home;

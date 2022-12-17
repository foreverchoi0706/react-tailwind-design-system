import { FC, memo, useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import ROUTES from "@/constants/routes";
import Layout from "@/components/molecules/Layout";
import Modal from "@/components/molecules/Modal";
import Form from "@/components/molecules/Form";
import Button from "@/components/molecules/Button";
import useFlag from "@/hooks/useFlag";

interface IProps {
  routes: typeof ROUTES;
}

const Gnb: FC<IProps> = ({ routes }) => {
  const [isOpen, handleClickSignInButton] = useFlag();

  const methods = useForm();

  const handleSubmitForm = useCallback<SubmitHandler<any>>((form) => {
    console.log(form);
  }, []);

  return (
    <Layout className="p-3">
      <Layout.List className="flex justify-between">
        {routes.map((route, index) => (
          <Layout.ListItem key={index}>
            <Link to={route.path}>{route.pathname}</Link>
          </Layout.ListItem>
        ))}
        <Layout.ListItem>
          <Button.Text onClick={handleClickSignInButton}>로그인</Button.Text>
        </Layout.ListItem>
      </Layout.List>
      {isOpen && (
        <Modal onClose={handleClickSignInButton}>
          <Modal.Overlay />
          <Modal.Contents>
            <Modal.Header>
              <Modal.Title className="text-start">회원가입</Modal.Title>
              <Modal.CloseButton />
            </Modal.Header>
            <Modal.Body>
              <FormProvider {...methods}>
                <Form onSubmit={methods.handleSubmit(handleSubmitForm)}>
                  <Layout.Flex className="flex-col gap-10">
                    <Form.Field name="id">
                      <Form.Label>아이디</Form.Label>
                      <Form.Input autoFocus />
                    </Form.Field>
                    <Form.Field name="password">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Input />
                    </Form.Field>
                    <Form.Field name="select">
                      <Form.Label>기술스택</Form.Label>
                      <Form.Select
                        onSelect={() => {
                          console.log(1);
                        }}
                      >
                        <Form.Option>AAA</Form.Option>
                        <Form.Option>BBB</Form.Option>
                        <Form.Option>CCC</Form.Option>
                        <Form.Option>DDD</Form.Option>
                        <Form.Option>EEE</Form.Option>
                        <Form.Option>FFF</Form.Option>
                      </Form.Select>
                    </Form.Field>
                    <Layout.Flex className="justify-between gap-3">
                      <Button.Primary type="s">로그인</Button.Primary>
                      <Button.Disabled onClick={handleClickSignInButton}>
                        취소
                      </Button.Disabled>
                    </Layout.Flex>
                  </Layout.Flex>
                </Form>
              </FormProvider>
            </Modal.Body>
            <Modal.Footer className="mt-5"></Modal.Footer>
          </Modal.Contents>
        </Modal>
      )}
    </Layout>
  );
};

export default memo(Gnb);

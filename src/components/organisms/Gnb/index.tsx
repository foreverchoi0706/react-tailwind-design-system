import { FC, memo, useCallback, useRef } from "react";
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

  const ref = useRef<HTMLButtonElement>(null);

  const handleSubmitForm = useCallback<SubmitHandler<any>>((form) => {
    console.log(form);
    console.log(ref);
  }, []);

  return (
    <Layout className="sticky top-0 z-30 w-full bg-white p-3 shadow-md">
      <Layout.List className="flex justify-between">
        {routes
          .filter(({ isShowGnb }) => isShowGnb)
          .map((route, index) => (
            <Layout.ListItem key={index}>
              <Link to={route.path}>{route.pathname}</Link>
            </Layout.ListItem>
          ))}
        <Layout.ListItem>
          <Button.Text onClick={handleClickSignInButton}>로그인</Button.Text>
        </Layout.ListItem>
      </Layout.List>
      {isOpen && (
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(handleSubmitForm)}>
            <Modal onClose={handleClickSignInButton}>
              <Modal.Overlay />

              <Modal.Contents>
                <Modal.Header>
                  <Modal.Title className="text-start">회원가입</Modal.Title>
                  <Modal.CloseButton />
                </Modal.Header>

                <Modal.Body>
                  <Layout.Flex className="h-[500px] flex-col gap-10">
                    <Form.Field name="id">
                      <Form.Label>아이디</Form.Label>
                      <Form.Input autoFocus />
                    </Form.Field>
                    <Form.Field name="password">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Input type="password" />
                    </Form.Field>
                    <Form.Field name="password">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Input type="password" />
                    </Form.Field>
                    <Form.Field name="password">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Input type="password" />
                    </Form.Field>
                    <Form.Field name="password">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Input type="password" />
                    </Form.Field>
                    <Form.Field name="password">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Input type="password" />
                    </Form.Field>
                    <Form.Field name="password">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Input type="password" />
                    </Form.Field>
                    <Form.Field name="password">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Input type="password" />
                    </Form.Field>
                    <Form.Field name="password">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Input type="password" />
                    </Form.Field>
                  </Layout.Flex>
                </Modal.Body>

                <Modal.Footer>
                  <Layout.Flex className="justify-between gap-3">
                    <Button.Primary ref={ref}>로그인</Button.Primary>
                    <Button.Disabled onClick={handleClickSignInButton}>
                      취소
                    </Button.Disabled>
                  </Layout.Flex>
                </Modal.Footer>
              </Modal.Contents>
            </Modal>
          </Form>
        </FormProvider>
      )}
    </Layout>
  );
};

export default memo(Gnb);

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ROUTES from "@/constants/routes";
import Layout from "@/components/atoms/Layout";
import Button from "@/components/atoms/Button";
import Form from "@/components/compounds/Form";
import Modal, { IModalContext } from "@/components/compounds/Modal";
import "./index.css";
import { FC, useCallback } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import useFlag from "./hooks/useFlag";
import { TSignInForm } from "./types/user";
import Text from "./components/atoms/Text";

const SignInModal: FC<IModalContext> = ({ onClose }) => {
  const methods = useForm<TSignInForm>();

  const handleSubmitForm = useCallback<SubmitHandler<TSignInForm>>(
    (signInForm) => {
      console.log(signInForm);
    },
    []
  );

  return (
    <Modal onClose={onClose}>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(handleSubmitForm)}>
          <Modal.Contents>
            <Modal.Header>
              <Text as="h1">로그인</Text>
              <Modal.CloseButton />
            </Modal.Header>

            <Modal.Body>
              <Layout.Flex className="flex-col gap-10 p-6">
                <Form.Field>
                  <Form.Label>아이디</Form.Label>
                  <Form.Input {...methods.register("id")} autoFocus />
                </Form.Field>
                <Form.Field>
                  <Form.Label>비밀번호</Form.Label>
                  <Form.Input {...methods.register("pw")} type="password" />
                </Form.Field>
              </Layout.Flex>
            </Modal.Body>

            <Modal.Footer>
              <Layout.Flex className="justify-between gap-3">
                <Button.Primary type="submit">로그인</Button.Primary>
                <Button.Disabled onClick={onClose}>취소</Button.Disabled>
              </Layout.Flex>
            </Modal.Footer>
          </Modal.Contents>
        </Form>
      </FormProvider>
    </Modal>
  );
};

function App() {
  const queryClient = new QueryClient();

  const [isOpen, handleSignInButtonClick] = useFlag();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout className="sticky top-0 z-30 w-full bg-white p-3 shadow-md">
          <Layout.List className="flex justify-between">
            {ROUTES.filter(({ isShowGnb }) => isShowGnb).map((route, index) => (
              <Layout.ListItem key={index}>
                <Link to={route.path}>{route.pathname}</Link>
              </Layout.ListItem>
            ))}
            <Layout.ListItem>
              <Button.Text onClick={handleSignInButtonClick}>
                로그인
              </Button.Text>
            </Layout.ListItem>
          </Layout.List>
        </Layout>
        <Layout className="my-0 mx-auto max-w-7xl px-4">
          <Routes>
            {ROUTES.map(({ path, Component }, index) => (
              <Route element={<Component />} key={index} path={path} />
            ))}
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
        {isOpen && <SignInModal onClose={handleSignInButtonClick} />}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

import { FC, useCallback } from "react";
import {
  ArrayPath,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import Button from "@/components/molecules/Button";
import Form from "@/components/molecules/Form";
import Layout from "@/components/molecules/Layout";

interface IProfileForm {
  id: string;
  pw: string;
  repw: string;
}

const About: FC = () => {
  const method = useForm<IProfileForm>({
    defaultValues: {
      id: "",
      pw: "",
      repw: "",
    },
  });

  const handleFormSubmit = useCallback<SubmitHandler<IProfileForm>>((e) => {
    console.log(e);
  }, []);

  return (
    <Layout>
      <FormProvider {...method}>
        <Form onSubmit={method.handleSubmit(handleFormSubmit)}>
          <Form.Field>
            <Form.Label>TEST</Form.Label>
            <Form.Input
              {...method.register("id", {
                required: "ID 필수",
              })}
              placeholder="id"
            />
            <span className="text-red-400">
              {method.formState.errors["id"]?.message}
            </span>
          </Form.Field>
          <Form.Field>
            <Form.Label>TEST</Form.Label>
            <Form.Input {...method.register("pw")} placeholder="pw" />
          </Form.Field>
          <Form.Field>
            <Form.Label>TEST</Form.Label>
            <Form.Input {...method.register("repw")} placeholder="repw" />
          </Form.Field>
          <Button type="submit">dasd</Button>
        </Form>
      </FormProvider>
    </Layout>
  );
};

export default About;

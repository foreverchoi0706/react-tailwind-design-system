import { FC, useCallback, useEffect, useState } from "react";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import Button from "@/components/molecules/Button";
import Form from "@/components/molecules/Form";
import Layout from "@/components/molecules/Layout";
import useProfileFormQuery from "@/hooks/useProfileQuery";

export interface IProfileForm {
  id: string;
  pw: string;
  repw: string;
  address: {
    value: string;
  }[];
}

const About: FC = () => {
  const [text, setText] = useState<string>("");
  const method = useForm<IProfileForm>({
    mode: "onSubmit",
    defaultValues: {
      id: "",
      pw: "",
      repw: "",
    },
  });

  useProfileFormQuery(method);

  const { fields, append, remove } = useFieldArray<IProfileForm>({
    control: method.control,
    name: "address",
  });

  const handleProfileFormSubmit = useCallback<SubmitHandler<IProfileForm>>(
    (profileForm) => {
      console.log(profileForm);
    },
    []
  );

  useEffect(() => {
    const firstError = Object.values(method.formState.errors)[0];
    if (!firstError || !firstError?.ref) return;
     firstError.ref.focus();
  }, [method.formState]);

  return (
    <Layout className="max-w-5xl">
      <FormProvider {...method}>
        <Form onSubmit={method.handleSubmit(handleProfileFormSubmit)}>
          <Layout.Flex className="max-w-7xl flex-col gap-4">
            <Form.Field>
              <Form.Label>id</Form.Label>
              <Form.Input
                className={`${
                  method.formState.errors["id"]?.message &&
                  "placeholder:text-red-500"
                }`}
                {...method.register("id", {
                  required: "ID는 필수입니다.",
                })}
                placeholder={method.formState.errors["id"]?.message || "id"}
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>pw</Form.Label>
              <Form.Input
                type="password"
                {...method.register("pw")}
                placeholder="pw"
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>repw</Form.Label>
              <Form.Input
                type="password"
                {...method.register("repw")}
                placeholder="repw"
                readOnly
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>pw</Form.Label>
              <Form.Input
                type="password"
                {...method.register("pw")}
                placeholder="pw"
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>repw</Form.Label>
              <Form.Input
                type="password"
                {...method.register("repw")}
                placeholder="repw"
                readOnly
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>pw</Form.Label>
              <Form.Input
                type="password"
                {...method.register("pw")}
                placeholder="pw"
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>repw</Form.Label>
              <Form.Input
                type="password"
                {...method.register("repw")}
                placeholder="repw"
                readOnly
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>pw</Form.Label>
              <Form.Input
                type="password"
                {...method.register("pw")}
                placeholder="pw"
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>repw</Form.Label>
              <Form.Input
                type="password"
                {...method.register("repw")}
                placeholder="repw"
                readOnly
              />
            </Form.Field>
            {fields.map((field, index) => (
              <Form.Field key={field.id} className="flex">
                <Layout className="w-full">
                  {index === 0 && <Form.Label>주소</Form.Label>}
                  <Form.Input
                    type="text"
                    {...method.register(`address.${index}.value`)}
                    placeholder="repw"
                    readOnly
                  />
                </Layout>
                {index !== 0 && (
                  <Button
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    X
                  </Button>
                )}
              </Form.Field>
            ))}
            {fields.length < 2 && (
              <Form.Field className="flex  justify-end">
                <Layout className="w-full">
                  <Form.Input
                    type="text"
                    placeholder="주소입력"
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                </Layout>
                <Button.Primary
                  className="h-[48px]"
                  type="button"
                  onClick={() => {
                    append([{ value: text }]);
                  }}
                >
                  추가
                </Button.Primary>
              </Form.Field>
            )}
            <Button type="submit">저장</Button>
          </Layout.Flex>
        </Form>
      </FormProvider>
    </Layout>
  );
};

export default About;

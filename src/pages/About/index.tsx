import { FC, useCallback, useState } from "react";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import Button from "@/components/atoms/Button";
import Layout from "@/components/atoms/Layout";
import Form from "@/components/blocks/Form";
import useProfileFormQuery from "@/hooks/useProfileQuery";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const method = useForm<IProfileForm>({
    defaultValues: {
      id: "",
      pw: "",
      repw: "",
      address: [],
    },
  });

  const { isLoading } = useProfileFormQuery(method);

  const { mutate } = useMutation<any, any, IProfileForm>(
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
          });
        }, 3000);
      });
    },
    {
      onSuccess: () => {
        alert(123);
        navigate("/");
      },
    }
  );

  const { fields, append, remove } = useFieldArray<IProfileForm>({
    control: method.control,
    name: "address",
  });

  const handleProfileFormSubmit = useCallback<SubmitHandler<IProfileForm>>(
    (profileForm) => {
      mutate(profileForm);
    },
    []
  );

  return (
    <Layout>
      <FormProvider {...method}>
        <Form onSubmit={method.handleSubmit(handleProfileFormSubmit)}>
          <Layout.Flex className="max-w-7xl flex-col gap-4">
            <Form.Field>
              <Form.Label>id</Form.Label>
              <Form.Input
                disabled={isLoading}
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
                disabled={isLoading}
                type="password"
                {...method.register("pw")}
                placeholder="pw"
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>repw</Form.Label>
              <Form.Input
                disabled={isLoading}
                type="password"
                {...method.register("repw")}
                placeholder="repw"
              />
            </Form.Field>
            <Form.Field>
              <Form.Label>pw</Form.Label>
              <Form.Input
                disabled={isLoading}
                type="password"
                {...method.register("pw")}
                placeholder="pw"
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

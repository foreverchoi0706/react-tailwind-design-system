import React, { FC, useCallback, useState } from "react";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

import Button from "@/components/atoms/Button";
import Layout from "@/components/atoms/Layout";
import Text from "@/components/atoms/Text";
import Form from "@/components/compounds/Form";
import useProfileFormQuery from "@/hooks/useProfileQuery";

export interface IProfileForm {
  id: string;
  pw: string;
  repw: string;
  education: number[];
  address: {
    value: string;
  }[];
  cell: string;
}

const About: FC = () => {
  const [text, setText] = useState<string>("");

  const method = useForm<IProfileForm>({
    defaultValues: {
      id: "",
      pw: "",
      repw: "",
      education: [],
      address: [],
      cell: "",
    },
  });

  const { errors } = method.formState;

  const { isLoading } = useProfileFormQuery(method);

  const { fields, append, remove } = useFieldArray<IProfileForm>({
    control: method.control,
    name: "address",
  });

  const handleProfileFormSubmit = useCallback<SubmitHandler<IProfileForm>>(
    (profileForm) => {
      console.log(profileForm);
    },
    [],
  );

  return (
    <Layout>
      <FormProvider {...method}>
        <Form onSubmit={method.handleSubmit(handleProfileFormSubmit)}>
          <fieldset disabled={isLoading}>
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
                  placeholder="id"
                />
                {errors.id && <Text.Error>{errors.id.message}</Text.Error>}
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
                />
              </Form.Field>
              {fields.map((field, index) => (
                <Form.Field key={field.id} className="flex justify-end gap-4">
                  {index === 0 && <Form.Label>주소</Form.Label>}
                  <Form.Input
                    type="text"
                    {...method.register(`address.${index}.value`)}
                    placeholder={field.value}
                    readOnly
                  />

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
                <Form.Field className="flex justify-end gap-4">
                  <Form.Input
                    placeholder="주소입력"
                    type="text"
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                  <Button.Primary
                    type="button"
                    onClick={() => {
                      append([{ value: text }]);
                    }}
                  >
                    추가
                  </Button.Primary>
                </Form.Field>
              )}
              <Form.Field>
                <Form.Label>전화번호</Form.Label>
                <Form.Input
                  placeholder="01012345678"
                  {...method.register("cell", {
                    pattern: {
                      value: /01[0|1|6|7|8|9]{1}([0-9]{7,8})/g,
                      message: "올바른 전화번호를 입력해주세요.",
                    },
                  })}
                />
                {errors.cell && <Text.Error>{errors.cell.message}</Text.Error>}
              </Form.Field>
              <Button type="submit">저장</Button>
            </Layout.Flex>
          </fieldset>
        </Form>
      </FormProvider>
    </Layout>
  );
};

export default About;

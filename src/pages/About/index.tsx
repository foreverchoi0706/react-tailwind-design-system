import { useMutation } from "@tanstack/react-query";
import React,{ FC, useCallback, useState } from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import ReactSelect, { components, OptionProps } from "react-select";

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

const EDUCATION_OPTIONS = [
  { label: "초등학교", value: 1 },
  { label: "중학교", value: 2 },
  { label: "고등학교", value: 3 },
  { label: "대학교", value: 4 },
];

const Option: FC<OptionProps<any>> = (props) => {
  return (
    <components.Option {...props}>
      <input checked={props.isSelected} type="checkbox" onChange={() => null} />{" "}
      <label>{props.label}</label>
    </components.Option>
  );
};
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

  const { mutate } = useMutation<any, any, IProfileForm>(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
        });
      }, 3000);
    });
  });

  const { fields, append, remove } = useFieldArray<IProfileForm>({
    control: method.control,
    name: "address",
  });

  const handleProfileFormSubmit = useCallback<SubmitHandler<IProfileForm>>(
    (profileForm) => {
      console.log(profileForm);
      mutate(profileForm);
    },
    []
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
                <Controller
                  control={method.control}
                  name="education"
                  render={({ field }) => (
                    <ReactSelect
                      components={{
                        Option,
                      }}
                      hideSelectedOptions={false}
                      isMulti
                      options={EDUCATION_OPTIONS}
                      placeholder="학력을 입력해 주세요."
                      value={EDUCATION_OPTIONS.find(
                        (c) => c.value === +field.value
                      )}
                      onChange={(temp) => {
                        console.log(field.value);
                        field.onChange(
                          [...temp.values()].map(({ value }) => value)
                        );
                      }}
                    />
                  )}
                  rules={{
                    required: "학력을 입력해주세요",
                  }}
                />
                {errors.education && (
                  <Text.Error>{errors.education.message}</Text.Error>
                )}
              </Form.Field>
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

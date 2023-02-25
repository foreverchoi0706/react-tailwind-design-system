import { FC, useCallback, useState } from "react";
import {
  Controller,
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
import ReactSelect, { components, OptionProps } from "react-select";

export interface IProfileForm {
  id: string;
  pw: string;
  repw: string;
  education: number[];
  address: {
    value: string;
  }[];
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
      <input type="checkbox" checked={props.isSelected} onChange={() => null} />{" "}
      <label>{props.label}</label>
    </components.Option>
  );
};
const About: FC = () => {
  const [text, setText] = useState<string>("");

  const navigate = useNavigate();
  const method = useForm<IProfileForm>({
    defaultValues: {
      id: "",
      pw: "",
      repw: "",
      education: [],
      address: [],
    },
  });

  const { education } = method.watch();

  console.log(education.length);

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
              <Form.Field className="flex justify-end gap-4">
                {index === 0 && <Form.Label>주소</Form.Label>}
                <Form.Input
                  type="text"
                  {...method.register(`address.${index}.value`)}
                  placeholder="repw"
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
                  type="text"
                  placeholder="주소입력"
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
                name="education"
                control={method.control}
                render={({ field }) => (
                  <ReactSelect
                    isMulti
                    value={EDUCATION_OPTIONS.find(
                      (c) => c.value === +field.value
                    )}
                    components={{
                      Option,
                    }}
                    menuIsOpen={education.length < 2}
                    hideSelectedOptions={false}
                    onChange={(temp) => {
                      console.log(field.value);

                      field.onChange(
                        [...temp.values()].map(({ value }) => value)
                      );
                    }}
                    placeholder="학력을 입력해 주세요."
                    options={EDUCATION_OPTIONS}
                  />
                )}
                rules={{
                  required: "학력을 입력해주세요",
                }}
              />
              <em>{method.formState.errors["education"]?.message}</em>
            </Form.Field>
            <Button type="submit">저장</Button>
          </Layout.Flex>
        </Form>
      </FormProvider>
    </Layout>
  );
};

export default About;

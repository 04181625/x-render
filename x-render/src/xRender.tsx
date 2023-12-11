import FormRender, { useForm } from "form-render";
import schema from "./schema/simple";
import { FC } from "react";

export interface IHandleFormProps {
  title: string;
}

export const XRender: FC<IHandleFormProps> = () => {
  const form = useForm();

  const onFinish = (formData: any) => {
    console.log("formData:", formData);
  };

  // XRender 组件
  return (
    <FormRender
      form={form}
      schema={schema}
      onFinish={onFinish}
      maxWidth={960}
      footer={true}
    />
  );
};

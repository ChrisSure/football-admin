import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../../../../../core/form/components/form-field/FormField.tsx";
import { sourceFormSchema } from "./schemas/source-form.schema.ts";
import type { SourceFormData, SourceFormProps } from "./types/source-form.types.ts";
import { SOURCE_STATUS_OPTIONS } from "./constants/source-form.constants.ts";

const SourceForm = ({ id, initialValues, onSubmit }: SourceFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SourceFormData>({
    resolver: zodResolver(sourceFormSchema),
    defaultValues: initialValues,
    mode: "onSubmit",
  });

  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col gap-5">
      <FormField
        name="title"
        label="Title"
        type="text"
        placeholder="Enter source title"
        register={register}
        error={errors.title}
      />
      <FormField
        name="url"
        label="Url"
        type="text"
        placeholder="Enter source url"
        register={register}
        error={errors.url}
      />
      <FormField
        name="key"
        label="Key"
        type="text"
        placeholder="Enter source key"
        register={register}
        error={errors.key}
      />
      <FormField
        name="status"
        label="Status"
        type="select"
        register={register}
        error={errors.status}
        defaultValue={initialValues?.status}
        options={SOURCE_STATUS_OPTIONS}
      />
    </form>
  );
};

export default SourceForm;

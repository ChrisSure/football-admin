import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@core/form/components/form-field/FormField.tsx";
import { createConsumerFormSchema } from "./schemas/create-consumer-form.schema.ts";
import type {
  CreateConsumerFormData,
  CreateConsumerFormProps,
} from "./types/create-consumer-form.types.ts";

const CreateConsumerForm = ({
  id,
  initialValues,
  onSubmit,
}: CreateConsumerFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateConsumerFormData>({
    resolver: zodResolver(createConsumerFormSchema),
    defaultValues: initialValues,
    mode: "onSubmit",
  });

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full flex-col gap-5"
    >
      <FormField
        name="title"
        label="Title"
        type="text"
        placeholder="Enter consumer title"
        register={register}
        error={errors.title}
      />
      <FormField
        name="key"
        label="Key"
        type="text"
        placeholder="Enter consumer key"
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
        options={[
          { value: "new", label: "New" },
          { value: "active", label: "Active" },
          { value: "stopped", label: "Stopped" },
        ]}
      />
    </form>
  );
};

export default CreateConsumerForm;

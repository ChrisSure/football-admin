import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@core/form/components/form-field/FormField.tsx";
import { createProjectFormSchema } from "./schemas/create-project-form.schema.ts";
import type {
  CreateProjectFormData,
  CreateProjectFormProps,
} from "./types/create-project-form.types.ts";

const CreateProjectForm = ({ id, initialValues, onSubmit }: CreateProjectFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectFormData>({
    resolver: zodResolver(createProjectFormSchema),
    defaultValues: initialValues,
    mode: "onSubmit",
  });

  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col gap-5">
      <FormField
        name="title"
        label="Title"
        type="text"
        placeholder="Enter project title"
        register={register}
        error={errors.title}
      />
      <FormField
        name="description"
        label="Description"
        type="textarea"
        placeholder="Enter project description"
        register={register}
        error={errors.description}
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

export default CreateProjectForm;

import { useForm, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@core/form/components/form-field/FormField.tsx";
import { createUserFormSchema, updateUserFormSchema } from "./schemas/create-user-form.schema.ts";
import type {
  CreateUserFormData,
  UpdateUserFormData,
  CreateUserFormProps,
} from "./types/create-user-form.types.ts";
import { useActiveProjectsQuery } from "../../api/queries/useActiveProjectsQuery.ts";
import { USER_ROLE_OPTIONS, USER_STATUS_OPTIONS } from "./constants/create-user-form.constants.ts";

const CreateUserForm = ({ id, initialValues, isEditing, onSubmit }: CreateUserFormProps) => {
  const { data: projects } = useActiveProjectsQuery();
  
  const schema = isEditing ? updateUserFormSchema : createUserFormSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData | UpdateUserFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...initialValues,
      projects: initialValues?.projects || [],
    },
    mode: "onSubmit",
  });

  const projectOptions = projects?.map((p) => ({
    value: p.id.toString(),
    label: p.title,
  })) || [];

  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col gap-5">
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Enter user name"
        register={register}
        error={errors.name}
      />
      {!isEditing && (
        <>
          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            register={register}
            error={(errors as FieldErrors<CreateUserFormData>).password}
          />
          <FormField
            name="repeatPassword"
            label="Repeat Password"
            type="password"
            placeholder="Repeat password"
            register={register}
            error={(errors as FieldErrors<CreateUserFormData>).repeatPassword}
          />
        </>
      )}
      <FormField
        name="role"
        label="Role"
        type="select"
        register={register}
        error={errors.role}
        defaultValue={initialValues?.role}
        options={[...USER_ROLE_OPTIONS]}
      />
      <FormField
        name="status"
        label="Status"
        type="select"
        register={register}
        error={errors.status}
        defaultValue={initialValues?.status}
        options={[...USER_STATUS_OPTIONS]}
      />
      <FormField
        name="projects"
        label="Projects"
        type="multi-select"
        register={register}
        error={errors.projects as undefined}
        defaultValue={initialValues?.projects}
        options={projectOptions}
        placeholder="Select projects"
      />
    </form>
  );
};

export default CreateUserForm;

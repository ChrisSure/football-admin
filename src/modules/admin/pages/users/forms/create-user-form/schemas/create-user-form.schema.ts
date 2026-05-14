import { z } from "zod";

const baseUserFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  role: z.enum(["admin", "moderator"], {
    message: "Role is required",
  }),
  status: z.enum(["new", "active", "stopped"], {
    message: "Status is required",
  }),
  projects: z.array(z.string()).optional(),
});

export const createUserFormSchema = baseUserFormSchema
  .extend({
    password: z.string().min(1, "Password is required"),
    repeatPassword: z.string().min(1, "Repeat password is required"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

export const updateUserFormSchema = baseUserFormSchema;

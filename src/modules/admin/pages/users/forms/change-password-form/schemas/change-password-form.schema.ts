import { z } from "zod";

export const changePasswordFormSchema = z
  .object({
    password: z.string().min(3, "Password must be at least 3 characters"),
    repeatPassword: z.string().min(3, "Password must be at least 3 characters"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"],
  });

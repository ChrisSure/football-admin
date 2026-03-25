import { z } from "zod";

export const loginFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  password: z.string().min(1, "Password is required"),
});

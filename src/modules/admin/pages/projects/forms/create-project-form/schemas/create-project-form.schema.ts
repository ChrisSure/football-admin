import { z } from "zod";

export const createProjectFormSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  description: z.string().trim().optional(),
  status: z.enum(["new", "active", "stopped"], {
    message: "Status is required",
  }),
});

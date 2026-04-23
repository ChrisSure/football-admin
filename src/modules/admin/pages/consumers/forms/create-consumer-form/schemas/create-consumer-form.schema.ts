import { z } from "zod";

export const createConsumerFormSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  key: z.string().trim().min(1, "Key is required"),
  status: z.enum(["new", "active", "stopped"], {
    message: "Status is required",
  }),
});

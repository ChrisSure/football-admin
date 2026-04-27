import { z } from "zod";

export const sourceFormSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  url: z.string().trim().url("Invalid URL").min(1, "Url is required"),
  key: z.string().trim().min(1, "Key is required"),
  status: z.enum(["active", "new", "stopped"], {
    message: "Status is required",
  }),
});

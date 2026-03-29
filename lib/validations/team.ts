import { z } from "zod";

export const teamMemberSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  image: z
    .string()
    .url("Invalid image URL")
    .or(z.string().min(1, "Image is required")),
  linkedin: z.string().optional().or(z.literal("")),
  twitter: z.string().optional().or(z.literal("")),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  isActive: z.boolean(),
});

export type TeamMemberFormValues = z.infer<typeof teamMemberSchema>;

import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must contain at least 8 char")
});

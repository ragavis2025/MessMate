import { z } from "zod";

export const addMenuSchema = z.object({
    day: z.string().min(1, "select one day"),
    breakfast: z.string().min(2, "Enter breakfast"),
    lunch: z.string().min(2, "Enter lunch"),
    dinner: z.string().min(2, "Enter dinner")
});

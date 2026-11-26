import { z } from "zod";

export const feedbackSchema = z.object({
    meal: z.string().min(1, "select one meal"),
    rating: z.coerce.number().min(1, "Rating must be at least 1").max(5, "Rating cannot be more than 5"),
    comments: z.string().min(3, "Comments must have atleast 5 char")
});

import { z } from "zod";

export const studentRegisterSchema = z.object({
    name: z.string().min(3, "name must contain 3 letters"),
    email: z.string().email("enter a valid email"),
    password: z.string().min(8, "password must contain alteast 8 char"),
    age: z.coerce.number().min(17, "Age must greater than 18"),
    block: z.string().min(1,"Invalid Block name"),
    roomno:z.coerce.number().min(3,"Invalid Room number"),
    rollno:z.string().min(7,"Invalid Roll number"),
    year:z.coerce.number().min(1,"Invalid year"),
    phoneno: z.string().length(10, "Phone number must contain 10 digits")
})
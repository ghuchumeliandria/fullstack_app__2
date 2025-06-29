import { InferType, object, string } from "yup";

export const signUpSchema  = object({
    fullName : string().required(),
    email: string().required(),
    password : string().min(8).max(20).required()
})

export type SignUpType = InferType<typeof signUpSchema>
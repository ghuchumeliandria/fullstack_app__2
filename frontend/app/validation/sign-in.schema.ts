import { InferType, object, string } from "yup";

export const signInSchema  = object({
    email: string().required(),
    password : string().min(8).max(20).required()
})

export type SignInType = InferType<typeof signInSchema>
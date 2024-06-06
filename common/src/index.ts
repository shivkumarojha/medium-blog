import z from 'zod'

export const signUpInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
    name: z.string()

})

// inferred type export
export type SignUpInputType = z.infer<typeof signUpInput>

// sign in 
export const signInInput = z.object({
    email: z.string().email(),
    password: z.string().min(5),
})

// inferred type export
export type SignInInputType = z.infer<typeof signInInput>


// sign in 
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean()
})

const UpdateBlogInputType = createBlogInput.partial()

// inferred type export
export type BlogInputType = z.infer<typeof createBlogInput>
export type UpdateBlogInputType = z.infer<typeof UpdateBlogInputType>




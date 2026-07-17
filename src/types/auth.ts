export interface SignupForm {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface SignupError {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
}
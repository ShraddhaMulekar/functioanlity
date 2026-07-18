import { useState } from 'react'
import type { SignupError, SignupForm } from '../types/auth'

export const Signup = () => {
    const [form, setForm] = useState<SignupForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState<SignupError>({})

    const validateForm = ()=>{
        const validationErrors: SignupError = {}

        if(!form.name.trim()){
            validationErrors.name = "Name is required"
        }

        if(!form.email.trim()){
            validationErrors.email = "Email is required"
        }   

        if(!form.password.trim()){
            validationErrors.password = "Password is required"
        }

        if(!form.confirmPassword.trim()){
            validationErrors.confirmPassword = "Confirm Password is required"
        }

        setError(validationErrors)
        return Object.keys(validationErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) =>({ 
            ...prev, 
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!validateForm()){
            console.log("error")
            return
        }

        console.log(form)
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Signup Page</h1>
        <label htmlFor="name">Name:</label>
        {error.name && <span className="error">{error.name}</span>}
        <input
            id="name"
            name= "name"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        {error.email && <span className="error">{error.email}</span>}
        <input
            id="email"
            name= "email"
            type="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        {error.password && <span className="error">{error.password}</span>}
        <input
            id="password"
            name= "password"
            type="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange }
            minLength={6}
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        {error.confirmPassword && <span className="error">{error.confirmPassword}</span>}
        <input
            id="confirmPassword"
            name= "confirmPassword"
            type="password"
            value={form.confirmPassword}
            placeholder="Confirm Password"
            onChange = {handleChange}
            minLength={6}
        />
        <br />
        <button type="submit">Signup</button>
    </form>
  )
}
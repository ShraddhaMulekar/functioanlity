import { useState } from 'react'
import type { SignupProps } from '../types/auth'

export const Signup = () => {
    const [form, setForm] = useState<SignupProps>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) =>({ 
            ...prev, 
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!form.name || !form.email || !form.password || !form.confirmPassword) {
            alert("Please fill all the fields")
            return
        }

        console.log(form)
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Signup Page</h1>
        <label htmlFor="name">Name:</label>
        <input
            id="name"
            name= "name"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
            id="email"
            name= "email"
            type="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
            id="password"
            name= "password"
            type="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange }
            minLength={6}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
            id="confirmPassword"
            name= "confirmPassword"
            type="password"
            value={form.confirmPassword}
            placeholder="Confirm Password"
            onChange = {handleChange}
            minLength={6}
        />
        <button type="submit">Signup</button>
    </form>
  )
}
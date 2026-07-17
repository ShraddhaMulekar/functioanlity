import { useState } from 'react'
import type { SignupProps } from '../types/auth'

export const Signup = () => {
    const [form, setForm] = useState<SignupProps>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

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
            value={form.name}
            placeholder="Name"
            onChange = {(e) => setForm({ ...form, name: e.target.value })}
        />
        <label htmlFor="email">Email:</label>
        <input
            id="email"
            value={form.email}
            placeholder="Email"
            onChange = {(e) => setForm({ ...form, email: e.target.value })}
        />
        <label htmlFor="password">Password:</label>
        <input
            id="password"
            type="password"
            value={form.password}
            placeholder="Password"
            onChange = {(e) => setForm({ ...form, password: e.target.value })}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
            id="confirmPassword"
            type="password"
            value={form.confirmPassword}
            placeholder="Confirm Password"
            onChange = {(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
        <button>Signup</button>
    </form>
  )
}
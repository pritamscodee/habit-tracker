// src/components/Register.jsx

import { registerAPI } from "@/api/auth";
import { useState, ChangeEvent } from "react";


export default function Register() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await registerAPI(form);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />

            <button type="submit">Register</button>
        </form>
    );
}
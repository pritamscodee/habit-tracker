// src/components/Register.jsx

import { registerAPI } from "@/api/auth"; // keep as you wrote (but fix typo later)
import { useState, ChangeEvent } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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
        <div className="flex items-center justify-center min-h-screen bg-muted">
            <form onSubmit={handleSubmit}>
                <Card className="w-[400px] shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">
                            Register
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Register
                        </Button>

                    </CardContent>
                </Card>
            </form>
        </div>
    );
}
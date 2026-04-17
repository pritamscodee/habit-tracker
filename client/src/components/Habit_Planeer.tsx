import { useState } from "react";

import HabitFlow from "./HabitFlow";

import { Plan } from "@/types/types";
import { api } from "@/api/axios-config";



export default function HabitPlanner() {
    const [habit, setHabit] = useState("");
    const [plan, setPlan] = useState<Plan | null>(null);
    const [loading, setLoading] = useState(false);

    const generatePlan = async () => {
        if (!habit.trim()) return;

        try {
            setLoading(true);
            const res = await api.post("/plan", { habit });
            setPlan(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">

            <h1 className="text-3xl font-bold mb-4">
                Ollama🦙🤖 Habit Flow Planner
            </h1>

            <input
                value={habit}
                onChange={(e) => setHabit(e.target.value)}
                placeholder="Enter habit..."
                className="border p-2 w-full mb-4"
            />

            <button
                onClick={generatePlan}
                className="bg-black text-white px-4 py-2"
            >
                {loading ? "Generating..." : "Generate"}
            </button>

            {plan && (
                <div className="mt-6">
                    <h2 className="font-bold mb-2">
                        Generated Habit Plan
                    </h2>

                    <HabitFlow nodes={plan.nodes} edges={plan.edges} />
                </div>
            )}
        </div>
    );
}
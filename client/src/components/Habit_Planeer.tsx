import { useState } from "react";
import HabitFlow from "./HabitFlow";
import { generatePlan } from "@/api/axios-config";
import type { Plan } from "@/types/types";
import { toast } from "sonner";

export default function HabitPlanner() {
  const [habit, setHabit] = useState("");
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGeneratePlan = async () => {
    if (!habit.trim()) return;

    try {
      setLoading(true);
      const response = await generatePlan(habit.trim());
      setPlan(response);
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate habit plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Habit Flow Planner</h1>

      <input
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleGeneratePlan();
          }
        }}
        placeholder="Enter habit, e.g. Read 20 minutes daily"
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={handleGeneratePlan}
        className="bg-black text-white px-4 py-2"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {plan && (
        <div className="mt-6">
          <h2 className="font-bold mb-2">Generated Plan</h2>
          <HabitFlow nodes={plan.nodes} edges={plan.edges} />
        </div>
      )}
    </div>
  );
}

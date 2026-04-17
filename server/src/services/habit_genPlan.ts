import axios from "axios";

type NodeType = {
    id: string;
    label: string;
};

type EdgeType = {
    source: string;
    target: string;
    label?: string;
};

type Plan = {
    nodes: NodeType[];
    edges: EdgeType[];
};

export async function generateHabitPlan(habit: string): Promise<Plan> {
    const prompt = `
You are an AI  fitness coach ,that generates habit plans as a graph.

STRICT RULES:
- Return ONLY valid JSON
- No explanation
- No text before or after JSON
- Keep ids simple (start, step1, etc.)

Format:
{
  "nodes": [{ "id": "string", "label": "string" }],
  "edges": [{ "source": "string", "target": "string", "label": "string (optional)" }]
}

Habit: ${habit}
`;

    const res = await axios.post("http://localhost:11434/api/chat", {
        model: "gemma3",
        messages: [{ role: "user", content: prompt }],
        stream: false,
    });

    const content: string = res.data.message.content;

    const jsonMatch = content.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
        console.error("No JSON found:", content);
        throw new Error("AI returned invalid format");
    }

    let parsed: Plan;

    try {
        parsed = JSON.parse(jsonMatch[0]);
    } catch (err) {
        console.error("JSON parse failed:", jsonMatch[0]);
        throw new Error("Invalid JSON from AI");
    }


    if (!parsed.nodes || !parsed.edges) {
        throw new Error("Missing nodes or edges");
    }

    parsed.nodes = parsed.nodes.map((n, i) => ({
        id: n.id || `node-${i}`,
        label: n.label || "Unnamed step",
    }));

    parsed.edges = parsed.edges.map((e, i) => ({
        source: e.source,
        target: e.target,
        label: e.label || "",
    }));

    return parsed;
}
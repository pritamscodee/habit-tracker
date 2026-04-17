import ReactFlow, { Background, Controls, Edge, Node } from "reactflow";
import "reactflow/dist/style.css";
import  { PlanNode, PlanEdge } from '../types/types';


type Props = {
    nodes?: PlanNode[];
    edges?: PlanEdge[];
    steps?: string[];
};

export default function HabitFlow({ nodes = [], edges = [], steps = [] }: Props) {
    const normalizedNodes: PlanNode[] =
        nodes.length > 0
            ? nodes
            : steps.map((step, i) => ({ id: `step-${i}`, label: step }));

    const normalizedEdges: PlanEdge[] =
        edges.length > 0
            ? edges
            : steps.slice(0, -1).map((_, i) => ({
                source: `step-${i}`,
                target: `step-${i + 1}`,
            }));

    const flowNodes: Node[] = normalizedNodes.map((node, i) => ({
        id: node.id,
        data: { label: node.label },
        position: { x: (i % 3) * 260, y: Math.floor(i / 3) * 130 },
        style: {
            border: "2px solid black",
            padding: 10,
            background: "white",
            width: 220,
        },
    }));

    const flowEdges: Edge[] = normalizedEdges.map((edge, i) => ({
        id: `e-${edge.source}-${edge.target}-${i}`,
        source: edge.source,
        target: edge.target,
        label: edge.label || "",
    }));

    return (
        <div style={{ height: 400, border: "2px solid black" }}>
            <ReactFlow nodes={flowNodes} edges={flowEdges} fitView>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}

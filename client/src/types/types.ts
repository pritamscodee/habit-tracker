export interface Habits_data {
    id: number;
    name: string;
    desc: string;
}


export type PlanNode = {
  id: string;
  label: string;
};

export type PlanEdge = {
  source: string;
  target: string;
  label?: string;
};

export type Plan = {
  nodes: PlanNode[];
  edges: PlanEdge[];
};
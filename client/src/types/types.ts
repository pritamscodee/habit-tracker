export interface Habits_data {
  id: number;
  name: string;
  desc: string;
}

export type GeneratePlanRequest = {
  habit: string;
};

export type GeneratePlanResponse = {
  nodes: PlanNode[];
  edges: PlanEdge[];
};

export type Plan = {
  nodes: PlanNode[];
  edges: PlanEdge[];
};

export type PlanNode = {
  id: string;
  label: string;
};

export type PlanEdge = {
  source: string;
  target: string;
  label?: string;
};

export interface ScriptNode {
  id: string;
  title: string;
  question?: string;
  diagnosis?: string;
  questions?: string[];
  reframing?: string;
  solution?: string;
  closingQuestion?: string;
  children?: ScriptNode[];
}

export interface NavigationPath {
  id: string;
  title: string;
}

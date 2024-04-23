export type Operators = {
  "+": (n1: number, n2: number) => number;
  "-": (n1: number, n2: number) => number;
  "✕": (n1: number, n2: number) => number;
  "÷": (n1: number, n2: number) => number;
  "%": (n1: number, n2: number) => number;
  "+/-": (n1: number, n2: number) => number;
  [key: string]: (n1: number, n2: number) => number;
};

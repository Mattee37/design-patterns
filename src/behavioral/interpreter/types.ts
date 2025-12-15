export interface Expression {
  interpret(context: Context): number;
}

export interface Context {
  variables: Map<string, number>;
}


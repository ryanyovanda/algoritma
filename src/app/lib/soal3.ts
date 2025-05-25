export function matchQueryFrequency(input: string[], query: string[]): number[] {
    return query.map(q => input.filter(item => item === q).length);
  }
  
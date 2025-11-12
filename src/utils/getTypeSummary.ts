export const getTypeSummary = <T extends readonly string[]>(values: T): string => {
  return values.map(value => `'${value}'`).join(' | ');
};
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function unique<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

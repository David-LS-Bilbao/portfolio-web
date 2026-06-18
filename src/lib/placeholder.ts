export function isPlaceholder(value: string): boolean {
  return value.startsWith('TODO_EDITABLE')
}

export function hasRealUrl(value: string | undefined): value is string {
  return Boolean(value) && !isPlaceholder(value as string)
}

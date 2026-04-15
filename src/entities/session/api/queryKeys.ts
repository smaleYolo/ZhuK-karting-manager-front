export const sessionQueryKeys = {
  root: ['session'] as const,

  listRoot: ['session', 'list'] as const,
  list: (params?: unknown) => ['session', 'list', params ?? {}] as const,

  detailsRoot: ['session', 'details'] as const,
  details: (sessionId: string) => ['session', 'details', sessionId] as const,
}
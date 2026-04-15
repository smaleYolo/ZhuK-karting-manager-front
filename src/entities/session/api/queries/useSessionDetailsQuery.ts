import {useQuery} from '@tanstack/react-query'
import {sessionQueryKeys} from "#/entities/session/api/queryKeys.ts";
import SessionApi from "#/entities/session/api/sessionApi.ts";

type UseSessionDetailsQueryParams = {
  sessionId: string
}

export function useSessionDetailsQuery({sessionId}: UseSessionDetailsQueryParams) {
  return useQuery({
    queryKey: sessionQueryKeys.details(sessionId),
    queryFn: () => SessionApi.getSessionDetails(sessionId),
    enabled: Boolean(sessionId),
    staleTime: 60_000,
  })
}
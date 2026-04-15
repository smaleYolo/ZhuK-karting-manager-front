import {useQuery} from '@tanstack/react-query'

import SessionApi from '../sessionApi'
import {sessionQueryKeys} from '../queryKeys'

import type {SessionsListQuery} from '../../model/types'

type UseSessionsListQueryParams = Partial<SessionsListQuery>

export function useSessionsListQuery(params?: UseSessionsListQueryParams) {
  return useQuery({
    queryKey: sessionQueryKeys.list(params ?? {}),
    queryFn: () => SessionApi.getSessionsList(params),
    staleTime: 60_000,
  })
}
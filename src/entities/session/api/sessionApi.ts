import raceSession from '#/shared/api/mock/raceSession.json'
import sessionsList from '#/shared/api/mock/sessionsList.json'

import {env} from '@/shared/config/env'
import {api} from '@/shared/api/base'

import {
  sessionDetailsResponseSchema,
  sessionsListQuerySchema,
  sessionsListResponseSchema,
} from '../model/schema'
import type {
  SessionDetailsResponse,
  SessionsListQuery,
  SessionsListResponse,
} from '../model/types'

class SessionApi {
  async getSessionsList(params?: Partial<SessionsListQuery>): Promise<SessionsListResponse> {
    const validatedParams = sessionsListQuerySchema.partial().parse(params ?? {})

    if (env.useMockApi) {
      return Promise.resolve(sessionsListResponseSchema.parse(sessionsList))
    }

    const response = await api.get('/api/v1/sessions', {
      params: validatedParams,
    })

    return sessionsListResponseSchema.parse(response.data)
  }

  async getSessionDetails(sessionId: string): Promise<SessionDetailsResponse> {
    if (env.useMockApi) {
      return Promise.resolve(sessionDetailsResponseSchema.parse(raceSession))
    }

    const response = await api.get(`/api/v1/sessions/${sessionId}`)

    return sessionDetailsResponseSchema.parse(response.data)
  }
}

export default new SessionApi()
import { api } from '@/shared/api/base'
import type { User } from '../model/types'

export const userApi = {
  async getMe() {
    const response = await api.get<User>('/users/me')
    return response.data
  },
}

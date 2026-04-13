export type UserRole = 'admin' | 'trainer' | 'student'

export type User = {
  id: string
  name: string
  email: string
  role: UserRole
}

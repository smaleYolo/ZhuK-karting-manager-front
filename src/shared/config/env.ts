function getRequiredEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name]

  if (!value) {
    throw new Error(`Environment variable ${name} is required`)
  }

  return value
}

function getBooleanEnv(value: string | undefined, fallback = false): boolean {
  if (value === 'true') return true
  if (value === 'false') return false
  return fallback
}

function getColorSchemeEnv(
  value: string | undefined,
): 'light' | 'dark' {
  return value === 'dark' ? 'dark' : 'light'
}

export const env = {
  appName: getRequiredEnv('VITE_APP_NAME'),
  apiBaseUrl: getRequiredEnv('VITE_API_BASE_URL'),
  defaultColorScheme: getColorSchemeEnv(import.meta.env.VITE_DEFAULT_COLOR_SCHEME),
  useMockApi: getBooleanEnv(import.meta.env.VITE_USE_MOCK_API, false),

  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE,
} as const
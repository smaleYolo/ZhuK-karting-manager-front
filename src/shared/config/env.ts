function getRequiredEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name]

  if (!value) {
    throw new Error(`Environment variable ${name} is required`)
  }

  return value
}

export const env = {
  appName: getRequiredEnv('VITE_APP_NAME'),
  apiBaseUrl: getRequiredEnv('VITE_API_BASE_URL'),
  defaultColorScheme: import.meta.env.VITE_DEFAULT_COLOR_SCHEME === 'dark' ? 'dark' : 'light',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE,
} as const

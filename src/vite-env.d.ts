/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_DEFAULT_COLOR_SCHEME?: 'light' | 'dark'
  readonly VITE_USE_MOCK_API?: 'true' | 'false'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
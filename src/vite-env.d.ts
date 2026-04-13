/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_DEFAULT_COLOR_SCHEME?: 'light' | 'dark'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

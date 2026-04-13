import type { PropsWithChildren } from 'react'
import { MantineProvider } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { Notifications } from '@mantine/notifications'

import { queryClient } from './queryClient'
import { theme } from './theme'
import { env } from '@/shared/config/env'

type Props = PropsWithChildren

export function AppProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme={env.defaultColorScheme}>
        <Notifications position="top-right" />
        {children}
      </MantineProvider>
    </QueryClientProvider>
  )
}

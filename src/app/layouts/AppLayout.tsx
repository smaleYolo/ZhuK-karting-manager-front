import type { PropsWithChildren } from 'react'
import { AppShell } from '@mantine/core'

import { AppHeader } from '@/widgets/app-header/ui/AppHeader'

type Props = PropsWithChildren

export function AppLayout({ children }: Props) {
  return (
    <AppShell header={{ height: 64 }} padding="md">
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

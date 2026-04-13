import { Outlet, createRootRoute } from '@tanstack/react-router'

import { AppProviders } from '@/app/providers/AppProviders'
import { AppLayout } from '@/app/layouts/AppLayout'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <AppProviders>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </AppProviders>
  )
}

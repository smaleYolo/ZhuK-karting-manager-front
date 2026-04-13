import type { PropsWithChildren } from 'react'
import { Container } from '@mantine/core'

type Props = PropsWithChildren

export function PageContainer({ children }: Props) {
  return (
    <Container size="xl" py="xl">
      {children}
    </Container>
  )
}

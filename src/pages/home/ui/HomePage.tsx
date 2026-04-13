import { Card, Group, Stack, Text } from '@mantine/core'
import { PageContainer } from '@/shared/ui/page/PageContainer'

export function HomePage() {
  return (
    <PageContainer>
      <Stack gap="lg">
        <div>
          <Text c="dimmed" mt={8}>
            MVP-платформа для тренера и группы: импорт результатов, маппинг участников, аналитика
            заездов, карточки учеников и сравнение внутри группы.
          </Text>
        </div>

        <Group grow align="stretch">
          <Card withBorder radius="lg" padding="lg">
            <Text fw={600}>Архитектурная база</Text>
            <Text c="dimmed" mt={8}>
              FSD, TanStack Router, TanStack Query, Mantine UI, Axios.
            </Text>
          </Card>

          <Card withBorder radius="lg" padding="lg">
            <Text fw={600}>Routing</Text>
            <Text c="dimmed" mt={8}>
              В app/routes лежат только route definitions через createFileRoute.
            </Text>
          </Card>
        </Group>
      </Stack>
    </PageContainer>
  )
}

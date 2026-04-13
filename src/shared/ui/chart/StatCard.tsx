import { Card, Stack, Text } from '@mantine/core'
import { AreaChart } from '@mantine/charts'

const data = [
  { period: 'Янв', value: 52 },
  { period: 'Фев', value: 48 },
  { period: 'Мар', value: 55 },
  { period: 'Апр', value: 57 },
  { period: 'Май', value: 61 },
]

export function StatCard() {
  return (
    <Card withBorder radius="lg" padding="lg">
      <Stack gap="md">
        <div>
          <Text fw={600}>Пример графика</Text>
          <Text size="sm" c="dimmed">
            Базовая визуализация для будущих метрик прогресса пилота.
          </Text>
        </div>

        <AreaChart
          h={260}
          data={data}
          dataKey="period"
          series={[{ name: 'value', label: 'Индекс формы', color: 'violet' }]}
          curveType="natural"
          withLegend={false}
        />
      </Stack>
    </Card>
  )
}

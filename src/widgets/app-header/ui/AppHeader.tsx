import { ActionIcon, Button, Container, Group, Title } from '@mantine/core'
import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import { IconMoon, IconSun } from '@tabler/icons-react'

export function AppHeader() {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light')

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Container size="xl" h="100%">
      <Group justify="space-between" h="100%">
        <Title order={3}>ZhuK - Karting Manager</Title>

        <Group gap="sm">
          <Button component={Link} to="/" variant="subtle">
            Главная
          </Button>

          <ActionIcon
            variant="default"
            size="lg"
            onClick={toggleColorScheme}
            aria-label="Переключить тему"
            title="Переключить тему"
          >
            {computedColorScheme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
          </ActionIcon>
        </Group>
      </Group>
    </Container>
  )
}

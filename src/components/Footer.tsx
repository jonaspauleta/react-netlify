import { Footer, Group, Text } from '@mantine/core'

export function FooterResponsive() {
    return (
        <Footer height={60} p="md">
            <Group position="apart" spacing="xl">
                <Text size="sm">
                    <span style = {{
                        fontWeight: 'bolder'
                    }}>
                        👨🏻‍💼 Made for xgeeks
                    </span>
                </Text>

                <Text size="sm">
                    <span style = {{
                        fontWeight: 'bolder'
                    }}>
                        By João Paulo Santos 🤓
                    </span>
                </Text>
            </Group>
        </Footer>
    )
}
import { Text } from '@mantine/core';

export default function AppLogo({ fontSize = 'text-4xl' }: { fontSize?: string }) {
    return (
      <div className={`${fontSize} font-bold leading-none`}>
        <Text component="span" c="accent.6" inherit>holy</Text>
        <Text component="span" c="brand.6" inherit>halo</Text>
      </div>
    )
  }
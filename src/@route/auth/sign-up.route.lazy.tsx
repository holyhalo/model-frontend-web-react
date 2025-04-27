import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Container, Title, Text, Anchor } from '@mantine/core';
import FormSignUp from '@/@view/@form/auth/sign-up.form';

export const Route = createLazyFileRoute('/auth/sign-up')({
  component: () => {
    return (
      <Container size={520} className="min-h-screen flex flex-col justify-center p-4">
        <Title ta="center" mb={30}>Create Account</Title>
        <FormSignUp />
        <Text c="dimmed" size="sm" ta="center" mt={20}>
          Already have an account?{' '}
          <Anchor component={Link} to="/auth/sign-in" size="sm">
            Sign in
          </Anchor>
        </Text>
      </Container>
    );
  }
});
import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Container, Title, Text, Anchor } from '@mantine/core';
import FormForgotPassword from '@form/auth/forgot-password.form';

export const Route = createLazyFileRoute('/auth/forgot-password')({
  component: () => {
    return (
      <Container size={520} className="min-h-screen flex flex-col justify-center p-4">
        <Title ta="center" mb={30}>Forgot Password</Title>
        <FormForgotPassword />
        <Text c="dimmed" size="sm" ta="center" mt={20}>
          Remember your password?{' '}
          <Anchor component={Link} to="/auth/sign-in" size="sm">
            Back to sign in
          </Anchor>
        </Text>
      </Container>
    );
  },
});
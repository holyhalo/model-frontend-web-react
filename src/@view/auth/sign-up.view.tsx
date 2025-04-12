import { Container, Title, Text, Anchor } from '@mantine/core';
import FormSignUp from '@form/auth/sign-up.form';
import { Link } from '@tanstack/react-router';

export default function ViewSignUp() {
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
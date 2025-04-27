import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Container, Title, Text, Anchor } from '@mantine/core';
import FormVerifyOtp from '@/@view/@form/auth/verify-otp.form';

export const Route = createLazyFileRoute('/auth/verify-otp')({
  component: () => {
    return (
      <Container size={520} className="min-h-screen flex flex-col justify-center p-4">
        <Title ta="center" mb={30}>Verify OTP</Title>
        <FormVerifyOtp />
        <Text c="dimmed" size="sm" ta="center" mt={20}>
          Didn't receive a code?{' '}
          <Anchor component={Link} to="/auth/request-otp" size="sm">
            Request OTP
          </Anchor>
        </Text>
      </Container>
    );
  },
}); 
import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Container, Title, Text, Anchor } from '@mantine/core';
import FormRequestOtp from '@/@view/@form/auth/request-otp.form';

export const Route = createLazyFileRoute('/auth/request-otp')({
  component: () => {
    return (
      <Container size={520} className="min-h-screen flex flex-col justify-center p-4">
        <Title ta="center" mb={30}>Request OTP</Title>
        <FormRequestOtp />
        <Text c="dimmed" size="sm" ta="center" mt={20}>
          Already have an OTP?{' '}
          <Anchor component={Link} to="/auth/verify-otp" size="sm">
            Verify OTP
          </Anchor>
        </Text>
      </Container>
    );
  },
}); 
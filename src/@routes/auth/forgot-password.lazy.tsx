import { createLazyFileRoute } from '@tanstack/react-router';
import ViewForgotPassword from '@view/auth/forgot-password.view';

export const Route = createLazyFileRoute('/auth/forgot-password')({
  component: ViewForgotPassword,
});
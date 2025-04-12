import { createLazyFileRoute } from '@tanstack/react-router';
import ViewProfile from '@view/profile.view';

export const Route = createLazyFileRoute('/profile')({
  component: ViewProfile
});
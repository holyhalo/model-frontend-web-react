import { createLazyFileRoute } from '@tanstack/react-router';
import ViewSettingsUpdatePassword from '@view/settings/update-password.view';

export const Route = createLazyFileRoute('/settings/update-password')({
  component: ViewSettingsUpdatePassword
});
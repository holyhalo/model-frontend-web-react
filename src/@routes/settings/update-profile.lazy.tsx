import { createLazyFileRoute } from '@tanstack/react-router';
import ViewSettingsUpdateProfile from '@view/settings/update-profile.view';

export const Route = createLazyFileRoute('/settings/update-profile')({
  component: ViewSettingsUpdateProfile
});
import { createLazyFileRoute } from '@tanstack/react-router';
import FormUpdateProfile from '@/@view/@form/settings/update-profile.form';

export const Route = createLazyFileRoute('/settings/update-profile')({
  component: () => {
    return (
      <div className="max-w-[40rem] mx-auto">
        <FormUpdateProfile />
      </div>
    );
  }
});
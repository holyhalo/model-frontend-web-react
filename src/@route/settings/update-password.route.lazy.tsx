import { createLazyFileRoute } from '@tanstack/react-router';
import FormUpdatePassword from '@/@view/@form/settings/update-password.form';

export const Route = createLazyFileRoute('/settings/update-password')({
  component: () => {
    return (
      <div className="max-w-[40rem] mx-auto">
        <FormUpdatePassword />
      </div>
    );
  }
});
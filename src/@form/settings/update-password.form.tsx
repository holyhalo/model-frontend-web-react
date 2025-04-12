import { PasswordInput, Button, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function FormUpdatePassword() {
  const form = useForm({
    initialValues: {
      current_password: '',
      new_password: '',
      confirm_password: '',
    },
    validate: {
      current_password: (value) => (value.length < 6 ? 'Password should be at least 6 characters' : null),
      new_password: (value) => (value.length < 6 ? 'Password should be at least 6 characters' : null),
      confirm_password: (value, values) =>
        value !== values.new_password ? 'Passwords did not match' : null,
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <PasswordInput
          required
          label="Current Password"
          placeholder="Your current password"
          {...form.getInputProps('current_password')}
        />

        <PasswordInput
          required
          label="New Password"
          placeholder="Your new password"
          {...form.getInputProps('new_password')}
        />

        <PasswordInput
          required
          label="Confirm New Password"
          placeholder="Confirm your new password"
          {...form.getInputProps('confirm_password')}
        />

        <Button 
          type="submit"
          fullWidth
          styles={{ 
            label: { 
              textTransform: 'uppercase',
              fontWeight: 800
            } 
          }}
        >
          Update Password
        </Button>
      </Stack>
    </form>
  );
}
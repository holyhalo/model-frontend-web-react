import { useForm } from '@mantine/form'
import { PasswordInput, Button, Stack } from '@mantine/core'

export interface ResetPasswordFormValues {
  password: string
  confirmPassword: string
}

export default function ResetPasswordForm() {
  const form = useForm<ResetPasswordFormValues>({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: {
      password: (value) => (value.length < 6 ? 'Password should be at least 6 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  })

  const handleSubmit = (values: ResetPasswordFormValues) => {
    console.log(values)
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <PasswordInput
          required
          label="New Password"
          placeholder="Your new password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          required
          label="Confirm New Password"
          placeholder="Confirm your new password"
          {...form.getInputProps('confirmPassword')}
        />

        <Button type="submit" className="uppercase font-bold">
          Set New Password
        </Button>
      </Stack>
    </form>
  )
} 
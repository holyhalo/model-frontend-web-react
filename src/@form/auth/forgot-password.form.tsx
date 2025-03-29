import { useForm } from '@mantine/form'
import { TextInput, Button, Stack } from '@mantine/core'

export interface ForgotPasswordFormValues {
  email: string
}

export default function ForgotPasswordForm() {
  const form = useForm<ForgotPasswordFormValues>({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  const handleSubmit = (values: ForgotPasswordFormValues) => {
    console.log(values)
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Button type="submit">Reset Password</Button>
      </Stack>
    </form>
  )
} 
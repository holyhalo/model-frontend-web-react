import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, Button, Stack } from '@mantine/core'

export interface SignInFormValues {
  email: string
  password: string
}

export default function SignInForm() {
  const form = useForm<SignInFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password should be at least 6 characters' : null),
    },
  })

  const handleSubmit = (values: SignInFormValues) => {
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

        <PasswordInput
          required
          label="Password"
          placeholder="Your password"
          {...form.getInputProps('password')}
        />

        <Button type="submit">Sign in</Button>
      </Stack>
    </form>
  )
} 
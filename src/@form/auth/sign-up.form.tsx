import { useForm } from '@mantine/form'
import { TextInput, PasswordInput, Button, Stack } from '@mantine/core'

export interface SignUpFormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function SignUpForm() {
  const form = useForm<SignUpFormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name should be at least 2 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password should be at least 6 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  })

  const handleSubmit = (values: SignUpFormValues) => {
    console.log(values)
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <TextInput
          required
          label="Name"
          placeholder="Your name"
          {...form.getInputProps('name')}
        />

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

        <PasswordInput
          required
          label="Confirm Password"
          placeholder="Confirm your password"
          {...form.getInputProps('confirmPassword')}
        />

        <Button type="submit">Sign up</Button>
      </Stack>
    </form>
  )
} 
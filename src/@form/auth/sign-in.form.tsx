import { TextInput, PasswordInput, Button, Alert, Text, Input } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function FormSignIn() {
  const $form = useForm({
    initialValues: {
      phone: '',
      password: '',
    },
    validate: {
      phone: (value) => {
        if (!value) return 'Phone number is required';
        if (!/^[0-9]{6,15}$/.test(value)) return 'Invalid phone number';
        return null;
      },
      password: (value) => {
        if (!value) return 'Password is required';
        return null;
      },
    },
  });

  const handle_submit = (values: typeof $form.values) => {
    console.log({
      user_phone: values.phone,
      user_password: values.password,
    });
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <TextInput
        withAsterisk={false}
        placeholder="Phone Number"
        mb="md"
        size="lg"
        styles={{ input: { backgroundColor: '#f3f4f6' } }}
        value={$form.values.phone}
        onChange={(e) => $form.setFieldValue('phone', e.currentTarget.value)}
        error={$form.errors.phone ? String($form.errors.phone) : undefined}
        disabled={false}
        classNames={{ input: 'h-[3.25rem] text-base' }}
      />
      <PasswordInput
        withAsterisk={false}
        placeholder="Password"
        mb="md"
        size="lg"
        styles={{ input: { backgroundColor: '#f3f4f6' } }}
        {...$form.getInputProps('password')}
        disabled={false}
      />
      <Button
        type="submit"
        fullWidth
        size="lg"
        styles={{
          label: {
            textTransform: 'uppercase',
            fontWeight: 900
          }
        }}
      >
        Sign in
      </Button>
    </form>
  );
}
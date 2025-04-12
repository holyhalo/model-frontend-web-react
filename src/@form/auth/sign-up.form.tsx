import { TextInput, PasswordInput, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function FormSignUp() {
  const $form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validate: {
      first_name: (value) => {
        if (!value) return 'First name is required';
        if (value.length < 2) return 'First name must be at least 2 characters';
        return null;
      },
      last_name: (value) => {
        if (!value) return 'Last name is required';
        if (value.length < 2) return 'Last name must be at least 2 characters';
        return null;
      },
      email: (value) => {
        if (!value) return 'Email is required';
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email address';
        return null;
      },
      password: (value) => {
        if (!value) return 'Password is required';
        if (value.length < 6) return 'Password must be at least 6 characters';
        if (!/[A-Z]/.test(value)) return 'Password must include at least one uppercase letter';
        if (!/[a-z]/.test(value)) return 'Password must include at least one lowercase letter';
        if (!/[0-9]/.test(value)) return 'Password must include at least one number';
        return null;
      },
      confirm_password: (value, values) => {
        if (!value) return 'Please confirm your password';
        if (value !== values.password) return 'Passwords do not match';
        return null;
      },
    },
  });

  const handle_submit = (values: typeof $form.values) => {
    console.log(values);
    // TODO: Implement signup logic
  };

  const input_styles = {
    input: {
      backgroundColor: 'white',
      height: '2.8125rem',
      fontSize: '1rem'
    },
    label: {
      fontSize: '0.875rem',
      marginBottom: '0.25rem'
    }
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <Group gap="md" grow mb="md" align="flex-start">
        <TextInput
          withAsterisk={false}
          label="First Name"
          placeholder="John"
          styles={input_styles}
          {...$form.getInputProps('first_name')}
        />
        <TextInput
          withAsterisk={false}
          label="Last Name"
          placeholder="Doe"
          styles={input_styles}
          {...$form.getInputProps('last_name')}
        />
      </Group>

      <TextInput
        withAsterisk={false}
        label="Email"
        placeholder="your@email.com"
        mb="md"
        styles={input_styles}
        {...$form.getInputProps('email')}
      />

      <PasswordInput
        withAsterisk={false}
        label="Password"
        placeholder="Create a strong password"
        mb="md"
        styles={input_styles}
        {...$form.getInputProps('password')}
      />

      <PasswordInput
        withAsterisk={false}
        label="Confirm Password"
        placeholder="Confirm your password"
        mb="xl"
        styles={input_styles}
        {...$form.getInputProps('confirm_password')}
      />

      <Button 
        type="submit" 
        fullWidth 
        styles={{ 
          root: {
            padding: '0.875rem 1rem'
          },
          label: { 
            textTransform: 'uppercase',
            fontWeight: 900
          } 
        }}
      >
        Create Account
      </Button>
    </form>
  );
}
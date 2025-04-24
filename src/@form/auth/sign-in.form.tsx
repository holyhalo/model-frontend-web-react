import { TextInput, PasswordInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function FormSignIn() {
  const $form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => {
        if (!value) return 'Email is required';
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email address';
        return null;
      },
      password: (value) => {
        if (!value) return 'Password is required';
        return null;
      },
    },
  });

  const handle_submit = async(values: typeof $form.values) => {
    const mock_user = {
        id: '123',
        email: values.email,
        name: 'John Doe',
        avatar: '/image.jpg'
      };

    // Store user info
    localStorage.setItem('id', mock_user.id);
    localStorage.setItem('email', mock_user.email);
    localStorage.setItem('name', mock_user.name);
    localStorage.setItem('avatar', mock_user.avatar);

    window.location.reload()
  };

  const input_styles = {
    input: {
      backgroundColor: '#f2f4f7'
    }
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <TextInput
        withAsterisk={false}
        placeholder="Email address or phone number"
        mb="md"
        size="lg"
        styles={input_styles}
        {...$form.getInputProps('email')}
      />

      <PasswordInput
        withAsterisk={false}
        placeholder="Password"
        mb="md"
        size="lg"
        styles={input_styles}
        {...$form.getInputProps('password')}
      />

      <Button 
        type="submit" 
        fullWidth 
        size="lg"
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
        Sign in
      </Button>
    </form>
  );
}
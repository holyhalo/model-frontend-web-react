import { useForm } from '@mantine/form'
import { TextInput, Button } from '@mantine/core'

export default function FormForgotPassword() {
  const $form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => {
        if (!value) return 'Email is required';
        if (!/^\S+@\S+$/.test(value)) return 'Invalid email address';
        return null;
      },
    },
  });

  const handle_submit = (values: typeof $form.values) => {
    console.log(values);
    // TODO: Implement password reset logic
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
      <TextInput
        withAsterisk={false}
        label="Email"
        placeholder="your@email.com"
        mb="md"
        styles={input_styles}
        {...$form.getInputProps('email')}
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
        Reset Password
      </Button>
    </form>
  );
} 
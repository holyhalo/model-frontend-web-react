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

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <TextInput
        withAsterisk={false}
        label="Email"
        placeholder="your@email.com"
        mb="md"
        classNames={{
          input: 'bg-white h-[2.8125rem] text-base',
          label: 'text-sm mb-1'
        }}
        {...$form.getInputProps('email')}
      />

      <Button 
        type="submit" 
        fullWidth 
        className="py-3.5 px-4 font-black uppercase"
      >
        Reset Password
      </Button>
    </form>
  );
} 
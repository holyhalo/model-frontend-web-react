import { TextInput, PasswordInput, Button, Group, Text, Input } from '@mantine/core';
import { useForm } from '@mantine/form';
import InputPhoneCountryCode from '@ui/input-phone-country-code.ui';

export default function FormSignUp() {
  const $form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      user_phone_country_code: '+212', // default Morocco
      phone: '',
      password: '',
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
      phone: (value) => {
        if (!value) return 'Phone number is required';
        if (!/^[0-9]{6,15}$/.test(value)) return 'Invalid phone number';
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
    },
  });

  const handle_submit = (values: typeof $form.values) => {
    console.log({
      user_phone_country_code: values.user_phone_country_code,
      user_phone: values.phone,
      user_first_name: values.first_name,
      user_last_name: values.last_name,
      user_password: values.password,
    });
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <Group gap="md" grow mb="md" align="flex-start">
        <TextInput
          withAsterisk={false}
          label="First Name"
          placeholder="John"
          classNames={{
            input: 'bg-white h-[2.8125rem] text-base',
            label: 'text-sm mb-1'
          }}
          {...$form.getInputProps('first_name')}
        />
        <TextInput
          withAsterisk={false}
          label="Last Name"
          placeholder="Doe"
          classNames={{
            input: 'bg-white h-[2.8125rem] text-base',
            label: 'text-sm mb-1'
          }}
          {...$form.getInputProps('last_name')}
        />
      </Group>

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

      <InputPhoneCountryCode
        className="bg-white"
        countryCode={$form.values.user_phone_country_code}
        phone={$form.values.phone}
        onCountryCodeChange={(val) => $form.setFieldValue('user_phone_country_code', val || '+212')}
        onPhoneChange={(val) => $form.setFieldValue('phone', val)}
        error={$form.errors.phone ? String($form.errors.phone) : undefined}
        label="Phone Number"
      />

      <PasswordInput
        withAsterisk={false}
        label="Password"
        placeholder="Create a strong password"
        mb="xl"
        classNames={{
          input: 'bg-white h-[2.8125rem] text-base',
          label: 'text-sm mb-1'
        }}
        {...$form.getInputProps('password')}
      />

      <Button 
        type="submit" 
        fullWidth 
        styles={{
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
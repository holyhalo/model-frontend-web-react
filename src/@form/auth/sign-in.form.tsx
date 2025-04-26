import { PasswordInput, Button, Alert, Text, Input } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import api_auth from '@api/auth.api';
import InputPhoneCountryCode from '@ui/input-phone-country-code.ui';
import { AlertCircle } from 'lucide-react';

export default function FormSignIn() {
  const navigate = useNavigate();

  const {
    mutate: sign_in,
    isPending: is_signing_in,
    error: sign_in_error
  } = useMutation<any, Error, { user_phone_country_code: string; user_phone: string; user_password: string; }>({
    mutationFn: api_auth.api_sign_in,
    onSuccess: (data) => {
      console.log('Sign in successful:', data);
      localStorage.setItem('id', data?.user?.id || 'temp_id');
      localStorage.setItem('email', data?.user?.email || 'temp_email');
      localStorage.setItem('name', data?.user?.name || 'Temp User');
      localStorage.setItem('avatar', data?.user?.avatar || '/image.jpg');
      navigate({ to: '/', replace: true });
    },
    onError: (error) => {
      console.error('Sign in failed:', error);
    },
  });

  const $form = useForm({
    initialValues: {
      user_phone_country_code: '+212',
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
    sign_in({
      user_phone_country_code: values.user_phone_country_code,
      user_phone: values.phone,
      user_password: values.password,
    });
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      {sign_in_error && (
        <Alert
          icon={<AlertCircle size="1rem" />}
          title="Sign In Failed"
          color="red"
          mb="md"
        >
          {sign_in_error instanceof Error ? sign_in_error.message : 'An unknown error occurred'}
        </Alert>
      )}

      <InputPhoneCountryCode
        size="lg"
        className="bg-[#f3f4f6]"
        countryCode={$form.values.user_phone_country_code}
        phone={$form.values.phone}
        onCountryCodeChange={(val) => $form.setFieldValue('user_phone_country_code', val || '+212')}
        onPhoneChange={(val) => $form.setFieldValue('phone', val)}
        error={$form.errors.phone ? String($form.errors.phone) : undefined}
        disabled={is_signing_in}
      />

      <div className='mb-[4rem] overflow-hidden'>
        <PasswordInput
          withAsterisk={false}
          placeholder="Password"
          mb="md"
          size="lg"
          styles={{ input: { backgroundColor: '#f3f4f6' } }}
          {...$form.getInputProps('password')}
          disabled={is_signing_in}
        />
      </div>

      <Button
        type="submit"
        fullWidth
        size="lg"
        loading={is_signing_in}
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
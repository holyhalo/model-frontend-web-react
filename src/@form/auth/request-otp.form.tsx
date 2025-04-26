import { useForm } from '@mantine/form';
import { Button, Group, Text, Input } from '@mantine/core';
import { useState, useEffect } from 'react';
import InputPhoneCountryCode from '@ui/input-phone-country-code.ui';

export default function FormRequestOtp() {
  const $form = useForm({
    initialValues: {
      user_phone_country_code: '+212', // default Morocco
      phone: '',
    },
    validate: {
      phone: (value) => {
        if (!value) return 'Phone number is required';
        if (!/^[0-9]{6,15}$/.test(value)) return 'Invalid phone number';
        return null;
      },
    },
  });

  const [timer, set_timer] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (timer > 0) {
      interval = setInterval(() => {
        set_timer((t) => t - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handle_submit = (values: typeof $form.values) => {
    set_timer(30);
    console.log({
      user_phone_country_code: values.user_phone_country_code,
      user_phone: values.phone,
    });
    // TODO: Implement OTP request logic
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <InputPhoneCountryCode
        className={`mb-md ${timer > 0 ? 'bg-gray-100' : 'bg-white'}`}
        countryCode={$form.values.user_phone_country_code}
        phone={$form.values.phone}
        onCountryCodeChange={(val) => $form.setFieldValue('user_phone_country_code', val || '+212')}
        onPhoneChange={(val) => $form.setFieldValue('phone', val)}
        error={$form.errors.phone ? String($form.errors.phone) : undefined}
        disabled={timer > 0}
        label="Phone Number"
      />

      <Group justify="center" mb="md">
        {timer > 0 && (
          <Text c="dimmed" size="sm">You can request another OTP in {timer}s</Text>
        )}
      </Group>
      <Button
        type="submit"
        fullWidth
        disabled={timer > 0}
        className="py-3.5 px-4 font-black uppercase"
      >
        {timer > 0 ? 'Please wait...' : 'Request OTP'}
      </Button>
    </form>
  );
} 
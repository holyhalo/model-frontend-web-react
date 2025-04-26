import { useForm } from '@mantine/form';
import { Button, Group, Text, Input, TextInput } from '@mantine/core';
import { useState, useEffect } from 'react';

export default function FormRequestOtp() {
  const $form = useForm({
    initialValues: {
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
      user_phone: values.phone,
    });
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <TextInput
        className={`mb-md ${timer > 0 ? 'bg-gray-100' : 'bg-white'}`}
        placeholder="Phone Number"
        value={$form.values.phone}
        onChange={(e) => $form.setFieldValue('phone', e.currentTarget.value)}
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
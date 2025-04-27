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

  const handle_submit = (values: typeof $form.values) => {
    console.log({
      user_phone: values.phone,
    });
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <TextInput
        size="lg"
        placeholder="Phone Number"
        mb="md"
        classNames={{
          input: 'bg-white h-[2.8125rem] text-base',
          label: 'text-sm mb-1'
        }}
        value={$form.values.phone}
        onChange={(e) => $form.setFieldValue('phone', e.currentTarget.value)}
        error={$form.errors.phone ? String($form.errors.phone) : undefined}
      />

      <div className="mb-4" />

      <Button
        type="submit"
        fullWidth
        className="py-3.5 px-4 font-black uppercase"
      >
        Request OTP
      </Button>
    </form>
  );
} 
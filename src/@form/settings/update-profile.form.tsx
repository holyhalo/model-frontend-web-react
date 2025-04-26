import { TextInput, Button, Group, Avatar, FileButton, Stack, Text, Input } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import InputPhoneCountryCode from '@ui/input-phone-country-code.ui';

export default function FormUpdateProfile() {
  const [$avatar, $_avatar] = useState<File | null>(null);

  const $form = useForm({
    initialValues: {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      user_phone_country_code: '+212',
      phone: '612345678',
      location: 'New York, USA',
      bio: 'Passionate full-stack developer...',
    },
    validate: {
      first_name: (value) => value.length < 2 ? 'Name must be at least 2 characters' : null,
      last_name: (value) => value.length < 2 ? 'Name must be at least 2 characters' : null,
      email: (value) => !/^\S+@\S+$/.test(value) ? 'Invalid email' : null,
      phone: (value) => {
        if (!value) return 'Phone number is required';
        if (!/^[0-9]{6,15}$/.test(value)) return 'Invalid phone number';
        return null;
      },
    },
  });

  const handle_submit = (values: typeof $form.values) => {
    console.log({
      user_phone_country_code: values.user_phone_country_code,
      user_phone: values.phone,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      location: values.location,
      bio: values.bio,
      avatar: $avatar,
    });
    // TODO: Implement update profile logic
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <Stack gap="lg">
        <Group justify="center">
          <Stack gap="sm" align="center">
            <Avatar
              src={$avatar ? URL.createObjectURL($avatar) : "/image.jpg"}
              size={120}
              radius={60}
            />
            <FileButton onChange={$_avatar} accept="image/png,image/jpeg">
              {(props) => (
                <Button variant="light" {...props}>
                  Change avatar
                </Button>
              )}
            </FileButton>
          </Stack>
        </Group>

        <Group grow>
          <TextInput
            label="First Name"
            placeholder="Your first name"
            {...$form.getInputProps('first_name')}
          />
          <TextInput
            label="Last Name"
            placeholder="Your last name"
            {...$form.getInputProps('last_name')}
          />
        </Group>

        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...$form.getInputProps('email')}
        />

        <InputPhoneCountryCode
          className="bg-white"
          countryCode={$form.values.user_phone_country_code}
          phone={$form.values.phone}
          onCountryCodeChange={(val) => $form.setFieldValue('user_phone_country_code', val || '+212')}
          onPhoneChange={(val) => $form.setFieldValue('phone', val)}
          error={$form.errors.phone ? String($form.errors.phone) : undefined}
          label="Phone"
        />

        <TextInput
          label="Location"
          placeholder="City, Country"
          {...$form.getInputProps('location')}
        />

        <TextInput
          label="Bio"
          placeholder="Tell us about yourself"
          {...$form.getInputProps('bio')}
        />

        <Button 
          type="submit" 
          fullWidth 
          mt="md"
          className="uppercase font-extrabold"
        >
          Update Profile
        </Button>
      </Stack>
    </form>
  );
}
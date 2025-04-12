import { TextInput, Button, Group, Avatar, FileButton, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

export default function FormUpdateProfile() {
  const [$avatar, $_avatar] = useState<File | null>(null);

  const $form = useForm({
    initialValues: {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      location: 'New York, USA',
      bio: 'Passionate full-stack developer...',
    },
    validate: {
      first_name: (value) => value.length < 2 ? 'Name must be at least 2 characters' : null,
      last_name: (value) => value.length < 2 ? 'Name must be at least 2 characters' : null,
      email: (value) => !/^\S+@\S+$/.test(value) ? 'Invalid email' : null,
    },
  });

  const handle_submit = (values: typeof $form.values) => {
    // TODO: Implement update profile logic
    console.log(values, $avatar);
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

        <TextInput
          label="Phone"
          placeholder="+1 234 567 890"
          {...$form.getInputProps('phone')}
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
          styles={{ 
            label: { 
              textTransform: 'uppercase',
              fontWeight: 800
            } 
          }}
        >
          Update Profile
        </Button>
      </Stack>
    </form>
  );
}
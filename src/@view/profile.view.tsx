import { Avatar, Text, Group } from '@mantine/core';
import { MapPin, Mail, Phone, School } from 'lucide-react';

export default function ViewProfile() {
  return (
    <div className="flex flex-col gap-6 max-w-[40rem] mx-auto px-8">
      <div className="flex flex-col items-center">
        <Avatar
          src="/image.jpg"
          size={180}
          radius={90}
          className="border-4 border-[#f2f4f7] mb-6"
        />

        <div className="text-center mb-8">
          <Text fz="2rem" fw={700} mb={4}>
            John Doe
          </Text>

          <Text c="dimmed" fz="lg">
            Full-stack developer
          </Text>
        </div>

        <Group gap="xl">
          <Group gap={8}>
            <MapPin size={18} className="text-blue-500" />
            <Text size="sm">New York, USA</Text>
          </Group>
          <Group gap={8}>
            <Mail size={18} className="text-blue-500" />
            <Text size="sm">john@example.com</Text>
          </Group>
          <Group gap={8}>
            <Phone size={18} className="text-blue-500" />
            <Text size="sm">+1 234 567 890</Text>
          </Group>
          <Group gap={8}>
            <School size={18} className="text-blue-500" />
            <Text size="sm">Computer Science</Text>
          </Group>
        </Group>
      </div>

      <div className="mt-8">
        <Text fw={600} mb="md">About Me</Text>
        <Text size="sm" c="dimmed" className="leading-6">
          Passionate full-stack developer with expertise in React, Node.js, and cloud technologies. 
          I love building scalable applications and solving complex problems. When I'm not coding, 
          you can find me contributing to open-source projects or mentoring junior developers.
        </Text>
      </div>
    </div>
  );
}
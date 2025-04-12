import { Group, ActionIcon, Menu, Avatar, Burger } from '@mantine/core';
import { Link, useRouter } from '@tanstack/react-router';
import { X } from 'lucide-react';
import AppLogo from './app-logo.layout';
import { useState, useEffect } from 'react';
import AppLeft from './app-left.layout';

export default function AppHeader() {
  const [opened, setOpened] = useState(false);
  const router = useRouter();

  // Close menu when route changes
  useEffect(() => {
    const unsubscribe = router.history.subscribe(() => {
      setOpened(false);
    });
    return () => unsubscribe();
  }, [router.history]);

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50 px-4 lg:hidden">
        <Group h="100%" justify="space-between">
          <Group gap="sm">
            <Burger opened={opened} onClick={() => setOpened(o => !o)} />
            <AppLogo fontSize="text-2xl" />
          </Group>

          <Menu position="bottom-end" shadow="md">
            <Menu.Target>
              <Avatar
                src="/image.jpg"
                size="md"
                radius="xl"
                className="cursor-pointer"
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Link to="/profile">
                <Menu.Item>My Profile</Menu.Item>
              </Link>
              <Link to="/settings">
                <Menu.Item>Settings</Menu.Item>
              </Link>
              <Menu.Divider />
              <Menu.Item
                color="red"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Sign Out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </header>

      {/* Mobile Menu Drawer */}
      {opened && (
        <div className="fixed inset-0 z-[60] lg:hidden bg-black/50 backdrop-blur-lg">
          <div className="relative w-full h-full cursor-pointer" onClick={() => setOpened(false)}>
            <span className="absolute top-3 right-3 z-10">
              <ActionIcon
                variant="transparent"
                onClick={() => setOpened(false)}
              >
                <X size={24} color="#fff" />
              </ActionIcon>
            </span>
          </div>

          <div className="fixed top-0 left-0 z-50 w-[13.5rem] h-full pt-14 bg-white border-r border-gray-100">
            <AppLeft />
          </div>
        </div>
      )}
    </>
  );
}
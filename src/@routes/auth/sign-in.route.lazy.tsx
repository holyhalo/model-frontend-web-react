import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Container, Anchor, Box } from '@mantine/core';
import FormSignIn from '@form/auth/sign-in.form';
import AppLogo from '@layout/app-logo.layout';

export const Route = createLazyFileRoute('/auth/sign-in')({
  component: () => {
    return (
      <Container size={980} className="min-h-screen flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
          {/* Left side - Logo and Quote */}
          <div className="flex-1 text-center lg:text-left">
            <AppLogo fontSize="text-6xl lg:text-7xl" />
            <p className="mt-4 text-xl lg:text-3xl text-[#444]">
              One Small Step for Man, One Giant Leap for Mankind.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="w-full max-w-[30rem]">
            <Box bg="white" p="xl" style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)' }}>
              <FormSignIn />
              <Anchor
                component={Link}
                to="/auth/forgot-password"
                size="sm"
                ta="center"
                mt="md"
                style={{ display: 'block' }}
              >
                Forgot password?
              </Anchor>

              <Box mt="xl" pt="md" style={{ borderTop: '1px solid #dadde1' }}>
                <Anchor
                  component={Link}
                  to="/auth/sign-up"
                  variant="filled"
                  bg="accent.6"
                  c="black"
                  size="md"
                  style={{
                    display: 'block',
                    width: 'fit-content',
                    margin: '0 auto',
                    padding: '14px 16px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Create account
                </Anchor>
              </Box>
            </Box>
          </div>
        </div>
      </Container>
    );
  }
});
const API_BASE = import.meta.env.VITE_API_BASE_URL;
const AUTH_PATH = '/auth';

async function api_sign_up({ user_phone_country_code, user_phone, user_first_name, user_last_name, user_password }: {
  user_phone_country_code: string;
  user_phone: string;
  user_first_name: string;
  user_last_name: string;
  user_password: string;
}) {
  const res = await fetch(`${API_BASE}${AUTH_PATH}/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_phone_country_code, user_phone, user_first_name, user_last_name, user_password })
  });
  if (!res.ok) throw new Error('Sign up failed');
  return res.json();
}

async function api_sign_in({ user_phone, user_password }: {
  user_phone: string;
  user_password: string;
}) {
  const res = await fetch(`${API_BASE}${AUTH_PATH}/sign-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_phone, user_password })
  });
  if (!res.ok) throw new Error('Sign in failed');
  return res.json();
}

async function api_request_otp({ user_phone_country_code, user_phone }: {
  user_phone_country_code: string;
  user_phone: string;
}) {
  const res = await fetch(`${API_BASE}${AUTH_PATH}/request-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_phone_country_code, user_phone })
  });
  if (!res.ok) throw new Error('Request OTP failed');
  return res.json();
}

async function api_verify_otp({ user_phone_country_code, user_phone, code }: {
  user_phone_country_code: string;
  user_phone: string;
  code: string;
}) {
  const res = await fetch(`${API_BASE}${AUTH_PATH}/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_phone_country_code, user_phone, code })
  });
  if (!res.ok) throw new Error('Verify OTP failed');
  return res.json();
}

async function api_sign_out() {
  const res = await fetch(`${API_BASE}${AUTH_PATH}/sign-out`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error('Sign out failed');
  return res.json();
}

export default {
  api_sign_up,
  api_sign_in,
  api_request_otp,
  api_verify_otp,
  api_sign_out,
}; 
import { useForm } from '@mantine/form';
import { Button } from '@mantine/core';
import { PinInput } from '@mantine/core';
import { Group } from '@mantine/core';

export default function FormVerifyOtp() {
  const $form = useForm({
    initialValues: {
      otp: '',
    },
    validate: {
      otp: (value) => {
        if (!value) return 'OTP is required';
        if (!/^[0-9]{4}$/.test(value)) return 'OTP must be 4 digits';
        return null;
      },
    },
  });

  const handle_submit = (values: typeof $form.values) => {
    // TODO: Implement OTP verification logic
    console.log('Verify OTP:', values);
  };

  return (
    <form onSubmit={$form.onSubmit(handle_submit)}>
      <Group justify="center">
        <div className="w-72 flex flex-col items-center">
          <PinInput
            length={4}
            type="number"
            value={$form.values.otp}
            onChange={(value) => $form.setFieldValue('otp', value)}
            error={!!$form.errors.otp}
            size="xl"
            className="justify-center mb-6"
          />
          {$form.errors.otp && (
            <div className="text-rose-600 text-center mb-4 text-[0.95rem]">{$form.errors.otp}</div>
          )}
          <Button
            type="submit"
            className="w-full py-3.5 px-4 font-black uppercase"
          >
            Verify OTP
          </Button>
        </div>
      </Group>
    </form>
  );
} 
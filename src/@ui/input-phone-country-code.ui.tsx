import { TextInput, Select, Group, Text, Input, MantineSize } from '@mantine/core';
import lib_countries from '@lib/countries.lib';

interface InputPhoneCountryCodeProps {
  countryCode: string;
  phone: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  error?: string | null;
  disabled?: boolean;
  label?: string;
  size?: MantineSize;
  className?: string;
  placeholder?: string;
}

const sizeToHeight: Record<string, string> = {
  xs: 'h-[1.875rem]',
  sm: 'h-[2.25rem]',
  md: 'h-[2.8125rem]',
  lg: 'h-[3.25rem]',
  xl: 'h-[3.75rem]',
};

const sizeToText: Record<string, string> = {
  xs: '!text-xs',
  sm: '!text-sm',
  md: '!text-base',
  lg: '!text-lg',
  xl: '!text-xl',
};

const sizeToError: Record<string, string> = {
  xs: '!text-xs',
  sm: '!text-xs',
  md: '!text-sm',
  lg: '!text-base',
  xl: '!text-lg',
};

export default function InputPhoneCountryCode({
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
  error,
  disabled = false,
  label = '',
  size = 'md',
  className,
  placeholder = 'Phone Number',
}: InputPhoneCountryCodeProps) {
  const selectData = lib_countries.map(country => ({
    label: `${country.flag} ${country.name} (${country.value})`,
    value: country.value,
    flag: country.flag,
    abbr: country.abbr,
    code: country.code,
    name: country.name,
  })) as any[];
  const selectedCountry = lib_countries.find(c => c.value === countryCode);

  const heightClass = sizeToHeight[size] || sizeToHeight.md;
  const labelClass = (sizeToText[size] || sizeToText.md) + ' mb-1';
  const errorClass = sizeToError[size] || sizeToError.md;
  const groupClass =
    'border rounded-md focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 overflow-hidden pl-2 ' +
    heightClass + ' ' +
    (error ? 'border-red-500' : 'border-gray-300') +
    (className ? ' ' + className : '');

  return (
    <>
      {label && <Input.Label className={labelClass}>{label}</Input.Label>}
      <Group
        gap={0}
        className={groupClass}
      >
        <Select
          data={selectData}
          value={countryCode}
          onChange={(val) => onCountryCodeChange(val || '')}
          variant="unstyled"
          renderOption={({ option }: any) => (
            <Group flex="1" gap="xs">
              <Text fz="lg">{option.flag}</Text>
              <Text fz="sm">{option.name} ({option.value})</Text>
            </Group>
          )}
          className="w-[6.5rem]"
          leftSectionPointerEvents="none"
          classNames={{
            input: '!pl-3 !pr-1 !text-transparent !text-sm h-full flex items-center',
            section: '!w-auto',
            dropdown: 'w-[18rem]',
          }}
          comboboxProps={{ withinPortal: true, position: 'bottom-start', width: '18rem' }}
          rightSectionWidth={20}
          rightSection={<span className="mr-1 text-gray-500 text-xs">▼</span>}
          leftSectionWidth={70}
          leftSection={
            selectedCountry && (
              <Group gap={4} wrap="nowrap" pl={3} className={`h-full items-center ${disabled ? 'opacity-50' : ''}`}>
                <Text fz="lg">{selectedCountry.flag}</Text>
                <Text fz="sm" className="whitespace-nowrap !text-black">{selectedCountry.abbr}</Text>
                <Text fz="sm" className="whitespace-nowrap !text-black">{selectedCountry.value}</Text>
              </Group>
            )
          }
          disabled={disabled}
        />
        <TextInput
          variant="unstyled"
          placeholder={placeholder}
          className="flex-1 h-full text-base"
          classNames={{ input: `h-full border-none !pl-2 ${disabled ? 'cursor-not-allowed' : ''}` }}
          value={phone}
          onChange={(event) => onPhoneChange(event.currentTarget.value)}
          disabled={disabled}
          size={size}
        />
      </Group>
      {error && (
        <Text c="red" mt={2} className={errorClass}>{error}</Text>
      )}
    </>
  );
} 
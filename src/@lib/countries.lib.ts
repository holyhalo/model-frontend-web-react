// Country data (flag, abbreviation, numeric code, value, name)
const lib_countries = [
  { flag: '🇦🇫', abbr: 'AF', code: '93', value: '+93', name: 'Afghanistan' },
  { flag: '🇦🇱', abbr: 'AL', code: '355', value: '+355', name: 'Albania' },
  { flag: '🇩🇿', abbr: 'DZ', code: '213', value: '+213', name: 'Algeria' },
  { flag: '🇦🇩', abbr: 'AD', code: '376', value: '+376', name: 'Andorra' },
  { flag: '🇦🇴', abbr: 'AO', code: '244', value: '+244', name: 'Angola' },
  { flag: '🇦🇬', abbr: 'AG', code: '1', value: '+1-AG', name: 'Antigua and Barbuda' },
  { flag: '🇦🇷', abbr: 'AR', code: '54', value: '+54', name: 'Argentina' },
  { flag: '🇦🇲', abbr: 'AM', code: '374', value: '+374', name: 'Armenia' },
  { flag: '🇦🇺', abbr: 'AU', code: '61', value: '+61', name: 'Australia' },
  { flag: '🇦🇹', abbr: 'AT', code: '43', value: '+43', name: 'Austria' },
  { flag: '🇦🇿', abbr: 'AZ', code: '994', value: '+994', name: 'Azerbaijan' },
  { flag: '🇧🇸', abbr: 'BS', code: '1', value: '+1-BS', name: 'Bahamas' },
  { flag: '🇧🇭', abbr: 'BH', code: '973', value: '+973', name: 'Bahrain' },
  { flag: '🇧🇩', abbr: 'BD', code: '880', value: '+880', name: 'Bangladesh' },
  { flag: '🇧🇧', abbr: 'BB', code: '1', value: '+1-BB', name: 'Barbados' },
  { flag: '🇧🇾', abbr: 'BY', code: '375', value: '+375', name: 'Belarus' },
  { flag: '🇧🇪', abbr: 'BE', code: '32', value: '+32', name: 'Belgium' },
  { flag: '🇧🇿', abbr: 'BZ', code: '501', value: '+501', name: 'Belize' },
  { flag: '🇧🇯', abbr: 'BJ', code: '229', value: '+229', name: 'Benin' },
  { flag: '🇧🇹', abbr: 'BT', code: '975', value: '+975', name: 'Bhutan' },
  { flag: '🇧🇴', abbr: 'BO', code: '591', value: '+591', name: 'Bolivia' },
  { flag: '🇧🇦', abbr: 'BA', code: '387', value: '+387', name: 'Bosnia and Herzegovina' },
  { flag: '🇧🇼', abbr: 'BW', code: '267', value: '+267', name: 'Botswana' },
  { flag: '🇧🇷', abbr: 'BR', code: '55', value: '+55', name: 'Brazil' },
  { flag: '🇧🇳', abbr: 'BN', code: '673', value: '+673', name: 'Brunei' },
  { flag: '🇧🇬', abbr: 'BG', code: '359', value: '+359', name: 'Bulgaria' },
  { flag: '🇧🇫', abbr: 'BF', code: '226', value: '+226', name: 'Burkina Faso' },
  { flag: '🇧🇮', abbr: 'BI', code: '257', value: '+257', name: 'Burundi' },
  { flag: '🇰🇭', abbr: 'KH', code: '855', value: '+855', name: 'Cambodia' },
  { flag: '🇨🇲', abbr: 'CM', code: '237', value: '+237', name: 'Cameroon' },
  { flag: '🇨🇦', abbr: 'CA', code: '1', value: '+1-CA', name: 'Canada' },
  { flag: '🇨🇻', abbr: 'CV', code: '238', value: '+238', name: 'Cape Verde' },
  { flag: '🇨🇫', abbr: 'CF', code: '236', value: '+236', name: 'Central African Republic' },
  { flag: '🇹🇩', abbr: 'TD', code: '235', value: '+235', name: 'Chad' },
  { flag: '🇨🇱', abbr: 'CL', code: '56', value: '+56', name: 'Chile' },
  { flag: '🇨🇳', abbr: 'CN', code: '86', value: '+86', name: 'China' },
  { flag: '🇨🇴', abbr: 'CO', code: '57', value: '+57', name: 'Colombia' },
  { flag: '🇰🇲', abbr: 'KM', code: '269', value: '+269', name: 'Comoros' },
  { flag: '🇨🇬', abbr: 'CG', code: '242', value: '+242', name: 'Congo - Brazzaville' },
  { flag: '🇨🇩', abbr: 'CD', code: '243', value: '+243', name: 'Congo - Kinshasa' },
  { flag: '🇨🇷', abbr: 'CR', code: '506', value: '+506', name: 'Costa Rica' },
  { flag: '🇭🇷', abbr: 'HR', code: '385', value: '+385', name: 'Croatia' },
  { flag: '🇨🇺', abbr: 'CU', code: '53', value: '+53', name: 'Cuba' },
  { flag: '🇨🇾', abbr: 'CY', code: '357', value: '+357', name: 'Cyprus' },
  { flag: '🇨🇿', abbr: 'CZ', code: '420', value: '+420', name: 'Czech Republic' },
  { flag: '🇩🇰', abbr: 'DK', code: '45', value: '+45', name: 'Denmark' },
  { flag: '🇩🇯', abbr: 'DJ', code: '253', value: '+253', name: 'Djibouti' },
  { flag: '🇩🇲', abbr: 'DM', code: '1', value: '+1-DM', name: 'Dominica' },
  { flag: '🇩🇴', abbr: 'DO', code: '1', value: '+1-DO', name: 'Dominican Republic' },
  { flag: '🇪🇨', abbr: 'EC', code: '593', value: '+593', name: 'Ecuador' },
  { flag: '🇪🇬', abbr: 'EG', code: '20', value: '+20', name: 'Egypt' },
  { flag: '🇸🇻', abbr: 'SV', code: '503', value: '+503', name: 'El Salvador' },
  { flag: '🇬🇶', abbr: 'GQ', code: '240', value: '+240', name: 'Equatorial Guinea' },
  { flag: '🇪🇷', abbr: 'ER', code: '291', value: '+291', name: 'Eritrea' },
  { flag: '🇪🇪', abbr: 'EE', code: '372', value: '+372', name: 'Estonia' },
  { flag: '🇸🇿', abbr: 'SZ', code: '268', value: '+268', name: 'Eswatini' },
  { flag: '🇪🇹', abbr: 'ET', code: '251', value: '+251', name: 'Ethiopia' },
  { flag: '🇫🇯', abbr: 'FJ', code: '679', value: '+679', name: 'Fiji' },
  { flag: '🇫🇮', abbr: 'FI', code: '358', value: '+358', name: 'Finland' },
  { flag: '🇫🇷', abbr: 'FR', code: '33', value: '+33', name: 'France' },
  { flag: '🇬🇦', abbr: 'GA', code: '241', value: '+241', name: 'Gabon' },
  { flag: '🇬🇲', abbr: 'GM', code: '220', value: '+220', name: 'Gambia' },
  { flag: '🇬🇪', abbr: 'GE', code: '995', value: '+995', name: 'Georgia' },
  { flag: '🇩🇪', abbr: 'DE', code: '49', value: '+49', name: 'Germany' },
  { flag: '🇬🇭', abbr: 'GH', code: '233', value: '+233', name: 'Ghana' },
  { flag: '🇬🇷', abbr: 'GR', code: '30', value: '+30', name: 'Greece' },
  { flag: '🇬🇩', abbr: 'GD', code: '1', value: '+1-GD', name: 'Grenada' },
  { flag: '🇬🇹', abbr: 'GT', code: '502', value: '+502', name: 'Guatemala' },
  { flag: '🇬🇳', abbr: 'GN', code: '224', value: '+224', name: 'Guinea' },
  { flag: '🇬🇼', abbr: 'GW', code: '245', value: '+245', name: 'Guinea-Bissau' },
  { flag: '🇬🇾', abbr: 'GY', code: '592', value: '+592', name: 'Guyana' },
  { flag: '🇭🇹', abbr: 'HT', code: '509', value: '+509', name: 'Haiti' },
  { flag: '🇭🇳', abbr: 'HN', code: '504', value: '+504', name: 'Honduras' },
  { flag: '🇭🇺', abbr: 'HU', code: '36', value: '+36', name: 'Hungary' },
  { flag: '🇮🇸', abbr: 'IS', code: '354', value: '+354', name: 'Iceland' },
  { flag: '🇮🇳', abbr: 'IN', code: '91', value: '+91', name: 'India' },
  { flag: '🇮🇩', abbr: 'ID', code: '62', value: '+62', name: 'Indonesia' },
  { flag: '🇮🇷', abbr: 'IR', code: '98', value: '+98', name: 'Iran' },
  { flag: '🇮🇶', abbr: 'IQ', code: '964', value: '+964', name: 'Iraq' },
  { flag: '🇮🇪', abbr: 'IE', code: '353', value: '+353', name: 'Ireland' },
  { flag: '🇮🇹', abbr: 'IT', code: '39', value: '+39', name: 'Italy' },
  { flag: '🇯🇲', abbr: 'JM', code: '1', value: '+1-JM', name: 'Jamaica' },
  { flag: '🇯🇵', abbr: 'JP', code: '81', value: '+81', name: 'Japan' },
  { flag: '🇯🇴', abbr: 'JO', code: '962', value: '+962', name: 'Jordan' },
  { flag: '🇰🇿', abbr: 'KZ', code: '7', value: '+7-KZ', name: 'Kazakhstan' },
  { flag: '🇰🇪', abbr: 'KE', code: '254', value: '+254', name: 'Kenya' },
  { flag: '🇰🇮', abbr: 'KI', code: '686', value: '+686', name: 'Kiribati' },
  { flag: '🇽🇰', abbr: 'XK', code: '383', value: '+383', name: 'Kosovo' },
  { flag: '🇰🇼', abbr: 'KW', code: '965', value: '+965', name: 'Kuwait' },
  { flag: '🇰🇬', abbr: 'KG', code: '996', value: '+996', name: 'Kyrgyzstan' },
  { flag: '🇱🇦', abbr: 'LA', code: '856', value: '+856', name: 'Laos' },
  { flag: '🇱🇻', abbr: 'LV', code: '371', value: '+371', name: 'Latvia' },
  { flag: '🇱🇧', abbr: 'LB', code: '961', value: '+961', name: 'Lebanon' },
  { flag: '🇱🇸', abbr: 'LS', code: '266', value: '+266', name: 'Lesotho' },
  { flag: '🇱🇷', abbr: 'LR', code: '231', value: '+231', name: 'Liberia' },
  { flag: '🇱🇾', abbr: 'LY', code: '218', value: '+218', name: 'Libya' },
  { flag: '🇱🇮', abbr: 'LI', code: '423', value: '+423', name: 'Liechtenstein' },
  { flag: '🇱🇹', abbr: 'LT', code: '370', value: '+370', name: 'Lithuania' },
  { flag: '🇱🇺', abbr: 'LU', code: '352', value: '+352', name: 'Luxembourg' },
  { flag: '🇲🇬', abbr: 'MG', code: '261', value: '+261', name: 'Madagascar' },
  { flag: '🇲🇼', abbr: 'MW', code: '265', value: '+265', name: 'Malawi' },
  { flag: '🇲🇾', abbr: 'MY', code: '60', value: '+60', name: 'Malaysia' },
  { flag: '🇲🇻', abbr: 'MV', code: '960', value: '+960', name: 'Maldives' },
  { flag: '🇲🇱', abbr: 'ML', code: '223', value: '+223', name: 'Mali' },
  { flag: '🇲🇹', abbr: 'MT', code: '356', value: '+356', name: 'Malta' },
  { flag: '🇲🇭', abbr: 'MH', code: '692', value: '+692', name: 'Marshall Islands' },
  { flag: '🇲🇷', abbr: 'MR', code: '222', value: '+222', name: 'Mauritania' },
  { flag: '🇲🇺', abbr: 'MU', code: '230', value: '+230', name: 'Mauritius' },
  { flag: '🇲🇽', abbr: 'MX', code: '52', value: '+52', name: 'Mexico' },
  { flag: '🇫🇲', abbr: 'FM', code: '691', value: '+691', name: 'Micronesia' },
  { flag: '🇲🇩', abbr: 'MD', code: '373', value: '+373', name: 'Moldova' },
  { flag: '🇲🇨', abbr: 'MC', code: '377', value: '+377', name: 'Monaco' },
  { flag: '🇲🇳', abbr: 'MN', code: '976', value: '+976', name: 'Mongolia' },
  { flag: '🇲🇪', abbr: 'ME', code: '382', value: '+382', name: 'Montenegro' },
  { flag: '🇲🇦', abbr: 'MA', code: '212', value: '+212', name: 'Morocco' },
  { flag: '🇲🇿', abbr: 'MZ', code: '258', value: '+258', name: 'Mozambique' },
  { flag: '🇲🇲', abbr: 'MM', code: '95', value: '+95', name: 'Myanmar (Burma)' },
  { flag: '🇳🇦', abbr: 'NA', code: '264', value: '+264', name: 'Namibia' },
  { flag: '🇳🇷', abbr: 'NR', code: '674', value: '+674', name: 'Nauru' },
  { flag: '🇳🇵', abbr: 'NP', code: '977', value: '+977', name: 'Nepal' },
  { flag: '🇳🇱', abbr: 'NL', code: '31', value: '+31', name: 'Netherlands' },
  { flag: '🇳🇿', abbr: 'NZ', code: '64', value: '+64', name: 'New Zealand' },
  { flag: '🇳🇮', abbr: 'NI', code: '505', value: '+505', name: 'Nicaragua' },
  { flag: '🇳🇪', abbr: 'NE', code: '227', value: '+227', name: 'Niger' },
  { flag: '🇳🇬', abbr: 'NG', code: '234', value: '+234', name: 'Nigeria' },
  { flag: '🇰🇵', abbr: 'KP', code: '850', value: '+850', name: 'North Korea' },
  { flag: '🇲🇰', abbr: 'MK', code: '389', value: '+389', name: 'North Macedonia' },
  { flag: '🇳🇴', abbr: 'NO', code: '47', value: '+47', name: 'Norway' },
  { flag: '🇴🇲', abbr: 'OM', code: '968', value: '+968', name: 'Oman' },
  { flag: '🇵🇰', abbr: 'PK', code: '92', value: '+92', name: 'Pakistan' },
  { flag: '🇵🇼', abbr: 'PW', code: '680', value: '+680', name: 'Palau' },
  { flag: '🇵🇸', abbr: 'PS', code: '970', value: '+970', name: 'Palestine' },
  { flag: '🇵🇦', abbr: 'PA', code: '507', value: '+507', name: 'Panama' },
  { flag: '🇵🇬', abbr: 'PG', code: '675', value: '+675', name: 'Papua New Guinea' },
  { flag: '🇵🇾', abbr: 'PY', code: '595', value: '+595', name: 'Paraguay' },
  { flag: '🇵🇪', abbr: 'PE', code: '51', value: '+51', name: 'Peru' },
  { flag: '🇵🇭', abbr: 'PH', code: '63', value: '+63', name: 'Philippines' },
  { flag: '🇵🇱', abbr: 'PL', code: '48', value: '+48', name: 'Poland' },
  { flag: '🇵🇹', abbr: 'PT', code: '351', value: '+351', name: 'Portugal' },
  { flag: '🇶🇦', abbr: 'QA', code: '974', value: '+974', name: 'Qatar' },
  { flag: '🇷🇴', abbr: 'RO', code: '40', value: '+40', name: 'Romania' },
  { flag: '🇷🇺', abbr: 'RU', code: '7', value: '+7-RU', name: 'Russia' },
  { flag: '🇷🇼', abbr: 'RW', code: '250', value: '+250', name: 'Rwanda' },
  { flag: '🇰🇳', abbr: 'KN', code: '1', value: '+1-KN', name: 'Saint Kitts and Nevis' },
  { flag: '🇱🇨', abbr: 'LC', code: '1', value: '+1-LC', name: 'Saint Lucia' },
  { flag: '🇻🇨', abbr: 'VC', code: '1', value: '+1-VC', name: 'Saint Vincent and the Grenadines' },
  { flag: '🇼🇸', abbr: 'WS', code: '685', value: '+685', name: 'Samoa' },
  { flag: '🇸🇲', abbr: 'SM', code: '378', value: '+378', name: 'San Marino' },
  { flag: '🇸🇹', abbr: 'ST', code: '239', value: '+239', name: 'Sao Tome and Principe' },
  { flag: '🇸🇦', abbr: 'SA', code: '966', value: '+966', name: 'Saudi Arabia' },
  { flag: '🇸🇳', abbr: 'SN', code: '221', value: '+221', name: 'Senegal' },
  { flag: '🇷🇸', abbr: 'RS', code: '381', value: '+381', name: 'Serbia' },
  { flag: '🇸🇨', abbr: 'SC', code: '248', value: '+248', name: 'Seychelles' },
  { flag: '🇸🇱', abbr: 'SL', code: '232', value: '+232', name: 'Sierra Leone' },
  { flag: '🇸🇬', abbr: 'SG', code: '65', value: '+65', name: 'Singapore' },
  { flag: '🇸🇰', abbr: 'SK', code: '421', value: '+421', name: 'Slovakia' },
  { flag: '🇸🇮', abbr: 'SI', code: '386', value: '+386', name: 'Slovenia' },
  { flag: '🇸🇧', abbr: 'SB', code: '677', value: '+677', name: 'Solomon Islands' },
  { flag: '🇸🇴', abbr: 'SO', code: '252', value: '+252', name: 'Somalia' },
  { flag: '🇿🇦', abbr: 'ZA', code: '27', value: '+27', name: 'South Africa' },
  { flag: '🇰🇷', abbr: 'KR', code: '82', value: '+82', name: 'South Korea' },
  { flag: '🇸🇸', abbr: 'SS', code: '211', value: '+211', name: 'South Sudan' },
  { flag: '🇪🇸', abbr: 'ES', code: '34', value: '+34', name: 'Spain' },
  { flag: '🇱🇰', abbr: 'LK', code: '94', value: '+94', name: 'Sri Lanka' },
  { flag: '🇸🇩', abbr: 'SD', code: '249', value: '+249', name: 'Sudan' },
  { flag: '🇸🇷', abbr: 'SR', code: '597', value: '+597', name: 'Suriname' },
  { flag: '🇸🇪', abbr: 'SE', code: '46', value: '+46', name: 'Sweden' },
  { flag: '🇨🇭', abbr: 'CH', code: '41', value: '+41', name: 'Switzerland' },
  { flag: '🇸🇾', abbr: 'SY', code: '963', value: '+963', name: 'Syria' },
  { flag: '🇹🇼', abbr: 'TW', code: '886', value: '+886', name: 'Taiwan' },
  { flag: '🇹🇯', abbr: 'TJ', code: '992', value: '+992', name: 'Tajikistan' },
  { flag: '🇹🇿', abbr: 'TZ', code: '255', value: '+255', name: 'Tanzania' },
  { flag: '🇹🇭', abbr: 'TH', code: '66', value: '+66', name: 'Thailand' },
  { flag: '🇹🇱', abbr: 'TL', code: '670', value: '+670', name: 'Timor-Leste' },
  { flag: '🇹🇬', abbr: 'TG', code: '228', value: '+228', name: 'Togo' },
  { flag: '🇹🇴', abbr: 'TO', code: '676', value: '+676', name: 'Tonga' },
  { flag: '🇹🇹', abbr: 'TT', code: '1', value: '+1-TT', name: 'Trinidad and Tobago' },
  { flag: '🇹🇳', abbr: 'TN', code: '216', value: '+216', name: 'Tunisia' },
  { flag: '🇹🇷', abbr: 'TR', code: '90', value: '+90', name: 'Turkey' },
  { flag: '🇹🇲', abbr: 'TM', code: '993', value: '+993', name: 'Turkmenistan' },
  { flag: '🇹🇻', abbr: 'TV', code: '688', value: '+688', name: 'Tuvalu' },
  { flag: '🇺🇬', abbr: 'UG', code: '256', value: '+256', name: 'Uganda' },
  { flag: '🇺🇦', abbr: 'UA', code: '380', value: '+380', name: 'Ukraine' },
  { flag: '🇦🇪', abbr: 'AE', code: '971', value: '+971', name: 'United Arab Emirates' },
  { flag: '🇬🇧', abbr: 'GB', code: '44', value: '+44', name: 'United Kingdom' },
  { flag: '🇺🇸', code: '1', value: '+1-US', name: 'United States' },
  { flag: '🇺��', abbr: 'UY', code: '598', value: '+598', name: 'Uruguay' },
  { flag: '🇺🇿', abbr: 'UZ', code: '998', value: '+998', name: 'Uzbekistan' },
  { flag: '🇻🇺', abbr: 'VU', code: '678', value: '+678', name: 'Vanuatu' },
  { flag: '🇻🇦', abbr: 'VA', code: '39', value: '+39-VA', name: 'Vatican City' },
  { flag: '🇻🇪', abbr: 'VE', code: '58', value: '+58', name: 'Venezuela' },
  { flag: '🇻🇳', abbr: 'VN', code: '84', value: '+84', name: 'Vietnam' },
  { flag: '🇾🇪', abbr: 'YE', code: '967', value: '+967', name: 'Yemen' },
  { flag: '🇿🇲', abbr: 'ZM', code: '260', value: '+260', name: 'Zambia' },
  { flag: '🇿🇼', abbr: 'ZW', code: '263', value: '+263', name: 'Zimbabwe' },
];

export default lib_countries; 
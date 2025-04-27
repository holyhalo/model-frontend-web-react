import { Avatar, Indicator, Menu, Select, Skeleton, Text } from "@mantine/core"
import { ChevronsUpDown, Languages, LogOut } from "lucide-react"
import { Settings } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { UserCircle } from "lucide-react"
import { useState } from "react"

export default function AppRight() {
  return (
    <div className="fixed z-40 right-0 top-0 w-[12.5rem] h-full">
      <div className="flex flex-col gap-4 mt-2">
        <AppRightHeader />
        <AppRightBody />
      </div>
    </div>
  )
}

function AppRightHeader() {
  const lang = localStorage.getItem('lang') || 'en'

  const changeLanguage = (value: string | null) => {
    if (value) {
      localStorage.setItem('lang', value)

      window.location.reload()
    }
  }

  return (
    <div className="flex flex-row justify-between items-center pr-2 font-bold">
      <Select
        radius="xl"
        placeholder="Select placeholder"
        data={[
          { label: 'English', value: 'en' },
          { label: 'العربية', value: 'ar' },
          { label: 'français', value: 'fr' },
        ]}
        onChange={changeLanguage}
        defaultValue={lang}
        allowDeselect={false}
        leftSection={<Languages color="#444" size={20} />}
        leftSectionPointerEvents="none"
        rightSection={<ChevronsUpDown color="#444" size={20} />}
        rightSectionPointerEvents="none"
        styles={{
          section: {
            width: '2.75rem',
            paddingLeft: '.8rem',
            paddingRight: '.8rem',
            color: '#444',
          },
          input: {
            width: '8.5rem',
            height: '2.8rem',
            color: '#444',
            backgroundColor: '#fff',
            borderColor: '#eee',
            textAlign: 'center',
          }
        }}
      />

      <Dropdown />
    </div>
  )
}

function AppRightBody() {
  const data = [
    { id: 1, name: 'Oualid', image: 'avatar-1.png' },
    { id: 2, name: 'Nora', image: 'avatar-4.png' },
    { id: 3, name: 'Rania', image: 'avatar-4.png' },
    { id: 4, name: 'Abir', image: 'avatar-7.png' },
    { id: 5, name: 'Dodo', image: 'avatar-8.png' },
  ]

  return (
    <div className="flex flex-col gap-4">
      {
        data?.map(({ id, name, image }) => (
          <div className="flex flex-row justify-start items-center gap-2" key={`app-right-user-${id}`}>
            <Indicator inline processing color="green" size={10} offset={4} position="bottom-end">
              <Avatar
                size="md"
                radius="xl"
                src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/${image}`}
              />
            </Indicator>

            <Text size="sm" fw="600" truncate="end">{name}</Text>
          </div>
        ))
      }
    </div>
  )
}

function Dropdown() {
  const [$image_is_loaded, $_image_is_loaded] = useState(false)

  const handle_logout = () => {
    localStorage.clear();

    window.location.reload()
  };

  return (
    <Menu shadow="md" width={155} position="top-end">
      <Menu.Target>
        <button className='bg-transparent border-0 rounded-full'>
          <div className="relative w-[2.8rem] h-[2.8rem]">
            <img
              className={`w-full h-full bg-white object-cover object-center rounded-full ${!$image_is_loaded && 'hidden'}`}
              src='/image.jpg'
              alt="image"
              onLoad={() => $_image_is_loaded(true)}
            />
            <Skeleton
              height={44}
              circle
              mb="xl"
              classNames={{
                root: `${$image_is_loaded ? 'hidden' : 'inline-block'} mb-[0_!important]`
              }}
            />
          </div>
        </button>
      </Menu.Target>

      <Menu.Dropdown className="font-bold">
        <Link to="/profile" aria-label="my profile">
          <Menu.Item leftSection={<UserCircle size={20} className="text-[#444]" />}>
            <span className="text-[#444] capitalize">my profile</span>
          </Menu.Item>
        </Link>
        <Link to="/settings" aria-label="settings">
          <Menu.Item leftSection={<Settings size={20} className="text-[#444]" />}>
            <span className="text-[#444] capitalize">settings</span>
          </Menu.Item>
        </Link>
        <Menu.Item 
          leftSection={<LogOut size={20} className="text-red-500" />}
          onClick={handle_logout}
        >
          <span className="text-red-500 capitalize">sign out</span>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
import AppLogo from "./app-logo.layout"
import { Link, useLocation } from "@tanstack/react-router"
import { CircleUser, Coins, Gift, Home, Landmark, Palmtree, Settings, Telescope, Trophy, Users } from "lucide-react"
import { Accordion } from "@mantine/core"

export default function AppNavbar() {
  const { pathname } = useLocation()

  const { top_links, accordion_links } = get_links()
  const opened_accordion_item = get_opened_accordion_item(pathname)

  return (
    <div className="fixed top-0 left-0 z-40 w-[12.5rem] h-full pl-4 pr-0 py-2">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 flex justify-start items-baseline w-full h-[3.4rem]">
          <AppLogo />
        </div>

        <div className="w-full h-full pt-8 overflow-auto">
          <div className="flex flex-col gap-4 text-[#444] mt-6">
            {
              top_links.map((link, i) => (
                <Link to={link.path} key={`link-top-${i}`} aria-label={link.title}>
                  <div className={`flex justify-start items-center gap-2 text-md capitalize ${pathname === link.path
                    ? 'text-sky-500 font-bold'
                    : 'font-medium'
                    }`}>
                    {link.icon}
                    <span>{link.title}</span>
                  </div>
                </Link>
              ))
            }
          </div>

          <div className="mt-8 capitalize">
            <Accordion
              multiple
              defaultValue={opened_accordion_item}
              classNames={{
                item: 'border-b-[transparent_!important]',
                control: 'px-[0_!important]',
              }}
              styles={{
                label: {
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#444',
                  textTransform: 'capitalize',
                },
                content: {
                  fontSize: '0.95rem',
                },
                icon: {
                  marginInlineEnd: '0.5rem',
                },
              }}
            >
              {
                accordion_links.map((link, m) => (
                  <Accordion.Item value={`item-${m}`} key={`link-m-${m}`}>
                    <Accordion.Control icon={link.icon} className="capitalize">{link.title}</Accordion.Control>
                    {
                      link.sublinks.map((sublink, n) => (
                        <Link to={sublink.path} key={`link-n-${n}`} aria-label={sublink.title}>
                          <Accordion.Panel>
                            <span className={`${pathname === sublink.path
                              ? 'text-blue-500 font-bold'
                              : 'font-medium'
                              }`}>{sublink.title}</span>
                          </Accordion.Panel>
                        </Link>
                      ))
                    }
                  </Accordion.Item>
                ))
              }
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

function get_opened_accordion_item(pathname: string): string[] {
  if (['/parents', '/students', '/teachers', '/administrators'].includes(pathname)) return ['item-0']
  if (['/incomes', '/charges'].includes(pathname)) return ['item-1']
  return []
}

function get_links() {
  const top_links = [
    { path: '/', title: 'home', icon: <Home size={22} strokeWidth={2.2} /> },
    { path: '/profile', title: 'my profile', icon: <CircleUser size={22} strokeWidth={2.2} /> },
    { path: '/settings', title: 'settings', icon: <Settings size={22} strokeWidth={2.2} /> },
    { path: '/explore', title: 'explore', icon: <Telescope size={22} strokeWidth={2.2} /> },
    { path: '/ranking', title: 'ranking', icon: <Trophy size={22} strokeWidth={2.2} /> },
    { path: '/rewards', title: 'rewards', icon: <Gift size={22} strokeWidth={2.2} /> },
    { path: '/coming-soon', title: 'tokens', icon: <Coins size={22} strokeWidth={2.2} /> },
    { path: '/metaverse', title: 'metaverse', icon: <Palmtree size={22} strokeWidth={2.2} /> },
  ]

  const accordion_links = [
    {
      title: 'profiles',
      icon: <Users size={20} strokeWidth={2.2} />,
      sublinks: [
        { path: '/parents', title: 'parents' },
        { path: '/teachers', title: 'teachers' },
        { path: '/students', title: 'students' },
        { path: '/administrators', title: 'administrators' },
      ]
    },
    {
      title: 'accounting',
      icon: <Landmark size={20} strokeWidth={2.2} />,
      sublinks: [
        { path: '/incomes', title: 'incomes' },
        { path: '/charges', title: 'charges' },
      ]
    },
  ]

  return { top_links, accordion_links }
}
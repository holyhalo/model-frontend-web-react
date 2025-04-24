import { createLazyFileRoute } from '@tanstack/react-router'
import AppLogo from "@layout/app-logo.layout"

export const Route = createLazyFileRoute('/')({
  component: () => (
    <div className="flex justify-center items-center flex-col h-screen pb-[12rem]">
      <div className="flex flex-row justify-center items-center gap-1 text-3xl font-bold mb-4">
        <span className="text-[#444]">welcome to</span>
        <AppLogo fontSize="" />
      </div>
    </div>
  ),
})
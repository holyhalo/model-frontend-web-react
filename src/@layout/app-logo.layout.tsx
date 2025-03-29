export default function AppLogo({ fontSize = 'text-4xl' }: { fontSize?: string }) {
    return (
      <div className={`${fontSize} font-bold leading-none`}>
        <span className="text-yellow-400">holy</span>
        <span className="text-sky-400">halo</span>
      </div>
    )
  }
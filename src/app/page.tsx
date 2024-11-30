import MineralCard from '@/components/mineral-card'
import { ModeToggle } from '@/components/theme-toggle-button'

export default function Home() {
  return (
    <div className="bg-background min-h-screen py-10 px-4 relative">
      <div className="fixed bottom-3 right-3">
        <ModeToggle />
      </div>
      {/* Título da Página */}
      <h1 className="text-center text-4xl font-bold mb-8 text-primary">
        Galeria de Minerais
      </h1>
      {/* Grid de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <MineralCard />
      </div>
    </div>
  )
}

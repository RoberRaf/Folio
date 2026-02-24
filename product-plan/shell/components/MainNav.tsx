import { useState } from 'react'
import { BookOpen, Menu, Plus } from 'lucide-react'
// Requires shadcn/ui: npx shadcn-ui@latest add sheet
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { UserMenu } from './UserMenu'

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface MainNavProps {
  navigationItems: NavItem[]
  user?: { name: string; avatarUrl?: string }
  onNavigate?: (href: string) => void
  onLogout?: () => void
  onCreateBook?: () => void
}

export function MainNav({ navigationItems, user, onNavigate, onLogout, onCreateBook }: MainNavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleNavClick = (href: string) => {
    onNavigate?.(href)
    setDrawerOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2 shrink-0 group"
          aria-label="Folio home"
        >
          <div className="w-7 h-7 rounded-md bg-rose-600 dark:bg-rose-500 flex items-center justify-center shadow-sm group-hover:bg-rose-700 dark:group-hover:bg-rose-400 transition-colors">
            <BookOpen className="w-4 h-4 text-white" strokeWidth={1.75} />
          </div>
          <span
            className="text-xl text-rose-600 dark:text-rose-400 select-none"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 600 }}
          >
            Folio
          </span>
        </button>

        {/* Desktop center nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`
                px-3 py-1.5 text-sm font-medium rounded-md transition-colors
                ${item.isActive
                  ? 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/60'
                }
              `}
            >
              {item.label}
              {item.isActive && (
                <span className="block h-0.5 mt-0.5 rounded-full bg-rose-500 dark:bg-rose-400" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onCreateBook}
            className="flex items-center gap-1.5 px-4 py-2 bg-rose-600 hover:bg-rose-700 dark:bg-rose-600 dark:hover:bg-rose-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" strokeWidth={2.5} />
            Create Book
          </button>
          {user && <UserMenu user={user} onLogout={onLogout} />}
        </div>

        {/* Mobile right actions */}
        <div className="flex md:hidden items-center gap-2">
          {user && <UserMenu user={user} onLogout={onLogout} />}
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-md text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent side="left" className="w-72 bg-white dark:bg-stone-950 border-stone-200 dark:border-stone-800">
          <SheetHeader className="pb-4 border-b border-stone-200 dark:border-stone-800">
            <SheetTitle className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-rose-600 flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-white" strokeWidth={1.75} />
              </div>
              <span
                className="text-lg text-rose-600 dark:text-rose-400"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 600 }}
              >
                Folio
              </span>
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-1 mt-4 flex-1">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`
                  flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-left
                  ${item.isActive
                    ? 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-stone-200 dark:border-stone-800">
            <button
              onClick={() => { onCreateBook?.(); setDrawerOpen(false) }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
              Create Book
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

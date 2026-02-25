import type { ReactNode } from 'react';
import { MainNav } from './MainNav';

interface AppShellProps {
  children: ReactNode
  navigationItems: Array<{ label: string; href: string; isActive?: boolean }>
  user?: { name: string; avatarUrl?: string }
  onNavigate?: (href: string) => void
  onLogout?: () => void
  onCreateBook?: () => void
  isDark?: boolean
  onToggleDark?: () => void
}

export function AppShell({
  children,
  navigationItems,
  user,
  onNavigate,
  onLogout,
  onCreateBook,
  isDark,
  onToggleDark,
}: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-900">
      <MainNav
        navigationItems={navigationItems}
        user={user}
        onNavigate={onNavigate}
        onLogout={onLogout}
        onCreateBook={onCreateBook}
        isDark={isDark}
        onToggleDark={onToggleDark}
      />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  )
}

export default AppShell

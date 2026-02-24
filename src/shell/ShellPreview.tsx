import { useState } from 'react'
import { AppShell } from './components/AppShell'

const SAMPLE_NAV_ITEMS = [
  { label: 'Designer', href: '/designer', isActive: true },
  { label: 'My Books', href: '/profile', isActive: false },
]

const SAMPLE_USER = {
  name: 'Alex Morgan',
  avatarUrl: undefined,
}

export default function ShellPreview() {
  const [activeHref, setActiveHref] = useState('/designer')

  const navItems = SAMPLE_NAV_ITEMS.map((item) => ({
    ...item,
    isActive: item.href === activeHref,
  }))

  return (
    <AppShell
      navigationItems={navItems}
      user={SAMPLE_USER}
      onNavigate={(href) => setActiveHref(href)}
      onLogout={() => alert('Log out clicked')}
      onCreateBook={() => alert('Create Book clicked')}
    >
      {/* Placeholder content area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-rose-100 dark:bg-rose-950/40 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-rose-500 dark:text-rose-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <h2
            className="text-2xl text-stone-900 dark:text-stone-100 mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}
          >
            {activeHref === '/designer' ? 'Designer' : 'My Books'}
          </h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Section content will appear here. Use the nav links above to switch between sections.
          </p>
        </div>
      </div>
    </AppShell>
  )
}

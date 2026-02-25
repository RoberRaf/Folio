import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { AppShell } from '@/components/shell'
import { useDarkMode } from '@/hooks/useDarkMode'
import { AuthPage } from '@/pages/AuthPage'
import { CheckoutPage } from '@/pages/CheckoutPage'
import { DesignerPage } from '@/pages/DesignerPage'
import { LandingPage } from '@/pages/LandingPage'
import { PreviewPage } from '@/pages/PreviewPage'
import { ProfilePage } from '@/pages/ProfilePage'

const MOCK_USER = { name: 'Mark Smith' }

const NAV_ITEMS = [
  { label: 'Designer', href: '/designer' },
  { label: 'My Books', href: '/profile' },
]

interface ShellLayoutProps {
  isDark: boolean
  onToggleDark: () => void
}

function ShellLayout({ isDark, onToggleDark }: ShellLayoutProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const navigationItems = NAV_ITEMS.map((item) => ({
    ...item,
    isActive: location.pathname === item.href,
  }))

  return (
    <AppShell
      navigationItems={navigationItems}
      user={MOCK_USER}
      onNavigate={(href) => navigate(href)}
      onLogout={() => console.log('logout')}
      onCreateBook={() => navigate('/designer')}
      isDark={isDark}
      onToggleDark={onToggleDark}
    >
      <Routes>
        <Route path="/auth/signup" element={<AuthPage mode="signup" />} />
        <Route path="/auth/signin" element={<AuthPage mode="signin" />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </AppShell>
  )
}

export default function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/designer" element={<DesignerPage />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="/*" element={<ShellLayout isDark={isDark} onToggleDark={toggle} />} />
    </Routes>
  )
}

import type { Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Toaster } from 'sonner'

import { cn } from '@a/ui'
import { ThemeProvider } from '@a/ui/theme'

import '~/app/globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en' suppressHydrationWarning>
    <body
      className={cn(
        'min-h-screen bg-background font-sans text-foreground antialiased',
        GeistSans.variable,
        GeistMono.variable
      )}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        <Toaster />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout

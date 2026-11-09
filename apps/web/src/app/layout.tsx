import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { SessionProvider } from '@/core/session/SessionContext';

export const metadata: Metadata = {
  title: {
    default: 'Toàn Trung CRM',
    template: '%s | Toàn Trung CRM',
  },
  description: 'Nền tảng quản trị nội bộ dành cho nhân sự Công ty Toàn Trung',
  icons: {
    icon: '/brand/toantrung-app-icon.png',
    shortcut: '/brand/toantrung-app-icon.png',
    apple: '/brand/toantrung-app-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-canvas text-ink subpixel-antialiased">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}


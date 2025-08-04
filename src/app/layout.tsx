// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Portfolio',
  description: 'Muqadus Masood Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Splash&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import './globals.css';

import NavBar from '@/components/navbar';

export const metadata = {
  title: 'Kabir Berger',
  description: 'My website portfolio.',
  icons: {
    icon: '/favicon.svg', // Set the path to your SVG favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <NavBar />
      </body>
    </html>
  );
}

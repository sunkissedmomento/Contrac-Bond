import './globals.css';

export const metadata = {
  title: 'Contrac-Bond',
  description: 'Protect Your Work. Protect Your Worth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}

import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// export const metadata = {
//   title: "Night Club",
//   description: "HAVE A GOOD TIME",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

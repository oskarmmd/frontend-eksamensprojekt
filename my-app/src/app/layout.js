import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
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
        <div className='bg-black text-amber-50'>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <p>p</p>
        <button>button</button>
        </div>
      </body>
    </html>
  );
}

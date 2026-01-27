import './globals.css';

export const metadata = {
  title: 'PINNACLE\'26 | National Level Technical Symposium',
  description: 'Innovate. Compete. Conquer. National Level Technical Symposium by Department of IT, Easwari Engineering College.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

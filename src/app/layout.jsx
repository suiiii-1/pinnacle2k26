import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NoticeBar from '../components/NoticeBar';

export const metadata = {
  title: 'PINNACLE\'26 | National Level Technical Symposium',
  description: 'Innovate. Compete. Conquer. National Level Technical Symposium by Department of IT, Easwari Engineering College.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="relative min-h-screen bg-background text-text">
          <Navbar />
          <NoticeBar />
          <main className="flex flex-col gap-0 pt-0 md:pt-28">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

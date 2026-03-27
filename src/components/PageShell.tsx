import Navbar from '@/components/Navbar'
import EmailCapture from '@/components/EmailCapture'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {children}
        <EmailCapture />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

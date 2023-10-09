import Footer from './components/footer'
import Header from './components/header'

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between font-montserrat">
      <Header />
      <Footer />
    </main>
  )
}

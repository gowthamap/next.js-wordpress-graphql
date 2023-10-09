import Footer from './components/footer'
import Header from './components/header'

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Footer />
    </main>
  )
}

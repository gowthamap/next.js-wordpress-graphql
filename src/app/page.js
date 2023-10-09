import BannerSection from './components/banner'
import Footer from './components/footer'
import Header from './components/header'
import UtilitySection from './components/utility'

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between font-montserrat">
      <Header />
      <BannerSection />
      <UtilitySection />
      <Footer />
    </main>
  )
}

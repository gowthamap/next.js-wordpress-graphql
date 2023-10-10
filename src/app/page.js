import BannerSection from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import RhinoSection from "./components/RhinoSection";
import SavingSection from "./components/savings";
import UtilitySection from "./components/utility";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between font-montserrat overflow-hidden">
      {/* <Header /> */}
      {/* <BannerSection /> */}
      <div className="px-10 lg:px-60">
        <UtilitySection />
      </div>
      <SavingSection classname={""} />
      <RhinoSection classname={""} />
      {/* <Footer /> */}
    </main>
  );
}

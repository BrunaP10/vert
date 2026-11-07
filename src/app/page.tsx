import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import InstitutionalSection from "@/components/InstitutionalSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroBanner />
        <InstitutionalSection />
      </main>
    </>
  );
}

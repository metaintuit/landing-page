import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PartnershipSection from "@/components/partnership-section"
import ProductsSection from "@/components/products-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PartnershipSection />
        <ProductsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

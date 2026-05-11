import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problema from '@/components/Problema'
import Etapas from '@/components/Etapas'
import PorQueEsteOrden from '@/components/PorQueEsteOrden'
import ComoTrabajamos from '@/components/ComoTrabajamos'
import ParaQuienEs from '@/components/ParaQuienEs'
import Resultados from '@/components/Resultados'
import SobreNosotros from '@/components/SobreNosotros'
import CTAContacto from '@/components/CTAContacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problema />
      <Etapas />
      <PorQueEsteOrden />
      <ComoTrabajamos />
      <ParaQuienEs />
      <Resultados />
      <SobreNosotros />
      <CTAContacto />
      <Footer />
    </main>
  )
}

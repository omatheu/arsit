import SlideShow from "../components/SlidesShow"
import StatisticsSlider from "../components/StatisticsSlider";
import ContactForm from "../components/ContactForm";
import WhatsAppBtn from "../components/WhatsappBtn";
import Navbar from "../components/Navbar";
import ProfissionalFields from "../components/ProfissionalFields";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar fixo no topo */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Espaço extra para não ficar atrás do Navbar */}
      <div className="pt-20 flex flex-col justify-center items-center space-y-8">
        <SlideShow />
        <StatisticsSlider />
        <ProfissionalFields/>
        <ContactForm />
      </div>

      {/* Botão flutuante do WhatsApp */}
      <div className="fixed bottom-8 left-8 z-50">
        <WhatsAppBtn
          phoneNumber="551145021422"
          message="Olá, gostaria de mais informações sobre a plataforma K.K. Administradora."
        />
      </div>
    </div>
  );
}



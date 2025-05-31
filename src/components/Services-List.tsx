import React from "react";
import {
  MusicIcon,
  SpeakerIcon,
  LightbulbIcon,
  BarChart3Icon,
  VolumeXIcon,
  ZapIcon,
} from "lucide-react";
export function ServicesList() {
  const services = [
    {
      icon: MusicIcon,
      title: "Basic",
      description: "Plano basico para baixos orçamentos",
      features: [
        "Playlists Personalizadas",
        "Mixagem ao Vivo",
        "1 Caixa de som",
        "Sem pista de dança",
      ],
      price: "399,90",
    },
    {
      icon: BarChart3Icon,
      title: "Vip Music",
      description:
        "Análise precisa do ambiente e monitoramento em tempo real dos níveis sonoros para garantir uma experiência de áudio impecável, sem distorções e dentro das normas técnicas.",
      features: [
        "Monitoramento de Níveis de Som (SPL)",
        "Análise de Frequências",
        "Tratamento e Leitura Acústica do Ambiente",
        "Conformidade com Normas de Ruído",
      ],
      price: "690,90",
    },
    {
      icon: ZapIcon,
      title: "Prime Fest",
      description:
        "Iluminação de alto impacto para transformar seu evento em uma experiência inesquecível. Tecnologia de ponta com design moderno e efeitos visuais surpreendentes.",
      features: [
        "Canhões de luz LED de alta potência",
        "Pista de LED interativa com controle de cores",
        "Painéis de TV/monitores para ambientação e conteúdo visual",
        "Moving heads com efeitos programáveis",
        "Controladora DMX para sincronização de luzes",
        "Design de iluminação personalizado para o espaço do evento",
      ],
      price: "1399,90",
    },
  ];
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-orange-500">Serviços</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            De apresentações profissionais de DJs a medições precisas de som e
            luz, oferecemos excelência em todos os aspectos do entretenimento
            audiovisual.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              key={index}
              className="bg-black border border-orange-500/20 rounded-xl p-8 hover:border-orange-500/40 transition-colors flex flex-col justify-between"
            >
              {/* CONTEÚDO SUPERIOR */}
              <div>
                <div className="bg-orange-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-orange-500 flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTEÚDO FIXO NO FINAL */}
              <div className="mt-8 text-center">
                <h3 className="text-3xl font-bold text-white ">
                  $ {service.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { TrophyIcon, UsersIcon, ClockIcon, StarIcon } from "lucide-react";
export function About() {
  const stats = [
    {
      icon: TrophyIcon,
      number: "100+",
      label: "Eventos Realizados",
    },
    {
      icon: UsersIcon,
      number: "2K+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: ClockIcon,
      number: "10+",
      label: "Anos de Experiência",
    },
    {
      icon: StarIcon,
      number: "5.0",
      label: "Avaliação Média",
    },
  ];
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre <span className="text-orange-500">Andreas Manfredi</span>
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-xl text-gray-400 mb-6 leading-relaxed"
            >
              Com mais de 10 anos de experiência no mundo do entretenimento,
              somos especialistas em transformar eventos em experiências
              inesquecíveis — unindo mixagens profissionais, medição sonora de
              alta precisão e soluções de iluminação criativas.
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="2500"
              className="text-xl text-gray-400 mb-8 leading-relaxed"
            >
              Nosso time une expertise técnica com uma visão artística para
              entregar eventos únicos e envolventes. De encontros íntimos a
              grandes produções, cuidamos de cada detalhe para garantir impacto
              máximo e excelência do início ao fim.
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Saiba Mais
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                key={index}
                className="bg-gray-900 border border-orange-500/20 rounded-xl p-6 text-center"
              >
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

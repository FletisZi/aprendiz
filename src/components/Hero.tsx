import React from "react";
import { PlayIcon, ArrowRightIcon } from "lucide-react";

export function Hero() {
  const handleClick = () => {
    window.location.href = "/sobre";
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black"
    >
      {/* <div className="absolute inset-0">
        <img src="/476967257_649236587637728_4798657627705124353_n.jpg" alt="Professional DJ at work" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div> */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-60"
          src="/public/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1
            data-aos="fade-left"
            data-aos-duration="1500"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Transforme sua festa em um
            <span className="block text-orange-500"> espetáculo!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Música de alto nível, iluminação de tirar o fôlego e som
            profissional para criar momentos inesquecíveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <PlayIcon className="h-5 w-5" />
              <span>Get Started</span>
            </button>
            <button
              onClick={handleClick}
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>View Services</span>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

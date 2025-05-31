import React from "react";
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from "lucide-react";
export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Chama no <span className="text-orange-500">Som</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pronto para transformar seu evento em uma experiência inesquecível?
            Entre em contato conosco para uma consulta e vamos criar algo
            extraordinário juntos.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-2xl font-bold text-white mb-8"
            >
              Informações de contato
            </h3>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-400">+55 (17) 91111-1111</div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="flex items-center space-x-4"
              >
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MailIcon className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">info@djandreas.com</div>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="flex items-center space-x-4"
              >
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <div className="text-white font-semibold">Localização</div>
                  <div className="text-gray-400">Monte Azul Pta., SP</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div data-aos="fade-left" data-aos-duration="1500">
                  <label className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-orange-500/20 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div data-aos="fade-left" data-aos-duration="1500">
                  <label className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black border border-orange-500/20 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="1500">
                <label className="block text-white font-semibold mb-2">
                  Event Type
                </label>
                <select className="w-full bg-black border border-orange-500/20 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors">
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Private Party</option>
                  <option>Nightclub</option>
                  <option>Other</option>
                </select>
              </div>
              <div data-aos="fade-left" data-aos-duration="1500">
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-black border border-orange-500/20 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>
              <button
                data-aos="fade-left"
                data-aos-duration="1500"
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <SendIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

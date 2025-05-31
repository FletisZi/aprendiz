import React from 'react';
import { MusicIcon, FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-black border-t border-orange-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MusicIcon className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">DJ Pro</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional DJ services, sound measurement, and lighting
              solutions for unforgettable events and experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-orange-500/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-orange-500/20 transition-colors">
                <FacebookIcon className="h-5 w-5 text-orange-500" />
              </a>
              <a href="#" className="bg-orange-500/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-orange-500/20 transition-colors">
                <TwitterIcon className="h-5 w-5 text-orange-500" />
              </a>
              <a href="#" className="bg-orange-500/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-orange-500/20 transition-colors">
                <InstagramIcon className="h-5 w-5 text-orange-500" />
              </a>
              <a href="#" className="bg-orange-500/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-orange-500/20 transition-colors">
                <YoutubeIcon className="h-5 w-5 text-orange-500" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  DJ Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Sound Measurement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Light Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Event Planning
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-orange-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-orange-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 DJ Pro. All rights reserved. Professional DJ and
            Audio-Visual Services.
          </p>
        </div>
      </div>
    </footer>;
}
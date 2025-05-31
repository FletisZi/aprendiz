import React from "react";
import { Header } from "../components/Header";

import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";
import { ServicesList } from "../components/Services-List";

function Sobre() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <ServicesList />
      <Contact />
      <Footer />
    </div>
  );
}

export default Sobre;

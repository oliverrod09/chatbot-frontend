import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <section className="pt-24 bg-white">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Comienza</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-blue-300 to-cl_main lg:inline">
                a utilizar nuestro chatbot
              </span>{" "}
              <span>para ayudar y guiar con las ISOS</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Obtén asistencia personalizada sobre las ISOS con nuestro chatbot
              inteligente. Te brindará información y guía sobre los estándares y
              normas internacionales.
            </p>
            <div className="mb-4 flex flex-col md:flex-row gap-2 justify-center md:mb-8">
              <Link
                to={"/login"}
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-cl_main rounded-2xl sm:w-auto sm:mb-0"
              >
                Empezar
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                </svg>
              </Link>
              <Link
                to={"/"}
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
              >
                Más información
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center flex-none px-4 bg-blue-400 rounded-b-none h-11 rounded-xl">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 border-2 bg-red-500 border-white rounded-full"></div>
                    <div className="w-3 h-3 border-2 bg-green-500 border-white rounded-full"></div>
                    <div className="w-3 h-3 border-2 bg-yellow-500 border-white rounded-full"></div>
                  </div>
                </div>
                <img src="/img/home1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-16">
          <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
            <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 flex flex-col justify-between">
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold text-cl_main">
                    ISO (Organización Internacional de Normalización)
                  </h3>
                  <p className="mb-6">
                    Las normas ISO son un conjunto de estándares internacionales
                    que abarcan diversas áreas y disciplinas. Estas normas se
                    utilizan en todo el mundo para garantizar la calidad, la
                    seguridad, la sostenibilidad y la eficiencia en diferentes
                    sectores y procesos. Nuestro chatbot te proporcionará
                    información y orientación sobre las normas ISO relevantes
                    para tu industria, ayudándote a comprender sus requisitos y
                    a implementar prácticas que cumplan con los estándares
                    internacionales.
                  </p>
                  <a href="#" className="block font-medium text-cl_main">
                    Saber más
                  </a>
                </div>
                <img
                  src="/svg/sec1.svg"
                  className="w-2/3 ml-auto -mb-12"
                  alt="ilustración"
                  loading="lazy"
                  width="900"
                  height="600"
                />
              </div>
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 flex flex-col justify-between">
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold text-cl_main">
                    Beneficios de cumplir con las normas ISO
                  </h3>
                  <p className="mb-6">
                    Cumplir con las normas ISO tiene numerosos beneficios para
                    las organizaciones. Estos beneficios incluyen la mejora de
                    la calidad de los productos y servicios, el aumento de la
                    satisfacción del cliente, la optimización de los procesos,
                    la reducción de los riesgos y la mejora de la imagen y la
                    reputación de la organización. Nuestro chatbot te
                    proporcionará información detallada sobre los beneficios
                    específicos de implementar las normas ISO en tu empresa.
                  </p>
                  <a href="#" className="block font-medium text-cl_main">
                    Saber más
                  </a>
                </div>
                <img
                  src="/svg/sec2.svg"
                  className="w-2/3 ml-auto"
                  alt="ilustración"
                  loading="lazy"
                  width="900"
                  height="600"
                />
              </div>
              <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 flex flex-col justify-between">
                <div className="mb-12 space-y-4">
                  <h3 className="text-2xl font-semibold text-cl_main">
                    Implementación exitosa de las normas ISO
                  </h3>
                  <p className="mb-6">
                    La implementación exitosa de las normas ISO requiere un
                    enfoque estratégico y sistemático. Nuestro chatbot te guiará
                    a través del proceso de implementación, proporcionándote
                    consejos y mejores prácticas para cumplir con los requisitos
                    de las normas ISO de manera efectiva. Aprenderás sobre la
                    documentación necesaria, la capacitación del personal, las
                    auditorías internas y otros aspectos clave para lograr una
                    implementación exitosa.
                  </p>
                  <a href="#" className="block font-medium text-cl_main">
                    Saber más
                  </a>
                </div>
                <img
                  src="/svg/sec3.svg"
                  className="w-2/3 ml-auto"
                  alt="ilustración"
                  loading="lazy"
                  width="900"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;

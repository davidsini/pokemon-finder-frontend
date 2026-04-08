import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex grow flex-col items-center justify-center px-6 py-20">
        <section className="max-w-3xl rounded-2xl border-4 border-red-600 bg-white p-8 shadow-2xl">
          <h1 className="mb-6 text-center text-xl font-bold text-black md:text-3xl">
            Acerca de
          </h1>

          <div className="text-md space-y-6 leading-relaxed text-gray-700 md:text-lg">
            <p>
              <span className="font-bold text-red-600">Pokémon Finder</span> es
              una herramienta diseñada para entrenadores que desean consultar
              datos rápidos y precisos sobre sus criaturas favoritas.
            </p>

            <div className="rounded-lg border-l-4 border-yellow-400 bg-gray-100 p-4">
              <h2 className="mb-2 text-xl font-bold text-black">
                ¿Cómo funciona?
              </h2>
              <p>
                Utiliza la{" "}
                <a
                  href="https://pokeapi.co/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  PokeAPI
                </a>{" "}
                para obtener información en tiempo real sobre estadísticas,
                tipos y habilidades de cientos de Pokémon.
              </p>
            </div>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-black">
                Tecnologías utilizadas
              </h2>
              <ul className="grid grid-cols-2 gap-2 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>{" "}
                  React.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>{" "}
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-500"></span>{" "}
                  React Router
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>{" "}
                  LocalStorage API
                </li>
              </ul>
            </section>

            <p className="border-t border-gray-200 pt-6 text-center">
              Proyecto final del bootcamp de Desarrollo Web con enfoque en APIs
              REST, manejo de React y despliegue de sitios web.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

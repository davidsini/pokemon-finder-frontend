import logoDePokemon from "../images/pokemon-full-logo.png";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-5 bg-red-800 p-6 md:flex-row md:gap-0 md:p-10">
      <div className="flex flex-col items-center justify-center md:content-around">
        <img src={logoDePokemon} className="w-50"></img>
        <h2 className="font-pokemon text-center text-4xl font-bold tracking-wider">
          Finder
        </h2>
      </div>
      <p className="text-center text-xs text-white! md:text-left md:text-sm">
        © Dēivid Sans 2026. Todos los derechos reservados.
      </p>
    </footer>
  );
}

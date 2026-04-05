import logoDePokemon from "../images/pokemon-full-logo.png";
import tripleTenLogo from "../images/tripleten-logo.png";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-5 bg-red-800 p-6 md:flex-row md:gap-0 md:p-4">
      <div className="flex flex-col divide-y divide-amber-50 *:p-5 md:flex-row md:divide-x md:divide-y-0">
        <div>
          <img src={logoDePokemon} className="w-50"></img>
          <h2 className="font-pokemon text-center text-4xl font-bold tracking-wider">
            Finder
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start">
          <h3 className="">Un proyecto de</h3>
          <img src={tripleTenLogo} className="w-40"></img>
        </div>
      </div>
      <p className="text-center text-xs text-white! md:text-left md:text-sm">
        © Dēivid Sans {new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  );
}

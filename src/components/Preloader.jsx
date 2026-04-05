import loadingIcon from "../images/loading_icon_alpha.gif";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-red-800">
      <img src={loadingIcon} className="w-40" />
      <p className="mt-4 animate-pulse font-bold text-white!">
        Cargando Pokédex...
      </p>
    </div>
  );
}

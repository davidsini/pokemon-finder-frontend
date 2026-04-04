export default function Card() {
  return (
    <article className="align-center flex min-h-100 w-full flex-col items-center justify-center gap-5">
      <p className="font-bod text-center">Resultados de tu búsqueda:</p>
      <div className="grid min-h-100 w-9/10 grid-cols-4 gap-4 rounded-xl bg-[#f7f7f7] p-2 text-black shadow-lg *:rounded-2xl md:grid-rows-4">
        <div className="col-span-4 bg-white md:col-span-2 md:row-span-4">
          01
        </div>
        <div className="col-span-2 bg-white md:col-span-2 md:row-span-2">
          02
        </div>
        <div className="col-span-2 bg-white md:col-span-2 md:row-span-2">
          03
        </div>
      </div>
    </article>
  );
}

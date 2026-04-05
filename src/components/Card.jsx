export default function Card({ data }) {
  const { name, height, weight, sprites, base_experience, cries, order } = data;

  return (
    <article className="align-center flex min-h-100 w-full flex-col items-center justify-center gap-5">
      <p className="font-bod text-center">Resultados de tu búsqueda:</p>
      <div className="grid min-h-100 w-9/10 max-w-200 grid-cols-4 items-center gap-4 rounded-xl bg-[#f7f7f7] p-2 text-black shadow-lg *:rounded-2xl">
        <div className="col-span-4 bg-white md:col-span-2 md:row-span-4">
          <img
            src={sprites.front_default}
            alt="Imagen de tu Pokémon"
            className="w-full"
          ></img>
        </div>
        <div className="col-span-4 bg-white p-3 md:col-span-2 md:row-span-1">
          <h3>Nombre:</h3>
          <p>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</p>
        </div>
        <div className="col-span-2 bg-white p-3 md:col-span-1 md:row-span-1">
          <h3>Altura:</h3>
          <p>{height * 10} cm</p>
        </div>
        <div className="col-span-2 bg-white p-3 md:col-span-1 md:row-span-1">
          <h3>Peso:</h3>
          <p>
            {weight >= 100 ? weight * 100 : weight / 10}
            {weight >= 100 ? " kg" : " g"}
          </p>
        </div>
        <div className="col-span-2 bg-white p-3 md:col-span-1 md:row-span-1">
          <h3>Experiencia base:</h3>
          <p>{base_experience}</p>
        </div>
        <div className="col-span-2 bg-white p-3 md:col-span-1 md:row-span-1">
          <h3>Orden:</h3>
          <p>{order}</p>
        </div>
        <div className="col-span-4 bg-white p-3 md:col-span-2 md:row-span-1">
          <h3>Grito:</h3>
          <audio className="max-w-9/10" controls src={cries.latest}></audio>
        </div>
      </div>
    </article>
  );
}

import GamePlayersZone from "./GamePlayersZone";

const Works = () => {
  return (
    <main className=" text-white w-full grid gap-4">
      <h2 className="text-center text-4xl text-primary ">
        <span className="text-[#C778DD]">#</span>
        <span className="text-white">My_Works</span>
      </h2>

      <section className="relative w-full ">

          <div className="absolute right-0 top-1/2 -translate-y-1/2 outline-dashed outline-2 w-3/5 h-20 bg-lime-300 opacity-100 flex items-center justify-center">
            <a
              className="hover:text-[#C778DD]"
              target="_blank"
              href="https://app-spacecuriosities-lukasmoyano.netlify.app/"
            >
              <span className="text-[#aC778DD] font">@</span>
              <span className="font-bold"> Space Curiosities- </span>
            </a>

          <div>
            <button
              className="hover:text-[#C778DD]"
              target="_blank"
              href="https://github.com/LukasMoyano/CuriosidadesDelEspacio"
            ></button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 content-normal place-self-end outline-dashed outline-yellow-200 outline-2 w-3/4 h-40 ">
          <div className="container mx-auto flex items-center justify-between">
            <img
              src="/spacecuriosities_001.png"
              className="h-full object-contain"
            />
            <img
              src="/spacecuriosities_002.png"
              className="h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-blue-500">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 outline-dashed outline-yellow-200 outline-2 w-3/5 h-20 bg-[#6366f1]">
          <a
            className="hover:text-[#C778DD]"
            target="_blank"
            href="https://lukasmoyano-weatherapp.netlify.app/"
          >
            <h1>Weather App</h1>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 content-normal place-self-end outline-dashed outline-yellow-200 outline-2 w-3/4 h-40">
          <div className="container mx-auto flex items-center justify between">
            <img
              src="/weatherapp_Screenshot001.png"
              alt="Weather App Screenshot 1"
            />
            <img
              src="/weatherapp_Screenshot002.png"
              alt="Weather App Screenshot 2"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full ">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 outline-dashed outline- outline-2 w-3/5 h-20 bg-amber-400">
          <a
            className="hover:text-[#C778DD]"
            target="_blank"
            href="https://pokedex-app-lukasmoyano.netlify.app/"
          >
            <h1>APP Pokedex -APIs-</h1>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 content-normal place-self-end outline-dashed outline-yellow-200 outline-2 w-3/4 h-40">
          <div className="container mx-auto flex items-center justify-between">
            <img src="/Screenshot at 2023-09-07 15-30-57.png" />
            <img src="/Screenshot at 2023-09-07 15-30-33.png" />
          </div>{" "}
        </div>
      </section>

      <section className="relative grid w-full bg-blue-500 ">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 outline-dashed outline-yellow-200 outline-2 w-3/5 h-20 bg-purple-500 ">
          <a
            target="_blank"
            href="https://lukasmoyano-inputscrudsymetodoshttp.netlify.app"
          >
            <h1>Cotrol InPuts - CRUDs - HTTP Methos</h1>
          </a>
        </div>
        <div className="place-self-end outline-dashed outline-yellow-200 outline-2 w-3/4 h-40">
          {/* <img src="/src/assets/SpaceCuriosities.png"/> */}
        </div>
      </section>

      <section>
        <a target="_blank" href="">
          <h1></h1>
        </a>
      </section>

      <article>
        <selection>
          <GamePlayersZone />
        </selection>
      </article>
    </main>
  );
};

export default Works;

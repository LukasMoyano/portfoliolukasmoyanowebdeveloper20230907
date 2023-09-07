import GamePlayersZone from "./GamePlayersZone";

const Works = () => {
  return (
    <main className="bg-red-500 text-white w-full grid gap-4">
      <h1 className="text-center">My Works</h1>
      <section className="relative w-full bg-blue-500 ">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-500 w-3/5 h-20 ">
          <a
            target="_blank"
            href="https://app-spacecuriosities-lukasmoyano.netlify.app/"
          >
            Space Curiosities
          </a>
        </div>
        <div className=" bg-yellow-500 w-3/4 h-40">
          {/* <img src="/src/assets/SpaceCuriosities.png"/> */}
        </div>
      </section>
      <section className="relative grid w-full bg-blue-500 ">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-500 w-3/5 h-20 ">
          <a target="_blank" href="https://lukasmoyano-weatherapp.netlify.app/">
            <h1>Weather App</h1>
          </a>
        </div>

        <div className="place-self-end bg-yellow-500 w-3/4 h-40">
          {/* <img src="/src/assets/SpaceCuriosities.png"/> */}
        </div>
      </section>

      <section>
        <a
          target="_blank"
          href="https://lukasmoyano-inputscrudsymetodoshttp.netlify.app"
        >
          <h1>Cotrol InPuts - CRUDs - HTTP Methos</h1>
        </a>
      </section>

      <section>
        <div>
          <a
            target="_blank"
            href="https://pokedex-app-lukasmoyano.netlify.app/"
          >
            <h1>APP Pokedes -APIs-</h1>
          </a>
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
Works;

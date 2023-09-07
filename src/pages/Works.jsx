import GamePlayersZone from "./GamePlayersZone";

const Works = () => {
  return (
    <main className=" text-white w-full grid gap-4">
<h2 className="text-center text-2xl text-primary ">
  <span class="text-[#C778DD]">#</span>
  <span class="text-white">My_Works</span>
</h2>
      <section className="relative w-full ">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 outline-dashed outline- outline-2 w-3/5 h-20 ">
          <a target="_blank" href="https://app-spacecuriosities-lukasmoyano.netlify.app/"> 
          <span>@</span>-Space Curiosities-</a><span>@</span>
        </div>
        <div className="place-self-end outline-dashed outline-yellow-200 outline-2 w-3/4 h-40">
          
          {/* <img src="/src/assets/SpaceCuriosities.png"/> */}
        </div>
      </section>

      <section className="relative grid w-full bg-blue-500 ">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 outline-dashed outline-yellow-200 outline-2 w-3/5 h-20 ">
          <a target="_blank" href="https://lukasmoyano-weatherapp.netlify.app/">
            <h1>Weather App</h1>
          </a>
        </div>
        <div className="place-self-end outline-dashed outline-yellow-200 outline-2 w-3/4 h-40">
          {/* <img src="/src/assets/SpaceCuriosities.png"/> */}
        </div>
      </section>


      <section className="relative w-full bg-blue-500 ">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-500 w-3/5 h-20 ">
          <a target="_blank" href="https://lukasmoyano-inputscrudsymetodoshttp.netlify.app">
            <h1>Cotrol InPuts - CRUDs - HTTP Methos</h1>
          </a>
        </div>
        <div className="place-self-end outline-dashed outline-yellow-200 outline-2 w-3/4 h-40">
          {/* <img src="/src/assets/SpaceCuriosities.png"/> */}
        </div>
      </section>



      <section className="relative grid w-full bg-blue-500 ">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-500 w-3/5 h-20 ">
          <a target="_blank" href="https://pokedex-app-lukasmoyano.netlify.app/">
            <h1>APP Pokedes -APIs-</h1>
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
Works;

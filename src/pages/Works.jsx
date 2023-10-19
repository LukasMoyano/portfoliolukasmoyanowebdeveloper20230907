import GamePlayersZone from "./GamePlayersZone";

const Works = () => {
  return (
    <main className=" text-white w-full grid gap-4">
      <h2 className="text-center text-4xl text-primary ">
        <span className="text-[#C778DD]">#</span>
        <span className="text-white">My_Works</span>
      </h2>

      <section className="relative w-full ">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 outline-dashed outline- outline-2 w-3/5 h-20 bg-purple-500 opacity-50 ">
          <a
            nameClass="hover:text-[#C778DD]"
            target="_blank"
            href="https://app-spacecuriosities-lukasmoyano.netlify.app/"
          >
            <span class="text-[#C778DD] font">@</span>
            <span class="font-bold"> Space Curiosities- </span>
          </a>
          <div>
            <button
              nameClass="hover:text-[#C778DD]"
              target="_blank"
              href="https://github.com/LukasMoyano/CuriosidadesDelEspacio"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z"
                  fill="#ABB2BF"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 content-normal place-self-end outline-dashed outline-yellow-200 outline-2 w-3/4 h-40 ">
          <div className="container mx-auto flex items-center justify-between">
            <img src="/spacecuriosities_001.png" className="h-full object-contain" />
            <img src="/spacecuriosities_002.png" className="h-full object-contain" />
          </div>
        </div>

      </section>

      <section className="relative grid w-full bg-blue-500 ">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 outline-dashed outline-yellow-200 outline-2 w-3/5 h-20 bg-purple-500 opacity-50">
          <a target="_blank" href="https://lukasmoyano-weatherapp.netlify.app/">
            <h1>Weather App</h1>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 content-normal place-self-end outline-dashed outline-yellow-200 outline-2 w-3/4 h-40">
          <div className="container mx-auto flex items-center justify-between">
            <img src="/weatherapp_Screenshot001.png" />
            <img src="/weatherapp_Screenshot002.png" />
          </div>{" "}
        </div>
      </section>


      <section className="relative w-full ">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 outline-dashed outline- outline-2 w-3/5 h-20 bg-purple-500 opacity-50">
          <a
            nameClass="hover:text-[#C778DD]"


            target="_blank"
            href="https://pokedex-app-lukasmoyano.netlify.app/">
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
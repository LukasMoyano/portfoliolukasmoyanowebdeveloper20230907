const Home = () => {
  return (
    // Sección principal que contiene la estructura de la página principal
    <main className="min-[100px]:mt-10 ">
      {/* Sección de artículos */}
 {/* Título principal */}
 <h1 className="md:w-[50%] text-3xl font-bold mb-4 text-white text-center">
          <a>Lukas Moyano</a>
          <span className="text-purple-500"> Visual Artist</span> &
          <span className="text-purple-500"> Full Stack Web Developer</span>
        </h1>

      <article>
       

        {/* Sección flexible con diseño de fila en pantallas medianas y grandes */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Sección izquierda con imagen */}
          <section className="md:w-[50%]">
            {/* Contenedor de la imagen con efecto de escala al hacer hover */}
            <div className="border-withe border-4 rounded-xl bg-[url(/BackgroundHome001.png)] md:w-full bg-cover bg-center relative hover:scale-95 transition-all">
              {/* Imagen */}
              <img
                src="../IMG_0440_01.png"
                alt="Image"
                className="hover:scale-115 transition-all w-full"
              />
            </div>
          </section>

          <section className="md:w-[50%] text-white px-2 p-4 content-around">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Perfect Solution for Your Business
            </h2>
            <p className="">
              Explore a visionary approach tailored to elevate your business.
              From cutting-edge Ecommerce Website Development to captivating
              multimedia content creation, I can employs diverse methods and
              capabilities to deliver exceptional results.
            </p>

            <section className="mt-2 px-2">
              <ul className=" flex flex-wrap p-4 ml-2">
                <li className="md:w-[50%] mb-2">
                  <strong className="text-purple-500">Design:</strong> Immerse
                  yourself in the artistry of UI/UX design, where I craft
                  mockups using various tools, technologies, and effects to
                  bring creative visions to life.
                </li>
                <li className="md:w-[50%] mb-4">
                  <strong className="text-purple-500">Skills:</strong> Evolve
                  with us. Our dynamic team continually enhances their skills,
                  understanding that greatness is achieved through
                  collaboration.
                </li>
                <li className="md:w-[50%] mb-4">
                  <strong className="text-purple-500">Experience:</strong>{" "}
                  Benefit from our extensive experience and best practices,
                  ensuring the implementation of projects at a consistently high
                  level.
                </li>
                <li className="md:w-[50%] mb-4">
                  <strong className="text-purple-500">Warranty:</strong> Rest
                  easy with our commitment. We provide a warranty period and
                  gladly fix any issues at no cost.
                </li>
              </ul>
            </section>
          </section>
        </div>
      </article>
    </main>
  );
};

export default Home;

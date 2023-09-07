import React from 'react';

const Home = () => {
  return (
    <main className='min-[500px]:mt-52'>

      <article className="flex flex-col min-[500px]:flex-row ">


            {/* Imagen encima de Perfil */}
        <section className="md:flex">
         <div className="border-withe border-4 rounded-xl bg-[url(/src/assets/BackgroundHome001.png)] md:w-2/2 bg-cover bg-center relative hover:scale-95 transition-all ">
            <img
              src="/src/assets/IMG_0440_01.png"
              alt="Image"
              className="hover:scale-115 transition-all w-full"/>
          </div>
        </section>

        <section className=" text-white p-4">
          <h1 className="text-3xl font-bold">
            Lukas Moyano is a{" "}
            <span className="text-purple-500">Visual Artist</span> and{" "}
            <span className="text-purple-500">Full Stack Web developer</span>
          </h1>
          <h2>
            He crafts responsive websites where technologies meet creativity
          </h2>
        </section>

      </article>

    </main>
  );
};

export default Home;
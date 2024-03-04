import { useRef, useState } from 'react';
import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import Image from 'next/image';
import soyHenry_logo from '@/assets/images/soyHenry-logo.webp';
import utn_logo from '@/assets/images/utn-logo.webp';
import waiter_bg from '@/assets/images/bg-image-waiter.webp';

import workExperience from '@/data/workExperience.json';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Experience = () => {
  const { engLanguageActive } = useStore();
  const [visibility, setVisibility] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  const changeVisibility = () => {
    boxRef.current?.classList.toggle('content-available');
    setVisibility(!visibility);
  };

  return (
    <>
      <section className='shadow-[14px_30px_20px_-10px_#0000004f] py-20 bg-white  w-full lg:w-[80%] lg:rounded-lg'>
        <h1
          className='text-3xl [letter-spacing:15px] text-[#313131be] text-center'
          style={roboto.style}>
          {engLanguageActive ? 'WORK EXPERIENCE' : 'EXPERIENCIA LABORAL'}💼
        </h1>

        <div className='m-[0_auto] gap-32 mt-40 w-[90%] border-l-4 border-[#6161619b] flex flex-col justify-around items-center relative work-experience-container z-10 lg:w-[80%]'>
          <div className='absolute left-[-1em] flex gap-4 justify-center bottom-[9em] w-52 h-44 bg-white text-6xl font-black z-50 text-light-500 pt-10'>
            <span className='animate-[loading_1s_linear_infinite]'>.</span>
            <span className='animate-[loading_1s_linear_infinite] [animation-delay:200ms]'>
              .
            </span>
            <span className='animate-[loading_1s_linear_infinite] [animation-delay:400ms]'>
              .
            </span>
          </div>
          {workExperience.map((item, key) => (
            <article
              key={key}
              className='relative w-full flex justify-around  items-start text-black before:absolute before:w-8 before:h-8 before:rounded-full before:bg-light-800 before:left-[-1em] before:top-0'>
              <div className='flex flex-col items-center'>
                <h1 className='font-bold text-light-500 text-center w-full text-2xl'>
                  {item.company}
                </h1>
                <h2 className='text-xl text-[#6565fbcf]'>
                  {engLanguageActive ? item.position[0] : item.position[1]}
                </h2>
                <span className='text-sm text-[#373737be] font-medium'>
                  {item.date}
                </span>
              </div>
              <p className='w-[20em] text-lg text-[#373737c4] font-semibold'>
                {engLanguageActive
                  ? item.tasks_description[0]
                  : item.tasks_description[1]}
              </p>
            </article>
          ))}
        </div>
        <article className='flex flex-col items-center self-center mt-32 w-[80%] m-[0_auto]'>
          <h1 className='text-[#333333ac] text-2xl font-extrabold text-center'>
            Detalles de mi experiencia
          </h1>
          <div className='pl-3  mt-6 font-semibold text-[#45454590]'>
            <p>
              {engLanguageActive
                ? `It's not a loading error 😆 Not yet, but that coveted web developer position is on its way. Well, even though it's not related to the IT field, I spent 11 years working in the gastronomy area. Which, on a personal level, gave me many tools and skills that are necessary in any work environment and for everyday life.`
                : 'No es un error de carga 😆 Aún no, pero ya va a llegar ese tan ansiado puesto de desarrollador web. Bueno, aunque no está relacionado con el área de IT, pasé 11 años trabajando en el área de gastronomía. Lo cual, a nivel personal, me dio muchas herramientas y habilidades que son necesarias en cualquier entorno laboral y para la vida cotidiana.'}
            </p>
            <p className='mt-1'>
              {engLanguageActive
                ? `As you can see, there is a temporary gap that I decided not to delve into because it was more of the same and did not contribute any relevant information. Currently, I am 100% focused and committed to my training as a developer.`
                : 'Como verán, hay un bache temporal el cual decidí no profundizar porque era más de lo mismo y no aportaba ningún dato relevante. Actualmente estoy 100% enfocado y comprometido en mi formación como desarrollador.'}
            </p>
          </div>
          <button
            className='mt-10 font-bold text-light-800 border-2 border-[#4df672] p-[0.8em_2em] flex w-max  relative hover:text-white hover:z-10  after:absolute after:left-[50%] after:rounded-[2em] after:bottom-0 after:w-0 after:h-full after:bg-light-800 after:-z-10 rounded-[2em] hover:after:left-[0%] hover:after:w-[100%] active:outline active:outline-2 active:outline-light-600 hover:after:duration-[400ms] hover:translate-y-[-0.3em] hover:shadow-[0px_8px_7px_#00000049] duration-300 outline-none'
            onClick={changeVisibility}>
            {visibility
              ? engLanguageActive
                ? 'Read more 😁'
                : 'Leer mas 😁'
              : engLanguageActive
              ? 'Hide'
              : 'Ocultar'}
          </button>

          <div ref={boxRef} className='[display:none]'>
            <h1 className=' text-3xl font-extrabold text-center text-[#454545b9]'>
              Conclusión
            </h1>
            <p className='px-3 text-lg font-semibold text-[#45454590]'>
              {engLanguageActive
                ? `Firstly, I understood that being a waiter is not the future I want for my life. This motivated me to dedicate all my effort, passion, and energy to my training in technology. I am a very determined and ambitious person when I set a goal for myself, so I know that I can bring a lot of value to any company.`
                : 'En primer lugar, comprendí que ser mozo no es el futuro que quiero para mi vida. Esto me motivó a dedicar todo mi esfuerzo, pasión y energía a mi formación en tecnología. Soy una persona muy determinada y ambiciosa cuando me propongo una meta, por eso sé que puedo aportar mucho valor a cualquier empresa.'}
            </p>
            <div className='bg-[#f7f7f7] border-[1px] border-light-600 p-8 mt-4 rounded-md font-semibold text-[#45454590]'>
              <p>
                {engLanguageActive
                  ? `From this experience, I can highlight some benefits:`
                  : 'De esta experiencia, puedo descatar algunos beneficios :'}
              </p>
              <li className='list-disc marker:text-light-800 flex flex-col items-start gap-4'>
                <li className='ml-4 pr-8 mt-8'>
                  {engLanguageActive
                    ? `The ability to tolerate work under pressure is essential, as the job of a waiter involves constant demands and pressure, which is also applicable to the IT sector.`
                    : 'capacidad para tolerar el trabajo bajo presión es esencial, ya que el trabajo de mozo implica exigencia y presión constantes, lo cual también es aplicable a sector IT.'}
                </li>
                <li className='ml-4 pr-8 '>
                  {engLanguageActive
                    ? `Interpersonal skills that allow me to adapt to any work environment and team without difficulty.`
                    : 'habilidades interpersonales que me permiten adaptarme a cualquier entorno laboral y equipo de trabajo sin dificultades.'}
                </li>
                <li className='ml-4 pr-8 '>
                  {engLanguageActive
                    ? `Problem-solving skills while maintaining composure. Although both sectors involve teamwork, sometimes one must know how to handle oneself in adverse situations.`
                    : 'capidad resolutiva de problemas manteniendo la templanza. A pesar que en ambos sectores se trabaja en equipo, a veces uno mismo debe saber como manejarse en situaciones adversas.'}
                </li>
                <li className='ml-4 pr-8 '>
                  {engLanguageActive
                    ? `And the most important one... discovering my passion and love for technology. I can spend hours and hours immersing myself more and more and always wanting to learn more.`
                    : 'y las mas importante ... descubrir mi pasión y amor por la tecnologia. Puedo pasar horas y horas sumergiendome más y más y siempre querer aprender más.'}
                </li>
              </li>
            </div>
          </div>
        </article>
      </section>

      <section className='bg-white py-28 flex flex-col items-center gap-28'>
        <header className='max-[950px]:top-[-2em] flex flex-col items-center '>
          <h1
            className='text-4xl [letter-spacing:15px] text-[#313131be] text-center'
            style={roboto.style}>
            {engLanguageActive ? 'STUDIES' : 'ESTUDIOS'}👨‍🎓
          </h1>
          <p className='w-[50%] border-l-8 border-light-800 bg-[#f7f7f7] pl-4 pr-2 py-6 mt-6 font-semibold text-[#686868]'>
            Comenzé mi inmersión en el mundo de la programación hace 2 años,
            primero con mucha curiosidad y sin un rumbo. Pero poco a poco,
            entendiendo como funcionan todas sus partes en conjunto. Con el
            tiempo, gracias a mi necesidad y ganas de aprender más, desarrollé
            la habilidad de ser autodidacta.
          </p>
        </header>
        <div className='flex justify-around w-full items-end z-10 relative before:absolute before:rounded-[50%] before:left-[5%] before:bottom-6 before:w-[90%] before:h-1 before:bg-[#373737] before:-z-10 max-[950px]:flex-col max-[950px]:items-center max-[950px]:h-[auto] max-[950px]:before:[display:none] max-[950px]:after:absolute max-[950px]:after:right-[13%] max-[950px]:after:h-[80%] max-[950px]:after:w-1 max-[950px]:after:top-[15%] max-[950px]:after:bg-[#373737] max-[950px]:after:-z-10 max-[650px]:gap-20 max-[700px]:after:right-[14%]'>
          <article className='max-[950px]:h-[20em] max-[950px]:flex-row  max-[950px]:w-[80%]  h-[25em] w-[16em] flex justify-between  items-center flex-col'>
            <div className='max-[950px]:w-[70%] gap-4 flex flex-col justify-around items-center'>
              <h1 className='text-lg font-black'>Soy Henry</h1>
              <h2 className='text-xs font-medium'>FULLSTACK DEVELOPER</h2>
              <span className='text-xs text-red-700 font-bold'>
                {engLanguageActive ? 'state: abandoned' : 'estado: abandonado'}{' '}
                / 10-2022
              </span>
              <p className='text-sm w-full text-[#4c4c4c]'>
                Bootcamp. Fué mi primer experiencia formal en un carrera IT. Al
                yo no tener un background en tecnología y estar comenzando mis
                estudios. Decidí abandonar la carrera porque sentía que no
                asmilaba bien el contenido , ya que según mi criterio , esa
                carrera (contrariamente a la publicidad) era para gente con una
                base sólida.
              </p>
            </div>
            <div className='z-10 relative before:absolute before:w-24 before:h-[1px] before:top-0 before:left-[-1.2em] before:-z-10 before:bg-black before:rotate-[90deg] w-14 h-14 max-[950px]:before:rotate-[0deg] max-[950px]:before:left-[-4.2em] max-[950px]:before:top-7'>
              <Image
                src={soyHenry_logo}
                alt='soyHenry-logo'
                priority
                className='border-[1px] border-black w-full h-full object-cover rounded-full'
              />
            </div>
          </article>

          <article className='max-[950px]:h-[20em] max-[950px]:flex-row max-[950px]:w-[80%]  h-[25em] w-[16em] flex justify-between  items-center flex-col'>
            <div className='max-[950px]:w-[70%] relative gap-4 flex flex-col justify-around items-center'>
              <h1 className='text-lg font-extrabold'>UTN</h1>
              <h2 className='text-xs font-medium'>
                Tecnico Superior en Programación
              </h2>
              <span className='text-xs text-red-700 font-bold'>
                {engLanguageActive ? 'state: suspended' : 'estado: suspendida'}{' '}
                / 03-2023
              </span>
              <p className='text-sm w-full text-[#4c4c4c]'>
                Universidad tecnológica nacional. Por motivos económicos
                personales se me dificulto poder costear la carrera. Debido a
                ese motivo, tuve que suspenderla momentaneamente hasta que mi
                situación cambie.
              </p>
            </div>
            <div className='w-14 h-14 z-10 relative before:absolute before:w-32 before:h-[1px] before:bottom-24 before:left-[-2.5em] before:-z-10 before:bg-black before:rotate-[90deg] max-[950px]:before:rotate-[0deg] max-[950px]:before:left-[-4.5em] max-[950px]:before:top-7'>
              <Image
                src={utn_logo}
                alt='utn-logo'
                priority
                className='border-[1px] border-black w-full h-full object-cover rounded-full'
              />
            </div>
          </article>

          <article className='max-[950px]:h-[20em] max-[950px]:flex-row max-[950px]:w-[80%]  h-[25em] w-[16em] flex justify-between  items-center flex-col'>
            <div className='max-[950px]:w-[70%] relative gap-4 flex flex-col justify-around items-center'>
              <h1 className='text-lg font-black'>Soy Henry</h1>
              <h2 className='text-xs font-medium'>FULLSTACK DEVELOPER</h2>
              <span className='text-xs text-red-700 font-bold'>
                {engLanguageActive ? 'state: studying' : 'estado: cursando'}
              </span>
              <p className='text-sm w-full text-[#4c4c4c]'>
                Decidí retomar la carrera debido a que gracias a mi ansia de
                conocimiento y curiosidad de siempre querer entender como
                funciona un software. Adquirí la habilidad de ser autodidacta ,
                y al poder ahora si estar preparado. Siento que puedo llevar
                adelante la carrera y ya que el programa que ofrece , puede
                ayudarme a reforzar mis conocimientos.
              </p>
            </div>
            <div className='w-14 h-14 z-10 relative before:absolute before:w-24 before:h-[1px] before:top-0 before:left-[-1.2em] before:-z-10 before:bg-black before:rotate-[90deg] max-[950px]:before:rotate-[0deg] max-[950px]:before:left-[-4.2em] max-[950px]:before:top-7'>
              <Image
                src={soyHenry_logo}
                alt='soyHenry-logo'
                priority
                className='border-[1px] border-black w-full h-full object-cover rounded-full'
              />
            </div>
          </article>
        </div>
        <div className='max-[950px]:w-[95%] flex flex-col items-center w-[60%] rounded-md'>
          <h1 className='text-[#4a4a4ad3] font-extrabold mb-2'>
            DATO EXTRA IMPORTANTE ⚠️
          </h1>
          <p className='italic text-sm text-[#4c4c4c] font-light'>
            También quiero destacar que soy un apasionado por el aprendizaje del
            idioma ingles. De forma autodidacta, consumo todo tipo de input en
            ingles para estar inmerso constantemente en él. Ya sea
            documentación, peliculas enteramente en ingles, subtitulos en
            ingles, podcasts, dispositivos, etc.
          </p>
          <p className='italic text-sm text-[#4c4c4c] font-light'>
            A lo quiero llegar con esto, es que un puesto que requiera ingles no
            seria un problema ya que mi entusiamo y compromiso por aprender
            programación es equivalente aprender ingles.
          </p>
        </div>
      </section>
    </>
  );
};

export default Experience;
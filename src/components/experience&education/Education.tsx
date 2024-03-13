import { useStore } from '@/store';
import { Roboto } from 'next/font/google';

import Image from 'next/image';
import soyHenry_logo from '@/assets/images/soyHenry-logo.webp';
import utn_logo from '@/assets/images/utn-logo.webp';

const roboto = Roboto({
  weight: ['900'],
  subsets: ['latin'],
});

const Education = () => {
  const { engLanguageActive } = useStore();

  return (
    <section className='dark:bg-theme_dark-main-bg bg-white py-28 flex flex-col items-center gap-28 w-[80%] shadow-[14px_30px_20px_-10px_#0000004f] rounded-lg'>
      <header className='max-[950px]:top-[-2em] flex flex-col items-center '>
        <h1
          className='dark:text-slate-50 text-5xl min-[500px]:[letter-spacing:10px] text-[#334155] text-center'
          style={roboto.style}>
          {engLanguageActive ? 'STUDIES' : 'ESTUDIOS'}👨‍🎓
        </h1>
        <p className='dark:border-theme_dark-sup-pink dark:text-zinc-300 dark:bg-theme_dark-box-second w-[90%] md:w-[70%] lg:w-[60%] border-l-[12px] border-light-800 bg-[#ececec] pl-4 pr-2 py-6 mt-6 font-semibold text-[#333333]'>
          {engLanguageActive
            ? `I started my immersion in the programming world 2 years ago, initially out of curiosity and without a clear direction. But gradually, I began to understand how all its parts work together. Over time, driven by my need and eagerness to learn more, I developed the ability to be self-taught.`
            : 'Comenzé mi inmersión en el mundo de la programación hace 2 años, primero con mucha curiosidad y sin un rumbo. Pero poco a poco, entendiendo como funcionan todas sus partes en conjunto. Con el tiempo, gracias a mi necesidad y ganas de aprender más, desarrollé la habilidad de ser autodidacta.'}
        </p>
      </header>
      <div className='dark:after:bg-zinc-400 max-[490px]:after:right-[16%] max-[570px]:after:right-[15%] flex px-4 justify-around w-full items-end z-10 relative before:absolute before:rounded-[50%] before:left-[5%] before:bottom-6 before:w-[90%] before:h-1 before:bg-[#373737] before:-z-10 max-[950px]:flex-col max-[950px]:items-center max-[950px]:h-[auto] max-[950px]:before:[display:none] max-[950px]:after:absolute max-[950px]:after:right-[13%] max-[950px]:after:h-[80%] max-[950px]:after:w-1 max-[950px]:after:top-[15%] max-[950px]:after:bg-[#373737] max-[950px]:after:-z-10 max-[650px]:gap-20 max-[700px]:after:right-[14%]'>
        <article className='max-[950px]:h-[20em] max-[950px]:flex-row  max-[950px]:w-[80%]  h-[25em] w-[16em] flex justify-between  items-center flex-col'>
          <div className='max-[950px]:w-[70%] gap-4 flex flex-col justify-around items-center'>
            <h1 className='dark:text-slate-50 text-lg font-black'>Soy Henry</h1>
            <h2 className='dark:text-zinc-400 text-xs font-medium'>
              FULLSTACK DEVELOPER
            </h2>
            <span className='dark:text-theme_dark-sup-pink text-xs text-red-700 font-bold'>
              {engLanguageActive ? 'state: abandoned' : 'estado: abandonado'} /
              10-2022
            </span>
            <p className='dark:text-zinc-300 text-sm w-full text-[#334155]'>
              {engLanguageActive
                ? `Bootcamp. It was my first formal experience in an IT career. Since I didn't have a background in technology and was just starting my studies, I decided to drop out of the program because I felt that I wasn't grasping the content well. In my opinion, that career (contrary to the advertising) was for people with a solid foundation.`
                : 'Bootcamp. Fué mi primer experiencia formal en un carrera IT. Al yo no tener un background en tecnología y estar comenzando mis estudios. Decidí abandonar la carrera porque sentía que no asmilaba bien el contenido, ya que según mi criterio , esa carrera (contrariamente a la publicidad) era para gente con una base sólida.'}
            </p>
          </div>
          <div className='max-[570px]:before:[display:none] z-10 relative before:absolute before:w-24 before:h-[1px] before:top-0 before:left-[-1.2em] before:-z-10 before:bg-black before:rotate-[90deg] w-14 h-14 max-[950px]:before:rotate-[0deg] max-[950px]:before:left-[-4.2em] max-[950px]:before:top-7'>
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
            <h1 className='dark:text-slate-50 text-lg font-extrabold'>UTN</h1>
            <h2 className='dark:text-zinc-400 text-xs font-medium'>
              TECNICO SUPERIOR EN PROGRAMACIÓN
            </h2>
            <span className='dark:text-theme_dark-sup-pink text-xs text-red-700 font-bold'>
              {engLanguageActive ? 'state: suspended' : 'estado: suspendida'} /
              03-2023
            </span>
            <p className='dark:text-zinc-300 text-sm w-full text-[#334155]'>
              {engLanguageActive
                ? `National Technological University. Due to personal financial reasons, I struggled to afford the tuition fees for the program. Because of that, I had to temporarily suspend it until my situation changes.`
                : 'Universidad tecnológica nacional. Por motivos económicos personales se me dificulto poder costear la carrera Debido a ese motivo, tuve que suspenderla momentaneamente hasta que mi situación cambie.'}
            </p>
          </div>
          <div className='max-[570px]:before:[display:none] w-14 h-14 z-10 relative before:absolute before:w-32 before:h-[1px] before:bottom-24 before:left-[-2.5em] before:-z-10 before:bg-black before:rotate-[90deg] max-[950px]:before:rotate-[0deg] max-[950px]:before:left-[-4.5em] max-[950px]:before:top-7'>
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
            <h1 className='dark:text-slate-50 text-lg font-black'>Soy Henry</h1>
            <h2 className='dark:text-zinc-400 text-xs font-medium'>
              FULLSTACK DEVELOPER
            </h2>
            <span className='dark:text-theme_dark-sup-pink text-xs text-red-700 font-bold'>
              {engLanguageActive ? 'state: studying' : 'estado: cursando'}
            </span>
            <p className='dark:text-zinc-300 text-sm w-full text-[#334155]'>
              {engLanguageActive
                ? `I decided to resume the program because of my thirst for knowledge and my curiosity to understand how software works. I acquired the ability to be self-taught, and now that I feel prepared, I believe I can pursue the career. The program offered can help me reinforce my knowledge.`
                : 'Decidí retomar la carrera debido a que gracias a mi ansia de conocimiento y curiosidad de siempre querer entender como funciona un software. Adquirí la habilidad de ser autodidacta, y al poder ahora si estar preparado. Siento que puedo llevar adelante la carrera y ya que el programa que ofrece , puede ayudarme a reforzar mis conocimientos.'}
            </p>
          </div>
          <div className='max-[570px]:before:[display:none] w-14 h-14 z-10 relative before:absolute before:w-24 before:h-[1px] before:top-0 before:left-[-1.2em] before:-z-10 before:bg-black before:rotate-[90deg] max-[950px]:before:rotate-[0deg] max-[950px]:before:left-[-4.2em] max-[950px]:before:top-7'>
            <Image
              src={soyHenry_logo}
              alt='soyHenry-logo'
              priority
              className='border-[1px] border-black w-full h-full object-cover rounded-full'
            />
          </div>
        </article>
      </div>
      <div className=' max-[460px]:w-[98%] dark:border-t dark:border-r dark:border-b dark:border-r-slate-500/30 dark:border-t-slate-500/30 dark:border-b-slate-500/30  border-l-[12px] border-[#f0e244] dark:bg-theme_dark-box-second px-6 py-8 bg-[#ededed] max-[650px]:w-[80%] max-[950px]:w-[90%] flex flex-col items-center w-[60%] rounded-[0_0.4em_0.4em_0]'>
        <h1 className='dark:text-zinc-50 text-[#575757] text-center font-extrabold text-xl mb-6'>
          <span className='text-4xl'>⚠️</span>
          {engLanguageActive ? `IMPORTANT EXTRA DATA` : 'DATO EXTRA IMPORTANTE'}
        </h1>
        <p className='dark:text-zinc-300 text-sm text-[#3a3a3a] font-semibold'>
          {engLanguageActive
            ? `I also want to highlight that I'm passionate about learning the English language. I self-study and immerse myself constantly in English through various inputs such as documentation, movies entirely in English, English subtitles, podcasts, devices, etc.`
            : 'También quiero destacar que soy un apasionado por el aprendizaje del idioma ingles. De forma autodidacta, consumo todo tipo de input en ingles para estar inmerso constantemente en él. Ya sea documentación, peliculas enteramente en ingles, subtitulos en ingles, podcasts, dispositivos, etc.'}
        </p>
        <p className='dark:text-zinc-300 text-sm text-[#3a3a3a] font-semibold mt-2'>
          {engLanguageActive
            ? `What I'm aiming to convey with this is that a position requiring English wouldn't be a problem because my enthusiasm and commitment to learning programming is equivalent to learning English.`
            : 'A lo quiero llegar con esto, es que un puesto que requiera ingles no seria un problema ya que mi entusiamo y compromiso por aprender programación es equivalente aprender ingles.'}
        </p>
      </div>
    </section>
  );
};

export default Education;

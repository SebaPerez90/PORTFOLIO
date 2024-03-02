import { useStore } from '@/store';

interface WorkExperienceInfo {
  company: string;
  position: string[];
  date: string;
  tasks_description: string[];
}

const Experience = () => {
  const { engLanguageActive } = useStore();

  const workExperience: WorkExperienceInfo[] = [
    {
      company: '"XXXXXXXX"',
      position: ['Web Developer', 'Desarrollador Web'],
      date: 'xxxxxxxxx',
      tasks_description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum natus dolore, amet assumenda, architecto maiores voluptatibus ex aspernatur, omnis error cumque. Perferendis similique quaerat tenetur quo ab sapiente. Omnis.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum natus dolore, amet assumenda, architecto maiores voluptatibus ex aspernatur, omnis error cumque. Perferendis similique quaerat tenetur quo ab sapiente. Omnis.',
      ],
    },
    {
      company: '"La Payuca"',
      position: ['Salon Waiter', 'Mozo de Salon'],
      date: '06/2022 - 11/2022',
      tasks_description: [
        'I was in charge of the dining room service. This was my last job in gastronomy, where I decided to fully invest in my career in technology.',
        'Estaba a cargo del servicio a los comensales estuviera al nivel. Este fue mi ultimo trabajo en gastronomia. En el cual decidi apostar todo a mi carrera en tecnología.',
      ],
    },
    {
      company: '"Oldays Coffe"',
      position: ['Salon Waiter', 'Mozo de Salon'],
      date: '06/2021 - 06/2022',
      tasks_description: [
        `It's an important café located in a touristy area of Puerto Madero (Buenos Aires), which, in relation to learning technology, also involved frequent use of English, which was personally very beneficial. My tasks were in line with those of a waiter in the dining room.`,
        'Es una importante cafetería ubicada en una zona de Puerto Madero (Buenos Aires) con mucho turismo, lo cual, relacionándolo con el aprendizaje en tecnología, un idioma muy frecuente también era el inglés, lo cual, a nivel personal, fue muy beneficioso. Mis tareas eran acordes a un mozo de salón.',
      ],
    },
    {
      company: '"La Payuca"',
      position: ['Salon Waiter', 'Mozo de Salon'],
      date: '11/2017 - 02/2019',
      tasks_description: [
        `I was part of the restaurant's public face, and among my main activities was 'mise en place' (pre-service organization for dinner/lunch), customer service, sales, and quality control of the service provided to customers.`,
        `Era parte de la cara visible del restaurante. Entre mis actividades principales estaba el 'mise en place' (organización previa al servicio de cena/almuerzo), la atención al cliente, la venta y el control de la calidad del servicio brindado a los clientes.`,
      ],
    },
    {
      company: '"Cabaña las Lilas"',
      position: ['Salon Waiter', 'Mozo de Salon'],
      date: '01/2014 - 01/2015',
      tasks_description: [
        `This was my first experience in the gastronomy field. I started at the lowest position, and thanks to my performance, proactivity, and ambition, I was able to climb positions until becoming a dining room waiter.`,
        'Esta fue mi primera experiencia en el rubro gastronómico. Comencé en la posición más baja y gracias a mi desempeño, proactividad y ambición, pude ir escalando posiciones hasta llegar a ser mozo de salón.',
      ],
    },
  ];

  return (
    <section className='w-[50em]'>
      <div className='gap-32 border-l-4 border-[#6161619b] flex  flex-col justify-between items-center relative work-experience-container z-10'>
        <div className='absolute left-[-1em] flex gap-4 justify-center bottom-[9em] w-52 h-44 bg-[#dedede] text-6xl font-black z-50 text-light-500 pt-10'>
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
            className='relative w-full flex justify-around  items-start text-black before:absolute before:w-8 before:h-8 before:rounded-full before:bg-light-500 before:left-[-1em] before:top-0'>
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
      {/* <article>
        <h1>Conclusiónn</h1>
      </article> */}
    </section>
  );
};

export default Experience;

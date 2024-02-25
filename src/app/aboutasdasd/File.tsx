import { Roboto } from 'next/font/google';

const Aboutttt = () => {
  return (
    <section>
      <p>
        Decidí retomar el bootcamp de `Soy Henry` para complementar mi
        aprendizaje autodidacta. Creo que ahora, con el conocimiento adquirido
        en el último año, podré completarlo con éxito.
      </p>
      <p>
        Reconozco que la formación autodidacta puede ser solitaria, por eso
        considero la universidad en el futuro cuando mejore mi situación
        económica, valorando la posibilidad de establecer contactos en ese
        entorno.
      </p>
      <aside className='border-2 shadow-[2px_18px_20px_#00000098] rounded-lg bg-white text-[#6c6c6cdc] font-light text-[0.9em] px-8 py-8'>
        <p>
          Tomé la decisión de formarme por mi cuenta basándome en mi
          experiencia:
        </p>
        <ul className='list-disc flex flex-col gap-4 mt-4 ml-4'>
          <li>
            `Soy Henry` : la intensidad y exigencia del programa dificultó mi
            asimilación del contenido, llevándome a abandonarlo temporalmente.
          </li>
          <li>
            `UTN - Técnico Superior en Programación` : Principalmente por
            limitaciones económicas, no pude costear la carrera. Además,
            experimenté un progreso lento, ya que consideré que el contenido era
            accesible por cuenta propia.
          </li>
          <li>
            Autodidacta: opté por la formación autodidacta al notar que los
            conocimientos universitarios no siempre están actualizados, y que en
            línea puedo acceder a documentación oficial sobre las tecnologías
            demandadas por el mercado.
          </li>
        </ul>
      </aside>
      <article>
        <h1>Experiencia Laboral</h1>
        <div>
          <p>
            Aunque no está relacionado con el área de TI, pasé 11 años
            trabajando en gastronomía. De esta experiencia, destaco dos
            aspectos:
          </p>
          <p>
            En primer lugar, comprendí que no es el futuro que deseo, ya que no
            me veo trabajando como mozo dentro de 5 años. Esto me motiva a
            dedicar todas mis energías a mis estudios actuales.
          </p>
          <p>
            En segundo lugar, adquirí herramientas necesarias para el sector de
            TI. La capacidad para tolerar la presión es esencial, ya que el
            trabajo de mozo implica exigencia y presión constantes, así como
            jornadas laborales extensas. También desarrollé habilidades
            interpersonales que me permiten adaptarme a cualquier entorno
            laboral y equipo de trabajo sin dificultades.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Aboutttt;

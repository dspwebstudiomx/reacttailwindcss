import Article from '../Article'
import Placeholder from '../../../assets/Images/Placeholder.webp'
import Image from '../../../assets/Images/Blog/Articulos/blog1.webp'
const NuevoBlog = () => {
  return (
    <Article title='Mi nuevo Blog' id={1} category='Personal' author='Daniel S.' image={Image || Placeholder} date='22 junio, 2023'>
      <p><strong>¡Bienvenido al maravilloso mundo del Diseño y Desarrollo Web! </strong>En este fascinante universo digital, te embarcarás en un emocionante viaje donde la creatividad y la tecnología se entrelazan para dar vida a sitios web asombrosos y funcionales.</p>
      <br />
      <p>Imagina poder plasmar tus ideas en diseños atractivos y amigables, capaces de cautivar a usuarios de todas partes del mundo. Aquí aprenderás a dar forma a tu imaginación y convertirla en realidad, mientras dominas herramientas como <strong>HTML, CSS, JavaScript </strong> y mucho más.</p>
      <br />
      <p>Mi blog será tu guía en este emocionante trayecto, brindándote consejos, trucos y las últimas tendencias del mundo digital. Descubrirás la importancia de la usabilidad, la accesibilidad y la optimización para mejorar la experiencia del usuario.</p>
      <br />
      <p><strong>¡Prepárate para sumergirte en el emocionante océano del Diseño y Desarrollo Web!</strong> Estamos ansiosos por acompañarte en esta aventura y ver cómo tus habilidades crecen y evolucionan en este fascinante campo. <strong>¡Bienvenido a bordo!</strong> </p>

    </Article>
  )
}

export default NuevoBlog
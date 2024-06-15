import Article from '../Articles/Article'
import Placeholder from '../../../assets/Images/Placeholder.webp'
import Image from '../../../assets/Images/Blog/Articulos/blog1.webp'
import Spacing from '../../../components/Sections/Spacing'
import ArticleSubtitle from '../../../components/Molecules/ArticleSubtitle'
const NuevoBlog = () => {
  return (
    <Article title='Mi nuevo Blog' id={1} category='Personal' author='Daniel S.' image={Image || Placeholder} date='junio 22, 2023' source={'pexels.com'} time='1 min.' slug={'personal'} keywords={'blog'} description={'Mi nuevo blog'} linkHref={'blog/personal/mi-nuevo-blog'}>
      <p><strong>¡Bienvenido al maravilloso mundo del Diseño y Desarrollo Web! </strong>En el vertiginoso mundo digital de hoy, tener una presencia en línea sólida es fundamental para cualquier negocio o profesional. Y en el corazón de esa presencia en línea se encuentra el diseño y desarrollo web. Desde la apariencia estética hasta la funcionalidad intuitiva, el diseño y desarrollo web son elementos esenciales para cautivar y retener a los visitantes en un sitio web. Es por eso que he decidido lanzar este blog dedicado exclusivamente a explorar y profundizar en el mundo del Diseño y Desarrollo Web.</p>
      <br />
      <p>Imagina poder plasmar tus ideas en diseños atractivos y amigables, capaces de cautivar a usuarios de todas partes del mundo. Aquí aprenderás a dar forma a tu imaginación y convertirla en realidad, mientras dominas herramientas como <strong>HTML, CSS, JavaScript </strong> y mucho más.</p>
      <br />
      <p>Mi blog será tu guía en este emocionante trayecto, brindándote consejos, trucos y las últimas tendencias del mundo digital. Descubrirás la importancia de la usabilidad, la accesibilidad y la optimización para mejorar la experiencia del usuario.</p>
      <br />
      <p><strong>¡Prepárate para sumergirte en el emocionante océano del Diseño y Desarrollo Web!</strong> Estamos ansiosos por acompañarte en esta aventura y ver cómo tus habilidades crecen y evolucionan en este fascinante campo. <strong>¡Bienvenido a bordo!</strong> </p>
      <Spacing distance='mb-12' />
      <ArticleSubtitle subtitle='La importancia del Diseño y Desarrollo Web' number={'1.'} />
      <p>El diseño web no es solo una cuestión de estética; es una herramienta poderosa para comunicar la identidad de una marca y guiar a los usuarios a través de su experiencia en línea. Un diseño bien pensado puede capturar la atención del usuario y fomentar la interacción, lo que resulta en una experiencia más agradable y, en última instancia, en conversiones más altas.</p>
      <br />
      <p>El desarrollo web, por otro lado, es la columna vertebral de cualquier sitio web funcional. Desde la optimización del rendimiento hasta la compatibilidad con dispositivos móviles, el desarrollo web garantiza que un sitio no solo se vea bien, sino que también funcione sin problemas en todos los aspectos.</p>
      <ArticleSubtitle subtitle='La evolución constante del panorama digital' number={'2.'} />
      <p>El mundo digital está en constante evolución. Las tendencias de diseño cambian, las tecnologías emergentes transforman la forma en que interactuamos en línea y las expectativas de los usuarios evolucionan continuamente. Es esencial mantenerse al día con estos cambios para seguir siendo relevante en un mercado tan competitivo. Este blog será mi plataforma para explorar las últimas tendencias, compartir mejores prácticas y discutir las innovaciones en el mundo del diseño y desarrollo web.</p>
      <ArticleSubtitle subtitle='Compartir conocimientos y experiencias' number={'3.'} />
      <p>A lo largo de mi carrera en el campo del diseño y desarrollo web, he adquirido una amplia gama de conocimientos y experiencias. Desde técnicas de diseño hasta consejos de codificación, he acumulado un tesoro de información que creo que puede ser invaluable para otros profesionales del sector, así como para aquellos que recién están comenzando en este emocionante campo. Este blog será mi medio para compartir este conocimiento con la comunidad y contribuir al crecimiento y la educación en el campo del diseño y desarrollo web.</p>
      <Spacing distance='mb-20' />
      <p>En resumen, la decisión de crear este blog sobre Diseño y Desarrollo Web surge de mi pasión por este campo en constante evolución y mi deseo de compartir conocimientos y experiencias con otros. Creo firmemente que al centrarnos en el diseño y desarrollo web, podemos construir experiencias en línea impactantes y efectivas que impulsen el éxito tanto personal como profesional. Estoy emocionado de embarcarme en este viaje y espero que este blog sea una fuente de inspiración y aprendizaje para todos aquellos interesados en el fascinante mundo del Diseño y Desarrollo Web. ¡Bienvenidos a esta emocionante aventura!</p>

    </Article>
  )
}

export default NuevoBlog
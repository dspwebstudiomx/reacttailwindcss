
import Article from '../Articles/Article'
import Image from '../../../assets/Images/Blog/Articulos/blog8.webp'
import image_240 from '../../../assets/Images/Blog/Articulos/Resizes/240/setup-gamer-con-fondo-morado-240.jpg'
import image_480 from '../../../assets/Images/Blog/Articulos/Resizes/480/setup-gamer-con-fondo-morado-480.jpg'
import image_576 from '../../../assets/Images/Blog/Articulos/Resizes/576/setup-gamer-con-fondo-morado-576.jpg'
import image_768 from '../../../assets/Images/Blog/Articulos/Resizes/768/setup-gamer-con-fondo-morado-768.jpg'
import image_1024 from '../../../assets/Images/Blog/Articulos/Resizes/1024/setup-gamer-con-fondo-morado-1024.jpg'
import image_1200 from '../../../assets/Images/Blog/Articulos/Resizes/1200/setup-gamer-con-fondo-morado-1200.jpg'
import ArticleSubtitle from '../../../components/Molecules/ArticleSubtitle'
import Spacing from '../../../components/Sections/Spacing'
import ArticleSubtitleH3 from '../../../components/Atoms/Headings/ArticleSubtitleH3'

const TendenciasActualesDiseno = () => {
  return (
    <Article title={'Tendencias Actuales en Diseño Web: ¿Qué Está en Boga?'} id={8} category={'Diseño Web'} author={'Daniel S.'} image={Image} image_240={image_240} image_480={image_480} image_576={image_576} image_768={image_768} image_1024={image_1024} image_1200={image_1200} date={'enero 12, 2024'} source={'unsplash.com'} imageLink='https://unsplash.com' time='3 min.' slug={'diseno-web'} description={'Tendencias actuales en el Diseño Web'} keywords={'Diseño Web, Tendencias, Diseño'} linkHref={'blog/diseño-web/tendencias-actuales'}>
      <p>El mundo del diseño web está en constante evolución, y cada año trae consigo nuevas tendencias y enfoques. A continuación, exploraremos algunas de las tendencias más destacadas en el diseño web actual:</p>
      <ArticleSubtitle subtitle='Diseño Minimalista' />
      <p>La simplicidad es la clave. Los sitios web minimalistas se centran en la funcionalidad y la claridad. Utilizan colores neutros, tipografía legible y espacios en blanco para crear una experiencia de usuario limpia y sin distracciones.</p>
      <ArticleSubtitle subtitle='Animaciones y Microinteracciones' />
      <p>Las animaciones sutiles y las microinteracciones agregan dinamismo a los sitios web. Desde botones que cambian de color al pasar el cursor hasta transiciones fluidas entre secciones, estas pequeñas interacciones hacen que la experiencia sea más atractiva.</p>
      <ArticleSubtitle subtitle='Diseño Responsivo' />
      <p>Con el aumento del uso de dispositivos móviles, el diseño web responsivo es esencial. Los sitios deben adaptarse automáticamente al tamaño de la pantalla, garantizando una experiencia óptima tanto en computadoras de escritorio como en teléfonos inteligentes.</p>
      <ArticleSubtitle subtitle='Tipografía Creativa' />
      <p>Las fuentes personalizadas y creativas están en auge. Los diseñadores web están experimentando con tipografías audaces y únicas para darle a los sitios un toque distintivo.</p>
      <ArticleSubtitle subtitle='Dark Mode' />
      <p>El modo oscuro se ha vuelto popular debido a su aspecto elegante y su capacidad para reducir la fatiga visual. Muchos sitios web ahora ofrecen una opción de modo oscuro para sus usuarios.</p>
      <Spacing distance='mb-20' />
      <ArticleSubtitleH3 title={'Conclusión'} />
      <p>En el mundo del diseño web, la adaptabilidad y la creatividad son clave. Las tendencias mencionadas anteriormente pueden inspirarte, pero recuerda siempre adaptarlas a las necesidades específicas de tu proyecto. ¡El diseño web es un campo emocionante y lleno de posibilidades!</p>
    </Article >
  )
}

export default TendenciasActualesDiseno
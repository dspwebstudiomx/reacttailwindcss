import { HelmetProvider } from 'react-helmet-async';
import Spacing from '../components/Sections/Spacing';
import PageTemplate from '../components/Templates/PageTemplate';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import SEOFriendly from '../Functions/SEOFriendly';
import image from '../assets/Images/HeroImage2.webp';

const Policy = () => {
  return (
    <HelmetProvider>
      <SEOFriendly
        linkHref={'proceso-trabajo'}
        title={'Política de Privacidad dspwebstudio'}
        description={'Política de Privacidad dspwebstudio'}
        author={'Daniel S.'}
        keywords={'politica, privacidad'}
        type={'website'}
        image={image}
      />
      <PageTemplate TituloPrincipal={'Política de Privacidad'}>

        <p>
          La presente Política de Privacidad establece los términos en que <strong>dspwebstudio</strong> usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios.
        </p><br />
        <p>
          Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
        </p>
        <Spacing distance={'mb-12'} />
        <h2 className='text-xl font-bold flex gap-2 items-center'>
          <MdKeyboardDoubleArrowRight className='text-blue-500' />
          Información que es recogida
        </h2><br />
        <p>
          Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como  su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
        </p>
        <Spacing distance={'mb-12'} />

        <h2 className='text-xl font-bold flex gap-2 items-center'>
          <MdKeyboardDoubleArrowRight className='text-blue-500' />
          Uso de la información recogida
        </h2><br />
        <p>
          Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.
        </p><br />
        {/* <p>
        Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
      </p> */}
        <p>
          En <strong>dspwebstudio</strong> estamos altamente comprometidos para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
        </p>
        <Spacing distance={'mb-12'} />

        {/* Cookies */}
        <h2 className='text-xl font-bold flex gap-2 items-center'>
          <MdKeyboardDoubleArrowRight className='text-blue-500' />
          Cookies
        </h2><br />
        <p>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente.</p><br />
        <p>Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web. Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador.</p><br />
        <p>Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente noticias. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. </p><br />
        {/* Cookies */}
        <Spacing distance={'mb-12'} />

        {/* Enlaces a terceros */}
        <h2 className='text-xl font-bold flex gap-2 items-center'>
          <MdKeyboardDoubleArrowRight className='text-blue-500' />
          Enlaces a Terceros
        </h2><br />
        <p> Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.</p>
        {/* Enlaces a terceros */}
        <Spacing distance={'mb-12'} />

        {/* Control de su información personal */}
        <h2 className='text-xl font-bold flex gap-2 items-center'>
          <MdKeyboardDoubleArrowRight className='text-blue-500' />
          Control de su información personal
        </h2><br />
        <p>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.  Cada vez que se le solicite rellenar un formulario y en caso que no requiera que se recaude, nos puede hacer llegar un correo electrónico solicitando la eliminación de sus datos compartidos como son nombre, teléfono y correo electrónico.</p><br />
        <p> Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p><br />
        <p>Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p>
        {/* Control de su información personal */}

      </PageTemplate>
    </HelmetProvider>
  )
}

export default Policy
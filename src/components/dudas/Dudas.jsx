import { useState } from "react";
import { Input } from "@/components/ui/input";

import AcordionMap from "./AcordionMap";
import Ayuda from "../cards/Ayuda";
import AccesoAyuda from "./AccesoAyuda";

const Dudas = () => {
  const [dudaFilter, setDudaFilter] = useState("");

  const preguntasTiendaMascotas = [
    {
      title: "¿Cuáles son los métodos de pago aceptados?",
      desc: "Aceptamos pagos con tarjeta de crédito, transferencia bancaria y PayPal.",
    },
    {
      title: "¿Ofrecen envío a domicilio?",
      desc: "Sí, ofrecemos envío a domicilio para la mayoría de nuestros productos. Los costos de envío pueden variar según la ubicación.",
    },
    {
      title: "¿Puedo devolver o cambiar un producto si no estoy satisfecho?",
      desc: "Sí, aceptamos devoluciones y cambios dentro de los 30 días posteriores a la compra, siempre y cuando el producto esté en condiciones originales.",
    },
    {
      title: "¿Tienen servicio de atención al cliente?",
      desc: "Sí, nuestro equipo de atención al cliente está disponible de lunes a viernes de 9am a 5pm para ayudarte con cualquier pregunta o inquietud.",
    },
    {
      title: "¿Cuál es su política de garantía?",
      desc: "Ofrecemos garantía de calidad en todos nuestros productos. Si hay algún problema de fabricación, estaremos encantados de reemplazarlo sin costo adicional.",
    },
    {
      title: "¿Ofrecen alimentos y accesorios para todas las mascotas?",
      desc: "Sí, tenemos una amplia variedad de alimentos y accesorios para perros, gatos, aves, roedores, reptiles y peces.",
    },
    {
      title: "¿Cómo puedo encontrar productos específicos en su tienda?",
      desc: "Puedes utilizar nuestra función de búsqueda o navegar por nuestras categorías para encontrar los productos que necesitas.",
    },
    {
      title:
        "¿Tienen programas de fidelidad o descuentos para clientes habituales?",
      desc: "Sí, ofrecemos programas de fidelidad y descuentos especiales para clientes habituales. ¡Suscríbete a nuestra newsletter para recibir más información!",
    },
    {
      title: "¿Puedo hacer seguimiento de mi pedido?",
      desc: "Sí, una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un enlace de seguimiento para que puedas rastrear tu paquete.",
    },
    {
      title:
        "¿Cómo puedo contactar con ustedes en caso de emergencia fuera del horario de atención al cliente?",
      desc: "Para emergencias fuera del horario de atención al cliente, puedes contactarnos a través de nuestro correo electrónico de soporte.",
    },
    {
      title: "¿Tienen políticas especiales para la venta de animales vivos?",
      desc: "Sí, seguimos estrictas políticas para garantizar el bienestar de los animales vivos que vendemos. Ponte en contacto con nuestro equipo para más detalles.",
    },
    {
      title:
        "¿Qué debo hacer si mi mascota tiene una reacción adversa a uno de sus productos?",
      desc: "Si tu mascota tiene una reacción adversa a uno de nuestros productos, por favor comunícate con nosotros de inmediato para que podamos ayudarte.",
    },
    {
      title: "¿Ofrecen servicios de grooming o peluquería para mascotas?",
      desc: "Sí, ofrecemos servicios de grooming profesional para perros y gatos. Puedes reservar una cita llamándonos o visitando nuestra tienda.",
    },
    {
      title:
        "¿Tienen recomendaciones para la alimentación y cuidado de mascotas específicas?",
      desc: "Sí, nuestro equipo está capacitado para brindarte recomendaciones personalizadas para la alimentación y cuidado de tu mascota.",
    },
    {
      title:
        "¿Cuál es su política de privacidad con respecto a la información de los clientes?",
      desc: "Respetamos la privacidad de nuestros clientes y seguimos estrictas políticas para proteger su información personal. Consulta nuestra política de privacidad para más detalles.",
    },
    {
      title:
        "¿Tienen veterinarios asociados para consultas o servicios médicos?",
      desc: "Sí, trabajamos con veterinarios asociados que pueden brindarte servicios médicos para tu mascota si es necesario.",
    },
    {
      title: "¿Ofrecen opciones de entrega express para pedidos urgentes?",
      desc: "Sí, ofrecemos opciones de entrega express para pedidos urgentes. Ponte en contacto con nuestro equipo para más información.",
    },
    {
      title:
        "¿Cómo puedo obtener información sobre eventos o promociones especiales?",
      desc: "Puedes seguirnos en nuestras redes sociales o suscribirte a nuestra newsletter para recibir información sobre eventos y promociones especiales.",
    },
    {
      title: "¿Qué debo hacer si mi pedido llega dañado o incompleto?",
      desc: "Si tu pedido llega dañado o incompleto, por favor comunícate con nuestro equipo de atención al cliente para que podamos resolver el problema lo antes posible.",
    },
    {
      title:
        "¿Tienen tiendas físicas donde puedo ver los productos en persona?",
      desc: "Sí, tenemos tiendas físicas donde puedes ver y comprar nuestros productos en persona. Consulta nuestra página web para conocer nuestras ubicaciones.",
    },
  ];

  // Función para filtrar las preguntas
  const filterFuncion = () => {
    const lowerText = dudaFilter
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const tildenone = lowerText.replace(/[¿¡?]/g, "");
    if (!tildenone) {
      return preguntasTiendaMascotas;
    } else {
      return preguntasTiendaMascotas.filter((item) => {
        const pregunta = item.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[¿¡?]/g, "");
        return pregunta.includes(tildenone);
      });
    }
  };

  return (
    <>
      <main className="flex flex-col gap-6">
        <AccesoAyuda />

        <Input
          type="text"
          placeholder="Busca tu duda"
          onChange={(e) => setDudaFilter(e.target.value)}
        />

        <div className=" h-96 overflow-y-auto">
          <AcordionMap data={filterFuncion()} />
        </div>
      </main>
    </>
  );
};
export default Dudas;

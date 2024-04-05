import Ayuda from "../cards/Ayuda";

const AccesoAyuda = () => {
  return (
    <>
      <div className="flex justify-between">
        <Ayuda
          titulo="¿Necesitas ayuda?"
          descripcion="Llámanos y te ayudaremos a resolver cualquier problema o inquietud que tengas."
        />
        <Ayuda
          titulo="¿No encuentras lo que buscas?"
          descripcion="Consulta nuestra sección de preguntas frecuentes o ponte en contacto con nosotros para obtener ayuda personalizada."
        />
        <Ayuda
          titulo="¿Tienes alguna pregunta?"
          descripcion="Estamos aquí para responder a todas tus preguntas y brindarte el apoyo que necesitas."
        />
      </div>
    </>
  );
};

export default AccesoAyuda;

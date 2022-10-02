import Cita from "./Cita";

const ListaCitas = ({ arregloCitas, borrarCita }) => {
  console.log(arregloCitas.length);
  return (
    <section className="d-flex flex-wrap border-bottom justify-content-around">
      {arregloCitas.length == 0 ? (
        <h3 className="my-4">No hay citas</h3>
      ) : (
        arregloCitas.map((cita, pocision) => (
          <Cita key={pocision} cita={cita} borrarCita={borrarCita}></Cita>
        ))
      )}
    </section>
  );
};

export default ListaCitas;

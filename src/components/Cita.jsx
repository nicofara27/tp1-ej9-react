import { Card, Button } from "react-bootstrap";

const Cita = ({cita, borrarCita}) => {
  return (
    <article className="col-12 col-md-5 my-4">
      <Card className=" ">
        <Card.Header className="d-flex align-items-center bg-white">
            <div className="bg-info circulo col-2"></div>
            <div className="col-9 ms-3">        
            <h5 className="m-0"><span className="fw-semibold">Mascota:</span> {cita.mascota}</h5>
            <p className="m-0"><span className="fw-semibold">Dueño:</span> {cita.dueño}</p>
            </div>
        </Card.Header>
        <Card.Body className="bg-celeste">
          <Card.Text><span className="fw-semibold">Fecha:</span> {cita.fecha}</Card.Text>
          <Card.Text><span className="fw-semibold">Hora:</span> {cita.hora}</Card.Text>
          <Card.Text><span className="fw-semibold">Sintomas:</span> {cita.sintomas}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-end bg-white">
          <Button variant="danger px-4 py-2 shadow" onClick={() => {
          borrarCita(cita);
        }}>Borrar</Button>
        </Card.Footer>
      </Card>
    </article>
  );
};

export default Cita;

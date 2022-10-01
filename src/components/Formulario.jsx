import { Form, Button } from "react-bootstrap";
import ListaCitas from "./ListaCitas";

const Formulario = () => {
  return (
    <div>
    <section className="border border-1 shadow">
      <h3 className="my-3 px-5">Llenar el formulario para crear una cita</h3>
      <Form className="bg-celeste py-2 px-5 border-top-2 fw-semibold">
        <Form.Group className="my-4 d-md-flex" controlId="formBasicMascota">
          <Form.Label className="col-md-4 col-lg-3 mb-0 align-self-center">Nombre de la mascota:</Form.Label>
          <Form.Control type="text" required placeholder="Nombre de la mascota"/>
        </Form.Group>
        <Form.Group className="my-4 d-md-flex" controlId="formBasicNombre">
          <Form.Label className="col-md-4 col-lg-3 mb-0 align-self-center">Nombre del dueño:</Form.Label>
          <Form.Control type="text" required placeholder="Nombre del dueño"/>
        </Form.Group>
        <div className="d-md-flex">
        <Form.Group className=" col-md-8 col-lg-6 my-4 d-md-flex" controlId="formBasicFecha">
          <Form.Label className="col-md-6 col-lg-6 mb-0 align-self-center">Fecha:</Form.Label>
          <Form.Control type="date" required placeholder="dd/mm/aaaa"/>
        </Form.Group>
        <Form.Group className="col-md-4 col-lg-6 my-4 ps-md-4 d-md-flex" controlId="formBasicHora">
          <Form.Label className="col-md-4 col-lg-5 mb-0 align-self-center">Hora:</Form.Label>
          <Form.Control type="time" required placeholder="--:--"/>
        </Form.Group>
        </div>
        <Form.Group className="my-4 d-md-flex" controlId="formBasicSintomas">
          <Form.Label className="col-md-4 col-lg-3 mb-0 align-self-center">Sintomas:</Form.Label>
          <Form.Control type="text" required placeholder="Describir sintomas"/>
        </Form.Group>
        <div className="text-center">
        <Button className="w-25 text-light" variant="info" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </section>
    <ListaCitas></ListaCitas>
    </div>
  );
};

export default Formulario;

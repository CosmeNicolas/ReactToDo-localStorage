import { useState } from "react";
import { Form, Button } from "react-bootstrap";



const FormularioTareas = () => {

  const [tarea, setTarea] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <Form className="text-center" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-light">Tareas 📝</Form.Label>
        <Form.Control 
        type="text"
        placeholder="ingresar Tarea: ej Tarea 1"
        minLength={3}
        maxLength={50}
        onChange={(e)=>{setTarea(e.target.value)}}
        value={tarea}
        />
      </Form.Group>
      <Button type="submit" variant="danger" className="letras mt-1" >
        Crear 
      </Button>
    </Form>
    </>
  );
};

export default FormularioTareas;